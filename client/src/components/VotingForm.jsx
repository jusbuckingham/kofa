import React, { useState } from 'react';
import { makeDecision } from '../services/votingService';

const VotingForm = () => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const decision = await makeDecision(prompt);
      console.log(decision); // Process the decision as needed
    } catch (error) {
      console.error('Error making a decision:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="What's on your mind?"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default VotingForm;
