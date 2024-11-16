import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400">
            I’m passionate about building scalable and impactful digital solutions. Open to collaborations and challenging projects!
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-white transition-colors">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </li>
            <li>
              <a href="#blog" className="hover:text-white transition-colors">Blog</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="text-center md:text-right">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Connected</h2>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://www.linkedin.com/in/azmeena-abdul-jabbar-/" className="text-2xl hover:text-blue-400 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://www.github.com/azmeenaabduljabbbar" className="text-2xl hover:text-gray-400 transition-colors">
              <FaGithub />
            </a>
            <a href="#" className="text-2xl hover:text-green-400 transition-colors">
              <FaWhatsapp />
            </a>
            <a href="mailto:azmeenaabduljabbar@gmail.com" className="text-2xl hover:text-red-400 transition-colors">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
        <p>&copy; 2024 Azmeena Abdul Jabbar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
