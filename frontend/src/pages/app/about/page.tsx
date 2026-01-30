import React, { useEffect } from "react";
import Breadcrumb from "@/components/Software/Common/Breadcrumb";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from "@/components/Software/Common/SectionTitle";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Page | Free React Template for Startup and SaaS";
  }, []);
  const checkIcon = (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
      <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
    </svg>
  );
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <div style={{backgroundColor: "var(--color-dark)" }}>
      <Navbar></Navbar>
      <Breadcrumb 
        pageName="About Techno Items"
        description="Techno Items is a software development and digital marketing company helping businesses grow with modern technology, scalable solutions, and result‑driven strategies."
      />
      <section className="py-8 md:py-10 lg:py-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            
            {/* CEO Image */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="mx-auto max-w-[430px] text-center lg:text-left">
                <img
                  src="../assets/AdityaTechnoItems.png"
                  alt="CEO of Techno Items"
                  className="mx-auto mb-6 rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* CEO Message */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[500px]">
                <h3 className="yogesh mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Message from Our CEO
                </h3>

                <h4 className="mb-6 text-lg font-semibold text-primary">
                  Aditya Goyal — Founder & CEO
                </h4>

                <p className="TechnoItems text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mb-4">
                  At Techno Items, our mission is to help businesses grow through
                  innovative software solutions and result‑driven digital marketing.
                  We believe technology should solve real problems and create real
                  value.
                </p>

                <p className="TechnoItems text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our team is passionate about delivering high‑quality work, building
                  long‑term partnerships, and helping our clients succeed in the
                  digital world.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section id="about" className="pt-8 md:pt-14 lg:pt-14">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  title="Who We Are"
                  paragraph="Techno Items is a full‑service software development and digital marketing company. We help startups, small businesses, and enterprises build powerful digital products and achieve sustainable online growth."
                  mb="44px"
                />

                <div
                  className="mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Custom Softwares " />
                      <List text="Web/APP Development" />
                      <List text="UI/UX Design Solutions" />
                    </div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Digital Marketing & SEO" />
                      <List text="Social Media Marketing" />
                      <List text="Secure Solutions" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
                  <img
                    src="/images/about/about-image.svg"
                    alt="about-image"
                    className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                  />
                  <img
                    src="/images/about/about-image-dark.svg"
                    alt="about-image"
                    className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-14 lg:py-14">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <img
                  src="/images/about/about-image-2.svg"
                  alt="about image"
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <img
                  src="/images/about/about-image-2-dark.svg"
                  alt="about image"
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <h3 className="yogesh mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    High‑Quality & Reliable Code
                  </h3>
                  <p className="TechnoItems text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      We build clean, secure, and scalable software solutions using modern
                      technologies to ensure long‑term performance and reliability.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="yogesh mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                   Dedicated Client Support
                  </h3>
                  <p className="TechnoItems text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Our team works closely with clients at every stage, providing transparent
                      communication, timely delivery, and ongoing support.
                  </p>
                </div>
                <div className="mb-1">
                  <h3 className="yogesh mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Technology & Marketing Expertise
                  </h3>
                  <p className="TechnoItems text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      From software development to digital marketing, we combine technology and
                      strategy to deliver measurable business results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">
          Ready to Grow Your Business?
        </h2>
        <p className="mb-6 text-white/80">
          Partner with Techno Items for innovative software solutions and
          performance‑driven digital marketing.
        </p>
        <a
          href="/contact"
          className="inline-block rounded-md bg-white px-8 py-3 font-semibold text-primary"
        >
          Contact Us
        </a>
      </section>
      <Footer></Footer>
    </div>

  );
};
export default AboutPage;