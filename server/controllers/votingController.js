const Ballot = require('../models/Ballot');
const langChainService = require('../services/langChainService');

exports.makeVotingDecision = async (req, res) => {
  try {
    const prompt = req.body.prompt;
    // Retrieve the current ballot from the database
    const currentBallot = await Ballot.findOne(); // Adjust the query as needed
    // Use LangChain to make a decision based on the prompt and ballot
    const decision = await langChainService.processPrompt(prompt, currentBallot);
    res.json(decision);
  } catch (error) {
    console.error('Failed to make a voting decision:', error);
    res.status(500).send('Internal Server Error');
  }
};
