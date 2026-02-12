import React from 'react';

interface HeaderProps {
  streak: number;
}

export const Header: React.FC<HeaderProps> = ({ streak }) => {
  return (
    <header className="flex justify-between items-end mb-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Olá, Carlos 👋</h1>
        <p className="text-sm text-app-subtext">Vamos esmagar as metas de hoje?</p>
      </div>
    </header>
  );
};