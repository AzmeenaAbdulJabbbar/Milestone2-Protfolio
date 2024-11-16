// app/about/page.tsx

import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 p-12 space-y-16 rounded-lg shadow-lg">
      
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-gray-800">
          About <span className="text-teal-600">Me</span>
        </h2>
        <p className="text-xl text-gray-600">
          Passionate Full-Stack Developer | Creative Problem Solver | Tech Enthusiast
        </p>
      </div>

      {/* Content Section */}
      <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
        
        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center">
          <Image
            src="/aigenazmeena.jpg"
            alt="Portrait of Azmeena abdul jabbar"
            width={300}
            height={300}
            className="rounded-full shadow-lg border-4 border-teal-500"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            Hello! I’m Azmeena, a Full-Stack Developer skilled in designing and developing scalable, user-centered web solutions. With a strong foundation in both front-end and back-end technologies, I craft seamless web applications that prioritize performance, accessibility, and clean design.
          </p>
          
          <p className="text-gray-700 text-lg leading-relaxed">
            My technical toolkit includes HTML, CSS, JavaScript, and TypeScript, alongside frameworks like AngularJS and Next.js for building interactive UIs. On the backend, I leverage PHP, SQL Server, C#, and ASP.NET Core to create reliable and efficient systems.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            I am constantly exploring new technologies and refining my skills, driven by a passion for innovation and problem-solving. Let’s collaborate to bring exceptional digital experiences to life!
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white p-8 rounded-lg shadow-md text-center space-y-4">
        <h3 className="text-2xl font-semibold text-teal-600">Technical Skills</h3>
        <p className="text-gray-600">
          HTML, CSS, JavaScript, TypeScript, Next.js, 
        </p>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <Link href="/contact" className="bg-teal-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-teal-700 transition-all duration-200 shadow-lg">
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default AboutPage;
