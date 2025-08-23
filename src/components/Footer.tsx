import React from 'react';
import { Crown, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-rose-400" />
              <span className="font-bold text-xl">RoyalGems</span>
            </div>
            <p className="text-gray-300 mb-4">
              Discover exquisite jewelry crafted with precision and passion. 
              Each piece tells a story of elegance and timeless beauty.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-rose-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/categories" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-rose-400">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 234 567 8900</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@royalgems.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Jewelry Street, City</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 RoyalGems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};