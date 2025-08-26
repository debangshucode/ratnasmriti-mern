import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { HeroSection } from "../components/HeroSection";
import BlogSection from "../components/blogsection";
import ScrollStack from "../components/ui/ScrollStack";
import { ProductCard } from "../components/ProductCard";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { mockProducts, mockCategories, mockBlogs } from "../data/mockData";
import "../index.css";
import { useMainCategories } from "../hook/apiHooks";

export const Home: React.FC = () => {
  const recentProducts = mockProducts.slice(0, 4);
  const mostSoldProducts = mockProducts.slice(4, 8);
  const featuredBlogs = mockBlogs.slice(0, 3);
  const { data: categories, loading: catLoading } = useMainCategories();

  if ( catLoading) return <p>Loading...</p>;

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="max-w-9xl mx-auto px-4 bg-[#FAF7F0]">
        <HeroSection />
      </div>

      {/* About Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ratnasmriti Gems and Jewellers
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ratnasmriti Gems and Jewellers is India’s most trusted gemstone
                and crystal showroom, proudly serving Shreerampore and Sarat
                Sarani. With a legacy of excellence, we specialize in authentic,
                high-quality gemstones, crystals, and bespoke jewellery that
                seamlessly blend traditional charm with modern elegance.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our store is led by Sanjay Sarkar, a passionate jewellery
                designer with over 20 years of experience in crafting exquisite
                pieces that captivate every heart. At Ratnasmriti Gems, we are
                committed to delivering not just jewellery, but trust,
                authenticity, and unmatched customer satisfaction.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-600 to-purple-600 text-white px-10 text-center py-3 rounded-full hover:shadow-lg transition-all"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="images/store1.jpeg"
                alt="Jewelry craftsmanship"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Recent Products */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">
              Recent Arrivals
            </h1>
            <p className="text-lg text-gray-600">
              Discover our latest collection of stunning jewelry pieces
            </p>
          </div>
          <div className="">
            {/* {recentProducts.map((product) => ( */}
              <ProductCard  />
            {/* ))} */}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h1 >
            <p className="text-lg text-gray-600">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold text-gray-900 mb-4">
              Bestsellers
            </h2>
            <p className="text-lg text-gray-600">
              Our most loved pieces chosen by customers worldwide
            </p>
          </div>
          <div className="">
            {/* {mostSoldProducts.map((product) => ( */}
              <ProductCard  />
            {/* ))} */}
          </div>
        </div>
      </section>

      <ScrollStack className="bg-[#FAF7F0] hide-scrollbar">
        <BlogSection  />
      </ScrollStack>
      <div className="w-full bg-[#FAF7F0]  flex justify-center self-end pt-5 pb-10">
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
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Visit Our Store</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-rose-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-gray-300">
                      123 Jewelry Street, Downtown District, New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-rose-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-rose-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-300">info@royalgems.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Store Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>12:00 PM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1647887340086!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
