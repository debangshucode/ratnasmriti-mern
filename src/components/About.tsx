import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Header with bottom curve */}
      <div className="relative text-center py-20 bg-gradient-to-b from-white to-[#DF1E4C] text-white clip-bottom-corners">
  <h1 className="text-5xl font-bold">About Us</h1>
  <p className="mt-4 text-lg md:text-xl">
    Discover the mystical world of Tarot and Vedic Astrology
  </p>
</div>


      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-12 px-6 md:px-20 py-16">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
          <img
            src="./images/owner.jpeg" // Replace with your image
            alt="Akshita"
            className="rounded-lg shadow-lg max-w-[300px] object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-semibold mb-4">About Us – Ratnasmriti Gems and Jewellers</h2>
          <p className="text-lg leading-relaxed mb-6">
            Ratnasmriti Gems and Jewellers is India’s most trusted gemstone and crystal showroom, proudly serving Shreerampore and Sarat Sarani. With a legacy of excellence, we specialize in authentic, high-quality gemstones, crystals, and bespoke jewellery that seamlessly blend traditional charm with modern elegance.

Our store is led by Sanjay Sarkar, a passionate jewellery designer with over 20 years of experience in crafting exquisite pieces that captivate every heart. At Ratnasmriti Gems, we are committed to delivering not just jewellery, but trust, authenticity, and unmatched customer satisfaction.
          </p>

          <ul className="space-y-2 text-lg">
            <li>Reliable Online Delivery – We deliver your precious gemstones and jewellery across India.</li>
            <li>Certified Products – All gemstones and crystals come with proper certification whenever available.</li>
            <li>Highly Rated on Google – Thousands of satisfied customers vouch for our quality and service.</li>
            <li>Trusted by Over 10,000 Customers – Our products and services have earned the confidence of countless buyers.</li>
            <li>Remedies & Guidance</li>
          </ul>

          <p className="mt-6 text-sm text-gray-600 font-medium">
            Whether you are searching for the most trusted gems delivery partner in India, or want to explore quality gemstones in Kolkata, Bardhaman, and West Bengal, Ratnasmriti Gems and Jewellers is your go-to destination. Visit our showroom or order online to experience the brilliance of authentic gems and crystals.

Ratnasmriti Gems and Jewellers – Trusted, Certified, and Loved by Thousands.
          </p>
        </div>
      </div>

     </div>
  );
};

export default About;
