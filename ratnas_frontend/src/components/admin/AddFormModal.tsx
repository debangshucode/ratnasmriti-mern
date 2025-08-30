import React, { useState, useEffect } from "react";
import { X, Save } from "lucide-react";
import axios from "axios";

type AdminSection =
  | "products"
  | "categories"
  | "subcategories"
  | "blogs"
  | "orders";

interface AddFormModalProps {
  activeSection: AdminSection;
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Category {
  _id: string;
  Name: string;
}

export const AddFormModal: React.FC<AddFormModalProps> = ({
  activeSection,
  setShowAddForm,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);

  // Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL; // http://localhost:4000
        const res = await axios.get(`${baseUrl}/api/admin/categories/main`, {
          withCredentials: true,
        });
        setCategories(res.data);
      } catch (err) {
        console.error(err);
        alert("Server error fetching categories");
      }
    };
    if (activeSection === "subcategories") {
      fetchCategories();
    }
  }, [activeSection]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const baseUrl = import.meta.env.VITE_API_URL;

    let endpoint = "";
    switch (activeSection) {
      case "products":
        endpoint = `${baseUrl}/api/admin/posts`;
        break;
      case "categories":
        endpoint = `${baseUrl}/api/admin/categories/main`;
        break;
      case "subcategories":
        endpoint = `${baseUrl}/api/admin/categories/sub`;
        break;
      case "blogs":
        endpoint = `${baseUrl}/api/admin/blogs`;
        break;
      default:
        console.error("Unknown section");
        return;
    }

    try {
      const res = await axios.post(endpoint, formData, {
        withCredentials: true,
      });
      console.log(res.data);
      setShowAddForm(false);
    } catch (err: any) {
      console.error(err.response || err);
      alert("Error saving data");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-xl font-bold text-gray-900">
            Add New {activeSection.slice(0, -1)}
          </h3>
          <button
            onClick={() => setShowAddForm(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
          {/* Common Name / Title */}
          {(activeSection === "products" ||
            activeSection === "categories" ||
            activeSection === "subcategories") && (
            <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                name="Name"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Enter name"
                required
              />
            </div>
            
              </>
          )}

          {/* Products fields */}
          {activeSection === "products" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Original Price
                </label>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Discounted Price
                </label>
                <input
                  name="discounted_price"
                  type="number"
                  step="0.01"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="content"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 resize-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Section
                </label>
                <select
                  name="section"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                  required
                >
                  <option value="">Select section</option>
                  <option value="Popular">Popular</option>
                  <option value="Recommended">Recommended</option>
                  <option value="New_Arrival">New Arrival</option>
                  <option value="Top_Seller">Top Seller</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  name="status"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                  required
                >
                  <option value="1">Publish</option>
                  <option value="0">Draft</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image
                </label>
                <input
                  name="featured_image"
                  type="file"
                  className="w-full"
                  required
                />
              </div>
            </>
          )}

          {/* Subcategories fields */}
          {activeSection === "subcategories" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parent Category
                </label>
                <select
                  name="main_category"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                  required
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id} >
                      {cat.Name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Original Price
                </label>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Discounted Price
                </label>
                <input
                  name="discounted_price"
                  type="number"
                  step="0.01"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="Description"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Information
                </label>
                <textarea
                  name="product_information"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image
                </label>
                <input name="Image" type="file" className="w-full" required />
              </div>


            </>
          )}

          {/* Categories fields */}
          {activeSection === "categories" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image
              </label>
              <input name="Image" type="file" className="w-full" required />
            </div>
          )}

          {/* Blogs fields */}
          {activeSection === "blogs" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  name="title"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <textarea
                  name="content"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author
                </label>
                <input
                  name="author"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image
                </label>
                <input name="image" type="file" className="w-full" required />
              </div>
            </>
          )}

          {/* Orders (probably read-only) */}
          {activeSection === "orders" && (
            <div className="text-gray-600">
              Orders are usually generated automatically and cannot be added
              manually.
            </div>
          )}

          {/* Buttons */}
          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-rose-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              disabled={activeSection === "orders"}
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
