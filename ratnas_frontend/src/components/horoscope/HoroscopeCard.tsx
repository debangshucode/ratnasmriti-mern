import React from 'react';
import { Calendar, Star } from 'lucide-react';

interface HoroscopeCardProps {
  sign: string;
  horoscope: string;
  date: string;
}

const HoroscopeCard: React.FC<HoroscopeCardProps> = ({ sign, horoscope, date }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl mx-auto animate-float">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-orange-gradient rounded-full mb-4 shadow-lg">
          <Star className="w-10 h-10 text-white" fill="currentColor" />
        </div>
        <h2 className="text-3xl font-bold text-darkBrown mb-2 capitalize">{sign}</h2>
        <div className="flex items-center justify-center text-orangeAccent font-medium">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute -left-4 -top-2 text-6xl text-orangeAccent/20 font-serif">"</div>
        <div className="absolute -right-4 -bottom-2 text-6xl text-orangeAccent/20 font-serif rotate-180">"</div>
        <p className="text-darkBrown/80 leading-relaxed text-lg px-4 relative z-10">
          {horoscope}
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="flex justify-center mt-8 space-x-2">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="w-2 h-2 bg-yellowAccent rounded-full animate-pulse-soft"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default HoroscopeCard;