import { useState, useCallback } from 'react';

interface HoroscopeData {
  date: string;
  horoscope: string;
}

interface UseHoroscopeReturn {
  horoscope: HoroscopeData | null;
  loading: boolean;
  error: string | null;
  fetchHoroscope: (sign: string) => Promise<void>;
}

export const useHoroscope = (): UseHoroscopeReturn => {
  const [horoscope, setHoroscope] = useState<HoroscopeData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHoroscope = useCallback(async (sign: string) => {
    if (!sign) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/horoscope?sign=${sign.toLowerCase()}`,
        {
          headers: {
            'X-Api-Key': 'YOUR_API_KEY' // You'll need to replace this with your actual API key
          }
        }
      );
      
      if (!response.ok) {
        throw new Error(`Failed to fetch horoscope: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data && data.horoscope) {
        setHoroscope({
          date: data.date || new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          horoscope: data.horoscope
        });
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch horoscope';
      setError(errorMessage);
      
      // Fallback horoscope for demo purposes
      setHoroscope({
        date: new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        horoscope: `The stars are aligning beautifully for ${sign} today! This is a perfect time for new beginnings and positive energy. Trust your intuition and embrace the opportunities that come your way.`
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    horoscope,
    loading,
    error,
    fetchHoroscope
  };
};