import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div className="home min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 text-white">
            <div className="content-container flex flex-col items-center p-8 bg-white bg-opacity-90 rounded-xl shadow-lg max-w-2xl mx-auto text-center">
                
                <Image 
                    src="/profile.png" 
                    alt="Azmeena's Picture" 
                    width={200} 
                    height={200}  
                    className="rounded-full mb-6 shadow-xl border-4 border-gradient-to-r from-teal-400 to-blue-500"
                />
                
                <h3 className="text-xl font-semibold text-teal-600 uppercase tracking-widest">Hello, I am</h3>
                <h1 className="text-5xl font-bold text-gray-900 mt-2 mb-6">Azmeena Abdul Jabbar</h1>

                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    I'm a passionate Full-Stack Developer dedicated to building seamless, responsive web applications. With expertise in modern technologies like React, Vue, and Tailwind CSS, I turn creative ideas into dynamic user interfaces.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    My mission is to bridge the gap between design and functionality, creating real value for each project I work on. Let’s collaborate to build something extraordinary together!
                </p>

                <Link 
                    href="https://www.github.com/azmeenaabduljabbbar"
                   className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-white py-3 px-12 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300 transform hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600"
                >
                    Visit My GitHub
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
