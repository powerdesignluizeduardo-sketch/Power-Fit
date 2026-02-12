import React, { useState } from 'react';
import { Header } from './components/Header';
import { WorkoutCard } from './components/WorkoutCard';
import { DietCard, WaterCard } from './components/MetricCards';
import { Ranking } from './components/Ranking';
import { TipCard } from './components/TipCard';
import { BottomNav } from './components/BottomNav';
import { WorkoutScreen } from './components/WorkoutScreen';
import { DietScreen } from './components/DietScreen';
import { PersonalBanner } from './components/PersonalBanner';
import { StreakCard } from './components/StreakCard'; 
import { RankingUser, UserStats } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'workout' | 'diet'>('home');

  // Mock Data & State
  const [stats, setStats] = useState<UserStats>({
    calories: 850,
    maxCalories: 1781,
    meals: 2,
    waterCurrent: 1250,
    waterGoal: 2500,
    streak: 5
  });

  const rankingData: RankingUser[] = [
    {
      id: 2,
      name: 'Bruno',
      points: 188,
      avatar: 'https://i.pravatar.cc/150?u=bruno',
      status: 'stable',
      position: 2,
      stats: { workout: 80, diet: 60, water: 90 }
    },
    {
      id: 1,
      name: 'Igor',
      points: 191,
      avatar: 'https://i.pravatar.cc/150?u=igor',
      status: 'up',
      position: 1,
      stats: { workout: 95, diet: 88, water: 100 }
    },
    {
      id: 3,
      name: 'Daniel',
      points: 160,
      avatar: 'https://i.pravatar.cc/150?u=daniel',
      status: 'up',
      position: 3,
      stats: { workout: 70, diet: 50, water: 40 }
    }
  ];

  // Handlers
  const handleAddWater = (amount: number) => {
    setStats(prev => ({
      ...prev,
      waterCurrent: Math.min(prev.waterCurrent + amount, prev.waterGoal * 1.5) // Allow some overfill but cap it
    }));
  };

  const handleAddMeal = () => {
    setStats(prev => {
        const mealCals = 450; // Avg meal
        return {
            ...prev,
            calories: Math.min(prev.calories + mealCals, prev.maxCalories + 500),
            meals: prev.meals + 1
        }
    });
  };

  const handleRemoveMeal = () => {
    setStats(prev => {
        const mealCals = 450;
        if(prev.meals <= 0) return prev;
        return {
            ...prev,
            calories: Math.max(prev.calories - mealCals, 0),
            meals: prev.meals - 1
        }
    });
  };

  return (
    <div className="min-h-screen bg-app-bg text-white font-sans selection:bg-app-neon selection:text-black">
      <div className="max-w-lg mx-auto bg-app-bg min-h-screen relative shadow-2xl border-x border-white/5">
        
        {/* Cinematic Hero Banner - Full Width (Only on Home) */}
        {activeTab === 'home' && <PersonalBanner />}
        
        {/* Main Content Area */}
        <div className={`px-5 pb-32 relative z-20 ${activeTab === 'home' ? '-mt-4' : ''}`}>
          {activeTab === 'home' && (
            <div className="animate-in fade-in duration-500 space-y-6">
              <Header streak={stats.streak} />
              
              {/* Streak Panel */}
              <StreakCard streak={stats.streak} />
              
              <div onClick={() => setActiveTab('workout')}>
                  <WorkoutCard />
              </div>
              
              <div className="grid grid-cols-2 gap-4 h-48">
                <div onClick={() => setActiveTab('diet')} className="cursor-pointer h-full">
                  <DietCard 
                    currentCalories={stats.calories} 
                    maxCalories={stats.maxCalories} 
                    mealsCount={stats.meals}
                    onAddMeal={handleAddMeal}
                    onRemoveMeal={handleRemoveMeal}
                  />
                </div>
                <WaterCard 
                  currentWater={stats.waterCurrent}
                  goalWater={stats.waterGoal}
                  onAddWater={handleAddWater}
                />
              </div>

              <Ranking users={rankingData} />
              <TipCard />
            </div>
          )}

          {activeTab === 'workout' && (
            <WorkoutScreen />
          )}

          {activeTab === 'diet' && (
            <DietScreen />
          )}
        </div>

      </div>

      <BottomNav 
        currentWater={stats.waterCurrent} 
        goalWater={stats.waterGoal} 
        activeTab={activeTab}
        onNavigate={setActiveTab}
      />
    </div>
  );
};

export default App;