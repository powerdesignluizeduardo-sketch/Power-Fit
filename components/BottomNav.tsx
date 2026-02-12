import React from 'react';
import { Home, Dumbbell, Utensils, Droplet, FileText, MoreHorizontal } from 'lucide-react';

interface BottomNavProps {
  currentWater: number;
  goalWater: number;
  activeTab: 'home' | 'workout' | 'diet';
  onNavigate: (tab: 'home' | 'workout' | 'diet') => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ 
  currentWater, 
  goalWater, 
  activeTab,
  onNavigate 
}) => {
  const percentage = Math.min((currentWater / goalWater) * 100, 100);
  
  // SVG Circle calculation
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const NavItem = ({ 
    icon: Icon, 
    label, 
    id,
    hasProgress 
  }: { 
    icon: any, 
    label: string, 
    id: 'home' | 'workout' | 'diet' | 'other', 
    hasProgress?: boolean 
  }) => {
    const isActive = activeTab === id;
    
    // Determine color based on tab type (Orange for diet, Neon Green for others/default)
    const activeColor = id === 'diet' ? 'text-orange-500' : 'text-app-neon';
    
    return (
      <button 
        onClick={() => id !== 'other' && onNavigate(id as 'home' | 'workout' | 'diet')}
        className={`flex flex-col items-center justify-center w-full relative group ${isActive ? activeColor : 'text-gray-500 hover:text-gray-300'}`}
      >
        <div className="relative p-1 transition-transform duration-200 group-active:scale-90">
          {hasProgress && (
            <div className="absolute inset-0 -rotate-90">
              <svg className="w-full h-full" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r={radius} fill="none" stroke="#333" strokeWidth="2" />
                  <circle cx="12" cy="12" r={radius} fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
              </svg>
            </div>
          )}
          <Icon className={`w-6 h-6 ${hasProgress ? 'scale-75' : ''}`} />
        </div>
        <span className="text-[10px] font-medium mt-0.5">{label}</span>
      </button>
    );
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0D0D0D]/85 backdrop-blur-md border-t border-white/5 pb-safe pt-2 px-2 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center max-w-lg mx-auto h-16">
        <NavItem icon={Home} label="Início" id="home" />
        <NavItem icon={Dumbbell} label="Treino" id="workout" />
        <NavItem icon={Utensils} label="Dieta" id="diet" />
        <NavItem icon={Droplet} label="Água" id="other" hasProgress />
        <NavItem icon={FileText} label="Resumo" id="other" />
        <NavItem icon={MoreHorizontal} label="Mais" id="other" />
      </div>
    </nav>
  );
};