const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  name: String,
  stance: String,
  details: String,
  // Add other relevant fields
});

module.exports = mongoose.model('Candidate', CandidateSchema);
