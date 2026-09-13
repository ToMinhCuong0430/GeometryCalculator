import React from 'react';
import { clearHistory } from '../services/geometryApi';

function ClearHistoryButton({ setHistory }) {
  const handleClearHistory = async () => {
    try {
      await clearHistory();
      setHistory([]);
    } catch (error) {
      console.error("Failed to clear history:", error);
    }
  };

  return (
    <button onClick={handleClearHistory}>
      Clear History
    </button>
  );
}

export default ClearHistoryButton;