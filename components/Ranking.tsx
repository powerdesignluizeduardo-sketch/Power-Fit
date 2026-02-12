import React from 'react';
import { Trophy, ArrowUp, Crown, Dumbbell, Apple, Droplet } from 'lucide-react';
import { RankingUser } from '../types';

interface RankingProps {
  users: RankingUser[];
}

// Icon Ring Chart Component
const IconRing = ({ color, percentage, icon: Icon }: { color: string, percentage: number, icon: any }) => {
  const size = 22; // Reduced size for better proportions
  const strokeWidth = 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
       {/* Background & Progress SVG */}
       <svg className="-rotate-90 absolute inset-0" width={size} height={size}>
         {/* Background Circle */}
         <circle 
            cx={size / 2} 
            cy={size / 2} 
            r={radius} 
            fill="none" 
            stroke="#333" 
            strokeWidth={strokeWidth} 
         />
         {/* Progress Circle */}
         <circle 
            cx={size / 2} 
            cy={size / 2} 
            r={radius} 
            fill="none" 
            stroke={color} 
            strokeWidth={strokeWidth} 
            strokeDasharray={circumference} 
            strokeDashoffset={offset} 
            strokeLinecap="round" 
         />
       </svg>
       
       {/* Centered Micro Icon */}
       <Icon className="w-2.5 h-2.5 relative z-10" style={{ color: color }} />
    </div>
  )
}

export const Ranking: React.FC<RankingProps> = ({ users }) => {
  const first = users.find(u => u.position === 1);
  const second = users.find(u => u.position === 2);
  const third = users.find(u => u.position === 3);

  // Renders the 3 stats rings with icons: Workout (Green), Diet (Orange), Water (Blue)
  const renderStatsRow = (stats: { workout: number; diet: number; water: number }) => (
    <div className="flex gap-1.5 mt-1.5 justify-center items-center bg-black/20 rounded-full px-2 py-1 backdrop-blur-sm border border-white/5">
        <IconRing color="#00FF88" percentage={stats.workout} icon={Dumbbell} /> {/* Treino */}
        <IconRing color="#FF9900" percentage={stats.diet} icon={Apple} />       {/* Dieta */}
        <IconRing color="#00CCFF" percentage={stats.water} icon={Droplet} />    {/* Água */}
    </div>
  );

  const renderPodiumUser = (user: RankingUser | undefined, isWinner: boolean) => {
    if (!user) return null;
    return (
        <div className={`flex flex-col items-center justify-end ${isWinner ? 'scale-110 z-10 mb-2' : 'mb-0 opacity-90'}`}>
            <div className={`relative cursor-pointer transition-transform duration-300 hover:-translate-y-1`}>
                {isWinner && (
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-yellow-500 flex flex-col items-center animate-bounce">
                        <Crown className="w-6 h-6 fill-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
                    </div>
                )}
                
                {/* Avatar */}
                <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border-2 mx-auto ${isWinner ? 'border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.4)]' : 'border-[#262626]'}`}>
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                </div>

                {/* Winner Glow Background */}
                {isWinner && (
                    <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full -z-10" />
                )}
            </div>

            <div className="text-center mt-2 w-full">
                <p className={`font-bold text-sm mb-0.5 truncate ${isWinner ? 'text-white' : 'text-gray-300'}`}>{user.name}</p>
                <span className={`font-bold text-xs ${isWinner ? 'text-yellow-400' : 'text-app-subtext'}`}>
                    {user.points} pts
                </span>
                
                {/* Stats Rings (Data Vis with Icons) */}
                <div className="flex justify-center w-full">
                    {renderStatsRow(user.stats)}
                </div>
            </div>
        </div>
    );
  };

  return (
    <section className="bg-app-card border border-app-border rounded-2xl overflow-hidden mb-8 shadow-lg">
      <div className="p-6 pb-2">
        <div className="flex items-center justify-between mb-8">
          <div>
              <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <h2 className="text-lg font-bold text-white">Ranking Semanal</h2>
              </div>
              <p className="text-sm text-app-subtext">Top 5 participantes</p>
          </div>
          <button className="text-xs font-medium text-app-neon border border-app-neon/30 hover:bg-app-neon/10 px-3 py-1.5 rounded-lg transition-colors">
            Ver Todos
          </button>
        </div>

        {/* Podium Layout */}
        <div className="flex justify-center items-end gap-2 md:gap-4 mb-2 min-h-[220px]">
          {/* 2nd Place */}
          <div className="flex flex-col items-center w-1/3 justify-end">
              {renderPodiumUser(second, false)}
              <div className="w-full h-20 bg-[#262626] rounded-t-lg flex items-start justify-center pt-2 mt-2 border-t border-white/5">
                  <span className="text-3xl font-bold text-[#404040]">2</span>
              </div>
          </div>

          {/* 1st Place */}
          <div className="flex flex-col items-center w-1/3 justify-end">
              {renderPodiumUser(first, true)}
              <div className="w-full h-28 bg-gradient-to-b from-yellow-500/20 to-[#262626] rounded-t-lg border-t border-yellow-500/50 flex items-start justify-center pt-3 mt-2 relative overflow-hidden shadow-[0_-5px_20px_rgba(234,179,8,0.1)]">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                  <span className="text-4xl font-bold text-yellow-500 drop-shadow-md">1</span>
              </div>
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col items-center w-1/3 justify-end">
              {renderPodiumUser(third, false)}
              <div className="w-full h-14 bg-[#262626] rounded-t-lg flex items-start justify-center pt-2 mt-2 border-t border-white/5">
                  <span className="text-2xl font-bold text-[#404040]">3</span>
              </div>
          </div>
        </div>
      </div>

      {/* Sticky User Position Footer */}
      <div className="bg-[#151515] border-t border-white/5 p-4 flex items-center justify-between backdrop-blur-sm relative z-20">
        <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">Você está em <strong className="text-white">12º Lugar</strong></span>
        </div>
        <div className="flex items-center gap-2 text-xs text-app-neon bg-app-neon/10 px-2 py-1 rounded">
            <span>Subindo</span>
            <ArrowUp className="w-3 h-3" />
        </div>
      </div>
      <div className="bg-app-neon/5 py-1.5 text-center border-t border-app-neon/10">
          <p className="text-[10px] text-app-neon/80">Faltam <span className="font-bold">15pts</span> para o Top 10</p>
      </div>
    </section>
  );
};