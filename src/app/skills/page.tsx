// app/skills/page.tsx
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaRegKeyboard } from 'react-icons/fa';
import { SiAngular, SiNextdotjs, SiPhp, SiMicrosoftsqlserver, SiCsharp, SiDotnet } from 'react-icons/si';

const SkillsPage = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-green-50 to-teal-100" id="Skills">
            <div className="container mx-auto px-6">
                
                {/* Page Title */}
                <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">
                    My <span className="text-teal-600">Skills</span>
                </h1>

                {/* Technical Skills Section */}
                <h2 className="text-3xl font-semibold text-center mb-10 text-gray-700">Technical Skills</h2>
                
                {/* Skill Bars */}
                <div className="space-y-10">
                    {[
                        { icon: <FaHtml5 className="text-5xl text-orange-500 mr-4" />, skill: 'HTML', percentage: '90%', color: 'bg-orange-500' },
                        { icon: <FaCss3Alt className="text-5xl text-blue-400 mr-4" />, skill: 'CSS', percentage: '85%', color: 'bg-blue-400' },
                        { icon: <FaJs className="text-5xl text-yellow-400 mr-4" />, skill: 'JavaScript', percentage: '75%', color: 'bg-yellow-400' },
                        { icon: <FaRegKeyboard className="text-5xl text-indigo-500 mr-4" />, skill: 'TypeScript', percentage: '70%', color: 'bg-indigo-500' },
                        { icon: <SiNextdotjs className="text-5xl text-gray-600 mr-4" />, skill: 'Next.js', percentage: '55%', color: 'bg-gray-600' },
                    ].map(({ icon, skill, percentage, color }) => (
                        <div className="flex items-center" key={skill}>
                            {icon}
                            <div className="flex-1 ml-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-lg font-medium text-gray-800">{skill}</span>
                                    <span className="font-semibold text-gray-700">{percentage}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div className={`${color} h-3 rounded-full`} style={{ width: percentage }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsPage;
