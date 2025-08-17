import React from 'react';
import { Link } from 'react-router-dom';
import rpdf from '../assets/resume/Man Navlakha Resume.pdf'
import Download from './svg/menu/Download';

const Footer = () => {
  return (
    <>
      <div className='bg-[#111b21]'>
        <div className="h-[100px] w-full bg-[#fcf5eb] rounded-b-2xl"></div>

        <div className='block md:block lg:hidden text-white min-h-32 py-2 text-center h-full'>

          {/* Download button (top for mobile) */}
          <div className="flex justify-center  mb-6 ">
            <a href={rpdf}>
              <button className="  flex-none bg-green-500 text-[#000] whitespace-nowrap  ease-in duration-150 px-4 py-2 m-2 border rounded-full border-[#1c1e21]  rounded-full flex items-center relative overflow-hidden hover-effect-ww">
                <span className='flex items-center text-md px-14 py-2'> Dowmload &emsp;<Download className="" /></span>
              </button>
            </a>
          </div>

          {/* Social icons row (mobile top) */}
          <div className="flex justify-center items-center py-6 border-y border-gray-700  space-x-4">
            <a href="#" className="p-2 rounded-full border border-white hover:bg-gray-700">

              <svg fill="#fff" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" /></svg></a>
            <a href="#" className="p-2 rounded-full border border-white hover:bg-gray-700"><svg fill="#fff" width="24px" height="24px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M8 19h-3v-10h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165v6.262h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03v5.647z" /><ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5" /></svg></a>
            <a href="#" className="p-2 rounded-full border border-white hover:bg-gray-700"><svg fill="#fff" width="24px" height="24px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M22.8 8.6c-.2-1.5-.4-2.6-1-3-.6-.5-5.8-.6-9.8-.6s-9.2.1-9.8.6c-.6.4-.8 1.5-1 3s-.2 2.4-.2 3.4 0 1.9.2 3.4.4 2.6 1 3c.6.5 5.8.6 9.8.6 4 0 9.2-.1 9.8-.6.6-.4.8-1.5 1-3s.2-2.4.2-3.4 0-1.9-.2-3.4zm-12.8 7v-7.2l6 3.6-6 3.6z" /></svg></a>
            <a href="#" className="p-2 rounded-full border border-white hover:bg-gray-700"><svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 1V9.5M7.5 9.5V11.5C7.5 12.6046 6.60457 13.5 5.5 13.5C4.39543 13.5 3.5 12.6046 3.5 11.5C3.5 10.3954 4.39543 9.5 5.5 9.5M7.5 9.5H5.5M5.5 9.5C4.39543 9.5 3.5 8.60457 3.5 7.5C3.5 6.39543 4.39543 5.5 5.5 5.5M5.5 5.5H7.5M5.5 5.5H9.5M5.5 5.5C4.39543 5.5 3.5 4.60457 3.5 3.5C3.5 2.39543 4.39543 1.5 5.5 1.5H9.5C10.6046 1.5 11.5 2.39543 11.5 3.5C11.5 4.60457 10.6046 5.5 9.5 5.5M9.5 5.5C10.6046 5.5 11.5 6.39543 11.5 7.5C11.5 8.60457 10.6046 9.5 9.5 9.5C8.39543 9.5 7.5 8.60457 7.5 7.5C7.5 6.39543 8.39543 5.5 9.5 5.5Z" stroke="#fff" />
            </svg></a>
          </div>


        </div>
        <div className="bg-[#111b21] text-white min-h-32 p-2 h-full">
          <footer className="">
            <div className="max-w-7xl mx-auto px-6 py-3">

              {/* Top section */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start ">

                {/* Logo & Download */}
                <div className="flex flex-col justify-start">
                  <div className="flex items-center space-x-2 my-3">

                    <span className="text-2xl md:text-xl lg:text-3xl mb-2 font-semibold">Man Navlakha</span>
                  </div>
                  <a href={rpdf}>
                    <button className="  hidden md:hidden lg:block  flex-none bg-green-500 text-[#000] whitespace-nowrap  ease-in duration-150 px-4 py-2 m-2 border rounded-full border-[#1c1e21]  rounded-full flex items-center relative overflow-hidden hover-effect-ww">
                      <span className='flex items-center'> Dowmload &emsp;<Download className="" /></span>
                    </button>
                  </a>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                  <div>
                    <h3 className="text-gray-400 text-xs font-semibold mb-4">What i do</h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="#" className="hover:underline">Web Development</Link></li>
                      <li><Link to="#" className="hover:underline">UI/UX </Link></li>
                      <li><Link to="#" className="hover:underline">Graphic Design</Link></li>
                      <li><Link to="#" className="hover:underline">Windows App</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-xs font-semibold mb-4">Who i am</h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="#" className="hover:underline">Developer</Link></li>
                      <li><Link to="#" className="hover:underline">Designer</Link></li>
                      <li><Link to="#" className="hover:underline">Friend</Link></li>
                      <li><Link to="#" className="hover:underline">Student</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-xs font-semibold mb-4">Used Techlogies</h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="#" className="hover:underline">React</Link></li>
                      <li><Link to="#" className="hover:underline">Django</Link></li>
                      <li><Link to="#" className="hover:underline">Netlify / Render</Link></li>
                      <li><Link to="#" className="hover:underline">Tailwindcss</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-xs font-semibold mb-4">Hire me?</h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="contect" className="hover:underline">Contact me</Link></li>
                      <li><Link to="#" className="hover:underline">Chat me</Link></li>
                      <li><Link to="#" className="hover:underline">Resume</Link></li>
                      <li><Link to="#" className="hover:underline">Mail Me</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom section */}
              <div className="mt-10 border-t border-gray-700 pt-6 flex flex-row items-center justify-between text-xs text-gray-200">

                {/* Left */}
                <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row  lg:gap-3">
                  <span>2025 © Man Navlakha</span>
                  <Link to="#" className="hover:underline">Terms & Privacy Policy</Link>
                  <Link to="#" className="hover:underline">Sitemap</Link>
                </div>

                {/* Social Icons */}
                <div className="flex gap-2 mx-2 hidden md:hidden lg:flex">
                  <a href="#" className="p-2 rounded-full border border-white hover:bg-gray-700">

                    <svg fill="#fff" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" /></svg></a>
                  <a href="#" className="p-2 rounded-full border border-white hover:bg-gray-700"><svg fill="#fff" width="24px" height="24px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M8 19h-3v-10h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165v6.262h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03v5.647z" /><ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5" /></svg></a>
                  <a href="#" className="p-2 rounded-full border border-white hover:bg-gray-700"><svg fill="#fff" width="24px" height="24px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M22.8 8.6c-.2-1.5-.4-2.6-1-3-.6-.5-5.8-.6-9.8-.6s-9.2.1-9.8.6c-.6.4-.8 1.5-1 3s-.2 2.4-.2 3.4 0 1.9.2 3.4.4 2.6 1 3c.6.5 5.8.6 9.8.6 4 0 9.2-.1 9.8-.6.6-.4.8-1.5 1-3s.2-2.4.2-3.4 0-1.9-.2-3.4zm-12.8 7v-7.2l6 3.6-6 3.6z" /></svg></a>
                  <a href="#" className="p-2 rounded-full border border-white hover:bg-gray-700"><svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 1V9.5M7.5 9.5V11.5C7.5 12.6046 6.60457 13.5 5.5 13.5C4.39543 13.5 3.5 12.6046 3.5 11.5C3.5 10.3954 4.39543 9.5 5.5 9.5M7.5 9.5H5.5M5.5 9.5C4.39543 9.5 3.5 8.60457 3.5 7.5C3.5 6.39543 4.39543 5.5 5.5 5.5M5.5 5.5H7.5M5.5 5.5H9.5M5.5 5.5C4.39543 5.5 3.5 4.60457 3.5 3.5C3.5 2.39543 4.39543 1.5 5.5 1.5H9.5C10.6046 1.5 11.5 2.39543 11.5 3.5C11.5 4.60457 10.6046 5.5 9.5 5.5M9.5 5.5C10.6046 5.5 11.5 6.39543 11.5 7.5C11.5 8.60457 10.6046 9.5 9.5 9.5C8.39543 9.5 7.5 8.60457 7.5 7.5C7.5 6.39543 8.39543 5.5 9.5 5.5Z" stroke="#fff" />
                  </svg></a>
                </div>

                {/* Language Dropdown */}
              <div className="relative inline-block w-full md:w-full lg:w-[200px]">
  <select
    className="appearance-none bg-transparent border-2 border-gray-100 rounded-full w-full px-6 py-2 text-xl pr-10"
    defaultValue="English"
  >
    <option>English</option>
  </select>

  {/* Custom arrow */}
  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
    <svg
      className="w-6 h-6 text-gray-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </span>
</div>

              </div>
            </div>
          </footer>
        </div>
      </div>
    </>

  );
};

export default Footer;
