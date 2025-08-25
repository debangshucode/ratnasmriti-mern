"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface StackCard {
  id: number;
  img: string;
}

interface HeroSectionProps {
  cardsData?: StackCard[];
  rotateInterval?: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  cardsData = [],
  rotateInterval = 4000,
}) => {
  const defaultCards = cardsData.length
    ? cardsData
    : [
        {
          id: 1,
          img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=600&auto=format",
        },
        {
          id: 2,
          img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=600&auto=format",
        },
        {
          id: 3,
          img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=600&auto=format",
        },
        {
          id: 4,
          img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=600&auto=format",
        },
      ];

  const [cards, setCards] = useState(defaultCards);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const [first] = newCards.splice(0, 1);
        newCards.push(first);
        return newCards;
      });
    }, rotateInterval);
    return () => clearInterval(interval);
  }, [rotateInterval]);

  return (
    <section className="max-w-7xl pt-20 relative w-full min-h-screen flex flex-col-reverse lg:flex-row items-center gap-10 px-6 lg:px-24 py-12  overflow-hidden">
      {/* Left: Image Stack */}

      <div className="relative w-full lg:w-1/2 flex justify-start items-center">
        <div className="relative w-[75%] max-w-[400px] h-[300px] sm:h-[400px] lg:h-[500px] perspective-1000">
          {cards.map((card, index) => {
            const randomRotate = Math.random() * 10 - 5;
            return (
              <motion.div
                key={card.id}
                className="absolute rounded-3xl overflow-hidden border-4 border-white shadow-2xl"
                animate={{
                  rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                  scale: 1 + index * 0.06 - cards.length * 0.06,
                }}
                initial={false}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{
                  width: "100%",
                  height: "100%",
                  transformOrigin: "90% 90%",
                }}
              >
                <img
                  src={card.img}
                  alt={`card-${card.id}`}
                  className="w-full h-full object-cover pointer-events-none brightness-75"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Right: Content */}
      <div className="w-full text-center lg:text-left text-black max-w-5xl flex flex-col justify-center mb-12 lg:mb-0">
        <h1 className="text-xl sm:text-5xl font-bold mb-6">
          Ratnasmriti Gems and Jewellers
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-700">
          Ratnasmriti Gems and Jewellers is India’s most trusted gemstone and
          crystal showroom, proudly serving Shreerampore and Sarat Sarani. With
          a legacy of excellence, we specialize in authentic, high-quality
          gemstones, crystals, and bespoke jewellery that seamlessly blend
          traditional charm with modern elegance. <br></br>Our store is led by
          Sanjay Sarkar, a passionate jewellery designer with over 20 years of
          experience in crafting exquisite pieces that captivate every heart. At
          Ratnasmriti Gems, we are committed to delivering not just jewellery,
          but trust, authenticity, and unmatched customer satisfaction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link
            to="/categories"
            className="relative px-8 py-4 bg-gradient-to-r from-rose-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            <span className="flex items-center space-x-2">
              <span>Explore Collection</span>
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all">
            Watch Story
          </button>
        </div>
      </div>
    </section>
  );
};
