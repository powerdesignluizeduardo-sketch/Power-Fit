import React from 'react';
import { Settings, Flame, Dumbbell, CheckCircle2, Timer, Zap, Play, ArrowUp, ArrowDown } from 'lucide-react';
import { Workout } from '../types';

export const WorkoutScreen: React.FC = () => {
  const workouts: Workout[] = [
    { id: '2', letter: 'B', title: 'Treino B - Puxar', focus: 'Costas e Bíceps', duration: '60m', calories: 450, status: 'locked' },
    { id: '3', letter: 'C', title: 'Treino C - Pernas', focus: 'Quadríceps e Panturrilha', duration: '70m', calories: 600, status: 'locked' }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header & Weekly Progress */}
      <section>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Sua Jornada Semanal</h2>
            <button className="p-2 rounded-full bg-[#1A1A1A] hover:bg-[#262626] text-gray-400 transition-colors">
                <Settings className="w-5 h-5" />
            </button>
        </div>

        <div className="bg-app-card border border-app-border rounded-2xl p-5">
            <div className="flex justify-between items-end mb-3">
                <span className="text-xs font-bold text-app-subtext uppercase tracking-wider">Progresso da Meta</span>
                <div className="text-right">
                    <span className="text-2xl font-bold text-white">0<span className="text-gray-500">/5</span></span>
                </div>
            </div>
            
            {/* Segmented Progress Bar */}
            <div className="flex gap-2 h-3">
                {[1, 2, 3, 4, 5].map((step, i) => (
                    <div 
                        key={step} 
                        className={`flex-1 rounded-full transition-all duration-500 ${
                            i === 0 
                                ? 'bg-[#262626] border border-white/5' // Current/Pending
                                : 'bg-[#151515]' // Future
                        }`} 
                    />
                ))}
            </div>
            <p className="text-[10px] text-app-subtext mt-2 text-right">0% Concluído</p>
        </div>
      </section>

      {/* Stats Matrix */}
      <section className="grid grid-cols-3 gap-3">
        {/* Calories */}
        <div className="bg-app-card border border-app-border rounded-2xl p-4 flex flex-col items-center justify-center text-center">
            <div className="mb-2 p-2 bg-orange-500/10 rounded-full">
                <Flame className="w-5 h-5 text-orange-500" />
            </div>
            <span className="text-lg font-bold text-white">2.375</span>
            <span className="text-[10px] text-gray-400 uppercase">Kcal da Semana</span>
            <div className="flex items-center gap-1 mt-1.5 text-[10px] text-green-500">
                <ArrowUp className="w-3 h-3" /> 12%
            </div>
        </div>

        {/* Frequency */}
        <div className="bg-app-card border border-app-border rounded-2xl p-4 flex flex-col items-center justify-center text-center">
             <div className="mb-2 p-2 bg-cyan-500/10 rounded-full">
                <Dumbbell className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-lg font-bold text-white">0</span>
            <span className="text-[10px] text-gray-400 uppercase">Treinos Feitos</span>
            <div className="flex items-center gap-1 mt-1.5 text-[10px] text-gray-600">
                -
            </div>
        </div>

        {/* History */}
        <div className="bg-app-card border border-app-border rounded-2xl p-4 flex flex-col items-center justify-center text-center">
             <div className="mb-2 p-2 bg-app-neon/10 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-app-neon" />
            </div>
            <span className="text-lg font-bold text-white">95</span>
            <span className="text-[10px] text-gray-400 uppercase">Total Concluído</span>
            <div className="flex items-center gap-1 mt-1.5 text-[10px] text-red-500">
                <ArrowDown className="w-3 h-3" /> 2%
            </div>
        </div>
      </section>

      {/* Hero Card: Next Workout */}
      <section>
        <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-app-neon animate-pulse" />
            <span className="text-xs font-bold text-app-neon uppercase tracking-widest">Treino Sugerido para Hoje</span>
        </div>
        
        <div className="relative group bg-[#1A1A1A] rounded-3xl p-6 border border-app-neon/30 hover:border-app-neon/50 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-app-neon/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
                <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-app-neon/10 border border-app-neon/20 text-app-neon text-[10px] font-bold uppercase tracking-wider mb-4">
                    Próximo da Fila
                </div>

                <h3 className="text-3xl font-extrabold text-white mb-1">Treino A - Empurrar</h3>
                <p className="text-gray-400 text-sm mb-6">Foco: Peito, Ombros e Tríceps</p>

                <div className="flex gap-3 mb-6">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#262626] rounded-lg border border-white/5">
                        <Timer className="w-3.5 h-3.5 text-gray-300" />
                        <span className="text-xs text-white font-medium">55 min</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#262626] rounded-lg border border-white/5">
                        <Zap className="w-3.5 h-3.5 text-orange-500" />
                        <span className="text-xs text-white font-medium">Alta Intensidade</span>
                    </div>
                </div>

                <p className="text-sm text-gray-300 mb-4 italic">"Tudo pronto para esmagar?"</p>

                <button className="w-full bg-app-neon hover:bg-app-neonHover text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-[0_4px_20px_rgba(0,255,136,0.25)]">
                    <Play className="w-5 h-5 fill-black" />
                    INICIAR AGORA
                </button>
            </div>
        </div>
      </section>

      {/* Available Workouts List */}
      <section>
        <h4 className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">Outros Treinos Disponíveis</h4>
        <div className="space-y-3">
            {workouts.map((workout) => (
                <div key={workout.id} className="bg-app-card border border-app-border rounded-2xl p-4 flex items-center gap-4 hover:border-gray-600 transition-colors cursor-pointer group">
                    {/* Letter Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#262626] flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
                        <span className="text-xl font-bold text-white">{workout.letter}</span>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                        <h5 className="text-white font-bold">{workout.title}</h5>
                        <p className="text-xs text-gray-500">{workout.focus}</p>
                    </div>

                    {/* Metrics & Action */}
                    <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-3 text-[10px] text-gray-400 mb-1">
                            <div className="flex items-center gap-1">
                                <Timer className="w-3 h-3" /> {workout.duration}
                            </div>
                            <div className="flex items-center gap-1">
                                <Zap className="w-3 h-3 text-orange-500" /> {workout.calories}
                            </div>
                        </div>
                        <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
                            <Play className="w-3 h-3 fill-white text-white group-hover:text-black group-hover:fill-black transition-colors" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

    </div>
  );
};