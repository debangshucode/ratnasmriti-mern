import React, { useState, useEffect } from "react";
import { Plus, Edit3, Trash2 } from "lucide-react";
import axios from "axios";

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

export const SubCategoriesSection: React.FC<SubCategoriesSectionProps> = ({
  setShowAddForm,
}) => {
  const [categories, setCategories] = useState<SubCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  // Fetch subcategories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${baseUrl}/api/admin/categories/sub`, {
          withCredentials: true,
        });

        setCategories(res.data);
      } catch (err) {
        console.error(err);
        alert("Server error fetching sub-categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Handle delete button click
  const handleDeleteClick = (id: string) => {
    setSelectedCategoryId(id);
    setShowModal(true);
  };

  // Confirm delete
  const confirmDelete = async () => {
    if (!selectedCategoryId) return;
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/admin/categories/sub/${selectedCategoryId}`,
        { withCredentials: true }
      );

      // Instantly update UI
      setCategories((prev) =>
        prev.filter((cat) => cat._id !== selectedCategoryId)
      );

      setShowModal(false);
      setSelectedCategoryId(null);
    } catch (err) {
      console.error("Error deleting sub-category:", err);
      alert("Failed to delete sub-category");
    }
  };

  if (loading) return <p>Loading sub-categories...</p>;

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Sub Categories Management
        </h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-gradient-to-r from-rose-600 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all"
        >
          <Plus className="h-4 w-4" />
          <span>Add Sub-Category</span>
        </button>
      </div>

      {/* Sub-Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category._id} className="bg-white rounded-lg shadow p-6">
            <img
              src={`${import.meta.env.VITE_API_URL}/${category.Image}`}
              alt={category.Name}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {category.Name}
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              {category.Description || "No description"}
            </p>
            <div className="flex space-x-2">
              {/* <button className="text-yellow-600 hover:text-yellow-900">
                <Edit3 className="h-4 w-4" />
              </button> */}
              <button
                className="text-red-600 hover:text-red-900"
                onClick={() => handleDeleteClick(category._id)}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-96">
            <h2 className="text-lg font-bold text-gray-900">Confirm Delete</h2>
            <p className="text-sm text-gray-600 mt-2">
              Are you sure you want to delete this sub-category? This action
              cannot be undone.
            </p>
            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
