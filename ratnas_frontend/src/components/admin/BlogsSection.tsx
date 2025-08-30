import React, { useEffect, useState } from "react";
import { Plus, Eye, Edit3, Trash2 } from "lucide-react";
import { useBlogs } from "../../hook/apiHooks";
import axios from "axios";

interface BlogsSectionProps {
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BlogsSection: React.FC<BlogsSectionProps> = ({
  setShowAddForm,
}) => {
  const { data: blogs } = useBlogs();
  const [localBlogs, setLocalBlogs] = useState<any[]>(blogs || []);
  const [showModal, setShowModal] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  useEffect(() => {
    if (blogs) setLocalBlogs(blogs);
  }, [blogs]);


  const handleDeleteClick = (id: any) => {
    setSelectedBlogId(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (!selectedBlogId) return;
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/admin/blogs/${selectedBlogId}`,
        {
          withCredentials: true,
        }
      );
      // Update UI instantly
      setLocalBlogs((prev) => prev.filter((b) => b._id !== selectedBlogId));
      setShowModal(false);
      setSelectedBlogId(null);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div>
      {/* Header */}
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
        {localBlogs?.map((blog) => (
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
                {/* <button className="text-yellow-600 hover:text-yellow-900">
                  <Edit3 className="h-4 w-4" />
                </button> */}
                <button
                  className="text-red-600 hover:text-red-900"
                  onClick={() => handleDeleteClick(blog._id)}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-96">
            <h2 className="text-lg font-bold text-gray-900">
              Confirm Delete
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Are you sure you want to delete this blog post? This action cannot
              be undone.
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
