"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  imageUrl?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  imageUrl = "images/hero.png",
}) => {
  return (
    <section className="pt-32 relative w-full min-h-screen flex flex-col lg:flex-row items-center gap-10 lg:px-24 py-12 overflow-hidden">
      {/* Top on Mobile: Rotating Image */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
        <motion.div
          className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-2xl border-4 border-white"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <img
            src={imageUrl}
            alt="hero-img"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Bottom on Mobile: Content */}
      <div className="w-full text-center lg:text-left text-bgLight max-w-5xl flex flex-col justify-center">
        <h1 className="text-xl sm:text-5xl font-bold mb-6">
          Ratnasmriti Gems and Jewellers
        </h1>
        <p className="text-md sm:text-2xl mb-8 text-tealSecondary">
          Ratnasmriti Gems and Jewellers is India’s most trusted gemstone and
          crystal showroom, proudly serving Shreerampore and Sarat Sarani. With
          a legacy of excellence, we specialize in authentic, high-quality
          gemstones, crystals, and bespoke jewellery that seamlessly blend
          traditional charm with modern elegance. <br /> 
          <br />
          Our store is led by Sanjay Sarkar, a passionate jewellery designer
          with over 20 years of experience in crafting exquisite pieces that
          captivate every heart. At Ratnasmriti Gems, we are committed to
          delivering not just jewellery, but trust, authenticity, and unmatched
          customer satisfaction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link
            to="/categories"
            className="relative px-4 py-2 md:px-8 md:py-4 border border-1 bg-dark-orange-270-gradient text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            <span className="flex items-center space-x-2">
              <span>Explore Collection</span>
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
          <Link
            to="/about"
            className="flex rounded-full bg-dark-orange-270-gradient to-pink-500 p-[2px] transition-all hover:shadow-lg"
          >
            <span className="inline-flex w-full items-center space-x-2 bg-white rounded-full px-4 py-2 md:px-10 md:py-3 font-semibold text-gray-900 hover:bg-dark-orange-270-gradient hover:text-white hover:border transition-all">
              <span>Watch Story</span>
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
