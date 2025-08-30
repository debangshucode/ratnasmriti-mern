import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, Share2, ShoppingBag, MessageCircle, ZoomIn, Star } from "lucide-react";
import { useSubCategory } from "../hook/apiHooks";
import { WhatsAppModal } from "../components/WhatsAppModalP";

export const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);

  const { data: product, loading, error } = useSubCategory(productId);

  if (loading) return <p className="pt-24 text-center">Loading...</p>;
  if (error) return <p className="pt-24 text-center">Error: {error}</p>;
  if (!product) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Product Not Found</h1>
      </div>
    );
  }

  const images = product.Image ? [product.Image] : [];
  const discount = product?.discounted_price
    ? Math.round(((product?.price - product?.discounted_price) / product?.price) * 100)
    : 0;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZooming) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div
              className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden group cursor-crosshair"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
            >
              {images.length ? (
                <img
                  src={`http://localhost:5000/${images[selectedImage]}`}
                  alt={product.Name}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    isZooming ? "scale-150" : "scale-100"
                  }`}
                  style={isZooming ? { transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` } : {}}
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-400">
                  No Image Available
                </div>
              )}

              {!isZooming && images.length > 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex space-x-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-rose-600 ring-2 ring-rose-200"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img src={`http://localhost:5000/${img}`} alt={`${product.Name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Section/Tag */}
            <div className="flex items-center space-x-4 mb-2">
              {product.main_category.Name && <span className="text-sm text-rose-600 font-medium">{product.main_category.Name}</span>}
            </div>

            {/* Name */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.Name}</h1>

            {/* Price */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-gray-900">
                ₹{product.discounted_price ?? product.price}
              </span>
              {product.discounted_price && (
                <>
                  <span className="text-xl text-gray-500 line-through">₹{product.price}</span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            {/* Short Content */}
            

            {/* Full Description */}
            {product.Description && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.Description}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowWhatsAppModal(true)}
                  className="flex-1 bg-green-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Order on WhatsApp</span>
                </button>

                <button className="flex-1 bg-rose-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex-1 py-3 rounded-xl font-medium transition-all flex items-center justify-center space-x-2 ${
                    isLiked
                      ? "bg-red-50 text-red-600 border border-red-200"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
                  <span>{isLiked ? "Saved" : "Save"}</span>
                </button>

                <button className="flex-1 py-3 bg-gray-50 text-gray-600 rounded-xl font-medium hover:bg-gray-100 transition-all border border-gray-200 flex items-center justify-center space-x-2">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>

              <div className="text-center py-4">
                <a
                  href={`tel:${product.phone ?? "+1234567890"}`}
                  className="text-lg font-semibold text-rose-600 hover:text-purple-600 transition-colors"
                >
                  📞 Call Now: {product.phone ?? "+1 (234) 567-890"}
                </a>
              </div>
            </div>

            {/* Stock Status */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-green-800 font-medium">In Stock - Ready to Ship</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Modal */}
      <WhatsAppModal isOpen={showWhatsAppModal} onClose={() => setShowWhatsAppModal(false)} product={product} />
    </div>
  );
};
