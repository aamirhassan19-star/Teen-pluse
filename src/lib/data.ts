import { AlertSeverity, ActivityAlert, AppUsage, TeenProfile } from '../types';

export const teenProfile: TeenProfile = {
  id: 'teen-1',
  name: 'Leo',
  device: 'iPhone 15 Pro',
  status: 'online',
  lastSeen: 'Just now'
};

export const appUsageData: AppUsage[] = [
  { name: 'TikTok', duration: 145, category: 'Social', icon: 'smartphone' },
  { name: 'Instagram', duration: 92, category: 'Social', icon: 'camera' },
  { name: 'Discord', duration: 64, category: 'Communication', icon: 'message-square' },
  { name: 'Safari', duration: 45, category: 'Utility', icon: 'globe' },
  { name: 'YouTube', duration: 120, category: 'Entertainment', icon: 'play' },
  { name: 'Roblox', duration: 85, category: 'Games', icon: 'gamepad' },
];

export const alerts: ActivityAlert[] = [
  {
    id: '1',
    type: 'Suspicious Search',
    description: 'Searched for "how to bypass school wifi filters" at 11:45 PM.',
    timestamp: '2 hours ago',
    severity: AlertSeverity.LOW,
    app: 'Safari'
  },
  {
    id: '2',
    type: 'Geofence Breach',
    description: 'Exit detected from "School Zone".',
    timestamp: '4 hours ago',
    severity: AlertSeverity.MEDIUM,
    location: { lat: 34.0522, lng: -118.2437, address: 'Highland Ave & 2nd St' }
  },
  {
    id: '3',
    type: 'High App Usage',
    description: 'Exceeded 4 hours of screen time today.',
    timestamp: '5 hours ago',
    severity: AlertSeverity.LOW
  },
  {
    id: '4',
    type: 'Suspicious Media',
    description: 'Received unsolicited media file from unknown sender.',
    timestamp: '1 day ago',
    severity: AlertSeverity.HIGH,
    app: 'Discord'
  },
  {
    id: '5',
    type: 'Late Night Activity',
    description: 'Messaging active between 1:00 AM - 3:00 AM.',
    timestamp: '1 day ago',
    severity: AlertSeverity.MEDIUM,
    app: 'Instagram'
  }
];
