import React from "react";
import { Plus, Eye, Edit3, Trash2 } from "lucide-react";
import { useBlogs } from "../../hook/apiHooks";

interface BlogsSectionProps {
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BlogsSection: React.FC<BlogsSectionProps> = ({
  setShowAddForm,
}) => {
  const { data: blogs } = useBlogs();

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

      {/* Responsive cards grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs?.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-xl shadow p-4 flex flex-col justify-between"
          >
            <div className="flex items-center space-x-4">
              <img
                className="h-16 w-16 rounded-lg object-cover"
                src={`${import.meta.env.VITE_API_URL}/${blog.image}`}
                alt={blog.title}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-xs text-gray-500">By {blog.author}</p>
              </div>
            </div>

            <p className="mt-3 text-sm text-gray-700 line-clamp-2">
              {blog.content || "No description"}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm text-gray-500">{blog.date}</span>
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
