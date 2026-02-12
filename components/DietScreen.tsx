import React from 'react';
import { Plus, ScanBarcode, ChevronRight, Droplet, Beef, Wheat, Flame } from 'lucide-react';

export const DietScreen: React.FC = () => {
  const currentCalories = 1701;
  const maxCalories = 2500;
  const remaining = maxCalories - currentCalories;
  const percentage = (currentCalories / maxCalories) * 100;
  
  // Donut Chart Calculations
  const size = 260;
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="min-h-screen bg-[#0D0D0D] pb-32 animate-in fade-in duration-300 font-sans">
      
      {/* 1. Hero Section: Fuel Gauge (Donut Chart) */}
      <div className="pt-6 pb-8 px-4 relative overflow-hidden">
        {/* Ambient Orange Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-orange-500/5 blur-[100px] pointer-events-none" />

        <div className="relative flex flex-col items-center justify-center z-10">
          <div className="relative" style={{ width: size, height: size }}>
            {/* SVG Ring */}
            <svg className="w-full h-full -rotate-90 transform" viewBox={`0 0 ${size} ${size}`}>
              {/* Track */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#1A1A1A"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
              {/* Progress Gradient Def */}
              <defs>
                <linearGradient id="calorieGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F97316" /> {/* Orange-500 */}
                  <stop offset="100%" stopColor="#EAB308" /> {/* Yellow-500 */}
                </linearGradient>
              </defs>
              {/* Progress Arc */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="url(#calorieGradient)"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                className="drop-shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all duration-1000 ease-out"
              />
            </svg>

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2 mb-1 opacity-80">
                <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Consumidas</span>
              </div>
              <span className="text-6xl font-black text-white tracking-tighter drop-shadow-xl">
                1.701
              </span>
              <span className="text-sm font-medium text-gray-500 mt-1">
                de {maxCalories.toLocaleString()} kcal
              </span>
            </div>
          </div>

          {/* Feedback Pill */}
          <div className="mt-[-20px] bg-[#1A1A1A]/80 backdrop-blur-md border border-orange-500/20 px-6 py-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-bold text-gray-300">
              Ainda restam <span className="text-white">{remaining} kcal</span>
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 space-y-8 relative z-10">
        
        {/* 2. Grid de Macros (Pílulas Visuais) */}
        <section className="grid grid-cols-3 gap-3">
          {/* Proteína */}
          <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-4 flex flex-col justify-between h-28 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-2">
               <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <Beef className="w-5 h-5" />
               </div>
               <span className="text-[10px] font-bold text-cyan-500/60 uppercase">Prot</span>
            </div>
            <div>
              <div className="flex items-end gap-1 mb-1.5">
                <span className="text-xl font-bold text-white">148</span>
                <span className="text-[10px] text-cyan-200/60 mb-1">/ 180g</span>
              </div>
              <div className="h-1.5 w-full bg-[#000] rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 w-[82%] rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
              </div>
            </div>
          </div>

          {/* Carboidratos */}
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-4 flex flex-col justify-between h-28 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-2">
               <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400">
                  <Wheat className="w-5 h-5" />
               </div>
               <span className="text-[10px] font-bold text-yellow-500/60 uppercase">Carb</span>
            </div>
            <div>
              <div className="flex items-end gap-1 mb-1.5">
                <span className="text-xl font-bold text-white">190</span>
                <span className="text-[10px] text-yellow-200/60 mb-1">/ 250g</span>
              </div>
              <div className="h-1.5 w-full bg-[#000] rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 w-[76%] rounded-full shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
              </div>
            </div>
          </div>

          {/* Gordura */}
          <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-4 flex flex-col justify-between h-28 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-2">
               <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                  <Droplet className="w-5 h-5" />
               </div>
               <span className="text-[10px] font-bold text-purple-500/60 uppercase">Gord</span>
            </div>
            <div>
              <div className="flex items-end gap-1 mb-1.5">
                <span className="text-xl font-bold text-white">57</span>
                <span className="text-[10px] text-purple-200/60 mb-1">/ 80g</span>
              </div>
              <div className="h-1.5 w-full bg-[#000] rounded-full overflow-hidden">
                <div className="h-full bg-purple-400 w-[70%] rounded-full shadow-[0_0_10px_rgba(192,132,252,0.5)]" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Lista de Refeições (Meal Log) */}
        <section>
           <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Refeições de Hoje</h3>
              <span className="text-xs text-orange-500 font-medium cursor-pointer hover:text-orange-400 transition-colors">Editar Metas</span>
           </div>

           <div className="space-y-3">
              {[
                { title: 'Café da Manhã', time: '08:00', desc: '3 Ovos mexidos, Café preto, 1 Banana...', kcal: 388, done: true },
                { title: 'Almoço', time: '12:30', desc: 'Frango grelhado, Arroz branco, Brócolis...', kcal: 650, done: true },
                { title: 'Lanche da Tarde', time: '16:00', desc: 'Whey Protein, Aveia, Maçã...', kcal: 320, done: true },
                { title: 'Jantar', time: '20:00', desc: 'Salmão, Salada verde, Azeite...', kcal: 343, done: false },
              ].map((meal, index) => (
                <div key={index} className="group bg-[#1A1A1A] hover:bg-[#202020] border border-white/5 hover:border-orange-500/30 rounded-2xl p-4 transition-all duration-300 cursor-pointer relative overflow-hidden">
                    <div className="flex justify-between items-start">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h4 className="text-white font-bold text-sm">{meal.title}</h4>
                                <span className="text-[10px] font-medium text-gray-500 bg-[#0D0D0D] px-1.5 py-0.5 rounded text-center">{meal.time}</span>
                            </div>
                            <p className="text-xs text-gray-400 line-clamp-1">{meal.desc}</p>
                        </div>

                        <div className="flex flex-col items-end gap-3 ml-4">
                            <span className={`text-sm font-bold ${meal.done ? 'text-orange-500' : 'text-gray-600'}`}>
                                {meal.kcal} <span className="text-[10px] text-gray-500 font-normal">kcal</span>
                            </span>
                            
                            <button className="w-6 h-6 rounded-full bg-[#262626] border border-white/5 flex items-center justify-center text-gray-400 group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 transition-all">
                                <Plus className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                </div>
              ))}
           </div>
        </section>

      </div>

      {/* 4. FAB (Floating Action Button) */}
      <button className="fixed bottom-24 right-6 z-40 bg-orange-500 hover:bg-orange-400 text-black p-4 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-transform hover:scale-110 active:scale-95 flex items-center justify-center">
         <ScanBarcode className="w-6 h-6" />
      </button>

    </div>
  );
};