import React, { useState } from 'react';

function AddressInput({ onAddressSubmit }) {
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddressSubmit(address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your address"
      />
      <button type="submit">Get Ballot Choices</button>
    </form>
  );
}

export default AddressInput;
