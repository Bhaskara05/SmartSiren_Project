// routes/trigger-route.js
import express from 'express';
import {
  verifyEngineAndVehicle,
  activateAmbulance,
  getActiveAmbulances,
} from '../controller/trigger-control.js'; // Adjust the path based on your structure

const router = express.Router();

// POST: Verify engine number and vehicle number
router.post('/api/verify-engine-vehicle', verifyEngineAndVehicle);

// POST: Activate an ambulance
router.post('/api/active-ambulances', activateAmbulance);

// GET: List all active or emergency ambulances
router.get('/api/active-ambulances', getActiveAmbulances);

export default router;