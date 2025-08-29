import React from 'react';
import { Sparkles } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-orangeAccent/30 border-t-orangeAccent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-yellowAccent animate-pulse" />
        </div>
      </div>
      <p className="text-darkBrown/70 mt-4 font-medium">Reading the stars...</p>
    </div>
  );
};

export default LoadingSpinner;