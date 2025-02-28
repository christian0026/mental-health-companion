import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro-1.0" });

export const getChatbotResponse = async (userMessage) => {
  try {
    // Reinitialize chat to prevent session issues
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Hello, I need some help." }],
        },
        {
          role: "model",
          parts: [{ text: "Hi there! How are you feeling today?" }],
        },
      ],
    });

    const result = await chat.sendMessage(userMessage);
    
    // Ensure response is retrieved correctly
    if (!result || !result.response) {
      throw new Error("Invalid response from AI.");
    }
    
    let botResponse = result.response.text();

    // Emotion Keywords
    const keywords = {
      anxiety: ["anxious", "panic attack", "overwhelmed", "stressed", "nervous"],
      sadness: ["depressed", "hopeless", "crying", "down"],
      self_harm: ["hurt myself", "suicidal", "end my life"],
    };

    // Anxiety Support 
    if (keywords.anxiety.some((word) => userMessage.toLowerCase().includes(word))) {
      botResponse = `I hear you. That sounds really tough. Would you like some suggestions that might help?`;
    }

    // Sadness Support 
    if (keywords.sadness.some((word) => userMessage.toLowerCase().includes(word))) {
      botResponse = `I'm really sorry you're feeling this way. Do you want to talk about it?`;
    }

    // Self-Harm / Crisis Support
    if (keywords.self_harm.some((word) => userMessage.toLowerCase().includes(word))) {
      botResponse = `I'm really sorry you're feeling this way. You’re not alone. Please reach out to someone you trust, or consider calling a crisis helpline. You deserve support and care. 💙`;
    }

    // Natural Follow-Ups
    const followUps = [
      "Would you like to share more about what's on your mind?",
      "That makes sense. How else can I support you?",
      "I'm here for you. Do you want to keep talking about this?",
    ];

    if (!botResponse.includes("?")) {
      botResponse += " " + followUps[Math.floor(Math.random() * followUps.length)];
    }

    return botResponse;
  } catch (error) {
    console.error("Error fetching response from Gemini AI:", error);
    return "I'm sorry, I'm having trouble responding right now. Can you try again?";
  }
};
