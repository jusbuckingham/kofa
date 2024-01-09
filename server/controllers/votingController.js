const langChainService = require('../services/langChainService');
const ballotService = require('../services/ballotService');

exports.getVotingSuggestions = async (req, res) => {
  try {
    const voterPrompt = req.body.prompt;
    const ballotData = ballotService.readBallotFile(); // Implement this method
    const suggestions = await langChainService.getSuggestions(voterPrompt, ballotData);
    res.json(suggestions);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
