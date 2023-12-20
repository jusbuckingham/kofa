const express = require('express');
const router = express.Router();
const { getBallotChoicesByAddress, processWithChatGPT } = require('../services/ballotService');

// Route to get ballot choices by address
router.get('/choices', async (req, res) => {
  try {
    const address = req.query.address;
    let choices = await getBallotChoicesByAddress(address);
    choices = await processWithChatGPT(choices);
    res.json(choices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
