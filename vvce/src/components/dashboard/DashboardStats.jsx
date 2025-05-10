import React, { useEffect, useState } from 'react';
import { Clock, Gauge, MapPin, Navigation } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const DashboardStats = () => {
  const [vehicleCount, setVehicleCount] = useState(0);
  const [signalCount, setSignalCount] = useState(0);

  useEffect(() => {
    // Fetch vehicle count
    fetch('/api/vehicles/count')
      .then(res => res.json())
      .then(data => setVehicleCount(data.count))
      .catch(err => console.error('Error fetching vehicle count:', err));

    // Fetch traffic signal count
    fetch('/api/traffic-signals/count')
      .then(res => res.json())
      .then(data => setSignalCount(data.count))
      .catch(err => console.error('Error fetching signal count:', err));
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Ambulances</CardTitle>
          <Gauge className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{vehicleCount}</div>
          <p className="text-xs text-muted-foreground">Live count from DB</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8.2 min</div>
          <p className="text-xs text-muted-foreground">-1.5 min from last week</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Controlled Signals</CardTitle>
          <MapPin className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{signalCount}</div>
          <p className="text-xs text-muted-foreground">Live count from DB</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">AI Route Efficiency</CardTitle>
          <Navigation className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+24.5%</div>
          <p className="text-xs text-muted-foreground">Compared to traditional routing</p>
        </CardContent>
      </Card>
    </div>
  );
};
