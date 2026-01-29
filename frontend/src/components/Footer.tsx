
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12141C] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              Techno<span className="text-crypto-purple">Items</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-xs">
              Innovative software, AI solutions, and digital marketing services designed to help businesses build, scale, and succeed in the digital era.
            </p>
            <div className="flex space-x-4">
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/service/web" className="text-gray-400 hover:text-crypto-purple transition-colors">Web Development</a></li>
              <li><a href="/service/app" className="text-gray-400 hover:text-crypto-purple transition-colors">Mobile App Development</a></li>
              <li><a href="/service/digitalMarketing" className="text-gray-400 hover:text-crypto-purple transition-colors">Digital Marketing</a></li>
              <li><a href="/service/dataScienceAI" className="text-gray-400 hover:text-crypto-purple transition-colors">AI Agents & Automation</a></li>
              <li><a href="/service/dataScienceAI" className="text-gray-400 hover:text-crypto-purple transition-colors">Data Science Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><a href="/startup/Ecom" className="text-gray-400 hover:text-crypto-purple transition-colors">E‑Commerce Development</a></li>
              <li><a href="/startup/Health" className="text-gray-400 hover:text-crypto-purple transition-colors">Healthcare & Medical Tech</a></li>
              <li><a href="/startup/finance" className="text-gray-400 hover:text-crypto-purple transition-colors">Finance & FinTech</a></li>
              <li><a href="/startup/PropTech" className="text-gray-400 hover:text-crypto-purple transition-colors">Real Estate & Property Tech</a></li>
              <li><a href="/startup/Logistics" className="text-gray-400 hover:text-crypto-purple transition-colors">Logistics & Transportation</a></li>
              {/* <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">E‑Commerce & Marketplaces</a></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-400 hover:text-crypto-purple transition-colors">Blog & Case Studies</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-crypto-purple transition-colors">About</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-crypto-purple transition-colors">Portfolio</a></li>
              <li><a href="/" className="text-gray-400 hover:text-crypto-purple transition-colors">Schedule Meeting</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-crypto-purple transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} TechnoItems. All rights reserved.
               ~ <a href="contact" target="_blank" className="text-crypto-purple hover:underline">SINCE 2022</a>
            </p>
            <div className="flex space-x-6">
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">Terms of Service</a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">Privacy Policy</a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
