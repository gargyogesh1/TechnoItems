import { Helmet}  from "react-helmet-async";

import Breadcrumb from "@/components/Software/Common/Breadcrumb";
import Contact from "@/components/Software/Contact";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <>
    <Helmet>
      <title> Contact Page | Techno Items Software developer and digitlal marketing</title>
      <meta
      name =" description"
      content="This si a contact page od Techno items"
      />
      <link
          rel="canonical"
          href="https://yourdomain.com/TechnoItem/contact"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Page" />
        <meta
          property="og:description"
          content="Get in touch with us through our contact page"
        />
        <meta
          property="og:type"
          content="website"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Page" />
        <meta
          name="twitter:description"
          content="Get in touch with us through our contact page"
        />
    </Helmet>
    <Navbar></Navbar>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact />
      <Footer></Footer>
    </>
  );
};

export default ContactPage;
