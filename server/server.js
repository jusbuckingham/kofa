const express = require('express');
const cors = require('cors');
const ballotRoutes = require('./api/ballotRoutes');
// const mongoose = require('mongoose'); // Uncomment if using MongoDB

// Import routes
// const exampleRoute = require('./routes/exampleRoute'); // Example for additional routes

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Parse JSON bodies

// Database connection
// mongoose.connect('your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true }); // Uncomment if using MongoDB

// Routes
// app.use('/api/example', exampleRoute); // Example for using an imported route

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Kofa Server');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
