import TrafficSignal from '../model/TrafficSignalModel.js';

export const registerTrafficSignal = async (req, res) => {
  try {
    const newSignal = new TrafficSignal(req.body);
    await newSignal.save();
    res.status(201).json({ message: 'Traffic signal registered successfully', signal: newSignal });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
};

export const getAllSignals = async (req, res) => {
  try {
    const signals = await TrafficSignal.find();
    res.status(200).json(signals);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve signals', error: error.message });
  }
};