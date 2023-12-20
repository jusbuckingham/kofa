import React, { useState, useEffect } from 'react';
import BallotCard from './BallotCard';
import { getBallotChoices } from '../api/serverApi'; // Adjust the path as needed

function BallotList() {
  const [ballotChoices, setBallotChoices] = useState([]);

  useEffect(() => {
    async function fetchBallotChoices() {
      const choices = await getBallotChoices(); // Add arguments if needed
      setBallotChoices(choices);
    }

    fetchBallotChoices();
  }, []);

  return (
    <div>
      {ballotChoices.map((choice, index) => (
        <BallotCard key={index} ballotItem={choice} />
      ))}
    </div>
  );
}

export default BallotList;
