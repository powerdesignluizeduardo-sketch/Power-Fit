import React from 'react';
import { Flame, Trophy, Target } from 'lucide-react';

interface StreakCardProps {
  streak: number;
}

export const StreakCard: React.FC<StreakCardProps> = ({ streak }) => {
  // Logic to calculate progress within a 7-day cycle
  // If streak is 5, we fill 5 bars.
  const currentProgress = streak % 7 === 0 && streak > 0 ? 7 : streak % 7;

  return (
    <div className="relative overflow-hidden rounded-xl bg-black border border-orange-900/50 p-4 mb-6 shadow-lg">
      <div className="flex items-center justify-between gap-4">
        
        {/* Section 1: Left - The Fire & Count */}
        <div className="flex items-center gap-3 shrink-0">
            <div className="relative">
                <div className="absolute inset-0 bg-orange-500/20 blur-md rounded-full animate-pulse" />
                <Flame className="w-8 h-8 text-orange-500 fill-orange-500 relative z-10 drop-shadow-[0_2px_4px_rgba(249,115,22,0.8)]" />
            </div>
            <div className="flex flex-col leading-none">
                <span className="text-3xl font-black text-white tracking-tighter">{streak}</span>
                <span className="text-[9px] font-bold text-orange-500/80 uppercase tracking-wider">Dias seguidos</span>
            </div>
        </div>

        {/* Section 2: Center - The Tracker (7 segments) */}
        {/* Hidden on very small screens, visible on normal mobile/desktop */}
        <div className="hidden xs:flex flex-1 gap-1 h-2 max-w-[140px] items-center">
            {[...Array(7)].map((_, i) => {
                const isActive = i < currentProgress;
                return (
                    <div 
                        key={i} 
                        className={`flex-1 h-full rounded-full transition-all duration-500 ${
                            isActive 
                                ? 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]' 
                                : 'bg-[#1A1A1A] border border-white/5'
                        }`}
                    />
                );
            })}
        </div>

        {/* Section 3: Right - Stats (Record & Goal) */}
        <div className="flex flex-col items-end gap-1 shrink-0 border-l border-[#262626] pl-4">
            {/* Record */}
            <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Recorde:</span>
                <span className="text-xs font-bold text-white">12</span>
                <Trophy className="w-3 h-3 text-yellow-500" />
            </div>
            {/* Meta */}
            <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Meta:</span>
                <span className="text-xs font-bold text-white">7</span>
                <Target className="w-3 h-3 text-red-500" />
            </div>
        </div>

      </div>
    </div>
  );
};