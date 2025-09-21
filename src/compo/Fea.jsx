import React from "react";
import { motion } from "framer-motion";
import RightArrow from "./svg/right";

function scrollByAmount(amount) {
  const project = document.getElementById("projectBox");
  if (project) project.scrollBy({ left: amount, behavior: "smooth" });
}

// Reusable Card
const ExperienceCard = ({ date, role, company, description, children, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ scale: 1.03 }}
    className="bg-white w-[312px] p-6 rounded-2xl shadow-md hide_scroll flex-shrink-0 flex flex-col transition hover:shadow-lg"
  >
    <h2 className="text-sm text-gray-500 mb-1">{date}</h2>
    <h3 className="text-2xl font-bold mb-2">{role}</h3>
    <h2 className="text-sm font-medium text-green-600 mb-2">{company}</h2>
    <div className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-5">
      {description}
    </div>
    <div className="mt-auto">{children}</div>
  </motion.div>
);

const Fea = () => {
  return (
    <div className="project projectBox bg-[#E6FFDA]">
      <div className="flex flex-col h-screen p-6 md:flex-row items-center justify-center lg:justify-between">
        
        {/* Left section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 w-[312px] lg:w-[526px] p-2 px-12 md:mb-0"
        >
          <h1 className="text-3xl lg:text-5xl font-bold mb-2">
            Here are some Experiences
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-6">
            that show my skill & knowledge
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex space-x-3"
          >
         <button
              aria-label="Scroll left"
              onClick={() => scrollByAmount(-330)}
              className="hidden md:hidden lg:block text-xl lg:text-2xl py-4 px-5 flex items-center justify-center whitespace-nowrap ease-in duration-150 m-2 border rounded-full border-[#1c1e21] rounded-full relative overflow-hidden hover-arrow  hover:text-white">
              <span className='flex items-center'>  <i className="fas fa-chevron-left"></i></span>
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollByAmount(330)}
              className="hidden md:hidden lg:block text-xl lg:text-2xl py-4 px-5 flex items-center justify-center whitespace-nowrap ease-in duration-150 m-2 border rounded-full border-[#1c1e21] rounded-full relative overflow-hidden hover-arrow  hover:text-white">
              <span className='flex items-center'>  <i className="fas fa-chevron-right"></i></span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right section - cards */}
        <motion.div
          id="projectBox"
          className="flex -m-4 overflow-x-auto lg:w-[1080px] md:w-[320px] max-w-full p-4 space-x-6 scrollbar-hide"
        >
          <ExperienceCard
            index={0}
            date="Jun 2023 - Aug 2023 · 3 mos"
            role="Back-office executive & Graphic design"
            company="Naren Advertising and Vision World"
            description={
              <ul className="list-disc ml-4">
                <li className="list-[upper-roman]">Naren Advertising:</li>
                <ul className="ml-6">
                  <li>
                    Utilized Adobe Illustrator and CorelDraw for creating ...
                  </li>
                </ul>
                <li className="list-[upper-roman]">Vision World:</li>
                <ul className="ml-6">
                  <li>
                    Demonstrated proficiency in Microsoft Office, managing back-office tasks such as Excel sheet creation, word processing, accounting, mailing, and researching.
                  </li>
                </ul>
              </ul>
            }
          />

          <ExperienceCard
            index={1}
            date="Feb 2024 - Oct 2024 · 9 mos"
            role="Information Technology Technician"
            company="Parshwanath Solutions"
            description="Experienced IT Support professional with a proven track record of maintaining 99.9% system uptime and resolving 60+ hardware/software issues. Skilled in Windows/Linux OS configuration, Office 365 support, and managing service desk operations. Strong documentation abilities and hands-on expertise in IT hardware installation and maintenance."
          >
            <a
              className="text-blue-500 underline flex items-center"
              href="ps"
            >
              View Project
              <RightArrow />
            </a>
          </ExperienceCard>

          <ExperienceCard
            index={2}
            date="March 2025 · 1 mos"
            role="Website Developer Intern"
            company="HarSar Innovations"
            description="As a Web Developer, I created a career page using React.js and Express.js with PostgreSQL. The frontend was built using React.js and Tailwind CSS, featuring responsive design, API integration, and interactive popups. On the backend, I used Node.js with Express.js to build APIs and set up routing. This project was also added to a private repository where I worked with TypeScript and additional enhancements."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Fea;
