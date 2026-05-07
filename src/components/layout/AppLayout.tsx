import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShieldCheck, 
  MapPin, 
  Settings, 
  Bell, 
  Menu, 
  X,
  Smartphone,
  Users,
  LogOut,
  Fingerprint
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { teenProfile } from '../../lib/data';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', active: true },
    { icon: <ShieldCheck className="w-5 h-5" />, label: 'Security Controls', active: false },
    { icon: <MapPin className="w-5 h-5" />, label: 'Live Location', active: false },
    { icon: <Users className="w-5 h-5" />, label: 'Family Hub', active: false },
    { icon: <Settings className="w-5 h-5" />, label: 'System Settings', active: false },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            className="w-72 bg-slate-900 text-white flex flex-col z-50 overflow-hidden"
          >
            <div className="p-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white uppercase italic">ParentGuard AI</span>
            </div>

            <nav className="flex-grow px-4 space-y-1 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    item.active 
                      ? 'bg-white/10 text-white font-medium' 
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="p-4 mt-auto">
              <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Stealth Mode</span>
                  <div className="w-8 h-4 bg-green-500 rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 leading-tight">App icons are hidden on target devices. Data sync is active.</p>
              </div>
              <div className="mt-4 flex items-center gap-3 px-2 py-2">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xs text-slate-300">
                  AH
                </div>
                <div className="flex-grow overflow-hidden text-left">
                  <p className="text-xs font-bold text-white truncate">Hassan Admin</p>
                  <LogOut className="w-3 h-3 text-slate-500 hover:text-red-400 cursor-pointer mt-0.5" />
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg lg:hidden"
            >
              <Menu className="w-5 h-5 text-slate-600" />
            </button>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-slate-800">Monitoring Center</h2>
              <div className="h-4 w-px bg-slate-200 mx-2 hidden md:block"></div>
              <div className="hidden md:flex gap-2">
                <button className="px-3 py-1 bg-slate-100 rounded text-xs font-semibold text-slate-600">All Devices</button>
                <button className="px-3 py-1 bg-white border border-slate-200 rounded text-xs font-medium text-slate-500">Leo's iPhone</button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-slate-500">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs font-medium">Cloud Sync Active</span>
            </div>
            <button className="relative p-2 hover:bg-slate-100 rounded-full transition-colors">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-600">JD</div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-grow overflow-y-auto overflow-x-hidden p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
