import React, { useState } from 'react';
import {calculateCircle} from './shapes/circle/circleCalculator';
import {calculateRectangle} from './shapes/rectangle/rectangleCalculator';
import {calculateTriangle} from './shapes/triangle/triangleCalculator';

import CirclePreview from './shapes/circle/CirclePreview';
import CircleForm from './shapes/circle/CircleForm';

import RectangleForm from './shapes/rectangle/RectangleForm';
import RectanglePreview from './shapes/rectangle/RectanglePreview';

import TriangleForm from './shapes/triangle/TriangleForm';
import TrianglePreview from './shapes/triangle/TrianglePreview';
function App(){
  const [radius, setRadius] = useState(6.4)
  const resultCircle = calculateCircle(radius);

  const[length, setLength] = useState(5);
  const[width, setWidth] = useState(12);
  const resultRectangle = calculateRectangle(length, width);

  const[base, setBase] = useState(9);
  const[height, setHeight] = useState(10);
  const resultTriangle = calculateTriangle(base, height);
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
      <p>Perimeter: {resultRectangle.perimeter}</p>
      <p>Area: {resultRectangle.area}</p>

      <RectanglePreview length={length} width={width} />

      <h1>Triangle Calculator</h1>
      <TriangleForm base={base} height={height} setBase={setBase} setHeight={setHeight} />
      <p>Area: {resultTriangle.area}</p>
      <TrianglePreview base={base} height={height} />
    </div>
  );
}

export default App;