import React, { useEffect, useState } from 'react';
import { getResults } from './services/votingService'; // Assuming you have a service function to fetch results

const ResultsDisplay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setIsLoading(true);
        const fetchedResults = await getResults(); // Fetch the results from the server
        setResults(fetchedResults);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchResults();
  }, []);

  if (isLoading) {
    return <div>Loading results...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div>
      <h2>Voting Results</h2>
      {/* Display results here. Modify as needed based on your results structure */}
      {results ? (
        <div>
          <p>{results.decision}</p>
          <p>{results.explanation}</p>
          {/* Render more results details if available */}
        </div>
      ) : (
        <p>No results to display.</p>
      )}
    </div>
  );
};

export default ResultsDisplay;
