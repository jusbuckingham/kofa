const express = require('express');
const router = express.Router();
const chatGptService = require('../../services/chatGptService');

// Example route: Get proposition summary
router.get('/summary/:propositionId', async (req, res) => {
    try {
        const propositionId = req.params.propositionId;
        // Fetch proposition information
        // Implement the logic or call a service

        // Assuming chatGptService.getSummary is a method to get summary from ChatGPT
        const summary = await chatGptService.getSummary(propositionInformation);
        res.status(200).json({ summary });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
