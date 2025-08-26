import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { mockCategories } from '../data/mockData';
import { useMainCategories } from '../hook/apiHooks';

export const Categories: React.FC = () => {
  const {data : categories} = useMainCategories();
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive collection organized by category. Each piece is carefully 
            curated to offer you the finest in jewelry craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories?.map((category) => (
            <Link
              key={category._id}
              to={`/category/${category._id}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/5]">
                <img
                  src={`${import.meta.env.VITE_API_URL}/${category.Image}`}
                  alt={category.Name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white font-bold text-2xl mb-2">
                    {category.Name}
                  </h3>
                  {/* <p className="text-gray-200 text-sm mb-3">
                    {category.description}
                  </p> */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">
                      items
                    </span>
                    <div className="flex items-center text-white text-sm font-medium group-hover:text-rose-300 transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};