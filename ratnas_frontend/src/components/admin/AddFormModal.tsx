import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';
import axios from 'axios';

type AdminSection = 'products' | 'categories' | 'blogs' | 'orders';

interface AddFormModalProps {
  activeSection: AdminSection;
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Category {
  _id: string;
  Name: string;
}

export const AddFormModal: React.FC<AddFormModalProps> = ({ activeSection, setShowAddForm }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  // Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL; // http://localhost:4000/api
        const res = await axios.get(`${baseUrl}/admin/categories/main`, {
          withCredentials: true
        });

        // Backend returns array directly
        setCategories(res.data);
      } catch (err) {
        console.error(err);
        alert('Server error fetching categories');
      } finally {
        // setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget); // includes name + image
    const baseUrl = import.meta.env.VITE_API_URL;

    let endpoint = '';
    switch (activeSection) {
      case 'products':
        endpoint = `${baseUrl}/admin/categories/sub`;
        break;
      case 'categories':
        endpoint = `${baseUrl}/admin/categories/main`;
        break;
      case 'blogs':
        endpoint = `${baseUrl}/api/blogs`;
        break;
      default:
        console.error('Unknown section');
        return;
    }

    try {
      const res = await axios.post(endpoint, formData, {
        withCredentials: true,
      });
      console.log(res.data); // API response
      setShowAddForm(false);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error(err.response || err);
      } else {
        console.error(err);
      }
      alert('Error saving data');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-xl font-bold text-gray-900">Add New {activeSection.slice(0, -1)}</h3>
          <button onClick={() => setShowAddForm(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
          {/* Name / Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name/Title</label>
            <input
              name="Name"
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              placeholder="Enter name or title"
              required
            />
          </div>

          {/* Product specific fields */}
          {activeSection === 'products' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
                  placeholder="Enter description"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="0.00"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  name="categoryId"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  required
                >
                  <option value="">Select category</option>
                  {categories.map(cat => (
                    <option key={cat._id} value={cat._id}>{cat.Name}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
            <input
              name="Image"
              type="file"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              required
            />
          </div>

          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-rose-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              <Save className="h-4 w-4" />
              <span>Save</span>
            </button>
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
