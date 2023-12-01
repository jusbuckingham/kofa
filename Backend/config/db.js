const mongoose = require('mongoose');

// MongoDB URI (Replace with your MongoDB URI)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/votingBallotDB';

const connectDB = async () => {
    try {
        // Connecting to MongoDB
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
