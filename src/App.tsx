import { AppLayout } from './components/layout/AppLayout';
import { AppUsageChart } from './components/dashboard/AppUsageChart';
import { AlertFeed } from './components/dashboard/AlertFeed';
import { LocationMap } from './components/dashboard/LocationMap';
import { appUsageData, alerts, teenProfile } from './lib/data';
import { motion } from 'motion/react';
import { 
  Plus, 
  Smartphone, 
  CircleAlert, 
  Clock, 
  Lock, 
  Ban, 
  Zap,
  Activity,
  ArrowRight,
  Settings
} from 'lucide-react';

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AppLayout>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Welcome & Overview Stats */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-800 uppercase">
              Dashboard <span className="text-indigo-600 font-black">Overview</span>
            </h1>
            <p className="text-slate-400 text-sm mt-1">Digital activity report for {teenProfile.name}.</p>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-indigo-100 flex items-center gap-2 hover:bg-slate-900 transition-colors">
            <Plus className="w-4 h-4" />
            Add New Device
          </button>
        </div>

        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Total Screen Time</span>
            <div className="text-2xl font-bold text-slate-900 leading-none">5.4h</div>
            <div className="text-[10px] font-bold text-amber-500 mt-2 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              +12% vs yesterday
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Security Alerts</span>
            <div className="text-2xl font-bold text-slate-900 leading-none">03</div>
            <div className="text-[10px] font-bold text-rose-500 mt-2 flex items-center gap-1">
              <CircleAlert className="w-3 h-3" />
              2 high priority
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Target Device</span>
            <div className="text-lg font-bold text-slate-900 leading-none truncate">{teenProfile.device}</div>
            <div className="text-[10px] font-bold text-emerald-500 mt-2 flex items-center gap-1">
              <Activity className="w-3 h-3" />
              82% Battery • Online
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Quick Status</span>
            <div className="text-2xl font-bold text-slate-900 leading-none">Safe</div>
            <div className="text-[10px] font-bold text-indigo-500 mt-2 flex items-center gap-1">
              <Smartphone className="w-3 h-3" />
              Stealth Sync Active
            </div>
          </motion.div>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Analytics & Map */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* App Usage Section */}
            <motion.section variants={itemVariants} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-700 uppercase text-xs tracking-wider">App Consumption Chart</h3>
                </div>
                <div className="text-[10px] font-bold text-slate-400">LAST 24 HOURS</div>
              </div>
              <div className="p-8">
                <AppUsageChart data={appUsageData} />
              </div>
            </motion.section>

            {/* Location Section */}
            <motion.section variants={itemVariants} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-bold text-slate-700 uppercase text-xs tracking-wider">Geofencing Tracking</h3>
                <button className="text-[10px] text-indigo-600 font-bold uppercase hover:underline">View History</button>
              </div>
              <div className="p-8">
                <LocationMap />
              </div>
            </motion.section>

            {/* AI Insights Simulation */}
            <motion.section variants={itemVariants} className="bg-indigo-900 p-8 rounded-2xl text-white shadow-xl shadow-indigo-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Zap className="w-24 h-24" />
               </div>
               <div className="relative z-10">
                  <h4 className="font-bold text-indigo-200 uppercase text-[10px] tracking-widest mb-1">AI Behavior Analysis</h4>
                  <p className="text-xl font-bold mb-4">Remote Threat Detection Active</p>
                  <p className="text-indigo-300 text-sm leading-relaxed max-w-xl">
                    Shift in communication patterns detected on Discord. Late-night activity suggests disruption of routine. Suggested Action: Remote View or Sleep Mode.
                  </p>
                  <button className="mt-6 inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-white hover:text-indigo-900 transition-all">
                    Apply Optimization
                    <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
            </motion.section>
          </div>

          {/* Right Column: Activity Feed & Quick Actions */}
          <div className="space-y-8">
            
            {/* Quick Actions */}
            <motion.section variants={itemVariants} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-800 uppercase text-xs tracking-wider mb-6">Parental Override</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center justify-center p-6 bg-red-50 hover:bg-red-100 rounded-xl transition-colors gap-3 group border border-red-100">
                  <Lock className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold text-red-800 uppercase">Remote Lock</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 bg-amber-50 hover:bg-amber-100 rounded-xl transition-colors gap-3 group border border-amber-100">
                  <Ban className="w-6 h-6 text-amber-600 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold text-amber-800 uppercase tracking-tight">Block Socials</span>
                </button>
              </div>
            </motion.section>

            {/* Activity Feed */}
            <motion.section variants={itemVariants} className="bg-white rounded-2xl border border-slate-200 shadow-sm min-h-[500px] overflow-hidden">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <h4 className="font-bold text-slate-700 uppercase text-xs tracking-wider text-center">Real-time Incident Feed</h4>
                <div className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center cursor-pointer hover:bg-slate-100">
                  <Settings className="w-3 h-3 text-slate-400" />
                </div>
              </div>
              <div className="p-6">
                <AlertFeed alerts={alerts} />
                <button className="w-full mt-6 py-3 text-[10px] font-bold text-slate-400 uppercase border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                  View Full Audit Log
                </button>
              </div>
            </motion.section>
            
          </div>
        </div>
      </motion.div>
    </AppLayout>
  );
}

