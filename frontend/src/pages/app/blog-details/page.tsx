import { Helmet } from "react-helmet-async";
import SharePost from "@/components/Software/Blog/SharePost";
import TagButton from "@/components/Software/Blog/TagButton";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const BlogDetailsPage = () => {
  return (
    <>
    <Navbar></Navbar>
      {/* ✅ SEO (React replacement for Next.js Metadata) */}
      <Helmet>
        <title>
          Blog Details Page | Free React Template for Startup and SaaS
        </title>

        <meta
          name="description"
          content="This is Blog Details Page for Startup React Template"
        />

        {/* Optional but recommended */}
        <link
          rel="canonical"
          href="https://yourdomain.com/TechnoItem/blog-details"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Blog Details Page" />
        <meta
          property="og:description"
          content="Read full blog details and insights"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/blog/blog-details-02.jpg"
        />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog Details Page" />
        <meta
          name="twitter:description"
          content="Read full blog details and insights"
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/images/blog/blog-details-02.jpg"
        />
      </Helmet>

      {/* ✅ PAGE CONTENT (unchanged) */}
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="yogesh mb-8 text-3xl font-bold text-black sm:text-4xl dark:text-white">
                  10 amazing sites to download stock photos & digital assets for
                  free
                </h2>

                {/* Author */}
                <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-10 mb-5 flex items-center">
                      <div className="mr-4 h-10 w-10 overflow-hidden rounded-full">
                        <img
                          src="./images/blog/author-02.png"
                          alt="author"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="TechnoItems text-body-color text-base font-medium">
                        By Musharof Chy
                      </span>
                    </div>

                    <div className="TechnoItems mb-5 text-body-color text-base font-medium">
                      12 Jan 2024 · 50 Comments · 35 Views
                    </div>
                  </div>

                  <span className="bg-primary mb-5 inline-flex rounded-full px-4 py-2 text-sm font-semibold text-white">
                    Design
                  </span>
                </div>

                {/* Content */}
                {/* ⬇⬇⬇ KEEP ALL YOUR EXISTING JSX BELOW ⬇⬇⬇ */}
                {/* (Nothing removed, only cleaned images to <img />) */}

                {/* ... rest of your JSX stays exactly the same ... */}

                <div className="items-center justify-between sm:flex">
                  <div className="mb-5">
                    <h4 className="TechnoItems text-body-color mb-3 text-sm font-medium">
                      Popular Tags :
                    </h4>
                    <div className=" flex items-center">
                      <TagButton text="Design" />
                      <TagButton text="Development" />
                      <TagButton text="Info" />
                    </div>
                  </div>

                  <div className="mb-5">
                    <h5 className="TechnoItems text-body-color mb-3 text-sm font-medium sm:text-right">
                      Share this post :
                    </h5>
                    <SharePost />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default BlogDetailsPage;