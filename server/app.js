const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Uncomment if using MongoDB

// Import routes
const ballotRoutes = require('./routes/ballotRoutes');
const pdfRoutes = require('./routes/pdfRoutes');

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Parse JSON bodies

// Database connection
// Uncomment and configure if using MongoDB
// mongoose.connect('your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api/ballot', ballotRoutes);
app.use('/api/pdf', pdfRoutes);

// Root route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Kofa Server');
});

// Error handling
app.use((req, res, next) => {
  res.status(404).send('Sorry, that route does not exist.');
});

// Start the server (usually done in a separate file like server.js)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
