export enum AlertSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export interface ActivityAlert {
  id: string;
  type: string;
  description: string;
  timestamp: string;
  severity: AlertSeverity;
  app?: string;
  location?: { lat: number; lng: number; address: string };
}

export interface AppUsage {
  name: string;
  duration: number; // in minutes
  category: string;
  icon: string;
}

export interface TeenProfile {
  id: string;
  name: string;
  device: string;
  status: 'online' | 'offline' | 'idle';
  lastSeen: string;
}
