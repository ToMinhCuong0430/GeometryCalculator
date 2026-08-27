import React, { useState } from 'react';
import {calculateCircle} from './shapes/circle/circleCalculator';
function App(){
  const [radius, setRadius] = useState(6.4)
  const result = calculateCircle(radius);
  return (
    <div>
      <h1>Circle Calculator</h1>
      <p>Diameter: {result.diameter}</p>
      <p>Circumference: {result.circumference}</p>
      <p>Area: {result.area}</p>
    </div>
  );
}

export default App;