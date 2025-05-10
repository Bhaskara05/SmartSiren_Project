import Vehicle from "../model/vehicleModel.js"; // correct import

const generateUniqueId = (ambulanceId, vehicleNumber) => {
  return '${ambulanceId}-${vehicleNumber}'.replace(/\s+/g, '').toUpperCase();
};

export const registerVehicle = async (req, res) => {
  try {
    const {
      ambulanceId,
      driverName,
      vehicleNumber,
      status = 'idle',
      destination = '',
      eta = '',
      optimizedSignals = 0
    } = req.body;

    if (!ambulanceId || !driverName || !vehicleNumber) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const existingVehicle = await Vehicle.findOne({ ambulanceId });
    if (existingVehicle) {
      return res.status(400).json({ message: 'Ambulance ID already exists' });
    }

    const uniqueId = generateUniqueId(ambulanceId, vehicleNumber);

    const newVehicle = new Vehicle({
      ambulanceId,
      uniqueId,
      driverName,
      vehicleNumber,
      status,
      destination,
      eta,
      optimizedSignals,
    });

    await newVehicle.save();
    res.status(201).json({ message: 'Vehicle registered successfully', vehicle: newVehicle });
  } catch (error) {
    console.error('Error registering vehicle:', error);
    res.status(500).json({ message: 'Error registering vehicle', error: error.message });
  }
};