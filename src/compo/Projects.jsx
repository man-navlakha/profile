import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import RightArrow from './svg/right';

function scrollLeft() {
  const cont = document.getElementById('cardCont');
  cont.scrollBy({ left: -330, behavior: 'smooth' });
}

function scrollRight() {
  const cont = document.getElementById('cardCont');
  cont.scrollBy({ left: 330, behavior: 'smooth' });
}

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
    <div id="projects" className="cont cardCont hide_scroll p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="mb-6 w-[312px] p-2 px-12 md:mb-0">
          <h1 className="text-3xl sm:text-2xl font-bold mb-2 w-full whitespace-normal break-words">
            Professional Experience Gained Through BCA Projects
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Gain real-world experience by working on practical projects throughout your BCA program
          </p>


          <div>
            <div className="flex space-x-2 text-xl">
              <button className="px-4 py-3 flex items-center justify-center border border-gray-400 rounded-full" onClick={scrollLeft}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="px-4 py-3 flex items-center justify-center border border-gray-400 rounded-full" onClick={scrollRight}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div id="cardCont" className="flex -m-4 overflow-x-auto block lg:w-[1080px] md:w-[320px] max-w-full p-4 space-x-4">

          <div className="bg-white w-[312px] p-6 rounded-lg shadow-md flex-shrink-0 flex flex-col">
            <h2 className="text-sm text-gray-500 mb-1">
              Web Development
            </h2>
            <h3 className="text-2xl font-bold mb-2">
              Pixel Class
            </h3>
            <p className="text-gray-700 mb-4">
              A education note sharing Web-Application where student can Download and upload motes. <br />
              Here i developed full fronted & Figma designs.
            </p>
            <div className="mt-auto flex justify-between"> {/* Pushes the link to the bottom */}
              <a
                className="text-green-500 border border-gray-500/50 hover:bg-green-800/20 hover:text-green-900  w-max px-3 py-1 rounded-xl  flex items-center"
                href="https://pixelclass.netlify.app/"
              >
                Visit Site
              </a>
              <a
                className="text-blue-500 underline flex items-center"
                href="https://github.com/man-navlakha/pxc"
              >
                View Project
                <RightArrow />
              </a>
            </div>
          </div>

          <div className="bg-white w-[312px] p-6 rounded-lg shadow-md flex-shrink-0 flex flex-col">
            <h2 className="text-sm text-gray-500 mb-1">
              Web Development
            </h2>
            <h3 className="text-2xl font-bold mb-2">
              Solvinger
            </h3>
            <p className="text-gray-700 mb-4">
              A AI model for code review, For write something & all these features. <br />
              Here i developed full fronted parts with ReactJs.
            </p>
            <div className="mt-auto flex justify-between"> {/* Pushes the link to the bottom */}
              <a
                className="text-green-500 border border-gray-500/50 hover:bg-green-800/20 hover:text-green-900  w-max px-3 py-1 rounded-xl  flex items-center"
                href="https://mysolvingerai.vercel.app/"
              >
                Visit Site
              </a>
              <a
                className="text-blue-500 underline flex items-center"
                href="https://github.com/man-navlakha/solvinger"
              >
                View Project
                <RightArrow />
              </a>
            </div>
          </div>

          <div className="bg-white w-[312px] p-6 rounded-lg shadow-md flex-shrink-0 flex flex-col">
            <h2 className="text-sm text-gray-500 mb-1">
              Web Development
            </h2>
            <h3 className="text-2xl font-bold mb-2">
              Career System
            </h3>
            <p className="text-gray-700 mb-4">
              i developed a career system at "HarSar Innovations" using react js the same design they provided me on figma, & added Deployed on vercel.
            </p>
            <div className="mt-auto flex justify-between">
              <a
                className="text-green-500 border border-gray-500/50 hover:bg-green-800/20 hover:text-green-900  w-max px-3 py-1 rounded-xl  flex items-center"
                href="https://career-intern.vercel.app/"
              >
                Visit Site
              </a>
             
              <a
                className="text-green-500 border border-gray-500/50 hover:bg-green-800/20 hover:text-green-900  w-max px-3 py-1 rounded-xl  flex items-center"
                href="https://server-eight-lac.vercel.app/"
              >
                Visit API
              </a>
             
            </div>
          </div>
          <div className="bg-white w-[312px] p-6 rounded-lg shadow-md flex-shrink-0 flex flex-col">
            <h2 className="text-sm text-gray-500 mb-1">
              Windows App
            </h2>
            <h3 className="text-2xl font-bold mb-2">
              System App for Windows
            </h3>
            <p className="text-gray-700 mb-4">
              In this app we will show the system information of the windows.
            </p>
            <div className="mt-auto"> {/* Pushes the link to the bottom */}
              <a
                className="text-blue-500 underline flex items-center"
                href="https://github.com/man-navlakha/system-app"
              >
                View Project
                <RightArrow />
              </a>
            </div>
          </div>

          <div className="bg-white w-[312px] p-6 rounded-lg shadow-md flex-shrink-0 flex flex-col">
            <h2 className="text-sm text-gray-500 mb-1">
              Website
            </h2>
            <h3 className="text-2xl font-bold mb-2">
              Portfolio
            </h3>
            <p className="text-gray-700 mb-4">
              This is my portfolio website. I have made this website using ReactJs and TailwindCSS.
            </p>
            <div className="mt-auto"> {/* Pushes the link to the bottom */}
              <a
                className="text-blue-500 underline flex items-center"
                href="https://github.com/man-navlakha/profile"
              >
                View Project
                <RightArrow />
              </a>
            </div>
          </div>


          <div className="bg-white w-[312px] p-6 rounded-lg shadow-md flex-shrink-0 flex flex-col">
            <h2 className="text-sm text-gray-500 mb-1">
              Windows Tray App
            </h2>
            <h3 className="text-2xl font-bold mb-2">
              Rent PC Security App for Windows
            </h3>
            <p className="text-gray-700 mb-4">
              In this app we will show the shop & company details & massage from the Shop & comapny. This app is made in python.
            </p>
            <div className="mt-auto"> {/* Pushes the link to the bottom */}
              <a
                className="text-blue-500 underline flex items-center"
                href="https://github.com/man-navlakha/psr"
              >
                View Project
                <RightArrow />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;