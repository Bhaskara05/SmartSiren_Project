import express from 'express';
import { registerTrafficSignal, getAllSignals } from '../controller/trafficSignalController.js';

const router = express.Router();

router.post('/register', registerTrafficSignal);
router.get('/list', getAllSignals);

export default router;