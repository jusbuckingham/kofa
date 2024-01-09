const express = require('express');
const { makeVotingDecision } = require('../controllers/votingController');

const router = express.Router();

router.post('/decision', makeVotingDecision);

module.exports = router;
