import { useEffect , useState  } from "react";
import SingleBlog from "@/components/Software/Blog/SingleBlog";
import blogData from "@/components/Software/Blog/blogData";
import Breadcrumb from "@/components/Software/Common/Breadcrumb";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Blog } from "@/data/types/blog";
const BlogPage = () => {
  // useEffect(() => {
  //   document.title = "Blog Page | Free React Template for Startup and SaaS";
  // }, []);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      document.title = "Blog Page | TechnoItems";

      // fetch("https://technoitemsbackend.onrender.com/api/blogs")
      fetch("https://technoitemsbackend.onrender.com/api/blogs")
        .then((res) => res.json())
        .then((data) => {
          setBlogs(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to load blogs", err);
          setLoading(false);
        });
    }, []);


  return (
    <>
    <Navbar></Navbar>
      <Breadcrumb
        pageName="Our Blog"
        description="Insights, trends, and expert perspectives from our software development team. Explore articles on web development, mobile apps, e‑commerce solutions, and emerging technologies."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          {/* <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div> */}
          <div className="-mx-4 flex flex-wrap justify-center">
            {loading && <p>Loading blogs...</p>}

            {!loading && blogs.length === 0 && (
              <p>No blogs available.</p>
            )}

            {blogs.map((blog) => (
              <div
                key={blog.slug}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 pb-[22px]"
                
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          {/* Pagination (static UI) */}
          <div className="-mx-4 flex flex-wrap pt-8">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center">
                {["Prev", "1", "2", "3", "...", "12", "Next"].map(
                  (item, index) => (
                    <li key={index} className="mx-1">
                      {item === "..." ? (
                        <span className="bg-body-color/15 text-body-color flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md px-4 text-sm">
                          ...
                        </span>
                      ) : (
                        <button
                          type="button"
                          className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                        >
                          {item}
                        </button>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default BlogPage;