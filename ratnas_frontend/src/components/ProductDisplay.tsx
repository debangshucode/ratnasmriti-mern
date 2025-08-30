import React, { useState } from "react";

import { usePosts } from "../hook/apiHooks";
import { Post } from "../types";
import { WhatsAppModal } from "./WhatsAppModal";

export const ProductCard: React.FC = () => {
  const { data: posts, loading } = usePosts();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-orangeAccent border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 p-4 sm:p-6">
      {posts?.map((product) => (
        <ProductCardItem key={product._id} product={product} />
      ))}
    </div>
  );
};

interface ProductCardProps {
  product: Post;
}

const ProductCardItem: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const discount = product.price && product.discounted_price !== undefined
    ? Math.round(((product.price - product.discounted_price) / product.price) * 100)
    : 0;

  const hasValidPrice = product.discounted_price !== undefined && product.discounted_price > 0;

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-orangeAccent/20 transition-all duration-500 group overflow-hidden max-w-sm mx-auto w-full">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-50">
          <div className="aspect-square relative">
            {!imageError ? (
              <>
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="w-8 h-8 border-3 border-gray-300 border-t-orangeAccent rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={`${import.meta.env.VITE_API_URL}/${product.featured_image}`}
                  alt={product.Name}
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  loading="lazy"
                />
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400">
                <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">Image unavailable</span>
              </div>
            )}
          </div>
          
          {/* Elegant Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-4 left-4">
              <div className="bg-red-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                -{discount}%
              </div>
            </div>
          )}

          {/* Premium Quality Indicator */}
          {hasValidPrice && product.discounted_price! > 1000 && (
            <div className="absolute top-4 right-4">
              <div className="bg-amber-400 text-amber-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                ★ Premium
              </div>
            </div>
          )}

          {/* Elegant Overlay on Hover */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6 space-y-4">
          {/* Category Badge */}
          {product.section && (
            <div className="inline-block">
              <span className="text-xs font-semibold text-orangeAccent bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider border border-orange-100">
                {product.section}
              </span>
            </div>
          )}
          
          {/* Product Title */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-tight line-clamp-2 min-h-[2.5rem] group-hover:text-orangeAccent transition-colors duration-300">
              {product.Name}
            </h3>
          </div>
          
          {/* Pricing Section */}
          <div className="space-y-2">
            {hasValidPrice ? (
              <>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                    ₹{product.discounted_price!.toLocaleString('en-IN')}
                  </span>
                  {product.price && product.price > product.discounted_price! && (
                    <span className="text-lg text-gray-400 line-through font-medium">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                {discount > 0 && (
                  <p className="text-sm text-green-600 font-semibold">
                    You save ₹{((product.price || 0) - product.discounted_price!).toLocaleString('en-IN')}
                  </p>
                )}
              </>
            ) : (
              <div className="text-lg font-semibold text-gray-600 bg-gray-50 px-4 py-2 rounded-lg text-center">
                Contact for Price
              </div>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
            <a
              href={`tel:+919123375635`}
              className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-orangeAccent bg-orange-50 hover:bg-orangeAccent hover:text-white rounded-xl transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </a>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Chat</span>
            </button>
          </div>
        </div>
      </div>

      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};