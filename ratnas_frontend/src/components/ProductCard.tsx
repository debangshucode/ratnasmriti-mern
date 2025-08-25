import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import axios from "axios";
// import { WhatsAppModal } from "./WhatsAppModal";

interface Product {
  _id: string;
  Name: string;
  price: number;
  originalPrice?: number;
  Image: string;
  main_category: string;
  isNew?: boolean;
  isSale?: boolean;
  phone?: string;
}

// Component to fetch and render all products
export const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/pub-sub");
        const apiProducts: Product[] = res.data.map((p: any) => ({
          ...p,
          Image: p.Image.startsWith("http")
            ? p.Image
            : `http://localhost:4000/${p.Image.replace(/\\/g, "/")}`,
        }));
        setProducts(apiProducts);
      } catch (err) {
        console.error(err);
        alert("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="space-y-4">
      {products.map((product) => (
        <ProductCardItem key={product._id} product={product} />
      ))}
    </div>
  );
};

// Component to render a single product
interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCardItem: React.FC<ProductCardProps> = ({ product, className = "" }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className={`flex bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Image */}
      <div className="relative w-1/3 min-w-[180px] h-auto">
        <img
          src={product.Image}
          alt={product.Name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNew && <span className="px-2 py-1 text-xs bg-green-500 text-white rounded-full">NEW</span>}
          {product.isSale && discount > 0 && <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">-{discount}%</span>}
        </div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-3 right-3 p-2 rounded-full transition ${
            isLiked ? "bg-red-500 text-white" : "bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white"
          }`}
        >
          <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
        </button>
      </div>

      {/* Info */}
      <div className="flex flex-col justify-between p-6 w-2/3">
        <div>
          <div className="text-xs sm:text-sm text-gray-500">{product.main_category}</div>
          <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.Name}</h3>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-lg sm:text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xs sm:text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 text-sm sm:text-base">
          <a
            href={`tel:${product.phone || ""}`}
            className="flex-1 text-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Call Now
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 text-center px-4 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
          >
            Order via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};
