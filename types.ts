export interface UserStats {
  calories: number;
  maxCalories: number;
  meals: number;
  waterCurrent: number; // in ml
  waterGoal: number; // in ml
  streak: number;
}

export interface RankingUser {
  id: number;
  name: string;
  points: number;
  avatar: string;
  status: 'stable' | 'up' | 'down';
  position: 1 | 2 | 3;
  stats: {
    workout: number;
    diet: number;
    water: number;
  };
}

export interface Workout {
  id: string;
  letter: string;
  title: string;
  focus: string;
  duration: string;
  calories: number;
  intensity?: 'High' | 'Medium' | 'Low';
  status: 'next' | 'locked' | 'done';
}