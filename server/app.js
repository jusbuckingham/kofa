const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Import routes
const authRoutes = require('./routes/authRoutes');
const ballotRoutes = require('./routes/ballotRoutes');
const userRoutes = require('./routes/userRoutes'); // Assuming this file exists

// Load environment variables
dotenv.config();

// Create Express application
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Use middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/ballot', ballotRoutes);
app.use('/api/users', userRoutes); // Use user routes

// Undefined routes handler (404)
app.use((req, res, next) => {
  res.status(404).send('Sorry, that route does not exist.');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app; // Export the Express app
