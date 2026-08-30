import React, { useState } from 'react';
import {calculateCircle} from './shapes/circle/circleCalculator';
import {calculateRectangle} from './shapes/rectangle/rectangleCalculator';
import {calculateTriangle} from './shapes/triangle/triangleCalculator';

import CirclePreview from './shapes/circle/CirclePreview';
import CircleForm from './shapes/circle/CircleForm';
function App(){
  const [radius, setRadius] = useState(6.4)
  const result = calculateCircle(radius);

  const[length, setLength] = useState(5);
  const[width, setWidth] = useState(12);
  const result2 = calculateRectangle(length, width);

  const[base, setBase] = useState(9);
  const[height, setHeight] = useState(10);
  const result3 = calculateTriangle(base, height);
  return (
    <div>
      <h1>Circle Calculator</h1>

      <CircleForm radius={radius} setRadius={setRadius} />
      
      <p>Diameter: {result.diameter}</p>
      <p>Circumference: {result.circumference}</p>
      <p>Area: {result.area}</p>

      <CirclePreview radius={radius} />

      <h1>Rectangle Calculator</h1>
      <p>Perimeter: {result2.perimeter}</p>
      <p>Area: {result2.area}</p>

      <h1>Triangle Calculator</h1>
      <p>Area: {result3.area}</p>
    </div>
  );
}

export default App;