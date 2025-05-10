// routes/verifyroute.js
import express from 'express';
import { verifyEngineAndVehicle } from '../controller/verifycontroller.js';

const router = express.Router();

router.post('/verify-engine-vehicle', verifyEngineAndVehicle);

export default router;