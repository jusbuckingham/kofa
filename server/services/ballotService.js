const fs = require('fs');
const path = require('path');

exports.readBallotFile = () => {
  const filePath = path.join(__dirname, '../data/ballot.json'); // Adjust the path
  const ballotData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return ballotData;
};
