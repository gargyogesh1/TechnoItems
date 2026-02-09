import { Blog } from "@/data/types/blog";
import { Link } from "react-router-dom";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, featuredImage, intro, author, tags, publishDate,slug } = blog;
  return (
    <>
      <div style={{backgroundColor: "var(--color-dark)" , paddingBottom: "22px" }} className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300">
        <Link
          to={`/blog-sidebar/${slug}`}
          className="relative block h-64 w-full overflow-hidden"
        >
          <span className="bg-primary absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white capitalize">
            {tags[0]}
          </span>
          <img src={featuredImage} alt={title} className="h-full w-full object-cover" />
        </Link>
        <div className="p-4 sm:p-6 md:px-6 md:py-6 lg:p-6 xl:px-3 xl:py-6 2xl:p-6">
          <h3>
            <Link
              to={`/blog-sidebar/${slug}`}
              className="yogesh hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white"
            >
              {title}
            </Link>
          </h3>
          {/* <p className="border-body-color/10 text-body-color mb-6 border-b pb-6 text-base font-medium dark:border-white/10">
            {intro}
          </p> */}
          <p className="line-clamp-3 border-body-color/10 text-body-color mb-6 border-b pb-6 text-base font-medium dark:border-white/10">
            {intro}
          </p>
          <div className="flex items-center">
            <div className="border-body-color/10 mr-5 flex items-center border-r pr-5 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5 dark:border-white/10">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  {/* <img src={author.image || "../pages/styles/logobg.png"} alt="TechnoItems" onError={(e) => { "pages/styles/logobg.png" }}/> */}
                  <img src={author.imageLink} alt="TechnoItems" onError={(e) => { "pages/styles/logobg.png" }}/>
                </div>
              </div>
              <div className="w-full">
                <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-body-color text-xs">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
                Date
              </h4>
              <p className="text-body-color text-xs">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
