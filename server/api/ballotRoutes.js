const express = require('express');
const router = express.Router();
const ballotService = require('../services/ballotService');

// Get ballot choices by address
router.get('/choices', async (req, res) => {
  try {
    const address = req.query.address;
    const choices = await ballotService.getBallotChoicesByAddress(address);
    res.json(choices);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
