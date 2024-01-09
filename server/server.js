const app = require('./app'); // Import the Express application
const http = require('http');

// Create server from the Express app
const server = http.createServer(app);

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
