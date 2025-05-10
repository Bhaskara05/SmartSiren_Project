import express from 'express';
import Ambulance from '../model/ambulanceModel.js'; // Make sure this path is correct

const router = express.Router();

// GET /api/active-ambulances
router.get('/active-ambulances', async (req, res) => {
  try {
    const activeAmbulances = await Ambulance.find({ active: true });
    res.json(activeAmbulances);
  } catch (error) {
    console.error('Error fetching active ambulances:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;