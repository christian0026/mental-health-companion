import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDr20rG31BFpd14XcnazmYy_6j01lEVCIY"; // Replace with your actual Gemini API key

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export const getChatbotResponse = async (userMessage) => {
  try {
    const chat = model.startChat();
    const result = await chat.sendMessage(userMessage);
    return result.response.text();
  } catch (error) {
    console.error("Error fetching response from Gemini AI:", error);
    return "I'm sorry, but I'm having trouble connecting to the chatbot service.";
  }
};
