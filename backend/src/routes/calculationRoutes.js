import express from 'express';
import {calculateCircleController, calculateRectangleController, calculateTriangleController, calculateSquareController} from '../controllers/calculationController.js';

const router = express.Router();

router.post('/calculate/circle', calculateCircleController);
router.post('/calculate/rectangle', calculateRectangleController);
router.post('/calculate/triangle', calculateTriangleController);
router.post('/calculate/square', calculateSquareController);
export default router;