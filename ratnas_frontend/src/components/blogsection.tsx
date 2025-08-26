import { Link } from "react-router-dom";
import { ScrollStackItem } from "./ui/ScrollStack";
import { useBlogs } from "../hook/apiHooks";

interface Blog {
  id: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

export  const  BlogSection: React.FC = () => {

  const {data :blogs , loading:blogLoaing  } = useBlogs();
  return (
    <section className="py-20  hide-scrollbar">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-900">Latest from Our Blog</h2>
          <p className="mt-3 text-lg text-gray-600">
            Stay updated with jewelry trends, care tips, and stories
          </p>
        </div>

        {blogs?.map((blog,i) => (
          <ScrollStackItem key={blog._id} index={i}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Left Image */}
              <div className="w-full h-72 md:h-80 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={`${import.meta.env.VITE_API_URL}/${blog.image}`}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Right Content */}
              <div className="flex flex-col justify-center">
                {/* <div className="text-md font-medium text-[#e57373] mb-2">
                  {blog.category}
                </div> */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-6">{blog.excerpt}</p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{blog.date}</span>
                  <Link
                    to="/blog"
                    className="text-[#e57373] font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </div>
    </section>
  );
}
