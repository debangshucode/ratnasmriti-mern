import React, { useState } from 'react';
import { AdminTabs } from '../components/admin/AdminTabs';
import { ProductsSection } from '../components/admin/ProductsSection';
import { CategoriesSection } from '../components/admin/CategoriesSection';
import { BlogsSection } from '../components/admin/BlogsSection';
import { OrdersSection } from '../components/admin/OrdersSection';
import { AddFormModal } from '../components/admin/AddFormModal';
import { AdminSection } from '../types';
import { SubCategoriesSection } from '../components/admin/SubCategoriesSection';

export const AdminPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AdminSection>('products');
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="pt-10 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your jewelry store content and orders</p>
        </header>

        <AdminTabs activeSection={activeSection} setActiveSection={setActiveSection} />

        <div>
          {activeSection === 'products' && <ProductsSection setShowAddForm={setShowAddForm} />}
          {activeSection === 'categories' && <CategoriesSection setShowAddForm={setShowAddForm} />}
          {activeSection === 'subcategories' && <SubCategoriesSection setShowAddForm={setShowAddForm} />}
          {activeSection === 'blogs' && <BlogsSection setShowAddForm={setShowAddForm} />}
          {activeSection === 'orders' && <OrdersSection />}
        </div>

        {showAddForm && (
          <AddFormModal
            activeSection={activeSection}
            setShowAddForm={setShowAddForm}
          />
        )}
      </div>
    </div>
  );
};
