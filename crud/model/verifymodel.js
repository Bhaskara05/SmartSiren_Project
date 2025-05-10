import mongoose from 'mongoose';

const AmbulanceSchema = new mongoose.Schema({
  engineNumber: {
    type: String,
    required: true,
    unique: true,
    length: 7,
  },
  vehicleNumber: {
    type: String,
    required: true,
    unique: true,
  },
});

// Avoid OverwriteModelError
const Ambulance = mongoose.models.Ambulance || mongoose.model('Ambulance', AmbulanceSchema);

export default Ambulance;
