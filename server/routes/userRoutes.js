const express = require('express');
const User = require('../models/User'); // Adjust the path as needed

const router = express.Router();

// Route to get user profile
router.get('/profile/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update user preferences
router.post('/preferences/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { affirmativeAction, recreation } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.preferences.affirmativeAction = affirmativeAction;
    user.preferences.recreation = recreation;
    await user.save();
    res.json({ message: 'Preferences updated', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add more user-related routes as needed

module.exports = router;
