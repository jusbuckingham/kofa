import React, { useState, useEffect } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import BallotCard from './components/BallotCard';
import { getBallotChoices, loginUser } from './api/serverApi'; // Make sure loginUser is exported from serverApi

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [ballotChoices, setBallotChoices] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      fetchBallotChoices();
    }
  }, []);

  const handleSignIn = async (email, password) => {
    try {
      const response = await loginUser(email, password);
      localStorage.setItem('token', response.data.token); // Assuming the token is returned in response.data.token
      setIsAuthenticated(true);
      fetchBallotChoices();
    } catch (error) {
      console.error('Login failed:', error);
      // Optionally, set an error state and display it in the UI
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setBallotChoices([]);
  };

  async function fetchBallotChoices() {
    try {
      const choices = await getBallotChoices();
      setBallotChoices(choices);
    } catch (error) {
      console.error('Failed to fetch ballot choices:', error);
    }
  }

  if (!isAuthenticated) {
    return isSigningUp ? (
      <SignUp onSignUp={handleSignUp} />
    ) : (
      <SignIn onSignIn={handleSignIn} />
    );
  }

  return (
    <div>
      <h1>Kofa - Voter Preferences App</h1>
      {ballotChoices.map((choice, index) => (
        <BallotCard key={index} ballotItem={choice} />
      ))}
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default App;
