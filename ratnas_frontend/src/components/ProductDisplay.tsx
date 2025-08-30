// components/ProductCard.tsx
import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppModal } from "./WhatsAppModalP";

export interface Product {
  _id: string;
  Name: string;
  content: string;
  price: number;
  discounted_price?: number;
  Image?: string;
  status?: string;
  section?: string;
  phone?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductDisplay: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    Name,
    price,
    discounted_price,
    Image,
    content,
    phone = "",
  } = product;

  return (
    <>
      <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 w-full max-w-sm mx-auto">
        {/* Product Image */}
    <Link to={`/product/${product._id}`}>
        <div className="relative w-full h-48 sm:h-56 bg-gray-100 overflow-hidden">
          {Image ? (
            <img
              src={`http://localhost:5000/${Image}`}
              alt={Name}
              className="w-full h-full object-cover"
            //   onError={(e) => {
            //     const target = e.target as HTMLImageElement;
            //     target.src = `http://localhost:5000/${Image}`;
            //   }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              No Image
            </div>
          )}
          
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`absolute top-2 right-2 p-1.5 rounded-full transition-all ${
              isLiked
                ? "bg-red-500 text-white"
                : "bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white"
            }`}
          >
            <Heart className={`h-3 w-3 sm:h-4 sm:w-4 ${isLiked ? "fill-current" : ""}`} />
          </button>
        </div>

        </Link>
        {/* Product Info */}
        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg font-semibold mb-1 line-clamp-1">{Name}</h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-3 line-clamp-2">{content}</p>

          {/* Price */}
          <div className="mb-3 flex items-center space-x-2">
            {discounted_price ? (
              <>
                <span className="text-lg sm:text-xl font-bold text-green-600">
                  ₹{discounted_price}
                </span>
                <span className="text-xs sm:text-sm text-gray-400 line-through">
                  ₹{price}
                </span>
              </>
            ) : (
              <span className="text-lg sm:text-xl font-bold text-gray-800">₹{price}</span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <a
              href={`tel:${phone}`}
              className="flex-1 text-center py-2.5 px-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors"
            >
              Call Now
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 text-center py-2.5 px-3 bg-green-600 text-white text-sm font-medium rounded-xl hover:bg-green-700 transition-colors"
            >
              Order via WhatsApp
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

export default ProductDisplay;