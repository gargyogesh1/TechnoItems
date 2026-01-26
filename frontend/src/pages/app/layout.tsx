import { Helmet } from "react-helmet-async";
import Header from "@/components/Software/Header";
import Footer from "@/components/Software/Footer";
import ScrollToTop from "@/components/Software/ScrollToTop";
import { Providers } from "./providers";
import "@/styles/index.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Your App Title</title>
        <meta name="description" content="Your app description" />

        {/* Google Font (Inter) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Providers>
        <div className="isolate bg-[#FCFCFC] dark:bg-black font-inter min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
        <ScrollToTop />
      </Providers>
    </>
  );
}