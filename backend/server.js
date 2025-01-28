const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const tf = require("@tensorflow/tfjs-node");
const use = require("@tensorflow-models/universal-sentence-encoder");

//Import routes
const userRoutes = require('./routes/userRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const messageRoutes = require('./routes/messageRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const settingsRoutes = require('./routes/settingsRoutes');

const app = express();
app.use(express.json());
app.use(cors());

let model;

async function loadModel() {
  model = await use.load();
  console.log("TensorFlow Model Loaded");
}

loadModel();

// Predefined Responses (You can train an advanced model)
const responses = [
  { intent: "greeting", phrases: ["hello", "hi", "hey"], response: "Hello! How can I assist you?" },
  { intent: "bye", phrases: ["bye", "goodbye"], response: "Goodbye! Have a great day!" },
  { intent: "help", phrases: ["help", "support"], response: "I'm here to help! What do you need assistance with?" },
];

async function getResponse(userInput) {
  if (!model) return "AI model is loading, please wait...";
  
  const embeddings = await model.embed([userInput, ...responses.map(r => r.phrases[0])]);
  const userEmbedding = embeddings.slice([0, 0], [1, -1]);
  const similarityScores = responses.map((_, i) => tf.losses.cosineDistance(userEmbedding, embeddings.slice([i + 1, 0], [1, -1]), 0).arraySync());

  const bestMatchIndex = similarityScores.indexOf(Math.min(...similarityScores));
  return responses[bestMatchIndex].response || "I’m not sure how to respond to that.";
}

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;
  const botResponse = await getResponse(userMessage);
  res.json({ response: botResponse });
});

app.listen(5000, () => console.log("Server running on port 5000"));

//Load environment variables
dotenv.config();

//Middleware
app.use(express.json());
app.use(cors());

//Connect to database
connectDB();

//Routes
app.use('/api/users', userRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/exercises', exerciseRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/settings', settingsRoutes);


//Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


