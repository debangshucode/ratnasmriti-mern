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
      name: 'Pankaj Ranjan Das',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'Stunning Gems pieces with exceptional craftsmanship! The staff at Ratnasmriti Gems & Jewellers are knowledgeable and friendly. Highly recommended for anyone looking for beautiful, authentic gems and bracelets. They got different price range of gem stones in their collection. ',
      location: 'Kolkata, WB'
    },
    {
      id: '2',
      name: 'Raju Mondal',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'Dada ka6 thake pyrite bracelet Nia giya6ilm khub e valo result peye6i ..6month hoye ga6e but Jai rokom nia6ilm sei rokom quality roya6e ...khub e valo Kaj hoye6e amr',
      location: 'Bandel, WB'
    },
    {
      id: '3',
      name: 'Doyel Dutta',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'Too good behaviour and too much supportive. I am m very much satisfied 😊😊 every one are welcome to Ratna Smriti at Bandel or Shreerampur shops',
      location: 'Chandannagar, WB'
    },
    {
      id: '4',
      name: 'Lisa Kar',
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'Ami r amr husband dujonei aj elm khub valo kore sob ta bujhte parlm sbi khub vlo kore bujhiyeche jaja jante cheyechilm thank you etota somoy debar jnno.. Khub valo laglo apnader sobai k 👍👍👍',
      location: 'West Bengal'
    },
    {
      id: '5',
      name: 'Shreya Mondal',
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'The stone provided was upto the mark and the quality was extremely good. Sanjoy’s behaviour was very friendly and he arranged me the ring in a very less time. Highly recommended.',
      location: 'Bardhaman, WB'
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
    <section className="py-20 bg-yellow-light-gradient-r overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-darkBrown mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-orangeAccent max-w-2xl mx-auto">
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