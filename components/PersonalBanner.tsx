import React from 'react';
import { MessageCircle } from 'lucide-react';

export const PersonalBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[280px] bg-[#0D0D0D] overflow-hidden shrink-0 group">
      
      {/* Layer 0: Background Texture & Mood */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity grayscale transition-transform duration-[10s] ease-out group-hover:scale-105"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop)' }}
      />
      
      {/* Layer 1: Atmospheric Lighting (Neon Rim Light) */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-app-neon/20 via-app-neon/5 to-transparent blur-3xl mix-blend-overlay" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-transparent to-[#0D0D0D]" />

      {/* Layer 2: The Trainer (Simulated Cutout via CSS Mask) */}
      <div className="absolute bottom-0 right-[-10px] md:right-0 w-[240px] md:w-[300px] h-[90%] z-10">
        <img 
            src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&auto=format&fit=crop&q=80" 
            alt="Rodrigo Silva" 
            className="w-full h-full object-cover object-top"
            style={{ 
                maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' 
            }}
        />
      </div>

      {/* Layer 3: Typography & Content */}
      <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-6 md:p-8 z-20">
        
        {/* Status Badge & Eyebrow */}
        <div className="flex items-center gap-3 mb-2 animate-in slide-in-from-left duration-700">
             <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded backdrop-blur-md">
                <div className="w-1.5 h-1.5 rounded-full bg-app-neon shadow-[0_0_8px_rgba(0,255,136,1)] animate-pulse" />
                <span className="text-[9px] font-bold text-gray-200 uppercase tracking-wider">Online Agora</span>
             </div>
             <span className="text-[10px] font-bold text-gray-200 tracking-[0.2em] uppercase drop-shadow-md">
                Seu Mentor de Performance
             </span>
        </div>

        {/* Name - Magazine Style */}
        <div className="relative mb-1">
            <h1 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter leading-[0.85] drop-shadow-2xl">
                RODRIGO
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-400">
                    SILVA
                </span>
            </h1>
        </div>

        {/* Subtitle/Quote */}
        <p className="text-xs text-gray-400 font-medium max-w-[200px] leading-relaxed mb-4 border-l-2 border-app-neon/50 pl-3">
            "Transformando intenção em ação. Vamos quebrar seu recorde hoje."
        </p>
      </div>

      {/* Floating Action Button - Integrated */}
      <button className="absolute top-6 right-6 z-30 p-3.5 rounded-full bg-white/5 hover:bg-app-neon/20 border border-white/10 hover:border-app-neon/50 backdrop-blur-md text-white hover:text-app-neon transition-all duration-300 group/btn">
        <MessageCircle className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
      </button>

      {/* Bottom Fade to Content (Seamless Blend) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent pointer-events-none z-10" />
    </div>
  );
};