import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  text: string;
  location: string;
}

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState<boolean[]>([]);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'Absolutely stunning jewelry! The craftsmanship is exceptional and the customer service is outstanding.',
      location: 'New York, NY'
    },
    {
      id: '2',
      name: 'Michael Chen',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'Perfect engagement ring! My fiancée loves it and the quality exceeded our expectations.',
      location: 'Los Angeles, CA'
    },
    {
      id: '3',
      name: 'Emily Davis',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'Amazing collection of vintage pieces. Each item tells a story and the attention to detail is remarkable.',
      location: 'Chicago, IL'
    },
    {
      id: '4',
      name: 'David Wilson',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'The custom design service is fantastic. They brought my vision to life perfectly.',
      location: 'Houston, TX'
    },
    {
      id: '5',
      name: 'Lisa Martinez',
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'Beautiful earrings that I wear every day. The quality and shine have lasted for years.',
      location: 'Miami, FL'
    }
  ];

  useEffect(() => {
    setIsVisible(new Array(testimonials.length).fill(true));
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % testimonials.length;
        
        // Pixel disappear effect
        setIsVisible(prev => {
          const newVisible = [...prev];
          newVisible[prevIndex] = false;
          setTimeout(() => {
            setIsVisible(current => {
              const updated = [...current];
              updated[prevIndex] = true;
              return updated;
            });
          }, 300);
          return newVisible;
        });
        
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-rose-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience.
          </p>
        </div>

        <div className="relative">
          <div className="flex transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`w-full flex-shrink-0 px-4 transition-opacity duration-300 ${
                  isVisible[index] ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 mx-auto max-w-4xl relative">
                  <Quote className="absolute top-6 left-6 h-8 w-8 text-rose-200" />
                  
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 pt-8">
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-rose-100"
                      />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                        "{testimonial.text}"
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-rose-600 scale-125'
                    : 'bg-gray-300 hover:bg-rose-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};