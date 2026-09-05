import React, { useState, useEffect } from 'react';
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

  const [radius, setRadius] = useState(6.4);
  const [resultCircle, setResultCircle] = useState(null);

  const handleCalculateCircle = async () => {
    const r = Number(radius);
    if (isNaN(r) || r <= 0) {
      setResultCircle(null);
      return;
    }
    try {
      const result = await calculateCircleApi(r);
      setResultCircle(result);
    } catch (error) {
      console.warn("Backend API unavailable, calculating locally:", error);
      setResultCircle(calculateCircle(r));
    }
  };

  const[length, setLength] = useState(5);
  const[width, setWidth] = useState(12);
  const [resultRectangle, setResultRectangle] = useState(null);

  const handleCalculateRectangle = async () => {
    const l = Number(length);
    const w = Number(width);
    if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) {
      setResultRectangle(null);
      return;
    }
    try {
      const result = await calculateRectangleApi(l, w);
      setResultRectangle(result);
    } catch (error) {
      console.warn("Backend API unavailable, calculating locally:", error);
      setResultRectangle(calculateRectangle(l, w));
    }
  };

  const[base, setBase] = useState(9);
  const[height, setHeight] = useState(10);
  const [resultTriangle, setResultTriangle] = useState(null);

  const handleCalculateTriangle = async () => {
    const b = Number(base);
    const h = Number(height);
    if (isNaN(b) || isNaN(h) || b <= 0 || h <= 0) {
      setResultTriangle(null);
      return;
    }
    try {
      const result = await calculateTriangleApi(b, h);
      setResultTriangle(result);
    } catch (error) {
      console.warn("Backend API unavailable, calculating locally:", error);
      setResultTriangle(calculateTriangle(b, h));
    }
  };

  useEffect(() => {
    if (selectedShape === 'circle') {
      handleCalculateCircle();
    }
  }, [radius, selectedShape]);

  useEffect(() => {
    if (selectedShape === 'rectangle') {
      handleCalculateRectangle();
    }
  }, [length, width, selectedShape]);

  useEffect(() => {
    if (selectedShape === 'triangle') {
      handleCalculateTriangle();
    }
  }, [base, height, selectedShape]);

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
