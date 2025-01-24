import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import It from './svg/It';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleFeatures = () => {
    setSubmenuOpen(!submenuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menuOpen]);

  return (
    <>






      {/* For Laptop */}

      <nav  className={` ${submenuOpen ? 'bg-white' : 'bg-[rgba(252,245,235,0.8)] bg-[rgba(255, 255, 255)]'} px-8 transition-all duration-300 ease-in-out 
    border-b-2 
    scroll-mt-16 border-b-gray-200 border-[#cec9c1] hidden lg:block md:hidden sm:hidden sticky top-0  backdrop-blur-sm p-4 z-50  `}>

        <div className="flex items-center">

          <Link to="/" >
            <div className="flex-none text-green-600 text-xl mr-8 font-bold">Man Navlakha</div>
          </Link>

          <div className=" shrink  mx-auto">
            <ul className="flex space-x-8 shrink  items-center cursor-pointer ease-in duration-150 text-xl">
              <Link>
                <li className="flex items-center  hover:underline-offset-4 decoration-green-500 hover:underline hover:ease-in hover:duration-150  cursor-pointer" onClick={toggleFeatures}>
                  Experiances

                  <div className="svg">
                    <svg className={`${submenuOpen ? 'hidden' : 'visible'}`} width="32px" height="32px" viewBox="-1.68 -1.68 27.36 27.36" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <svg className={`${submenuOpen ? 'visible' : 'hidden'}`} width="32px" height="32px" viewBox="-1.68 -1.68 27.36 27.36" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, -1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                  </div>

                  {/* <i className={`fas ${submenuOpen ? 'fa-minus' : 'fa-plus'} p-2 hover:no-underline no-underline text-sm ease-in duration-150`} id="plus-icon"></i> */}
                </li>
              </Link>

              <li className="hover:underline-offset-4 decoration-green-500 hover:underline hover:ease-in hover:duration-150 ">Projects</li>
              <li className="hover:underline-offset-4 decoration-green-500 hover:underline hover:ease-in hover:duration-150 ">Skills</li>
              <li className="hover:underline-offset-4 decoration-green-500 hover:underline hover:ease-in hover:duration-150 ">Download Resume </li>
              <li>
              </li>
            </ul>
          </div>



          <button className="  flex-none bg-green-500 hover:text-white whitespace-nowrap  ease-in duration-150 px-4 py-2 m-2 border rounded-full border-[#1c1e21]  rounded-full flex items-center relative overflow-hidden hover-effect">
            <span>Hire me!</span>
            <i className="fas fa-briefcase ml-2"></i>
          </button>

        </div>


                        <ul className={` ${submenuOpen ? '' : 'hidden'} flex gap-[25px] flex-wrap justify-center pt-[16px] pb-[22px]`} id="features-submenu">

                          
                        <li className="">
                            <div class="hover:bg-green-500 text-[#1c1e21] hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
                            <div class="text-green-500 text-3xl mb-2 hover:">
                            <svg
      width="32px"
      height="32px"
      viewBox="-10.8 -10.8 141.60 141.60"
      id="Layer_1"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
      stroke="#000000"
      strokeWidth="0.0012"
      transform="rotate(45)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(7.8,7.8), scale(0.87)">
        <rect x="-10.8" y="-10.8" width="141.60" height="141.60" rx="70.8" className='hover:bg-[#1c1e21]' fill="#22c55e" strokeWidth="0" />
      </g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.24" />
      <g id="SVGRepo_iconCarrier">
        <g>
          <path className="bg-[#1c1e21]" d="M72.4,59.7c0-5.4-3.4-10-8.3-11.7v9.6c0,2.1-1.5,4-3.7,4.3c-2.5,0.3-4.7-1.7-4.7-4.1V48 c-5.2,1.8-8.7,7-8.2,12.9c0.4,4.8,3.7,8.9,8.2,10.5V84h8.4V71.4C69,69.7,72.4,65.1,72.4,59.7z"></path>
          <path className="bg-[#1c1e21]" d="M104.4,69.3V50.7h-8.2c-0.9-3.4-2.2-6.7-4-9.6l5.8-5.8L84.8,22L79,27.8c-3-1.8-6.2-3.1-9.6-4v-8.2H50.7v8.2 c-3.4,0.9-6.7,2.2-9.6,4L35.2,22L22,35.2l5.8,5.8c-1.8,3-3.1,6.2-4,9.6h-8.2v18.7h8.2c0.9,3.4,2.2,6.7,4,9.6L22,84.8L35.2,98 l5.8-5.8c3,1.8,6.2,3.1,9.6,4v8.2h18.7v-8.2c3.4-0.9,6.7-2.2,9.6-4l5.8,5.8L98,84.8L92.2,79c1.8-3,3.1-6.2,4-9.6H104.4z M60,80.6 c-11.4,0-20.6-9.2-20.6-20.6S48.6,39.4,60,39.4S80.6,48.6,80.6,60S71.4,80.6,60,80.6z"></path>
        </g>
      </g>
    </svg>
                                </div>
                                <h2 class="text-xl font-semibold mb-2">Information Technology Help Desk Technician</h2>
                                <p class=" mb-4">IT Hardware releted solutions</p>
                                <div class="">
                                  {/* https://www.svgrepo.com/svg/459159/arrow-top-right  icon size - 64 , padding - 35%, Thinkness - 60%, color - # 1c1e21 */}
                                  <svg width="40px" height="40px" viewBox="-8.75 -8.75 42.50 42.50" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(45)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 8.5H16.5V16" stroke="#1c1e21" stroke-width="1.5"></path> <path d="M16.5 8.5L7 18" stroke="#1c1e21" stroke-width="1.5"></path> </g></svg>
                                </div>
                              </div>
                          </li>

                          <li className="">
                            <div class="hover:bg-green-500 text-[#1c1e21] hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
                                <div class="text-green-500 text-3xl mb-2 hover:">
                                  <i class="fas fa-lock"></i>
                                </div>
                                <h2 class="text-xl font-semibold mb-2">Web Development</h2>
                                <p class=" mb-4">End-to-end web development support</p>
                                <div class="">
                                  {/* https://www.svgrepo.com/svg/459159/arrow-top-right  icon size - 64 , padding - 35%, Thinkness - 60%, color - # 1c1e21 */}
                                  <svg width="40px" height="40px" viewBox="-8.75 -8.75 42.50 42.50" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(45)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 8.5H16.5V16" stroke="#1c1e21" stroke-width="1.5"></path> <path d="M16.5 8.5L7 18" stroke="#1c1e21" stroke-width="1.5"></path> </g></svg>
                                </div>
                              </div>
                          </li>

                          <li className="">
                            <div class="hover:bg-green-500 text-[#1c1e21] hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
                                <div class="text-green-500 text-3xl mb-2 hover:">
                                  <i class="fas fa-lock"></i>
                                </div>
                                <h2 class="text-xl font-semibold mb-2">Android Development</h2>
                                <p class=" mb-4">A simple application using android studio</p>
                                <div class="">
                                  {/* https://www.svgrepo.com/svg/459159/arrow-top-right  icon size - 64 , padding - 35%, Thinkness - 60%, color - # 1c1e21 */}
                                  <svg width="40px" height="40px" viewBox="-8.75 -8.75 42.50 42.50" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(45)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 8.5H16.5V16" stroke="#1c1e21" stroke-width="1.5"></path> <path d="M16.5 8.5L7 18" stroke="#1c1e21" stroke-width="1.5"></path> </g></svg>
                                </div>
                              </div>
                          </li>
                        <li className="">
                            <div class="hover:bg-green-500 text-[#1c1e21] hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
                                <div class="text-green-500 text-3xl mb-2 hover:">
                                  <i class="fas fa-lock"></i>
                                </div>
                                <h2 class="text-xl font-semibold mb-2">Windows Application</h2>
                                <p class=" mb-4">A .net & c# application that makes business solutions</p>
                                <div class="">
                                  {/* https://www.svgrepo.com/svg/459159/arrow-top-right  icon size - 64 , padding - 35%, Thinkness - 60%, color - # 1c1e21 */}
                                  <svg width="40px" height="40px" viewBox="-8.75 -8.75 42.50 42.50" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(45)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 8.5H16.5V16" stroke="#1c1e21" stroke-width="1.5"></path> <path d="M16.5 8.5L7 18" stroke="#1c1e21" stroke-width="1.5"></path> </g></svg>
                                </div>
                              </div>
                          </li>

                          <li className="">
                            <div class="hover:bg-green-500 text-[#1c1e21] hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
                                <div class="text-green-500 text-3xl mb-2 hover:">
                                  <i class="fas fa-lock"></i>
                                </div>
                                <h2 class="text-xl font-semibold mb-2">Python Development</h2>
                                <p class=" mb-4">A windows application configration & development </p>
                                <div class="">
                                  {/* https://www.svgrepo.com/svg/459159/arrow-top-right  icon size - 64 , padding - 35%, Thinkness - 60%, color - # 1c1e21 */}
                                  <svg width="40px" height="40px" viewBox="-8.75 -8.75 42.50 42.50" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(45)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 8.5H16.5V16" stroke="#1c1e21" stroke-width="1.5"></path> <path d="M16.5 8.5L7 18" stroke="#1c1e21" stroke-width="1.5"></path> </g></svg>
                                </div>
                              </div>
                          </li>

                          <li className="">
                            <div class="hover:bg-green-500 text-[#1c1e21] hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
                                <div class="text-green-500 text-3xl mb-2 hover:">
                                  <i class="fas fa-lock"></i>
                                </div>
                                <h2 class="text-xl font-semibold mb-2">Graphic Design</h2>
                                <p class=" mb-4">Designing Logo, Mockups, PNG icons, etc</p>
                                <div class="">
                                  {/* https://www.svgrepo.com/svg/459159/arrow-top-right  icon size - 64 , padding - 35%, Thinkness - 60%, color - # 1c1e21 */}
                                  <svg width="40px" height="40px" viewBox="-8.75 -8.75 42.50 42.50" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(45)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 8.5H16.5V16" stroke="#1c1e21" stroke-width="1.5"></path> <path d="M16.5 8.5L7 18" stroke="#1c1e21" stroke-width="1.5"></path> </g></svg>
                                </div>
                              </div>
                          </li>
                        </ul>
      </nav>

















      {/* For Mobile */}
      <div className={`${menuOpen ? 'bg-[#1c1e21] border-[#9e9a93]' : 'bg-[rgba(252,245,235,0.8)]'}  ease-in duration-150 lg:hidden sm:block md:block sticky top-0 backdrop-blur-sm p-4 z-50 border-b border-[#cec9c1] flex items-center justify-between p-2`}>
        <div className="flex items-center">
          <i
            id="menu-icon"
            className={`fas ${menuOpen ? 'fa-times text-white px-[10px]' : 'fa-bars'} px-2 ease-in duration-150 text-gray-800 text-xl`}
            onClick={toggleMenu}
          ></i>
        </div>
        <div className="flex items-center  ease-in duration-150">
          {/* <Link to="/"> */}
          <div
            className={` ease-in duration-150 text-[#25d366] font-bold text-2xl font`}>
            Man Navlakha</div>
        </div>
        {/* </Link> */}
        <div
          className="flex items-center" >
          <button className={`${menuOpen ? 'hidden' : 'bg-green-500'}  hover:text-white ease-in duration-150 p-2 border rounded-full border-[#1c1e21] text-center flex items-center relative overflow-hidden hover-effect`} >
            <i className={`fas ${menuOpen ? 'hidden' : 'fa-briefcase'}`}></i>
          </button>
        </div>
      </div>








      {/* Fullscreen Menu */}
      <div id="fullscreen-menu" className={`fixed divide-y lg:hidden sm:block md:block  ease-in duration-150   inset-0 bg-[#1c1e21] top-0 bottom-0 flex h-screen  z-40 ${menuOpen ? '' : 'hidden'}`}>
        <i
          id="close-icon"
          className="fas fa-times absolute top-4 right-4  ease-in duration-150  text-white text-2xl"
          onClick={toggleMenu}
        ></i>
        <ul className="divide-y text-white  ease-in duration-150 mt-16 w-screen overflow-scroll bottom-0 text-3xl">
          <li className="p-4 px-6 hover:bg-[#21262d]">Home</li>
          <li className="p-4 px-6 hover:bg-[#21262d] flex justify-between items-center cursor-pointer" onClick={toggleFeatures}>
            Experiances
            <i className={`fas ${submenuOpen ? 'fa-minus' : 'fa-plus'}  ease-in duration-150`} id="plus-icon"></i>
          </li>
          <ul className={`divide-y bg-[#21262d] ${submenuOpen ? '' : 'hidden'}`} id="features-submenu">
            <li className="p-4 px-12 hover:bg-[#1c1e21] ">Feature 1</li>
            <li className="p-4 px-12 hover:bg-[#1c1e21] ">Feature 2</li>
            <li className="p-4 px-12 hover:bg-[#1c1e21] ">Feature 3</li>
          </ul>
          <li className="p-4 px-6 hover:bg-[#21262d] ">Projects</li>
          <li className="p-4 px-6 hover:bg-[#21262d] ">Skills</li>
          <li className="p-4 px-6 hover:bg-[#21262d] ">Download Resume </li>
          <div
            className="p-4 flex items-center justify-center" >
            <button className="bg-green-500 mb-12 text-gray-800 hover:text-[#1c1e21] ease-in duration-150 px-4 py-2 border rounded-full border-[#1c1e21] text-center flex items-center relative overflow-hidden hover-effect-ww">
              <span> Hire me! <i className="fas fa-briefcase p-2"></i></span>
            </button>
          </div>
        </ul>
      </div>













    </>
  );
};

export default Navbar;