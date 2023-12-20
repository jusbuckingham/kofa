import React from 'react';
import './BallotCard.css'; // Assuming you have a CSS file for styling

function BallotCard({ ballotItem }) {
  return (
    <div className="ballot-card">
      <h3>{ballotItem.title}</h3>
      <p>{ballotItem.description}</p>
      {/* Add more ballot item details here */}
    </div>
  );
}

export default BallotCard;
