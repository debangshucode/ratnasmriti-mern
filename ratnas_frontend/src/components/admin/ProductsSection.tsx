import React, { useState, useEffect } from "react";
import { Plus, Eye, Edit3, Trash2 } from "lucide-react";
import axios from "axios";

interface Product {
  _id: string;
  Name: string;
  main_category: string;
  price: number;
  discount_price?: number;
  featured_image: string;
  inStock: boolean;
  content: string;
}

interface ProductsSectionProps {
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  setShowAddForm,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${baseUrl}/api/admin/posts`, {
          withCredentials: true,
        });
        setProducts(res.data);
      } catch (err) {
        console.error(err);
        alert("Server error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Products Management</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-gradient-to-r from-rose-600 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all"
        >
          <Plus className="h-4 w-4" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Responsive grid instead of table */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow p-4 flex flex-col justify-between"
          >
            <div className="flex items-center space-x-4">
              <img
                className="h-16 w-16 rounded-lg object-cover"
                src={`${import.meta.env.VITE_API_URL}/${product.featured_image}`}
                alt={product.Name}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.Name}
                </h3>
                <p className="text-xs text-gray-500">ID: {product._id}</p>
              </div>
            </div>

            <p className="mt-3 text-sm text-gray-700 line-clamp-2">
              {product.content}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-base font-bold text-gray-900">
                ${product.price}
              </span>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-900">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="text-yellow-600 hover:text-yellow-900">
                  <Edit3 className="h-4 w-4" />
                </button>
                <button className="text-red-600 hover:text-red-900">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
