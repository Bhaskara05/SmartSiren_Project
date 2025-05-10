import express from 'express';
import { registerVehicle } from '../controller/vehicleController.js';

const router = express.Router();

// Route to register a new vehicle
router.post('/register', registerVehicle);

// Add other vehicle-related routes here if needed in future

export default router;