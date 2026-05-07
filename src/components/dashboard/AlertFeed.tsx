import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, AlertTriangle, Info, Clock, MapPin } from 'lucide-react';
import { ActivityAlert, AlertSeverity } from '../../types';

interface AlertFeedProps {
  alerts: ActivityAlert[];
}

export const AlertFeed: React.FC<AlertFeedProps> = ({ alerts }) => {
  const getSeverityStyles = (severity: AlertSeverity) => {
    switch (severity) {
      case AlertSeverity.HIGH:
        return {
          icon: <ShieldAlert className="w-5 h-5 text-red-500" />,
          bg: 'bg-red-50',
          border: 'border-red-100',
          dot: 'bg-red-500'
        };
      case AlertSeverity.MEDIUM:
        return {
          icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
          bg: 'bg-amber-50',
          border: 'border-amber-100',
          dot: 'bg-amber-500'
        };
      case AlertSeverity.LOW:
      default:
        return {
          icon: <Info className="w-5 h-5 text-blue-500" />,
          bg: 'bg-blue-50',
          border: 'border-blue-100',
          dot: 'bg-blue-500'
        };
    }
  };

  return (
    <div className="space-y-4">
      {alerts.map((alert, index) => {
        const styles = getSeverityStyles(alert.severity);
        return (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-xl border ${styles.bg} ${styles.border} flex gap-4 hover:shadow-sm transition-shadow`}
          >
            <div className="flex-shrink-0 mt-1">
              {styles.icon}
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-slate-800 text-sm uppercase tracking-tight">{alert.type}</h4>
                <div className="flex items-center text-[10px] text-slate-400 font-mono">
                  <Clock className="w-3 h-3 mr-1" />
                  {alert.timestamp}
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-snug">
                {alert.description}
              </p>
              {alert.location && (
                <div className="mt-2 flex items-center text-xs text-indigo-600 font-bold">
                  <MapPin className="w-3 h-3 mr-1" />
                  {alert.location.address}
                </div>
              )}
              {alert.app && (
                <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-white border border-slate-100 text-slate-400 font-bold uppercase tracking-wider">
                  Source: {alert.app}
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
