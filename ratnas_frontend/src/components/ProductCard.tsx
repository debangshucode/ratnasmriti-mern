import React, { useState } from "react";
import { Heart } from "lucide-react";
import { WhatsAppModal } from "./WhatsAppModal"; // import modal

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  phone?: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = "",
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <>
      <div
        className={`flex bg-[#F5EBDD] border-2 border-[#BFA06E]  rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ${className}`}
      >
        {/* Image left */}
        <div className="relative w-1/3 min-w-[180px] h-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {product.isNew && (
              <span className="px-2 py-1 text-xs bg-green-500 text-white rounded-full">
                NEW
              </span>
            )}
            {product.isSale && discount > 0 && (
              <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                -{discount}%
              </span>
            )}
          </div>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`absolute top-3 right-3 p-2 rounded-full transition ${
              isLiked
                ? "bg-red-500 text-white"
                : "bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white"
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Info right */}
        <div className="flex flex-col justify-between p-6 w-2/3">
          <div>
            <div className="text-xs sm:text-sm text-[#0D4F3C] ">
              {product.category}
            </div>
            <h3 className="text-sm sm:text-lg font-semibold text-[#2B2B2B]  mb-2 line-clamp-2">
              {product.name}
            </h3>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lg sm:text-xl font-bold text-[#0D4F3C]">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs sm:text-sm text-[#0D4F3C] line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col items-center  sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 text-sm sm:text-base">
            <a
              href={`tel:${product.phone || ""}`}
              className=" w-full flex-1 text-center px-6 py-2 rounded-lg bg-[#BFA06E] text-[#FAF7F0] font-medium hover:bg-gray-700 transition"
            >
              Call Now
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full flex-1 text-center px-6 py-2 rounded-lg bg-[#BFA06E] text-[#FAF7F0] font-medium hover:bg-gray-700 transition"
            >
              Order
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Modal */}
      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};
