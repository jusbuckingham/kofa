const app = require('./app'); // Import the Express app

const PORT = process.env.PORT || 5000; // Set the port

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
