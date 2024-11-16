// app/services/page.tsx

import { FaHtml5, FaCss3Alt, FaJs, FaAngular, FaPhp, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiCsharp, SiDotnet } from 'react-icons/si';

const ServicesPage = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-green-50 to-teal-100" id="services">
            <div className="container mx-auto px-6">
                
                {/* Page Title */}
                <h1 className="text-5xl font-bold text-center mb-12">
                    <span className="text-teal-600">My</span> Skills
                </h1>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* HTML */}
                    <div className="service-card bg-white shadow-lg rounded-lg p-8 text-center hover:bg-teal-50 transition duration-300">
                        <FaHtml5 className="text-6xl text-orange-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">HTML</h2>
                        <p className="text-gray-700">
                            Building the structural foundation of web applications with semantic HTML.
                        </p>
                    </div>

                    {/* CSS */}
                    <div className="service-card bg-white shadow-lg rounded-lg p-8 text-center hover:bg-teal-50 transition duration-300">
                        <FaCss3Alt className="text-6xl text-blue-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">CSS</h2>
                        <p className="text-gray-700">
                            Styling websites for responsive, visually appealing, and consistent design.
                        </p>
                    </div>

                    {/* JavaScript */}
                    <div className="service-card bg-white shadow-lg rounded-lg p-8 text-center hover:bg-teal-50 transition duration-300">
                        <FaJs className="text-6xl text-yellow-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">JavaScript</h2>
                        <p className="text-gray-700">
                            Creating interactive functionality and enhancing user experience.
                        </p>
                    </div>

                    {/* TypeScript */}
                    <div className="service-card bg-white shadow-lg rounded-lg p-8 text-center hover:bg-teal-50 transition duration-300">
                        <SiTypescript className="text-6xl text-blue-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">TypeScript</h2>
                        <p className="text-gray-700">
                            Building reliable, scalable applications with static typing.
                        </p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default ServicesPage;
