import React, { useState, useEffect } from 'react';
import { Plus, Edit3, Trash2 } from 'lucide-react';
import axios from 'axios';

interface SubCategory {
  _id: string;
  Name: string;
  Description?: string;
  Image: string;
  productCount?: number;
}

interface SubCategoriesSectionProps {
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SubCategoriesSection: React.FC<SubCategoriesSectionProps> = ({ setShowAddForm }) => {
  const [categories, setCategories] = useState<SubCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL; // http://localhost:4000/api
        const res = await axios.get(`${baseUrl}/api/admin/categories/sub`, {
          withCredentials: true
        });

        // Backend returns array directly
        setCategories(res.data);
      } catch (err) {
        console.error(err);
        alert('Server error fetching categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading categories...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Sub Categories Management</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-gradient-to-r from-rose-600 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all"
        >
          <Plus className="h-4 w-4" />
          <span>Add Category</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
          <div key={category._id} className="bg-white rounded-lg shadow p-6">
            <img
              src={`${import.meta.env.VITE_API_URL}/${category.Image}`} // construct proper URL
              alt={category.Name}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.Name}</h3>
            <p className="text-gray-600 text-sm mb-3">{category.Description || 'No description'}</p>
            <div className="flex space-x-2">
              <button className="text-yellow-600 hover:text-yellow-900">
                <Edit3 className="h-4 w-4" />
              </button>
              <button className="text-red-600 hover:text-red-900">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
