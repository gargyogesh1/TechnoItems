import React, { useEffect } from "react";
import AboutSectionOne from "@/components/Software/About/AboutSectionOne";
import AboutSectionTwo from "@/components/Software/About/AboutSectionTwo";
import Breadcrumb from "@/components/Software/Common/Breadcrumb";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const AboutPage = () => {
  useEffect(() => {
    document.title = "About Page | Free React Template for Startup and SaaS";
  }, []);

  return (
    <div style={{backgroundColor: "var(--color-dark)" }}>
      <Navbar></Navbar>
      <Breadcrumb 
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
      <Footer></Footer>
    </div>
  );
};

export default AboutPage;