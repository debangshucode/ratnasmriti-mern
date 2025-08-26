import React from 'react';
import { Plus, Eye, Edit3, Trash2 } from 'lucide-react';
import { useBlogs } from '../../hook/apiHooks';

interface BlogsSectionProps {
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BlogsSection: React.FC<BlogsSectionProps> = ({ setShowAddForm }) => {
  const {data : blogs} = useBlogs();
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Blog Management</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-gradient-to-r from-rose-600 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all"
        >
          <Plus className="h-4 w-4" />
          <span>Add Blog Post</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Article</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blogs?.map(blog => (
              <tr key={blog._id}>
                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                  <img className="h-12 w-12 rounded-lg object-cover" src={`${import.meta.env.VITE_API_URL}/${blog.image}`} alt="" />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                    <div className="text-sm text-gray-500">{blog.readTime}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{blog.author}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{blog.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{blog.category}</td>
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
