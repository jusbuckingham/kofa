import React, { useState, useEffect } from 'react';
import BallotCard from './components/BallotCard';
import { getBallotChoices } from './api/serverApi'; // Adjust the path as needed

function App() {
  const [ballotChoices, setBallotChoices] = useState([]);

  useEffect(() => {
    async function fetchBallotChoices() {
      try {
        const choices = await getBallotChoices(); // Add necessary arguments if your API call requires
        setBallotChoices(choices);
      } catch (error) {
        console.error('Failed to fetch ballot choices:', error);
        // Handle errors appropriately
      }
    }

    fetchBallotChoices();
  }, []);

  return (
    <div>
      <h1>Kofa - Voter Preferences App</h1>
      {ballotChoices.length > 0 ? (
        ballotChoices.map((choice, index) => (
          <BallotCard key={index} ballotItem={choice} />
        ))
      ) : (
        <p>Loading ballot choices...</p> // Or display a message if no choices are available
      )}
    </div>
  );
}

export default App;
