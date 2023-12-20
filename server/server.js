const express = require('express');
const app = express();
const ballotRoutes = require('./api/ballotRoutes');

app.use('/api/ballot', ballotRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to Kofa API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
