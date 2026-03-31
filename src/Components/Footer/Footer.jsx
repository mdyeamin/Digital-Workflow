import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-[#101727] text-white pt-1">
      

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          

          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black mb-6 tracking-tight">
              DigiTools
            </h2>
            <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>


          <div>
            <h4 className="text-lg font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400 font-medium text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Features</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Templates</li>
              <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
            </ul>
          </div>


          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 font-medium text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">About</li>
              <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Press</li>
            </ul>
          </div>


          <div>
            <h4 className="text-lg font-bold mb-6">Social Links</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#7922f8] hover:text-white transition-all duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#7922f8] hover:text-white transition-all duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#7922f8] hover:text-white transition-all duration-300">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-medium">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;