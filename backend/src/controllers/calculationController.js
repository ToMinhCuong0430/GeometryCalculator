import {calculateCircle, calculateRectangle, calculateTriangle} from '../services/geometryService.js';
import {isValidPositiveNumber} from '../validators/geometryValidator.js';  

export function calculateCircle(req, res) {
    const { radius } = req.body;
    if (!isValidPositiveNumber(radius)) {
        return res.status(400).json({ error: 'Invalid radius. Please provide a positive number.' });
    }
    const result = calculateCircle(radius);
    res.json(result);
}

export function calculateRectangle(req, res) {
    const { length, width } = req.body;
    if (!isValidPositiveNumber(length) || !isValidPositiveNumber(width)) {
        return res.status(400).json({ error: 'Invalid length or width. Please provide positive numbers.' });
    }
    const result = calculateRectangle(length, width);
    res.json(result);
}

export function calculateTriangle(req, res) {
    const { base, height } = req.body;
    if (!isValidPositiveNumber(base) || !isValidPositiveNumber(height)) {
        return res.status(400).json({ error: 'Invalid base or height. Please provide positive numbers.' });
    }
    const result = calculateTriangle(base, height);
    res.json(result);
}