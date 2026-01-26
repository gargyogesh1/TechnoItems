import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const startupLinks = [
  { label: "E-Commerce & Marketplaces", path: "/startup/Ecom" },
  { label: "CRM & Business Management", path: "/startup/CRM" },
  { label: "Job Portals & HR Tech", path: "/startup/JobPortal" },
  { label: "Healthcare & Medical Tech", path: "/startup/Health" },
  { label: "Education & EdTech", path: "/startup/Education" },
  { label: "Finance, FinTech & Banking", path: "/startup/finance" },
  { label: "Logistics & Transportation", path: "/startup/Logistics" },
  { label: "Digital Marketing & Media", path: "/startup/DigitalMarketing" },
  { label: "Real Estate & Property Tech", path: "/startup/PropTech" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isStartupOpen, setIsStartupOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-crypto-blue/80 backdrop-blur-md py-3 shadow-lg' : 'py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
          <h1 className="text-2xl font-bold text-white">
            Techno<span className="text-crypto-purple">Items</span>
          </h1>
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li className="relative group">
            <a
              href="#features"
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Services
              <span className="text-sm transition-transform duration-300 group-hover:rotate-180">
                ▾
              </span>
            </a>

            {/* Dropdown */}
            <ul
              className="absolute left-0 mt-3 w-56 bg-gray-900 rounded-lg shadow-lg
                        opacity-0 invisible translate-y-2
                        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                        transition-all duration-300 ease-in-out"
            >
              <li>
              <Link
                to="/service/web"
                className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-t-lg"
              >
                Web Development
              </Link>
              </li>
              <li>
                <Link
                to="/service/app"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                to="/service/digitalMarketing"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                to="/service/dataScienceAI"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-b-lg"
                >
                  Data Science & AI Agents
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <span className="flex items-center gap-1 cursor-pointer text-gray-300 hover:text-white transition-colors">
              New Startups
              <span className="text-sm transition-transform duration-300 group-hover:rotate-180">
                ▾
              </span>
            </span>

            <ul
              className="absolute left-0 mt-2 w-[520px] bg-gray-800 rounded-lg shadow-lg 
                        opacity-0 invisible group-hover:opacity-100 
                        group-hover:visible transition-all duration-200 z-50
                        grid grid-cols-2 gap-1 p-2"
            >
              {startupLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              ContactUs
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/signup">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            Login
          </Button>
          </Link>
          <Link to="/signin">
            <Button className="bg-crypto-purple hover:bg-crypto-dark-purple text-white w-full">Register</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-crypto-blue/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-lg">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4">
              <li>
              <button
                type="button"
                className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <span
                  className={`transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {isServicesOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link
                      to="/service/web"
                      className="block text-gray-400 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service/app"
                      className="block text-gray-400 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service/digitalMarketing"
                      className="block text-gray-400 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service/dataScienceAI"
                      className="block text-gray-400 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Data Science & AI
                    </Link>
                  </li>
                </ul>
              )}
              </li>
              <li>
                {/* Parent */}
                <button
                  onClick={() => setIsStartupOpen(!isStartupOpen)}
                  className="flex w-full items-center justify-between py-2 text-gray-300 hover:text-white transition-colors"
                >
                  New Startups
                  <span
                    className={`transition-transform duration-300 ${
                      isStartupOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {/* Submenu */}
                {isStartupOpen && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {startupLinks.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          className="block py-2 text-gray-400 hover:text-white transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  ContactUs
                </Link>
              </li>
              <li className="pt-4 flex flex-col space-y-3">
                <Button variant="ghost" className="text-gray-300 hover:text-white w-full justify-start">
                  Login
                </Button>
                <Link to="#!">
                  <Button className="bg-crypto-purple hover:bg-crypto-dark-purple text-white w-full">Buy Now</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
