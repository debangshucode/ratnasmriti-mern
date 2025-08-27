import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin} from "lucide-react";
import { HeroSection } from "../components/HeroSection";
import ScrollStack from "../components/ui/ScrollStack";
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
    <div className="w-full overflow-x-hidden">
      <Helmet>
        <title>Best Jewellery & Gems Shop in Kolkata | Ratnasmriti Gems and Jewellers</title>
        <meta
          name="description"
          content="Ratnasmriti Gems and jewellers - Bengal's best jewellery & gems shop. Discover our stunning collection of rings, necklaces, bangles & gemstones. Trusted craftsmanship in the heart of Kolkata."
        />
        <meta
          name="keywords"
          content="Best Jewellery Shop West Bengal, Gems Shop West Bengal, Gold Jewellery West Bengal, Diamond Jewellery Kolkata, Ratnasmriti Gems and jewellers"
        />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Best Jewellery & Gems Shop in West Bengal | Ratnasmriti Gems and Jewellers" />
        <meta
          property="og:description"
          content="Shop the finest jewellery and gems in Kolkata,Chinsurah,Bardhaman,. Premium rings, necklaces, bangles, earrings, and gemstones at Royal Gems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:site_name" content="Ratnasmriti Gems and Jewellers" />
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
              streetAddress: "Sarat Sarani Rd, near Canara Bank, More, Chinsurah",
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
             " https://www.youtube.com/watch?v=Jgcmim_NTIM"
            ],
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <div className="max-w-9xl mx-auto px-4 bg-dark-orange-gradient">
        <HeroSection />
      </div>
      {/* Recent Products */}
      <section className="py-20 bg-yellow-orange-gradient ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-bgLight mb-4">
              Recent Arrivals
            </h1>
            <p className="text-lg text-darkBrown">
              Discover our latest collection of stunning jewelry pieces
            </p>
          </div>
          <div className="">
            {/* {recentProducts.map((product) => ( */}
            <ProductCard />
            {/* ))} */}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 bg-yellow-light-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-orangeAccent mb-4">
              Shop by Category
            </h1>
            <p className="text-lg text-darkBrown">
              Explore our diverse range of jewelry collections
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all"
            >
              <span className="text-xl">View All Categories</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Most Sold Products */}
      <section className="py-20 bg-bgLight ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold text-darkBrown mb-4">
              Bestsellers
            </h2>
            <p className="text-lg text-orangeAccent">
              Our most loved pieces chosen by customers worldwide
            </p>
          </div>
          <div className="">
            {/* {mostSoldProducts.map((product) => ( */}
            <ProductCard />
            {/* ))} */}
          </div>
        </div>
      </section>

      <ScrollStack className="bg-bgLight hide-scrollbar">
        <BlogSection />
      </ScrollStack>
      <div className="w-full bg-bgLight  flex justify-center self-end pt-5 pb-10">
        <Link
          to="/blog"
          className="bg-[#e57373] hover:bg-[#d45a5a] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-colors duration-300"
        >
          View All Blogs
        </Link>
      </div>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Contact & Location */}
      <section className="py-20 bg-yellow-orange-gradient-r text-white">
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
                    Sarat Sarani Rd, near Canara Bank, More, Chinsurah, West Bengal 712103
                  </p>
                </div>
              </div>
            </div>

            {/* Map 2 */}
            <div className="space-y-4">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.123456789!2d-73.935242!3d40.730610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af4b9f1234%3A0xabcdef1234567890!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
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
                    456 Gem Avenue, Uptown District, Brooklyn, NY 11201
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
