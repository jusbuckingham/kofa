const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import route handlers
const ballotRoutes = require('./api/routes/ballotRoutes');
const candidateRoutes = require('./api/routes/candidateRoutes');
const propositionRoutes = require('./api/routes/propositionRoutes');

// Initialize express app
const app = express();

// Use CORS to allow cross-origin requests (from your React frontend)
app.use(cors());

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define API routes
app.use('/api/ballots', ballotRoutes);
app.use('/api/candidates', candidateRoutes);
app.use('/api/propositions', propositionRoutes);

// Catch-all for unhandled routes
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

// Error handling middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

// Export the app for use in other files
module.exports = app;
