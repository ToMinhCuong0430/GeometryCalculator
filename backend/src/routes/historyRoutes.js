import express from 'express';

import {createHistory, getHistory, deleteHistory} from '../controllers/historyController.js';

const router = express.Router();

router.post("/", createHistory);
router.get("/", getHistory);
router.delete("/", deleteHistory);

export default router;