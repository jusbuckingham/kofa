const mongoose = require('mongoose');

const ballotSchema = new mongoose.Schema({
  question: String,
  options: [String],
  // Other fields as necessary
});

const Ballot = mongoose.model('Ballot', ballotSchema);

module.exports = Ballot;
