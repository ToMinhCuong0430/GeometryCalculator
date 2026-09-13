import React from 'react';

function HistoryList({ history }) {
  return (
    <>
      <h2>Calculation History</h2>
      
      {history.length === 0 ? (
        <p>No calculations yet.</p>
      ) : (   
        <ul>
          {history.map((item) => (
            <li key={item._id}>
              <strong>{item.shape}</strong>
              <div>
                {Object.entries(item.inputs || {}).map(([key, value]) => (
                  <p key={key}>{`${key}: ${value}`}</p>
                ))}        
              </div>
              <div>
                {Object.entries(item.result || {}).map(([key, value]) => (
                  <p key={key}>{`${key}: ${value}`}</p>
                ))}
              </div>
            </li>
          ))}        
        </ul>
      )}
    </>
  );
}

export default HistoryList;