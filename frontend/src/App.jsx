import React, { useState } from 'react';

import ShapeSelector from './components/ShapeSelector';
import HistoryLoader from './components/HistoryLoader';

import CircleCalculator from './components/CircleCalculator';
import RectangleCalculator from './components/RectangleCalculator';
import TriangleCalculator from './components/TriangleCalculator';
import SquareCalculator from './components/SquareCalculator';

import { saveHistory } from './services/geometryApi';

import HistoryList from './components/HistoryList';
import ClearHistoryButton from './components/ClearHistoryButton';

function App(){
  const [selectedShape, setSelectedShape] = useState('circle');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  const addToHistory = async (shape, inputs, result) => {
  const historyItem = { 
    shape,
    inputs,
    result 
  };

  const savedHistory = await saveHistory(historyItem);
  setHistory(prevHistory => [
    savedHistory,
    ...prevHistory
    ]);
  }

  return (
    <div>
      <h1>Geometry Calculator</h1>
      <ShapeSelector selectedShape={selectedShape} setSelectedShape={setSelectedShape} />
      <HistoryLoader setHistory={setHistory} />

      {loading && <p>Calculating...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {selectedShape === 'circle' && (
        <CircleCalculator setLoading={setLoading} setError={setError} addToHistory={addToHistory} />
      )}
      {selectedShape === 'rectangle' && (
        <RectangleCalculator setLoading={setLoading} setError={setError} addToHistory={addToHistory} />
      )}
      {selectedShape === 'triangle' && (
        <TriangleCalculator setLoading={setLoading} setError={setError} addToHistory={addToHistory} />
      )}
      {selectedShape === 'square' && (
        <SquareCalculator setLoading={setLoading} setError={setError} addToHistory={addToHistory} />
      )}

      <HistoryList history={history} />
      <ClearHistoryButton setHistory={setHistory} />
    </div>
  );
}

export default App;
