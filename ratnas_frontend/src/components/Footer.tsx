import React from 'react';
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-orange-gradient-r text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/logo.jpeg"
                alt="Ratnasmriti Gems Logo"
                className="h-8 w-8 object-contain rounded-full"
              />
              <span className="font-bold text-xl">Ratnasmriti Gems and Jewellers</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Whether you are searching for the most trusted gems delivery partner in India, or want to explore quality gemstones in Kolkata, Bardhaman, and West Bengal, Ratnasmriti Gems and Jewellers is your go-to destination. Visit our showroom or order online to experience the brilliance of authentic gems and crystals.
              <br />
              <strong>Ratnasmriti Gems and Jewellers – Trusted, Certified, and Loved by Thousands.</strong>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-darkBrown">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/categories" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-darkBrown">Contact</h3>

            <div className="space-y-2 text-gray-300 mb-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-6 w-6" />
                <span>091233 75635</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-6 w-6" />
                <span>rsjrsj000@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-8 w-8" />
                <span>Bandel Sarat Sarani GT Road Near Canara Bank , Bandel, India</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/rsjchannel/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.youtube.com/c/RSJCHANNEL"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition"
              >
                <Youtube className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/ratnasmriti_gems_and_jewellers/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pink-500 rounded-full hover:bg-pink-600 transition"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

        </div>
        <div className="border-t border-bgLight mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Ratnasmriti Gems and Jewellers. All rights reserved.</p>
        </div>
      </div>
      
    </footer>
  );
};
