# SmartSiren_Project
Traffic Control System For The  Emergency Vehicle

# 🚨 Smart Siren – Emergency Traffic Clearance System

**Smart Siren** is an innovative project designed to solve one of the major issues in urban traffic: **delays in emergency vehicle movement** due to traffic congestion. This system enables **automated traffic signal control** to give priority clearance for ambulances using **IoT**, **web technologies**, and **simulation tools like Proteus**.

## 🔧 Features

* **Emergency Vehicle Registration**: Register ambulances with ID and plate number through the web interface.
* **Real-Time Signal Control**: Web app sends control requests to the simulated traffic controller in Proteus.
* **Route Optimization**: Calculates the shortest and least-congested path for ambulances.
* **Live Updates**: The active routes and emergency vehicle data are dynamically updated on the dashboard.
* **Simulation Integration**: The system is connected to a Proteus simulation using a virtual microcontroller (like Arduino), mimicking real-world traffic lights.

## 🧠 Technologies Used

* **Frontend**: React.js + Tailwind CSS
* **Backend**: Node.js + Express
* **Database**: MongoDB
* **IoT Communication**: Serial communication between web app and Proteus simulation
* **Simulation**: Proteus for traffic signal logic and visualization
* **Routing**: Dijkstra's algorithm (or custom logic) for route optimization

## ⚙️ How It Works

1. **Ambulance Registration**: Admin enters Ambulance ID and number into the system.
2. **Route Creation**: A route is calculated and displayed in the dashboard.
3. **Signal Control Request**: Upon dispatch, a signal control request is sent from the web app to Proteus via serial communication.
4. **Proteus Simulation**: Receives the signal and changes traffic lights in real-time to green along the ambulance path.
5. **Route Monitoring**: Live updates are shown on the dashboard, and previous routes are saved in history.

## 💡 Motivation

In densely populated cities, ambulances are often delayed by traffic signals. Our goal is to:

* **Reduce emergency response time**
* **Create smarter traffic systems**
* **Improve coordination between emergency services and traffic infrastructure**

## 📽️ Demo / Simulation Preview

(Add a screenshot or GIF of the working web app and Proteus simulation here)

## 📂 Project Structure

```bash
SmartSiren/
├── client/        # React Frontend
├── server/        # Node.js Backend
├── database/      # MongoDB connection and models
├── proteus/       # Arduino code and .DSN simulation file
├── README.md
```

## 🚀 Future Enhancements

* GPS tracking integration
* Real-time traffic analysis using AI
* Full IoT hardware prototype testing in live environments

## 🤝 Contributors

* Bhaskara (https://github.com/Bhaskara05) – Project Lead & Backend and database Developer
* Prasad A M (https://github.com/am-prasad) – frontend and UI/UX Developer
* Khushal L (https://github.com/Khushal) – Proteus and Version Control 

