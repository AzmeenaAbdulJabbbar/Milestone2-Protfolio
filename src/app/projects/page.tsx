// app/projects/page.tsx

import React from 'react';
import Image from 'next/image';

const ProjectsPage: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-teal-50 to-blue-50" id="projects">
            <div className="container mx-auto px-6">

                {/* Page Title */}
                <div className="main-text text-center mb-12">
                    <h2 className="text-5xl font-extrabold text-teal-800">
                        My Recent <span className="text-blue-600">Projects</span>
                    </h2>
                    <p className="text-teal-700 mt-3 text-lg">A showcase of my recent work in web development</p>
                </div>

                {/* Project Grid */}
                <div className="grid gap-12 lg:grid-cols-2">

                    {/* Project Card: Car Information Website */}
                    <div className="project-card bg-white rounded-lg shadow-md hover:shadow-xl p-8 transition-shadow duration-300 border-t-4 border-teal-400">
                        <h3 className="text-3xl font-semibold text-blue-700 mb-3">Todo list</h3>
                        <p className="text-gray-800 mb-5">
                            Abasic todo list
                        </p>
                        <a 
                            href="https://todolist-azmeena.netlify.app"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block text-blue-500 font-semibold hover:underline mb-5"
                        >
                            GitHub Repository
                        </a>
                        <Image
                            src="/todo.jpeg"
                            alt="todo list Screenshot"
                            width={400}
                            height={300}
                            className="rounded-lg shadow-md border"
                        />
                    </div>

                 
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
