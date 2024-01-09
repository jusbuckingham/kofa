import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitPrompt } from '../services/votingService';

function VotingForm() {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitPrompt(prompt);
      navigate('/results');
    } catch (error) {
      console.error('Failed to submit prompt:', error);
    }
  };

  return (
    <div>
      <h1>Voting Decision Helper</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your voting preferences or questions here"
        />
        <button type="submit">Get Suggestions</button>
      </form>
    </div>
  );
}

export default VotingForm;
