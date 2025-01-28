import React, { useState, useEffect } from 'react';
import { getChatbotResponse } from '../openaiApi'; // Import OpenAI API function
import { FaPlus, FaPaperPlane, FaBars, FaSearch, FaMicrophone } from 'react-icons/fa';
import logo from '../assets/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChatbotPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    setMessages([{ text: 'How can I help you today?', sender: 'bot' }]);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const addConversation = () => {
    const newConversation = `Conversation ${conversations.length + 1}`;
    setConversations([...conversations, newConversation]);
  };

  const sendMessage = async () => {
    if (currentMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: currentMessage, sender: 'user', animate: true },
      ]);
      const userMessage = currentMessage;
      setCurrentMessage('');

      setTimeout(async () => {
        const botResponse = await getChatbotResponse(userMessage);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, sender: 'bot', animate: true },
        ]);
      }, 1000);
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
    <div className="container-fluid vh-100 d-flex flex-column">
      <div className="d-flex align-items-center bg-white border-bottom p-3">
        <button className="btn btn-secondary btn-sm me-2" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <a href="/" style={{ textDecoration: "none" }}>
          <h5 className="m-0" style={{ fontWeight: "bold", color: "black" }}>MINDBUDDY</h5>
        </a>
      </div>

      <div className="d-flex flex-grow-1 position-relative">
        <div
          className={`bg-light border-end p-3 position-absolute top-0 h-100 ${showSidebar ? 'start-0' : 'start-[-250px]'}`}
          style={{
            width: '240px',
            transition: 'transform 0.3s ease',
            transform: showSidebar ? 'translateX(0)' : 'translateX(-250px)',
            zIndex: 10,
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <FaSearch className="cursor-pointer" title="Search" style={{ cursor: 'pointer' }} />
            <FaPlus className="cursor-pointer" title="Add New Message" style={{ cursor: 'pointer' }} onClick={addConversation} />
          </div>
          <h6>Conversations</h6>
          <ul className="list-unstyled">
            {conversations.map((conversation, index) => (
              <li key={index} className="py-2 px-2 bg-light border rounded mb-2" style={{ animation: 'fadeIn 0.5s' }}>
                {conversation}
              </li>
            ))}
          </ul>
        </div>

        <div className={`flex-grow-1 d-flex flex-column ${showSidebar ? 'ms-3' : ''}`} style={{ marginLeft: showSidebar ? '250px' : '0', transition: 'margin-left 0.3s ease' }}>
          <div className="flex-grow-1 p-3 mt-3 border border-black overflow-auto" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px', marginLeft: showSidebar ? '250px' : '0', transition: 'margin-left 0.3s ease' }}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`d-flex mb-2 ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'} ${
                  message.animate ? 'fade-in' : ''
                }`}
              >
                {message.sender === 'bot' && (
                  <img src={logo} alt="Bot Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                )}
                <div className={`p-2 rounded ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-secondary text-white'}`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-top bg-white" style={{ marginLeft: showSidebar ? '250px' : '0', transition: 'margin-left 0.3s ease' }}>
            <div className="input-group" style={{ border: "2px solid black", borderRadius: "10px" }}>
              <input type="text" className="form-control" placeholder="Type a message..." value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} />
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
