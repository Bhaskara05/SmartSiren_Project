import mongoose from 'mongoose';

const TrafficSignalSchema = new mongoose.Schema({
  signalId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  area: {
    type: String,
    required: true,
    trim: true,
  },
  intersection: {
    type: String,
    required: true,
    trim: true,
  },
  signalType: {
    type: String,
    enum: ['standard', 'smart', 'adaptive', 'emergency'],
    default: 'standard',
  },
  hasPedestrianCrossing: {
    type: Boolean,
    default: false,
  },
  hasCamera: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ['active', 'maintenance', 'offline', 'planned'],
    default: 'active',
  }
}, {
  timestamps: true,
  collection: 'traffic_signals'
});

const trafficsignalmodel = mongoose.model('trafficsignalmodel', TrafficSignalSchema);

export default trafficsignalmodel;