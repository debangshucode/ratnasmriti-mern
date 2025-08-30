import React, { useState } from "react";

import { usePosts } from "../hook/apiHooks";
import { Post } from "../types";
import { WhatsAppModal } from "./WhatsAppModal";

export const ProductCard: React.FC = () => {
  const { data: posts, loading } = usePosts();

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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

  const discount = product.price && product.discounted_price !== undefined
    ? Math.round(((product.price - product.discounted_price) / product.price) * 100)
    : 0;

  return (
    <>
      <div className="bg-dark-orange-gradient-r rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={`${import.meta.env.VITE_API_URL}/${product.featured_image}`}
            alt={product.Name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Discount badge */}
          {discount > 0 && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              -{discount}%
            </div>
          )}
          
          {/* Like button */}
         
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div className="text-xs text-orangeAccent uppercase tracking-wide">
            {product.section}
          </div>
          
          <h3 className="font-semibold text-bgLight line-clamp-2 text-md leading-tight">
            {product.Name}
          </h3>
          
          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-bgLight">
              {product.discounted_price !== undefined
                ? `$${product.discounted_price.toFixed(2)}`
                : "N/A"}
            </span>
            {product.price && (
              <span className="text-sm text-bgLight line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <a
              href={`tel:`}
              className="flex-1 text-center py-2 text-sm font-medium text-bgLight  bg-orangeAccent  rounded-lg hover:bg-orangeAccent/50 hover:text-white transition-colors"
            >
              Call
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 py-2 text-sm font-medium bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              WhatsApp
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