import React, { useState, useEffect, useRef } from 'react';
import { getChatbotResponse } from '../openaiApi';
import { FaBars, FaMicrophone, FaPaperPlane, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import logo from '../assets/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const ChatbotPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "Are you sure you want to leave? Your conversation will be lost.";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const fetchConversations = async () => {
      const querySnapshot = await getDocs(collection(db, 'conversations'));
      const convos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setConversations(convos);
    };

    fetchConversations();
  }, []);

  useEffect(() => {
    const greetings = [
      'Hello! How can I assist you today?',
      'Hi there! Need some help?',
      'Welcome back! What’s on your mind?',
      'Hey! How’s your day going?',
      'Good to see you! What can I do for you?'
    ];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setMessages([{ text: randomGreeting, sender: 'bot' }]);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const addConversation = async () => {
    const newConversation = `Conversation ${conversations.length + 1}`;
    const docRef = await addDoc(collection(db, 'conversations'), {
      title: newConversation,
      messages: []
    });
    setConversations([...conversations, { id: docRef.id, title: newConversation, messages: [] }]);
  };

  const sendMessage = async () => {
    if (currentMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: currentMessage, sender: 'user', animate: true },
      ]);
      const userMessage = currentMessage;
      setCurrentMessage('');

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: '...', sender: 'bot', typing: true },
      ]);

      setTimeout(async () => {
        let botResponse = await getChatbotResponse(userMessage);

        if (botResponse.includes('-')) {
          botResponse = botResponse
            .split('-')
            .filter((item) => item.trim())
            .map((item) => `• ${item.trim()}`)
            .join('\n');
        }

        setMessages((prevMessages) =>
          prevMessages
            .filter((msg) => !msg.typing)
            .concat({ text: botResponse, sender: 'bot', animate: true })
        );

        const currentConvo = conversations[conversations.length - 1];
        if (currentConvo) {
          await addDoc(collection(db, 'conversations', currentConvo.id, 'messages'), {
            text: userMessage,
            sender: 'user'
          });
          await addDoc(collection(db, 'conversations', currentConvo.id, 'messages'), {
            text: botResponse,
            sender: 'bot'
          });
        }
      }, 2000);
    }
  };

  const startListening = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = (event) => {
      setCurrentMessage(event.results[0][0].transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
    };
  };

  return (
    <div className="container-fluid vh-100 d-flex flex-column" style={{ overflow: 'hidden' }}>
      {/* Header */}
      <div className="d-flex align-items-center bg-white border-bottom p-3" style={{ height: '60px' }}>
        <button className="btn btn-secondary btn-sm me-2" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <a href="/" style={{ textDecoration: "none" }}>
          <h5 className="m-0" style={{ fontWeight: "bold", color: "black" }}>MINDBUDDY | <span style={{ fontWeight: "bold", color: "#31511e" }}>CHATBOT</span> </h5>
        </a>
      </div>

      {/* Sidebar and Chatbox */}
      <div className="d-flex flex-grow-1 position-relative" style={{ overflow: 'hidden' }}>
        {/* Sidebar */}
        <div
          className={`bg-light border-end p-3 position-absolute top-0 h-100 ${showSidebar ? 'start-0' : 'start-[-250px]'}`}
          style={{
            width: '240px',
            transition: 'transform 0.3s ease',
            transform: showSidebar ? 'translateX(0)' : 'translateX(-250px)',
            zIndex: 10,
          }}
        >
          <div className="d-flex flex-column">
            <Link to="/" className="btn btn-light mb-2">🏠 Home</Link>
            <Link to="/chatbot" className="btn btn-light mb-2">💬 Chat Now</Link>
            <Link to="/exercises" className="btn btn-light">🧘 Exercises</Link>
          </div>
        </div>

        {/* Chatbox */}
        <div
          className={`flex-grow-1 d-flex flex-column`}
          style={{
            marginLeft: showSidebar ? '250px' : '0',
            transition: 'margin-left 0.3s ease',
            overflow: 'hidden',
          }}
        >
          {/* Chat Messages */}
          <div
            ref={chatContainerRef}
            className="flex-grow-1 p-3 mt-3 border border-black overflow-auto chatbox-container"
            style={{
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              maxHeight: 'calc(100vh - 120px)',
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`d-flex mb-2 ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'} fade-in`}
              >
                {message.sender === 'bot' && (
                  <img
                    src={logo}
                    alt="Bot Avatar"
                    style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
                  />
                )}
                <div
                  className={`p-2 rounded chatbox-message ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-secondary text-white'} ${message.typing ? 'typing' : ''}`}
                  style={{ whiteSpace: 'pre-line', maxWidth: '80%' }}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 border-top bg-white" style={{ height: '80px' }}>
            <div className="input-group" style={{ border: "2px solid black", borderRadius: "10px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Type a message..."
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                style={{ flex: 1, minWidth: '100px' }}
              />
              {currentMessage && (
                <button className="btn" onClick={() => setCurrentMessage('')}>
                  <FaTimes />
                </button>
              )}
              <button className="btn" onClick={startListening}>
                <FaMicrophone />
              </button>
              <button className="btn" onClick={sendMessage}>
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;