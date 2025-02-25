import React from 'react';
import RightArrow from './svg/right';

function scrollLeft() {
    const container = document.getElementById('cardContainer');
    container.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    const container = document.getElementById('cardContainer');
    container.scrollBy({ left: 300, behavior: 'smooth' });
}

const Fea = () => {
  return (
    <div className="container cardContainer p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
      <div className="mb-6 w-full md:w-max p-2 md:mb-0">
          <h1 className="text-3xl sm:text-2xl font-bold mb-2 w-full whitespace-normal break-words">
            Here are some projects as a BCA student
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Stay connected with friends and family across your devices.
          </p>
          <div className="flex space-x-2">
            <button className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full" onClick={scrollLeft}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full" onClick={scrollRight}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div id="cardContainer" className="flex -m-4 overflow-x-auto max-w-full p-4 space-x-4">
          <div className="bg-white w-[255px] p-6 rounded-lg shadow-md flex-shrink-0">
            <h2 className="text-sm text-gray-500 mb-1">
              Windows App
            </h2>
            <h3 className="text-2xl font-bold mb-2">
              System App for Windows
            </h3>
            <p className="text-gray-700 mb-4">
              In this app we will show the system information of the windows.
            </p>
            <a className="text-blue-500 underline flex items-center" href="https://github.com/man-navlakha/system-app">
              View Project
              <RightArrow />
            </a>
          </div>

          <div className="bg-white w-[255px] p-6 rounded-lg shadow-md flex-shrink-0">
            <h2 className="text-sm text-gray-500 mb-1">
              Website
            </h2>
            <h3 className="text-2xl font-bold mb-2">
              Portfolio
            </h3>
            <p className="text-gray-700 mb-4">
              This is my portfolio website. I have made this website using ReactJs and TailwindCSS.
            </p>
            <a className="text-blue-500 underline flex items-center" href="https://man-navlakha.netlify.app/">
              View Project
              <RightArrow />
            </a>
          </div>


          <div className="bg-white w-[255px] p-6 rounded-lg shadow-md flex-shrink-0">
            <h2 className="text-sm text-gray-500 mb-1">
              Windows Tray App
            </h2>
            <h3 className="text-2xl font-bold mb-2">
              Rent PC Security App for Windows
            </h3>
            <p className="text-gray-700 mb-4">
              In this app we will show the shop & company details & massage from the Shop & comapny. This app is made in python.
            </p>
            <a className="text-blue-500 underline flex items-center" href="https://github.com/man-navlakha/system-app">
              View Project
              <RightArrow />
            </a>
          </div>
          

          
        </div>
      </div>
    </div>
  );
};

export default Fea;