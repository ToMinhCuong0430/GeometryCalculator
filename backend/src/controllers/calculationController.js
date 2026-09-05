import {calculateCircle, calculateRectangle, calculateTriangle} from '../services/geometryService.js';
import {isValidPositiveNumber} from '../validators/geometryValidator.js';  

export function calculateCircleController(req, res) {
    const { radius } = req.body;
    if (!isValidPositiveNumber(radius)) {
        return res.status(400).json({ error: 'Invalid radius. Please provide a positive number.' });
    }
    const result = calculateCircle(Number(radius));
    res.json(result);
}

export function calculateRectangleController(req, res) {
    const { length, width } = req.body;
    if (!isValidPositiveNumber(length) || !isValidPositiveNumber(width)) {
        return res.status(400).json({ error: 'Invalid length or width. Please provide positive numbers.' });
    }
    const result = calculateRectangle(Number(length), Number(width));
    res.json(result);
}

export function calculateTriangleController(req, res) {
    const { base, height } = req.body;
    if (!isValidPositiveNumber(base) || !isValidPositiveNumber(height)) {
        return res.status(400).json({ error: 'Invalid base or height. Please provide positive numbers.' });
    }
    const result = calculateTriangle(Number(base), Number(height));
    res.json(result);
}