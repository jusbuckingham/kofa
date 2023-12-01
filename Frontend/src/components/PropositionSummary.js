import React from 'react';

function PropositionSummary({ data }) {
  return (
    <div className="proposition-summary">
      <h2>{data.title}</h2>
      {/* Display the summary of the proposition */}
      {/* This is a placeholder, replace with actual data */}
      <p>{data.summary}</p>
    </div>
  );
}

export default PropositionSummary;
