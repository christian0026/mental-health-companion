const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//Import routes
const userRoutes = require('./routes/userRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const messageRoutes = require('./routes/messageRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const settingsRoutes = require('./routes/settingRoutes');

//Load environment variables
dotenv.config();

//Initialize app
const app = express();

//Middleware
app.use(express.json());

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
