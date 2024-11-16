import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Contact Info */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-2">Connect with Me</h2>
          <p className="text-gray-200 max-w-sm">
            I'm open to new projects and collaborations! Feel free to reach out on LinkedIn, GitHub, or WhatsApp, or drop me an email.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/azmeena-abdul-jabbar-/" className="text-3xl hover:text-blue-300 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://www.github.com/azmeenaabduljabbbar" className="text-3xl hover:text-gray-300 transition-colors">
            <FaGithub />
          </a>
          <a href="#" className="text-3xl hover:text-green-300 transition-colors">
            <FaWhatsapp />
          </a>
          <a href="mailto:azmeenaabduljabbar@gmail.com" className="text-3xl hover:text-red-300 transition-colors">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="text-center mt-6">
        <a
          href="#"
          className="bg-blue-700 hover:bg-blue-800 py-2 px-6 rounded-lg shadow-md text-white transition-all duration-300"
        >
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
