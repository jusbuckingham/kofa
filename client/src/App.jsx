import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import LoggedIn from "./components/LoggedIn";
import LoggedOut from "./components/LoggedOut";
import VotingForm from './components/VotingForm';
import ResultsDisplay from './components/ResultsDisplay';

export default function App() {
  const { isLoading, isAuthenticated } = useKindeAuth();

  if (isLoading) return <>Loading...</>;

  return (
    <Router>
      <Routes>
        {/* Show the voting form and results only if the user is authenticated */}
        {isAuthenticated && (
          <>
            <Route path="/" element={<VotingForm />} />
            <Route path="/results" element={<ResultsDisplay />} />
          </>
        )}
        {/* Logged in and logged out components for handling authentication state */}
        <Route path="/logged-in" element={<LoggedIn />} />
        <Route path="/logged-out" element={<LoggedOut />} />
        {/* Add additional routes as needed */}
      </Routes>
    </Router>
  );
}
