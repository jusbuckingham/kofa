const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const ballotRoutes = require('./routes/ballotRoutes');
// Include other routes as necessary

// Initialize dotenv to use .env file variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Routes
app.use('/api/ballot', ballotRoutes);
// Setup other routes...

// Catch-all for unhandled routes
app.use((req, res, next) => {
  res.status(404).send('Sorry, that route does not exist.');
});

module.exports = app;
