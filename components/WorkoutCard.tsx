import React from 'react';
import { Play, Timer, Dumbbell } from 'lucide-react';

export const WorkoutCard: React.FC = () => {
  return (
    <section className="mb-8 relative group cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
      <div 
        className="h-72 w-full bg-cover bg-center relative grayscale opacity-60 group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-500"
        style={{ backgroundImage: 'url(https://picsum.photos/800/400?grayscale)' }}
      />
      
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-app-neon text-black text-[10px] font-bold rounded uppercase tracking-wide">
              Hoje
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-1 tracking-tight uppercase">Treino A - Empurrar</h2>
          
          {/* Retention Trigger */}
          <p className="text-sm text-gray-300 mt-2">
            Sua última vez foi há <span className="text-white font-bold">3 dias</span>. <br/>
            Vamos bater seu recorde hoje?
          </p>
        </div>

        <div>
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-1.5">
              <Dumbbell className="w-4 h-4" />
              <span>5 exercícios</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full" />
            <div className="flex items-center gap-1.5">
              <Timer className="w-4 h-4" />
              <span>55 min</span>
            </div>
          </div>

          <button className="w-full bg-app-neon hover:bg-app-neonHover text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_20px_rgba(0,255,136,0.3)]">
            <Play className="w-5 h-5 fill-black" />
            COMEÇAR TREINO
          </button>
        </div>
      </div>
    </section>
  );
};