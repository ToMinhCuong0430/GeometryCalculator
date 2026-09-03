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

import ShapeSelector from './components/ShapeSelector';

import { calculateCircleApi, calculateRectangleApi, calculateTriangleApi } from './services/geometryApi';

function App(){
  const [selectedShape, setSelectedShape] = useState('circle');

  const [radius, setRadius] = useState(6.4)
  const [resultCircle, setResultCircle] = useState(null);

  const handleCalculateCircle = async () => {
    try {
      const result = await calculateCircleApi(radius);
      setResultCircle(result);
    } catch (error) {
      console.error("Error calculating circle:", error);
    }
  };

  const[length, setLength] = useState(5);
  const[width, setWidth] = useState(12);
  const [resultRectangle, setResultRectangle] = useState(null);

  const handleCalculateRectangle = async () => {
    try {
      const result = await calculateRectangleApi(length, width);
      setResultRectangle(result);
    } catch (error) {
      console.error("Error calculating rectangle:", error);
    }
  };

  const[base, setBase] = useState(9);
  const[height, setHeight] = useState(10);
  const [resultTriangle, setResultTriangle] = useState(null);

  const handleCalculateTriangle = async () => {
    try {
      const result = await calculateTriangleApi(base, height);
      setResultTriangle(result);
    } catch (error) {
      console.error("Error calculating triangle:", error);
    }
  };

  return (
    <div>
      <h1>Geometry Calculator</h1>
      <ShapeSelector selectedShape={selectedShape} setSelectedShape={setSelectedShape} />

      {selectedShape === 'circle' && (
        <>
          <h1>Circle Calculator</h1>
          <CircleForm radius={radius} setRadius={setRadius} />
          <p>Diameter: {resultCircle?.diameter}</p>
          <p>Circumference: {resultCircle?.circumference}</p>
          <p>Area: {resultCircle?.area}</p>
          <CirclePreview radius={radius} />
        </>
      )}

      {selectedShape === 'rectangle' && (
        <>
          <h1>Rectangle Calculator</h1>
          <RectangleForm length={length} width={width} setLength={setLength} setWidth={setWidth} />
          <p>Perimeter: {resultRectangle?.perimeter}</p>
          <p>Area: {resultRectangle?.area}</p>
          <RectanglePreview length={length} width={width} />
        </>
      )}

      {selectedShape === 'triangle' && (
        <>
          <h1>Triangle Calculator</h1>
          <TriangleForm base={base} height={height} setBase={setBase} setHeight={setHeight} />
          <p>Area: {resultTriangle?.area}</p>
          <TrianglePreview base={base} height={height} />
        </>
      )}
    </div>
  );
}

export default App;
