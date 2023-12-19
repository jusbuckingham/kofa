const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// Routes
// Example: app.use('/api/candidates', require('./api/candidates'));

module.exports = app;
