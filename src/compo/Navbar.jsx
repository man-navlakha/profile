import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import It from './svg/It';
import Web from './svg/Web';
import Android from './svg/Android';
import Windows from './svg/Windows';
import Graphic from './svg/Graphic';
import Python from './svg/python';
import RightArrow from './svg/right';


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

      <nav className={` ${submenuOpen ? 'bg-white' : 'bg-[rgba(252,245,235,0.8)] bg-[rgba(255, 255, 255)]'} px-8 transition-all duration-300 ease-in-out 
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
            <div class="hover:bg-green-500 text-[#1c1e21]  fill-green-500 hover:fill-[#1c1e21]    hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
              <div class="">
                <It />
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
            <div class="hover:bg-green-500   fill-green-500 hover:fill-[#1c1e21]    text-[#1c1e21] hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
              <div>
                <Web />
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
            <div class="hover:bg-green-500  fill-green-500 hover:fill-[#1c1e21]    text-[#1c1e21] hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
              <div >
                <Android />
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
            <div class="hover:bg-green-500  fill-green-500 hover:fill-[#1c1e21]    text-[#1c1e21] hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
              <div class="text-green-500 text-3xl mb-2 hover:">
                <Windows />
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
            <div class="hover:bg-green-500  fill-green-500 hover:fill-[#1c1e21]    text-[#1c1e21] hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
              <div class="">
                <Python />
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
            <div class="hover:bg-green-500  fill-green-500 hover:fill-[#1c1e21]    text-[#1c1e21] hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
              <div class="text-green-500 text-3xl mb-2 hover:">
                <Graphic />
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
      <div className={`${menuOpen ? 'bg-[#1c1e21] border-[#9e9a93] fixed w-full' : 'bg-[rgba(252,245,235,0.8)] sticky top-0'}  ease-in duration-150 lg:hidden md:block backdrop-blur-sm p-4 z-50 border-b border-[#cec9c1] flex items-center justify-between p-2`}>

        <div className="flex items-center">
          <i
            id="menu-icon"
            className={`fas ${menuOpen ? 'fa-times text-white px-[10px]' : 'fa-bars'} px-2 ease-in duration-150 text-gray-800 text-xl`}
            onClick={toggleMenu}
          ></i>
        </div>

        <div className="flex items-center ease-in duration-150">
          {/* <Link to="/"> */}
          <div className='ease-in duration-150 text-[#25d366] font-bold text-xl '>  Man Navlakha</div>
        </div>

        {/* </Link> */}
        <div
          className="flex items-center" >
          <button className={`${menuOpen ? 'hidden' : 'bg-green-500'}  hover:text-white ease-in duration-150 p-2 border rounded-full border-[#1c1e21] text-center flex items-center relative overflow-hidden hover-effect`} >
            <i className='fas fa-briefcase'></i>
          </button>
        </div>

      </div>








      {/* Fullscreen Menu */}
      <div id="fullscreen-menu" className={`fixed divide-y lg:hidden md:block  ease-in duration-150 z-40  inset-0 bg-[#1c1e21] bottom-0 flex h-screen ${menuOpen ? '' : 'hidden'}`}>
        {/* <i
          id="close-icon"
          className="fas fa-times absolute top-4 right-4  ease-in duration-150  text-white text-xl"
          onClick={toggleMenu}
        ></i> */}
        <ul className="divide-y text-white  ease-in duration-150 mt-16 w-screen overflow-scroll bottom-0 text-2xl">
          <li className="p-4 px-6 hover:bg-[#21262d]">Home</li>
          <li className="p-4 px-6 hover:bg-[#21262d] flex flex-col cursor-pointer" onClick={toggleFeatures}>
            <div className="svg flex items-center justify-between">
              Experiances
              <svg className={`${submenuOpen ? 'hidden' : 'visible'}`} width="32px" height="32px" viewBox="-1.68 -1.68 27.36 27.36" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#fff" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              <svg className={`${submenuOpen ? 'visible' : 'hidden'}`} width="32px" height="32px" viewBox="-1.68 -1.68 27.36 27.36" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, -1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#fff" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

            </div>


            <ul className={` ${submenuOpen ? '' : 'hidden'} mt-2`} id="features-submenu">
              
              <li className='mt-4 '>
                <div class="fill-green-500  text-[#1c1e21] flex justify-start ">
                  <div className="w-[32]">
                  <It />
                  </div>

                  <h2 class="text-[#22c55e] font-semibold text-lg  under-ani"> IT help desk support</h2>
                  <div class="">
                    <RightArrow />
                  </div>
                </div>

              </li>
              <li className='mt-4'>
                <div class="fill-green-500  text-[#1c1e21] flex justify-start">
                <div className="w-[32]">
                  <Web />
                  </div>
                  <h2 class="text-[#22c55e] font-semibold text-lg  under-ani"> Web Development</h2>
                  <div class="">
                    <RightArrow />
                  </div>
                </div>

              </li>
              <li className='mt-4'>
                <div class="fill-green-500  text-[#1c1e21] flex justify-start">
                <div className="w-[32]">
                  <Android />
                  </div>
                  <h2 class="text-[#22c55e] font-semibold text-lg  under-ani"> Android Development</h2>
                  <div class="">
                    <RightArrow />
                  </div>
                </div>

              </li>
              <li className='mt-4'>
                <div class="fill-green-500  text-[#1c1e21] flex justify-start">
                <div className="w-[32]">
                  <Windows />
                  </div>
                  <h2 class="text-[#22c55e] font-semibold text-lg  under-ani"> Windows Application</h2>
                  <div class="">
                    <RightArrow />
                  </div>
                </div>

              </li>
              <li className='mt-4'>
                <div class="fill-green-500  text-[#1c1e21] flex justify-start">
                <div className="w-[32]">
                  <Python />
                  </div>
                  <h2 class="text-[#22c55e] font-semibold text-lg  under-ani"> Python  Development</h2>
                  <div class="">
                    <RightArrow />
                  </div>
                </div>

              </li>
              <li className='mt-4'>
                <div class="fill-green-500  text-[#1c1e21] flex justify-start">
                <div className="w-[32]">
                  <Graphic />
                  </div>
                  <h2 class="text-[#22c55e] font-semibold text-lg under-ani"> Graphic Design</h2>
                  <div class="">
                    <RightArrow />
                  </div>
                </div>

              </li>
            </ul>
          </li>
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