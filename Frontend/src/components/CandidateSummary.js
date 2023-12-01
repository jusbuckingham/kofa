import React from 'react';

function CandidateSummary({ data }) {
  return (
    <div className="candidate-summary">
      <h2>{data.name}</h2>
      {/* Display the summary of the candidate */}
      {/* This is a placeholder, replace with actual data */}
      <p>{data.summary}</p>
    </div>
  );
}

export default CandidateSummary;
