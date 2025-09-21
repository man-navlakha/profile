import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import RightArrow from "./svg/right";

// Scroll helper
function scrollByAmount(amount) {
  const cont = document.getElementById("cardCont");
  if (cont) cont.scrollBy({ left: amount, behavior: "smooth" });
}

// Reusable Project Card
const ProjectCard = ({ category, title, description, links, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ scale: 1.03 }}
    className="bg-white w-[312px] p-6 rounded-2xl shadow-md flex-shrink-0 flex flex-col transition"
  >
    <h2 className="text-sm text-gray-500 mb-1">{category}</h2>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{description}</p>
    <div className="mt-auto flex flex-wrap gap-3">
      {links.map((link, i) => (
        <a
          key={i}
          className={`${link.style} flex items-center gap-1`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
          {link.icon && <RightArrow />}
        </a>
      ))}
    </div>
  </motion.div>
);

const Projects = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="project projectBox hide_scroll">
      <div className="flex flex-col h-screen p-6 md:flex-row items-center justify-center lg:justify-between">

        {/* Left section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 w-[312px] lg:w-[526px] p-2 px-6 md:mb-0"
        >
          <h1 className="text-3xl lg:text-5xl font-bold mb-3 leading-snug">
            Professional Experience Gained Through BCA Projects
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-6">
            Gain real-world experience by working on practical projects throughout your BCA program.
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

        {/* Right section - animated project cards */}
        <motion.div
          id="cardCont"
          className="flex h-full min-h-[326px] py-3 max-h-[326px] overflow-y-hidden overflow-x-auto lg:w-[1080px] md:w-[320px] max-w-full p-4 space-x-4 scrollbar-hide"
        >
          {[
            {
              category: "Web Development",
              title: "Pixel Class",
              description:
                "An education note-sharing web application where students can download and upload notes. I developed the full frontend & Figma designs.",
              links: [
                {
                  label: "Visit Site",
                  href: "https://pixelclass.netlify.app/",
                  style:
                    "text-green-500 border border-gray-400 hover:bg-green-100 px-3 py-1 rounded-xl",
                },
                {
                  label: "View Project",
                  href: "https://github.com/man-navlakha/pxc",
                  style: "text-blue-500 underline",
                  icon: true,
                },
              ],
            },
            {
              category: "Web Development",
              title: "Solvinger",
              description:
                "An AI model for code review with multiple features. I developed the complete frontend with ReactJS.",
              links: [
                {
                  label: "Visit Site",
                  href: "https://mysolvingerai.vercel.app/",
                  style:
                    "text-green-500 border border-gray-400 hover:bg-green-100 px-3 py-1 rounded-xl",
                },
                {
                  label: "View Project",
                  href: "https://github.com/man-navlakha/solvinger",
                  style: "text-blue-500 underline",
                  icon: true,
                },
              ],
            },
            {
              category: "Web Development",
              title: "Career System",
              description:
                'A career system developed at "HarSar Innovations" using ReactJS, based on their Figma designs. Deployed on Vercel.',
              links: [
                {
                  label: "Visit Site",
                  href: "https://career-intern.vercel.app/",
                  style:
                    "text-green-500 border border-gray-400 hover:bg-green-100 px-3 py-1 rounded-xl",
                },
                {
                  label: "Visit API",
                  href: "https://server-eight-lac.vercel.app/",
                  style:
                    "text-green-500 border border-gray-400 hover:bg-green-100 px-3 py-1 rounded-xl",
                },
              ],
            },
            {
              category: "Windows App",
              title: "System App for Windows",
              description:
                "An application that displays system information of Windows machines.",
              links: [
                {
                  label: "View Project",
                  href: "https://github.com/man-navlakha/system-app",
                  style: "text-blue-500 underline",
                  icon: true,
                },
              ],
            },
            {
              category: "Website",
              title: "Portfolio",
              description:
                "My personal portfolio website built with ReactJS and TailwindCSS.",
              links: [
                {
                  label: "View Project",
                  href: "https://github.com/man-navlakha/profile",
                  style: "text-blue-500 underline",
                  icon: true,
                },
              ],
            },
            {
              category: "Windows Tray App",
              title: "Rent PC Security App",
              description:
                "A Windows tray app built with Python that shows shop & company details, including messages from them.",
              links: [
                {
                  label: "View Project",
                  href: "https://github.com/man-navlakha/psr",
                  style: "text-blue-500 underline",
                  icon: true,
                },
              ],
            },
          ].map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
