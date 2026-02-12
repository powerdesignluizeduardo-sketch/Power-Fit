import React from 'react';
import { Plus, Droplet, Utensils } from 'lucide-react';

interface DietCardProps {
  currentCalories: number;
  maxCalories: number;
  mealsCount: number;
  onAddMeal: () => void;
  onRemoveMeal: () => void;
}

export const DietCard: React.FC<DietCardProps> = ({ 
  currentCalories, 
  maxCalories, 
  mealsCount,
  onAddMeal
}) => {
  const progress = Math.min((currentCalories / maxCalories) * 100, 100);

  return (
    <div className="bg-app-card border border-app-border rounded-2xl p-5 flex flex-col justify-between h-full relative overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-app-subtext">
            <Utensils className="w-4 h-4" />
            <h3 className="text-xs font-bold tracking-wider uppercase">Dieta</h3>
        </div>
      </div>

      <div className="mb-2">
        <div className="flex items-baseline gap-1 mb-2">
            <span className="text-xl font-bold text-white">{currentCalories}</span>
            <span className="text-xs text-app-subtext">/ {maxCalories} kcal</span>
        </div>
        <div className="h-1.5 w-full bg-[#262626] rounded-full overflow-hidden">
            <div 
                className="h-full bg-gradient-to-r from-orange-500 to-green-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
            />
        </div>
        <p className="text-[10px] text-app-subtext mt-2 font-medium">
          Faltam <span className="text-white">2 refeições</span> para a meta!
        </p>
      </div>

      <button 
          onClick={onAddMeal}
          className="w-full h-9 mt-auto flex items-center justify-center bg-[#262626] hover:bg-[#333] rounded-lg text-white transition-colors border border-white/5"
      >
          <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};

interface WaterCardProps {
  currentWater: number; // in ml
  goalWater: number; // in ml
  onAddWater: (amount: number) => void;
}

export const WaterCard: React.FC<WaterCardProps> = ({ currentWater, goalWater, onAddWater }) => {
    const currentLiters = (currentWater / 1000).toFixed(2);
    const goalLiters = (goalWater / 1000).toFixed(1);
    const progress = Math.min((currentWater / goalWater) * 100, 100);

    return (
        <div className="bg-app-card border border-app-border rounded-2xl p-5 flex flex-col justify-between h-full relative overflow-hidden group">
            {/* Background subtle wave effect */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-blue-500/5 blur-2xl rounded-full translate-y-8" />

            <div className="flex items-center justify-between mb-2 relative z-10">
                <div className="flex items-center gap-2 text-app-subtext">
                    <Droplet className="w-4 h-4 text-blue-400" />
                    <h3 className="text-xs font-bold tracking-wider uppercase">Hidratação</h3>
                </div>
            </div>

            <div className="mb-2 relative z-10">
                <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-xl font-bold text-white">{currentLiters}</span>
                    <span className="text-xs text-app-subtext">/ {goalLiters}L</span>
                </div>
                 <div className="h-1.5 w-full bg-[#262626] rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-blue-500 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <div className="relative z-10 mt-auto">
              <button 
                  onClick={() => onAddWater(250)}
                  className="w-full h-9 flex items-center justify-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg transition-all active:scale-[0.98]"
              >
                  <Plus className="w-4 h-4" />
                  <span className="font-semibold text-xs">Adicionar</span>
              </button>
              <p className="text-[9px] text-center text-app-subtext/60 mt-1.5">
                Segure para opções rápidas
              </p>
            </div>
        </div>
    );
};