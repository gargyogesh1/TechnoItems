import AboutSectionOne from "@/components/Software/About/AboutSectionOne";
import AboutSectionTwo from "@/components/Software/About/AboutSectionTwo";
import Blog from "@/components/Software/Blog";
import Brands from "@/components/Software/Brands";
import ScrollUp from "@/components/Software/Common/ScrollUp";
import Contact from "@/components/Software/Contact";
import Features from "@/components/Software/Features";
import Hero from "@/components/Software/Hero";
import Pricing from "@/components/Software/Pricing";
import Testimonials from "@/components/Software/Testimonials";
import Video from "@/components/Software/Video";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import startupPageData  from "@/pages/app/startupContent";
import { useParams } from "react-router-dom"; // Import this

export default function StartUp() {
  const { category } = useParams();
  const dataKey = Object.keys(startupPageData).find(
    (key) => key.toLowerCase() === category?.toLowerCase()
  );
  const pageData = startupPageData[dataKey];
  // const data = startupPageData ;
  // const { Ecom } = startupPageData;
  if (!pageData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1>Service Not Found</h1>
      </div>
    );
  }
  return (
    <div style={{ backgroundColor: "var(--color-black)" , color: "var(--color-white)" }}>
      <Navbar></Navbar>
      <ScrollUp />
      <Hero data={pageData}/>
      
      <Features data={pageData.features}/>
      <Video data={pageData.vedio} />
      <Brands />
      <AboutSectionOne data={pageData.aboutSectionOne}/>
      <AboutSectionTwo data={pageData.aboutSectionTwo}/>
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
      <Footer></Footer>
    </div>
  );
}
