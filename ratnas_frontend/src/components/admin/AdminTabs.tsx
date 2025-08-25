import React from 'react';
type AdminSection = 'products' | 'categories' | 'blogs' | 'orders';


interface AdminTabsProps {
  activeSection: AdminSection;
  setActiveSection: React.Dispatch<React.SetStateAction<AdminSection>>;
}

export const AdminTabs: React.FC<AdminTabsProps> = ({ activeSection, setActiveSection }) => {
  const tabs = [
    { id: 'products', label: 'Products' },
    { id: 'categories', label: 'Categories' },
    { id: 'blogs', label: 'Blog Posts' },
    { id: 'orders', label: 'Orders' },
  ];

  return (
    <div className="border-b border-gray-200 mb-8">
      <nav className="flex space-x-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id as AdminSection)}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeSection === tab.id
                ? 'border-rose-600 text-rose-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};
