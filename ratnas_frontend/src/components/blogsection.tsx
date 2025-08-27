import { Link } from "react-router-dom";
import { useBlogs } from "../hook/apiHooks";

export const BlogSection: React.FC = () => {
  const { data: blogs, loading: blogLoading } = useBlogs();

  if (blogLoading) {
    return (
      <div className="text-center py-20">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-36 mx-auto mb-3"></div>
          <div className="h-3 bg-gray-100 rounded w-24 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">No blogs available</div>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-6xl font-bold text-darkBrown mb-3 md:mb-4 bg-gradient-to-r from-darkBrown to-orangeAccent bg-clip-text text-transparent">
            Latest from Our Blog
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-xl md:max-w-2xl mx-auto">
            Stay updated with jewelry trends, care tips, and stories
          </p>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-orangeAccent to-yellowAccent mx-auto mt-4 md:mt-6 rounded-full"></div>
        </div>

        <div className="space-y-4">
          {/* Top blogs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {blogs.slice(0, 2).map((blog, index) => (
              <div
                key={blog._id}
                className={`group relative h-[180px] md:h-[300px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${
                  index === 0
                    ? "md:col-span-2 animate-slide-in-left"
                    : "md:col-span-1 animate-slide-in-right"
                }`}
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={`${import.meta.env.VITE_API_URL}/${blog.image}`}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 text-white">
                  <div className="mb-2 md:mb-4">
                    <span className="inline-block bg-yellowAccent/90 text-darkBrown px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wide">
                      Featured
                    </span>
                  </div>

                  <h3 className="text-lg md:text-3xl font-bold mb-2 md:mb-3 line-clamp-2 group-hover:text-yellowAccent transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-xs md:text-lg text-gray-200 mb-2 md:mb-4 line-clamp-2 md:line-clamp-3 leading-relaxed">
                    {blog.content}
                  </p>

                  <div className="flex items-center justify-between flex-wrap border-t border-white/20 pt-2 md:pt-4">
                    <span className="text-xs md:text-sm text-gray-300 font-medium">
                      {new Date(blog.date ?? "").toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>

                    <Link
                      to={`/blog`}
                      className="inline-flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-yellowAccent font-semibold hover:text-white transition-all group/link"
                    >
                      <span>Read More</span>
                      <svg
                        className="w-3 h-3 md:w-5 md:h-5 transform transition-transform duration-300 group-hover/link:translate-x-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full width third blog */}
          {blogs[2] && (
            <div className="group relative h-[220px] md:h-[350px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-1 animate-slide-in-up">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={`${import.meta.env.VITE_API_URL}/${blogs[2].image}`}
                  alt={blogs[2].title}
                  className="w-full h-full object-cover transition-transform duration-[10s] ease-linear group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 md:px-8">
                <div className="max-w-2xl md:max-w-4xl space-y-3 md:space-y-6">
                  <span className="bg-gradient-to-r from-yellowAccent to-orangeAccent text-darkBrown px-3 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest shadow-lg">
                    Featured Story
                  </span>

                  <h3 className="text-2xl md:text-5xl font-bold leading-snug md:leading-tight group-hover:text-yellowAccent transition-colors">
                    {blogs[2].title}
                  </h3>

                  <p className="text-sm md:text-xl text-gray-200 line-clamp-2 md:line-clamp-3 leading-relaxed max-w-lg md:max-w-3xl mx-auto">
                    {blogs[2].content}
                  </p>

                  <div className="space-y-2 md:space-y-4">
                    <Link
                      to={`/blog`}
                      className="inline-flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-yellowAccent to-orangeAccent text-darkBrown px-5 md:px-8 py-2 md:py-4 rounded-full font-bold text-sm md:text-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                      <span>Discover More</span>
                      <svg
                        className="w-4 h-4 md:w-6 md:h-6 transform transition-transform duration-300 group-hover:translate-x-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                    <div className="text-xs md:text-sm text-gray-300">
                      Published on{" "}
                      {new Date(blogs[2].date ?? "").toLocaleDateString(
                        "en-US",
                        { month: "long", day: "numeric", year: "numeric" }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-6 md:mt-8">
          <Link
            to="/blog"
            className="group relative inline-flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-[#e57373] to-[#d45a5a] text-white font-bold px-6 md:px-12 py-2 md:py-4 rounded-full shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 hover:scale-105"
          >
            <span className="text-sm md:text-lg">View All Blogs</span>
            <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
