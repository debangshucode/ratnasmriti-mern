import React, { useState, useEffect } from 'react';
import { Stars, Sparkles } from 'lucide-react';
import ZodiacCard from '../components/horoscope/ZodiacCard';
import HoroscopeCard from '../components/horoscope/HoroscopeCard';
import LoadingSpinner from '../components/horoscope/LoadingSpinner';
import { useHoroscope } from '../hook/useHoroscope';
import { zodiacSigns } from '../data/zodiacSigns';

function HoroscopePage() {
  const [selectedSign, setSelectedSign] = useState<string>('');
  const { horoscope, loading, error, fetchHoroscope } = useHoroscope();

  useEffect(() => {
    if (selectedSign) {
      fetchHoroscope(selectedSign);
    }
  }, [selectedSign, fetchHoroscope]);

  return (
    <div className="min-h-screen bg-brand-gradient">
      {/* Header */}
      <header className="  text-white py-8 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 animate-pulse-soft">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute top-8 right-8 animate-pulse-soft" style={{ animationDelay: '1s' }}>
            <Stars className="w-8 h-8" />
          </div>
          <div className="absolute bottom-4 left-1/4 animate-pulse-soft" style={{ animationDelay: '2s' }}>
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="absolute bottom-8 right-1/3 animate-pulse-soft" style={{ animationDelay: '0.5s' }}>
            <Stars className="w-6 h-6" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
            <Stars className="w-8 h-8" fill="currentColor" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Daily Horoscope</h1>
          <p className="text-xl text-white/90">Discover what the stars have in store for you today</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Zodiac Signs Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-darkBrown text-center mb-8">
            Choose Your Zodiac Sign
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
            {zodiacSigns.map((sign) => (
              <ZodiacCard
                key={sign.name}
                sign={sign.name}
                symbol={sign.symbol}
                isSelected={selectedSign === sign.name}
                onClick={() => setSelectedSign(sign.name)}
              />
            ))}
          </div>
        </section>

        {/* Horoscope Display */}
        <section>
          {loading && <LoadingSpinner />}
          
          {error && !horoscope && (
            <div className="bg-orange-gradient rounded-2xl p-6 text-center max-w-md mx-auto">
              <div className="text-orangeAccent mb-2">
                <Sparkles className="w-8 h-8 mx-auto" />
              </div>
              <p className="text-darkBrown font-medium">
                Unable to connect to the stars right now. Please try again later.
              </p>
            </div>
          )}
          
          {horoscope && !loading && (
            <div className="transition-all duration-500 ease-out">
              <HoroscopeCard
                sign={selectedSign}
                horoscope={horoscope.horoscope}
                date={horoscope.date}
              />
            </div>
          )}
          
          {!selectedSign && !loading && (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-light-gradient rounded-full mb-6 shadow-lg animate-float">
                <Stars className="w-12 h-12 text-darkBrown" />
              </div>
              <h3 className="text-2xl font-bold text-darkBrown mb-2">Welcome to Your Daily Horoscope</h3>
              <p className="text-darkBrown/70 text-lg max-w-md mx-auto">
                Select your zodiac sign above to reveal what the cosmos has planned for you today
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-darkBrown text-white/80 text-center py-8 mt-16">
        <div className="container mx-auto px-4">
          
          <p className="text-sm text-white/60">
            Horoscopes are for entertainment purposes only
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HoroscopePage;