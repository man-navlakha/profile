import React from 'react'
import photo from '../assets/ChatGPT Image Apr 7, 2025, 09_08_28 PM.png'; 
import '../App.css';
import rpdf from '../assets/resume/Man Navlakha Resume.pdf';

const One = () => {
  return (
    <div className="container min-h-screen py-16 px-4 flex flex-col lg:flex-row items-center relative overflow-hidden lg:overflow-visible">
      
      {/* LEFT CONTENT */}
      <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 px-4 lg:px-12">
          Yourrr favvv Frontend Developer
        </h1>
        <p className="text-lg text-gray-700 px-4 lg:px-12">
          That you can trust and rely on. Whether you need help building sleek interfaces, fixing layout bugs, or optimizing performance – I’ve got you covered.
        </p>

        <div className="flex justify-center lg:justify-start mt-6 px-4 lg:px-12 text-sm lg:text-base">
          <a href={rpdf}>
            <button 
              title="If you want to download my resume click here" 
              className="bg-green-500 hover:text-white whitespace-nowrap ease-in duration-150 px-4 py-3 m-2 border rounded-full border-[#1c1e21] flex items-center relative overflow-hidden hover-effect"
            >
              <span> Download Resume </span>
              <i className="fas fa-download ml-2"></i>
            </button>
          </a>
          <a href="/contect">
            <button 
              title="To reach me click here" 
              className="bg-white hover:text-white whitespace-nowrap ease-in duration-150 px-4 py-3 m-2 border rounded-full border-[#1c1e21] flex items-center relative overflow-hidden hover-effect"
            >
              <span> Contact me </span>
              <i className="fas fa-mobile ml-2"></i>
            </button>
          </a>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
        <div className="relative w-full max-w-[420px]">
          {/* MAIN IMAGE */}
          <img 
            alt="man's" 
            className="rounded-lg h-auto w-full shadow-lg" 
            src={photo} 
          />

          {/* FLOATING ELEMENTS (chat bubbles, stars, etc.) */}
          <div className="absolute top-4 left-4 bg-white rounded-md px-2 py-2 flex items-center shadow">
            <img 
              alt="Profile picture of Ayesha Pawar" 
              className="w-8 h-8 object-cover rounded-full mr-2" 
              src="https://th.bing.com/th/id/OIP.XSZAFm-5JI7nriDLwZqRQQHaE7?w=261&h=180&c=7&r=0&o=5&pid=1.7" 
            />
            <div>
              <p className="text-sm font-semibold">
                My PC stuck on the boot screen
              </p>
              <p className="text-xs text-right text-gray-500">
                Today, 13:04
              </p>
            </div>
          </div>

          <div className="hidden lg:flex absolute top-1/4 right-0 bg-white rounded-md px-4 py-2 items-center shadow">
            <img 
              alt="Profile picture" 
              className="w-8 h-8 object-cover rounded-full mr-2" 
              src="https://th.bing.com/th/id/OIP.l-B_s5v5nBp_x034SAjAzgHaEa?w=1024&h=610&rs=1&pid=ImgDetMain" 
            />
            <div>
              <p className="text-sm font-semibold">
                Laptop not connecting to the internet
              </p>
              <p className="text-xs text-right text-gray-500">
                Today, 16:30
              </p>
            </div>
          </div>

          <div className="absolute bottom-1 right-2 bg-white rounded-lg shadow-lg p-2">
            <img 
              alt="Help image" 
              className="rounded-lg w-56 h-auto" 
              src="https://i.ytimg.com/vi/eJYofPwxfbw/maxresdefault.jpg" 
            />
            <p className="text-sm font-semibold">Some hardware problem in my Laptop</p>
            <p className="text-xs text-right text-gray-500">Today, 16:30</p>
          </div>

          <div className="absolute top-1/4 right-2 transform -translate-y-1/2">
            <div className="bg-white rounded-full px-4 py-2 flex items-center shadow mb-2">
              <p className="text-sm text-gray-700">PC not turning on</p>
              <i className="fas fa-check-double text-green-500 ml-2"></i>
            </div>
            <div className="bg-white rounded-full px-4 py-2 flex items-center shadow">
              <p className="text-sm text-gray-700">Printer not working</p>
              <i className="fas fa-check-double text-green-500 ml-2"></i>
            </div>
          </div>

          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 mt-16">
            <i className="fas fa-star text-yellow-500 text-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default One
