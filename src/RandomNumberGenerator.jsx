import React, { useState } from 'react';

function RandomNumberGenerator() {
  // State to store the generated random number
  // null means no number has been generated yet
  const [randomNumber, setRandomNumber] = useState(null);

  // Function to generate a random number between 1 and 100
  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1; // 1 to 100 inclusive
    setRandomNumber(number);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Random Number Generator</h1>

      {/* Conditional Rendering */}
      {randomNumber === null ? (
        <p style={styles.placeholder}>No number generated yet</p>
      ) : (
        <p style={styles.number}>Generated Number: <span>{randomNumber}</span></p>
      )}

      <button onClick={generateRandomNumber} style={styles.button}>
        Generate Random Number
      </button>
    </div>
  );
}

// Simple inline styles for better UX
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '30px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    color: '#333',
    marginBottom: '20px',
  },
  placeholder: {
    fontSize: '18px',
    color: '#6c757d',
    margin: '20px 0',
  },
  number: {
    fontSize: '22px',
    color: '#212529',
    margin: '20px 0',
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#0d6efd',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
};

export default RandomNumberGenerator;
