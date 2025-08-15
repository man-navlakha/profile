import React from 'react';
import RightArrow from './svg/right';

function scrollLeft() {
  const project = document.getElementById('projectBox');
  project.scrollBy({ left: -330, behavior: 'smooth' });
}

function scrollRight() {
  const project = document.getElementById('projectBox');
  project.scrollBy({ left: 330, behavior: 'smooth' });
}

const Fea = () => {
  return (
    <div className="project projectBox p-6 bg-[#E6FFDA]" >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="mb-6 w-[312px] p-2 px-12 md:mb-0">
          <h1 className="text-3xl sm:text-2xl font-bold mb-2 w-full whitespace-normal break-words">
            Here are some Experiances
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            that show my skill & knowledge
          </p>

          <div>
            <div className="flex space-x-2">
              <button className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full" onClick={scrollLeft}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full" onClick={scrollRight}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

        </div>
        <div id="projectBox" className="flex -m-4 overflow-x-auto block lg:w-[1080px] md:w-[320px] max-w-full p-4 space-x-4">

          <div className="bg-white w-[312px] p-6 rounded-lg shadow-md flex-shrink-0 flex flex-col">
             <h2 className="text-sm text-gray-500 mb-1">
             Jun 2023 - Aug 2023 · 3 mos
            </h2>
            <h3 className="text-2xl font-bold mb-2">
              Back-office executive & Graphic design
            </h3>
            <h2 className="text-sm font-medium text-green-600 mb-1">
              Naren Advertising and Vision World
            </h2>
            <div className="text-gray-700 mb-4 list-disc line-clamp-4">
              <ul>
                <li className='list-[upper-roman]' >Naren Advertising:</li>
                <li >
                  <ul>
                    <li className='truncate'>Utilized Adobe Illustrator and CorelDraw for creating visually appealing advertising posters.
                    </li>
                  </ul>
                </li>

                <li className='list-[upper-roman]' >Vision World:</li>
                <li>
                  <ul>
                    <li className='truncate'>Demonstrated proficiency in Microsoft Office, managing back-office tasks such as Excel sheet creation, word processing, and accounting, mailing , researching etc.</li>
                  </ul>
                </li>

              </ul>
            </div>
            <div className="mt-auto"> {/* Pushes the link to the bottom */}
              {/* <a
                className="text-blue-500 underline flex items-center"
                href="https://github.com/man-navlakha/system-app"
              >
                View Project
                <RightArrow />
              </a> */}
            </div>
          </div>

          <div className="bg-white w-[312px] p-6 rounded-lg shadow-md flex-shrink-0 flex flex-col">
             <h2 className="text-sm text-gray-500 mb-1">
             Feb 2024 - Oct 2024 · 9 mos
            </h2>
            <h3 className="text-2xl font-bold mb-2">
            Information Technology Technician
            </h3>
          <h2 className="text-sm font-medium text-green-600 mb-1">
          Parshwanath Solutions
            </h2>
            <p className="text-gray-700 mb-4 line-clamp-4">
            Experienced IT Support professional with a proven track record of maintaining 99.9% system uptime and resolving 60+ hardware/software issues to enhance reliability. Skilled in Windows/Linux OS configuration, Office 365 support, and managing service desk operations with high customer satisfaction. Strong documentation abilities and hands-on expertise in IT hardware installation and maintenance.
            </p>
            <div className="mt-auto"> {/* Pushes the link to the bottom */}
              {/* <a
                className="text-blue-500 underline flex items-center"
                href="https://github.com/man-navlakha/system-app"
              >
                View Project
                <RightArrow />
              </a> */}
            </div>
          </div>

          <div className="bg-white w-[312px] p-6 rounded-lg shadow-md flex-shrink-0 flex flex-col">
             <h2 className="text-sm text-gray-500 mb-1">
             March 2025 - Present · 1 mos
            </h2>
            <h3 className="text-2xl font-bold mb-2">
            Website Developer Intern
            </h3>
          <h2 className="text-sm font-medium text-green-600 mb-1">
          HarSar Innovations
            </h2>
            <div className="text-gray-700 mb-4 line-clamp-4">
            As a Web Developer, I created a career page using React.js and Express.js with PostgreSQL. The frontend was built using React.js and Tailwind CSS, featuring responsive design, API integration, and interactive popups—fully matching the design provided by the Figma team.On the backend, I used Node.js with Express.js to build APIs and set up routing. This project was also added to a private repository where I worked with TypeScript and additional enhancements.
            </div>
            <div className="mt-auto"> {/* Pushes the link to the bottom */}
              {/* <a
                className="text-blue-500 underline flex items-center"
                href="https://github.com/man-navlakha/system-app"
              >
                View Project
                <RightArrow />
              </a> */}
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Fea;