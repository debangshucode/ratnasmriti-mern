import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Stars, Sparkles, Moon, Sun } from "lucide-react";
import { HeroSection } from "../components/HeroSection";
import { ProductCard } from "../components/ProductCard";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import "../index.css";
import { useMainCategories } from "../hook/apiHooks";
import { BlogSection } from "../components/blogsection";
import { Helmet } from "react-helmet";

export const Home: React.FC = () => {
  const { data: categories, loading: catLoading } = useMainCategories();

  if (catLoading) return <p>Loading...</p>;

  return (
    <div className="w-full bg-brand-gradient overflow-x-hidden">
      <Helmet>
        <title>
          Best Jewellery & Gems Shop in Kolkata | Ratnasmriti Gems and Jewellers
        </title>
        <meta
          name="description"
          content="Ratnasmriti Gems and jewellers - Bengal's best jewellery & gems shop. Discover our stunning collection of rings, necklaces, bangles & gemstones. Trusted craftsmanship in the heart of Kolkata."
        />
        <meta
          name="keywords"
          content="Best Jewellery Shop West Bengal, Gems Shop West Bengal, Gold Jewellery West Bengal, Diamond Jewellery Kolkata, Ratnasmriti Gems and jewellers"
        />

        {/* Open Graph for Social Media */}
        <meta
          property="og:title"
          content="Best Jewellery & Gems Shop in West Bengal | Ratnasmriti Gems and Jewellers"
        />
        <meta
          property="og:description"
          content="Shop the finest jewellery and gems in Kolkata,Chinsurah,Bardhaman,. Premium rings, necklaces, bangles, earrings, and gemstones at Royal Gems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta
          property="og:site_name"
          content="Ratnasmriti Gems and Jewellers"
        />
        {/* You can add your logo/image here */}
        {/* <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" /> */}

        {/* Local Business Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JewelryandGemsStore",
            name: "Ratnasmriti Gems and Jewellers",
            image: "images/logo.jpeg",
            "@id": "https://ratnasmritigemsandjewellers.in",
            url: "https://ratnasmritigemsandjewellers.in",
            telephone: "+91-9123375635",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Sarat Sarani Rd, near Canara Bank, More, Chinsurah",
              addressLocality: "Chinsurah",
              addressRegion: "WB",
              postalCode: "712103",
              addressCountry: "IN",
            },
            openingHours: [
              "Mo-Fr 09:00-20:00",
              "Sa 10:00-18:00",
              "Su 12:00-17:00",
            ],
            sameAs: [
              "https://www.facebook.com/rsjchannel/",
              " https://www.youtube.com/watch?v=Jgcmim_NTIM",
            ],
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <div className="max-w-9xl mx-auto px-4 ">
        <HeroSection />
      </div>
      {/* Recent Products */}
      <section className="py-8 lg:py20  ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-6xl font-bold text-bgLight mb-4">
              Recent Arrivals
            </h1>
            <p className="text-lg text-darkBrown">
              Discover our latest collection of stunning jewelry pieces
            </p>
          </div>
          <div className="">
            {/* {recentProducts.map((product) => ( */}
            <ProductCard category="New_Arrival" />
            {/* ))} */}
          </div>
        </div>
      </section>
      {/* horoscope */}
      <section className="relative text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 text-darkBrown opacity-20">
          <div className="absolute top-10 left-10 animate-float">
            <Stars className="w-8 h-8" />
          </div>
          <div
            className="absolute top-20 right-16 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <Sparkles className="w-6 h-6" />
          </div>
          <div
            className="absolute top-32 left-1/4 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <Moon className="w-10 h-10" />
          </div>
          <div
            className="absolute top-16 right-1/3 animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            <Sun className="w-7 h-7" />
          </div>
          <div
            className="absolute bottom-20 left-20 animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <Sparkles className="w-5 h-5" />
          </div>
          <div
            className="absolute bottom-32 right-20 animate-float"
            style={{ animationDelay: "3s" }}
          >
            <Stars className="w-6 h-6" />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8  text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-8 backdrop-blur-sm animate-pulse-soft">
            <Stars className="w-12 h-12" fill="currentColor" />
          </div>

          <h1 className="text-5xl md:text-7xl text-orangeAccent font-bold mb-6 leading-tight">
            Cosmic
            <span className="block bg-darkBrown bg-clip-text text-transparent">
              Insights
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-orangeAccent mb-8  mx-auto leading-relaxed">
           Unlock the mysteries of the universe and discover what the stars have aligned for your journey today. Let the cosmic energies guide you with wisdom, clarity, and insight as you step into opportunities, overcome challenges, and embrace the path destined for you.
          </p>

          <Link
            to="/horoscope"
            className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 
             rounded-full font-semibold text-white 
             bg-dark-orange-270-gradient text-xl
             transform hover:scale-105 transition-all duration-300 shadow-md"
          >
            <span className="flex items-center space-x-2">
              <span>Horoscope</span>
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </section>
      {/* Shop by Category */}
      <section className="py-8 lg:py20 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-6xl font-bold text-darkBrown mb-4">
              Shop by Category
            </h1>
            <p className="text-lg text-orangeAccent">
              Explore our diverse range of jewelry collections
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories?.slice(0, 4).map((category) => (
              <Link
                key={category._id}
                to={`/category/${category._id}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square">
                  <img
                    src={`${import.meta.env.VITE_API_URL}/${category?.Image}`}
                    alt={category.Name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white font-bold text-xl mb-2">
                      {category.Name}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {/* {category.productCount} items */}
                      items
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/categories"
              className="inline-flex items-center space-x-2  bg-dark-orange-270-gradient text-white px-8 py-3 rounded-full hover:shadow-lg transition-all"
            >
              <span className="text-xl">View All Categories</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Most Sold Products */}
      <section className="py-8 lg:py20  ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-6xl font-bold text-darkBrown mb-4">
              Bestsellers
            </h2>
            <p className="text-lg text-orangeAccent">
              Our most loved pieces chosen by customers worldwide
            </p>
          </div>
          <div className="">
            {/* {mostSoldProducts.map((product) => ( */}
            <ProductCard category="Top_Seller"/>
            {/* ))} */}
          </div>
        </div>
      </section>

      <BlogSection />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Contact & Location */}
      <section className="py-8 lg:py20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map 1 */}
            <div className="space-y-4">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7350.173712497664!2d88.385058!3d22.910167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8936c18c18c57%3A0x94fadfa5b69102b0!2sRATNASMRITI%20GEMS%20%26%20JEWELLERS!5e0!3m2!1sen!2sin!4v1756320887646!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location 1"
                ></iframe>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-yellowAccent mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-bgLight">
                    Sarat Sarani Rd, near Canara Bank, More, Chinsurah, West
                    Bengal 712103
                  </p>
                </div>
              </div>
            </div>

            {/* Map 2 */}
            <div className="space-y-4">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3131152540022!2d88.33762017508337!3d22.753758379363088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b002eb0abd5%3A0x76385183bee865de!2sRatnasmriti%20Gems%20%26%20Jewellers!5e0!3m2!1sen!2sin!4v1756325569152!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location 2"
                ></iframe>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-yellowAccent mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-bgLight">
                    Manasibazar Building, 180, N.S.Avenue, Serampore,
                    Shreerampore, West Bengal 712201
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
