import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Clock } from 'lucide-react';
import { teenProfile } from '../../lib/data';

export const LocationMap: React.FC = () => {
  return (
    <div className="relative h-64 w-full bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
      {/* Simulated Map Background */}
      <div className="absolute inset-0 bg-[#E5E7EB] opacity-50 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#D1D5DB" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <path d="M0,40 Q50,45 100,30" stroke="#9CA3AF" strokeWidth="2" fill="none" />
          <path d="M40,0 Q45,50 30,100" stroke="#9CA3AF" strokeWidth="2" fill="none" />
          <path d="M20,0 Q25,50 10,100" stroke="#D1D5DB" strokeWidth="1" fill="none" />
          <path d="M0,70 Q50,75 100,60" stroke="#D1D5DB" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Target Marker */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 15 }}
      >
        <div className="relative">
          <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 relative">
            <span className="text-white font-bold text-xs">{teenProfile.name[0]}</span>
          </div>
          <div className="absolute inset-0 bg-indigo-400 rounded-full animate-ping opacity-25"></div>
        </div>
      </motion.div>

      {/* Map Overlay Stats */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-white/50 shadow-sm flex items-center justify-between">
        <div className="flex items-center">
          <div className="p-2 bg-indigo-50 rounded-lg mr-3">
            <Navigation className="w-4 h-4 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-900 leading-none">Last Known Location</div>
            <div className="text-[10px] text-gray-500 mt-1 italic">Highland Ave & 2nd St, LA</div>
          </div>
        </div>
        <div className="flex items-center text-[10px] text-gray-500 font-medium">
          <Clock className="w-3 h-3 mr-1" />
          2 mins ago
        </div>
      </div>

      {/* Zoom Controls (Visual only) */}
      <div className="absolute top-4 right-4 flex flex-col gap-1">
        <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center font-bold text-gray-700 shadow-sm cursor-pointer hover:bg-gray-50">+</div>
        <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center font-bold text-gray-700 shadow-sm cursor-pointer hover:bg-gray-50">-</div>
      </div>
    </div>
  );
};
