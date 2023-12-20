import React from 'react';

function BallotChoices({ choices }) {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const downloadPdf = () => {
    // Implement functionality to download PDF from backend
  };

  return (
    <div>
      <h2>Ballot Choices</h2>
      {choices.map((choice, index) => (
        <div key={index}>{choice}</div>
      ))}
      <button onClick={() => copyToClipboard(JSON.stringify(choices))}>Copy Selections</button>
      <button onClick={downloadPdf}>Download as PDF</button>
    </div>
  );
}

export default BallotChoices;
