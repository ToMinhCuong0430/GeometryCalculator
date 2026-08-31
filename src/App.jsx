import React, { useState } from 'react';
import {calculateCircle} from './shapes/circle/circleCalculator';
import {calculateRectangle} from './shapes/rectangle/rectangleCalculator';
import {calculateTriangle} from './shapes/triangle/triangleCalculator';

import CirclePreview from './shapes/circle/CirclePreview';
import CircleForm from './shapes/circle/CircleForm';

import RectangleForm from './shapes/rectangle/RectangleForm';
import RectanglePreview from './shapes/rectangle/RectanglePreview';
function App(){
  const [radius, setRadius] = useState(6.4)
  const resultCircle = calculateCircle(radius);

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
      
      <p>Diameter: {resultCircle.diameter}</p>
      <p>Circumference: {resultCircle.circumference}</p>
      <p>Area: {resultCircle.area}</p>

      <CirclePreview radius={radius} />

      <h1>Rectangle Calculator</h1>

      <RectangleForm length={length} width={width} setLength={setLength} setWidth={setWidth} />
      <p>Perimeter: {result2.perimeter}</p>
      <p>Area: {result2.area}</p>

      <RectanglePreview length={length} width={width} />

      <h1>Triangle Calculator</h1>
      <p>Area: {result3.area}</p>
    </div>
  );
}

export default App;