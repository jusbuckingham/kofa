const Ballot = require('../models/ballot');

exports.getAllBallots = async (req, res) => {
  try {
    const ballots = await Ballot.find();
    res.json(ballots);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getBallot = async (req, res) => {
  try {
    const ballot = await Ballot.findById(req.params.id);
    if (!ballot) {
      return res.status(404).send('Ballot not found');
    }
    res.json(ballot);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createBallot = async (req, res) => {
  try {
    const newBallot = new Ballot(req.body);
    await newBallot.save();
    res.status(201).json(newBallot);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateBallot = async (req, res) => {
  try {
    const ballot = await Ballot.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ballot) {
      return res.status(404).send('Ballot not found');
    }
    res.json(ballot);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteBallot = async (req, res) => {
  try {
    const ballot = await Ballot.findByIdAndDelete(req.params.id);
    if (!ballot) {
      return res.status(404).send('Ballot not found');
    }
    res.send('Ballot deleted');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
