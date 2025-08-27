import React from "react";
import { Calendar, Clock, User } from "lucide-react";
import { useBlogs } from "../hook/apiHooks"; // adjust path if needed

export const BlogPage: React.FC = () => {
  const { data: blogs, loading, error } = useBlogs();

  if (loading) {
    return (
      <div className="pt-24 pb-20 text-center text-gray-600">
        Loading blogs...
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-24 pb-20 text-center text-red-600">
        Failed to load blogs: {error.message}
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Jewelry Insights & Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest trends, care tips, and fascinating stories from
            the world of jewelry.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogs?.map((blog) => (
            <article
              key={blog._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Image */}
                <div className="md:col-span-1">
                  <div className="aspect-video md:aspect-square relative overflow-hidden">
                    <img
                      src={`${import.meta.env.VITE_API_URL}/${blog.image}`}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-rose-600 text-white text-sm font-semibold rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-rose-600 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {blog.excerpt}
                    </p>
                    {blog.content && (
                      <p className="text-gray-500 text-base leading-relaxed mb-6">
                        {blog.content.substring(0, 200)}...
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
