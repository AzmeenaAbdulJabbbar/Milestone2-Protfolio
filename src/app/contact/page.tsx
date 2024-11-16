// app/contact/page.tsx

import React from "react";
import Link from 'next/link';

const ContactPage = () => {
  return (
    <section className="bg-gradient-to-b from-teal-100 to-teal-200 text-teal-900 p-12 space-y-16 rounded-lg shadow-lg">

      {/* Header Section */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-teal-800">
          Get in <span className="text-teal-600">Touch</span>
        </h2>
        <p className="text-lg text-teal-700">
          I'd love to connect! Reach out with any questions, ideas, or projects.
        </p>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between gap-10">

        {/* Contact Information Section */}
        <div className="contact-text lg:w-1/2 bg-teal-200 p-8 rounded-lg shadow-md space-y-6">
          <h3 className="text-3xl font-semibold text-teal-800">Contact Details</h3>
          <p className="text-teal-700">
            Feel free to reach out via email or phone, or connect with me on social media. Let’s make something great together!
          </p>

          <ul className="contact-list mt-4 space-y-4">
            <li className="flex items-center text-teal-700">
              <i className="bx bxs-envelope text-teal-600 mr-3 text-xl" />
              azmeenaabduljabbar@gmail.com
            </li>
            <li className="flex items-center text-teal-700">
              <i className="bx bxs-phone text-teal-600 mr-3 text-xl" />
                0317-00000000
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="contact-icons flex space-x-4 mt-6">
            <Link href="#" aria-label="Facebook" className="text-teal-600 hover:text-teal-700 transition duration-300">
              <i className="bx bxl-facebook-circle text-2xl" />
            </Link>
            <Link href="https://www.instagram.com/azmeena_jabbar_?igsh=MW1oeGJncnI0eGl3bg==" aria-label="Instagram" className="text-teal-600 hover:text-teal-700 transition duration-300">
              <i className="bx bxl-instagram text-2xl" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-teal-600 hover:text-teal-700 transition duration-300">
              <i className="bx bxl-twitter text-2xl" />
            </Link>
            <Link href="https://www.linkedin.com/in/azmeena-abdul-jabbar-/" aria-label="LinkedIn" className="text-teal-600 hover:text-teal-700 transition duration-300">
              <i className="bx bxl-linkedin text-2xl" />
            </Link>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form lg:w-1/2 bg-teal-200 p-8 rounded-lg shadow-md">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-teal-50 text-teal-900 placeholder-teal-500 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 border border-teal-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-teal-50 text-teal-900 placeholder-teal-500 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 border border-teal-300"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full p-3 bg-teal-50 text-teal-900 placeholder-teal-500 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 border border-teal-300"
            />
            <textarea
              placeholder="Message"
              required
             className="w-full p-3 bg-teal-50 text-teal-900 placeholder-teal-500 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 border border-teal-gi300"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
