import express from 'express';
import {calculateCircleController, calculateRectangleController, calculateTriangleController} from '../controllers/calculationController.js';

const router = express.Router();

router.post('/calculate/circle', calculateCircleController);
router.post('/calculate/rectangle', calculateRectangleController);
router.post('/calculate/triangle', calculateTriangleController);

export default router;