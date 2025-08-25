import React from 'react';
import { Plus, Edit3, Trash2 } from 'lucide-react';
import { mockCategories } from '../../data/mockData';

interface CategoriesSectionProps {
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ setShowAddForm }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Categories Management</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-gradient-to-r from-rose-600 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all"
        >
          <Plus className="h-4 w-4" />
          <span>Add Category</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCategories.map(category => (
          <div key={category.id} className="bg-white rounded-lg shadow p-6">
            <img src={category.image} alt={category.name} className="w-full h-32 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{category.description}</p>
            <p className="text-sm text-gray-500 mb-4">{category.productCount} products</p>
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
