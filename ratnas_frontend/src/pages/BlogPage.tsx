import React from "react";
import { Calendar, Clock, User } from "lucide-react";
import { useBlogs } from "../hook/apiHooks"; // adjust path if needed
import { Helmet } from "react-helmet";
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
    <div className="pt-32 pb-20 bg-dark-orange-gradient">
        <Helmet>
        <title>Jewelry Insights & Stories – Ratnasmriti Gems, Chinsurah</title>
        <meta
          name="description"
          content="Discover the latest jewelry trends, care tips, and fascinating stories from Ratnasmriti Gems & Jewellers, Kolkata's premier jewelry store."
        />
        <link rel="canonical" href={window.location.href} />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Jewelry Insights & Stories",
            url: window.location.href,
            description:
              "Discover the latest jewelry trends, care tips, and fascinating stories from Ratnasmriti Gems & Jewellers, Kolkata's premier jewelry store.",
            publisher: {
              "@type": "Organization",
              name: "Ratnasmriti Gems and Jewellers",
              logo: {
                "@type": "ImageObject",
                url: new URL("../images/logo.jpeg", import.meta.url).href,
              },
            },
            blogPost: blogs?.map((blog) => ({
              "@type": "BlogPosting",
              headline: blog.title,
              image: new URL(`${import.meta.env.VITE_API_URL}/${blog.image}`, import.meta.url).href,
              author: {
                "@type": "Person",
                name: blog.author,
              },
              datePublished: blog.date,
              description: blog.content,
            })),
          })}
        </script>
      </Helmet>

      <div className="max-w-9xl mx-auto px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-6xl font-bold text-bgLight mb-4">
            Jewelry Insights & Stories
          </h1>
          <p className="text-xl text-yellowAccent max-w-3xl mx-auto">
            Discover the latest trends, care tips, and fascinating stories from
            the world of jewelry.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-4 md:space-y-8">
          {blogs?.map((blog) => (
            <article
              key={blog._id}
              className="bg-yellow-orange-gradient-r border rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-6 h-[400px] ">
                {/* Image */}
                <div className="md:col-span-1 flex justify-center items-center">
                  <div className="aspect-video md:aspect-square h-full relative overflow-hidden">
                    <img
                      src={`${import.meta.env.VITE_API_URL}/${blog.image}`}
                      alt={blog.title}
                      className="w-full h-full object-cover item-center transition-transform duration-300 group-hover:scale-110"
                    />
                    
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-2 md:p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-sm md:text-3xl font-bold text-gray-900 mb-2 md:mb-4 group-hover:text-darkBrown transition-colors">
                      {blog.title}
                    </h2>
                    
                    {blog.content && (
                      <p className="text-gray-500 text-base text-sm md:text-lg leading-relaxed mb-2">
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
