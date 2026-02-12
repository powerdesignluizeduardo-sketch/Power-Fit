import React from 'react';
import { Zap } from 'lucide-react';

export const TipCard: React.FC = () => {
  return (
    <section className="mb-24">
      <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 rounded-2xl p-5 flex gap-4 backdrop-blur-sm relative overflow-hidden">
        
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="bg-indigo-500/20 p-2.5 rounded-xl h-fit border border-indigo-500/30 relative z-10">
            <Zap className="w-5 h-5 text-indigo-300" />
        </div>
        <div className="relative z-10">
            <h3 className="text-sm font-bold text-indigo-100 mb-1">Smart Insight</h3>
            <p className="text-sm text-indigo-200/80 leading-relaxed mb-3">
                Carlos, sua hidratação está em <span className="text-white font-medium">50%</span>. 
                Beba mais 500ml agora para otimizar sua recuperação muscular pós-treino.
            </p>
        </div>
      </div>
    </section>
  );
};