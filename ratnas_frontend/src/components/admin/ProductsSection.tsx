import React, { useState, useEffect } from 'react';
import { Plus, Eye, Edit3, Trash2 } from 'lucide-react';
import axios from 'axios';

interface Product {
  _id: string;
  Name: string;
  main_category: string;
  price: number;
  discount_price?: number;
  Image: string;
  inStock: boolean;
}

interface ProductsSectionProps {
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ setShowAddForm }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

   
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL; // http://localhost:4000/api
        const res = await axios.get(`${baseUrl}/api/admin/categories/main`, {
          withCredentials: true, // include cookies for auth
        });

        // Backend returns array directly
        setProducts(res.data);
      } catch (err) {
        console.error(err);
        alert('Server error fetching products');
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

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            { products.length > 0 && products.map(product => (
              <tr key={product._id}>
                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                  <img className="h-12 w-12 rounded-lg object-cover" src={product.Image} alt={product.Name} />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{product.Name}</div>
                    <div className="text-sm text-gray-500">ID: {product._id}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.main_category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button className="text-blue-600 hover:text-blue-900"><Eye className="h-4 w-4" /></button>
                  <button className="text-yellow-600 hover:text-yellow-900"><Edit3 className="h-4 w-4" /></button>
                  <button className="text-red-600 hover:text-red-900"><Trash2 className="h-4 w-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
