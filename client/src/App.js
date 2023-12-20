import React, { useState } from 'react';
import AddressInput from './components/AddressInput';
import BallotChoices from './components/BallotChoices';
import { getBallotChoices } from './api/serverApi';

function App() {
  const [ballotChoices, setBallotChoices] = useState([]);

  const handleAddressSubmit = async (address) => {
    const choices = await getBallotChoices(address);
    setBallotChoices(choices);
  };

  return (
    <div>
      <h1>Kofa - Ballot Choices</h1>
      <AddressInput onAddressSubmit={handleAddressSubmit} />
      <BallotChoices choices={ballotChoices} />
    </div>
  );
}

export default App;
