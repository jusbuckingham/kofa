const express = require('express');
const router = express.Router();
const ballotController = require('../controllers/ballotController');

// Get all ballots
router.get('/', ballotController.getAllBallots);

// Get a single ballot by ID
router.get('/:id', ballotController.getBallot);

// Create a new ballot
router.post('/', ballotController.createBallot);

// Update a ballot
router.put('/:id', ballotController.updateBallot);

// Delete a ballot
router.delete('/:id', ballotController.deleteBallot);

module.exports = router;
