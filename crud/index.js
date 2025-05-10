import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import userRoute from './routes/userRoute.js';
import trafficSignalRoute from './routes/trafficSignalRoute.js';
import vehicleRoute from './routes/vehicleRoute.js';
import triggerRoute from './routes/trigger-route.js';
import ambulanceRoute from './routes/ambulanceRoute.js';


dotenv.config();

const app = express();

// ✅ Enable CORS
app.use(cors({
  origin: 'http://localhost:5173', // React frontend
}));

// ✅ Middleware
app.use(bodyParser.json());

// ✅ Routes
app.use('/api/user', userRoute);
app.use('/api/traffic-signals', trafficSignalRoute);
app.use('/api/vehicle', vehicleRoute);
app.use('/api/trigger', triggerRoute);
app.use('/api/ambulance', ambulanceRoute);


// ✅ MongoDB connection (ONLY ONCE)
const PORT = process.env.PORT || 8000;
const mongo_url = process.env.MONGO_URL || 'mongodb://localhost:27017/crud';

mongoose.connect(mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err);
  });
