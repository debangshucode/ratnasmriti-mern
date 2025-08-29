import React from 'react';

interface ZodiacCardProps {
  sign: string;
  symbol: string;
  isSelected: boolean;
  onClick: () => void;
}

const ZodiacCard: React.FC<ZodiacCardProps> = ({ sign, symbol, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer p-4 rounded-2xl transition-all duration-300 ease-out transform hover:scale-105
        ${isSelected 
          ? 'bg-yellow-orange-gradient shadow-xl scale-105 ring-2 ring-yellowAccent ring-opacity-50' 
          : 'bg-orange-gradient hover:bg-yellow-light-gradient shadow-lg hover:shadow-xl'
        }
        group overflow-hidden
      `}
    >
      <div className="relative z-10 text-center">
        <div className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-110">
          {symbol}
        </div>
        <h3 className={`font-semibold text-sm transition-colors duration-300 ${
          isSelected ? 'text-white' : 'text-darkBrown group-hover:text-darkBrown'
        }`}>
          {sign}
        </h3>
      </div>
      
      {/* Hover effect overlay */}
      <div className={`
        absolute inset-0 bg-gradient-to-r from-yellowAccent/20 to-orangeAccent/20 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl
      `} />
      
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full animate-pulse-soft" />
      )}
    </div>
  );
};

export default ZodiacCard;