const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ballotRoutes = require('./routes/ballotRoutes');
// Import additional routes as necessary

// Load environment variables from .env file
require('dotenv').config();

// Create Express app
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/ballots', ballotRoutes);
// Add any additional API routes here

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
