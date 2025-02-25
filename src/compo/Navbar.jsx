import React, { useState, useEffect, useRef } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const boxRef = useRef(null);

  const handleScroll = () => {
    if (boxRef.current.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

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

      <nav
        ref={boxRef}
        onScroll={handleScroll}
        className={`px-8 transition-all duration-300 ease-in-out 
    ${submenuOpen ? 'bg-white h-screen' : 'bg-[rgba(252,245,235,0.8)]'} 
    ${isScrolled ? "border-b-2 border-black" : "border-none"} 
    scroll-mt-16 border-b-gray-200 hidden lg:block sticky top-0 backdrop-blur-sm p-4 z-50`}
      >

        <div className="flex items-center">

          <Link to="/" >
            <div className="flex-none text-green-600 text-xl mr-8 font-bold">Man Navlakha</div>
          </Link>

          <div className=" shrink  mx-auto">
            <ul className="flex space-x-8 shrink  items-center cursor-pointer ease-in duration-150 text-lg">
              <Link>
                <li className="flex items-center  hover:underline-offset-4 decoration-green-500 hover:underline hover:ease-in hover:duration-150  cursor-pointer" onClick={toggleFeatures}>
                  Experiances

                  <div className="svg">
                    <svg className={`${submenuOpen ? 'hidden' : 'visible'}`} width="32px" height="32px" viewBox="-1.68 -1.68 27.36 27.36" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000"  ></path> </g></svg>
                    <svg className={`${submenuOpen ? 'visible' : 'hidden'}`} width="32px" height="32px" viewBox="-1.68 -1.68 27.36 27.36" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, -1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000"  ></path> </g></svg>

                  </div>

                  {/* <i className={`fas ${submenuOpen ? 'fa-minus' : 'fa-plus'} p-2 hover:no-underline no-underline text-sm ease-in duration-150`} id="plus-icon"></i> */}
                </li>
              </Link>

              <li className="hover:underline-offset-4 decoration-green-500 hover:underline hover:ease-in hover:duration-150 ">
                <Link to={"#projects"}>
                  Projects
                </Link>
              </li>
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
            <div className="hover:bg-green-500 text-[#1c1e21]  fill-green-500 hover:fill-[#1c1e21]    hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
              <div className="">
                <It />
              </div>
              <h2 className="text-xl font-semibold mb-2">Information Technology Help Desk Technician</h2>
              <p className=" mb-4">IT Hardware releted solutions</p>
              <div className="">
                {/* https://www.svgrepo.com/svg/459159/arrow-top-right  icon size - 64 , padding - 35%, Thinkness - 60%, color - # 1c1e21 */}
                <svg width="40px" height="40px" viewBox="-8.75 -8.75 42.50 42.50" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(45)"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M9 8.5H16.5V16" stroke="#1c1e21"></path> <path d="M16.5 8.5L7 18" stroke="#1c1e21"></path> </g></svg>
              </div>
            </div>
          </li>

          <li className="">
            <div className="hover:bg-green-500   fill-green-500 hover:fill-[#1c1e21]    text-[#1c1e21] hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
              <div>
                <Web />
              </div>
              <h2 className="text-xl font-semibold mb-2">Web Development</h2>
              <p className=" mb-4">End-to-end web development support</p>
              <div className="">
                {/* https://www.svgrepo.com/svg/459159/arrow-top-right  icon size - 64 , padding - 35%, Thinkness - 60%, color - # 1c1e21 */}
                <svg width="40px" height="40px" viewBox="-8.75 -8.75 42.50 42.50" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(45)"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M9 8.5H16.5V16" stroke="#1c1e21"></path> <path d="M16.5 8.5L7 18" stroke="#1c1e21"></path> </g></svg>
              </div>
            </div>
          </li>

          <li className="">
            <div className="hover:bg-green-500  fill-green-500 hover:fill-[#1c1e21]    text-[#1c1e21] hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
              <div >
                <Android />
              </div>
              <h2 className="text-xl font-semibold mb-2">Android Development</h2>
              <p className=" mb-4">A simple application using android studio</p>
              <div className="">
                {/* https://www.svgrepo.com/svg/459159/arrow-top-right  icon size - 64 , padding - 35%, Thinkness - 60%, color - # 1c1e21 */}
                <svg width="40px" height="40px" viewBox="-8.75 -8.75 42.50 42.50" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(45)"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M9 8.5H16.5V16" stroke="#1c1e21"></path> <path d="M16.5 8.5L7 18" stroke="#1c1e21"></path> </g></svg>
              </div>
            </div>
          </li>
          <li className="">
            <div className="hover:bg-green-500  fill-green-500 hover:fill-[#1c1e21]    text-[#1c1e21] hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
              <div className="text-green-500 text-3xl mb-2 hover:">
                <Windows />
              </div>
              <h2 className="text-xl font-semibold mb-2">Windows Application</h2>
              <p className=" mb-4">A .net & c# application that makes business solutions</p>
              <div className="">
                {/* https://www.svgrepo.com/svg/459159/arrow-top-right  icon size - 64 , padding - 35%, Thinkness - 60%, color - # 1c1e21 */}
                <svg width="40px" height="40px" viewBox="-8.75 -8.75 42.50 42.50" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(45)"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M9 8.5H16.5V16" stroke="#1c1e21"></path> <path d="M16.5 8.5L7 18" stroke="#1c1e21"></path> </g></svg>
              </div>
            </div>
          </li>

          <li className="">
            <div className="hover:bg-green-500  fill-green-500 hover:fill-[#1c1e21]    text-[#1c1e21] hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
              <div className="">
                <Python />
              </div>
              <h2 className="text-xl font-semibold mb-2">Python Development</h2>
              <p className=" mb-4">A windows application configration & development </p>
              <div className="">
                {/* https://www.svgrepo.com/svg/459159/arrow-top-right  icon size - 64 , padding - 35%, Thinkness - 60%, color - # 1c1e21 */}
                <svg width="40px" height="40px" viewBox="-8.75 -8.75 42.50 42.50" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(45)"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M9 8.5H16.5V16" stroke="#1c1e21"></path> <path d="M16.5 8.5L7 18" stroke="#1c1e21"></path> </g></svg>
              </div>
            </div>
          </li>

          <li className="">
            <div className="hover:bg-green-500  fill-green-500 hover:fill-[#1c1e21]    text-[#1c1e21] hover:border-[#111b21] w-[253px] p-4 border rounded-3xl border border-[#cec9c1] flex flex-col items-start">
              <div className="text-green-500 text-3xl mb-2 hover:">
                <Graphic />
              </div>
              <h2 className="text-xl font-semibold mb-2">Graphic Design</h2>
              <p className=" mb-4">Designing Logo, Mockups, PNG icons, etc</p>
              <div className="">
                {/* https://www.svgrepo.com/svg/459159/arrow-top-right  icon size - 64 , padding - 35%, Thinkness - 60%, color - # 1c1e21 */}
                <svg width="40px" height="40px" viewBox="-8.75 -8.75 42.50 42.50" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(45)"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M9 8.5H16.5V16" stroke="#1c1e21"></path> <path d="M16.5 8.5L7 18" stroke="#1c1e21"></path> </g></svg>
              </div>
            </div>
          </li>
        </ul>
      </nav>

















      {/* For Mobile */}
      <div className={`${menuOpen ? 'bg-[#1c1e21] border-[#9e9a93] fixed w-full' : 'bg-[rgba(252,245,235,0.8)] sticky top-0'}  ease-in duration-150 lg:hidden backdrop-blur-sm p-4 z-50 border-b border-[#cec9c1] flex items-center justify-between p-2`}>

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
      <div id="fullscreen-menu" className={`fixed divide-y ease-in duration-150 z-40  inset-0 bg-[#1c1e21] bottom-0 flex h-screen  ${menuOpen ? '' : 'hidden'}`}>
        {/* <i
          id="close-icon"
          className="fas fa-times absolute top-4 right-4  ease-in duration-150  text-white text-xl"
          onClick={toggleMenu}
        ></i> */}
        <ul className="divide-y text-white  ease-in duration-150 mt-16 w-screen overflow-scroll bottom-0 text-2xl">
          <li className="p-4 px-6 hover:bg-[#21262d]">
            <Link to="/" >
              Home
            </Link></li>
          <li className="p-4 px-6 hover:bg-[#21262d] flex flex-col cursor-pointer" onClick={toggleFeatures}>
            <div className="svg flex items-center justify-between">
              Experiances
              <svg className={`${submenuOpen ? 'hidden' : 'visible'}`} width="32px" height="32px" viewBox="-5.76 -5.76 35.52 35.52" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#fff" ></path> </g></svg>
              <svg className={`${submenuOpen ? 'visible' : 'hidden'}`} width="32px" height="32px" viewBox="-12.8 -12.8 57.60 57.60" fill="#fff"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><path className="puchipuchi_een" d="M26,16c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,14,26,14.896,26,16z"></path> </g></svg>

            </div>


            <ul className={` ${submenuOpen ? '' : 'hidden'} mt-2`} id="features-submenu">

              <li className='mt-4 '>
                <div className="fill-green-500  text-[#1c1e21] flex justify-start ">
                  <div className="w-[32]">
                    <It />
                  </div>

                  <h2 className="text-[#22c55e] font-semibold text-lg underline-offset-4
  under-ani"> IT help desk support</h2>
                  <div className="">
                    <RightArrow />
                  </div>
                </div>

              </li>
              <li className='mt-4'>
                <div className="fill-green-500  text-[#1c1e21] flex justify-start">
                  <div className="w-[32]">
                    <Web />
                  </div>
                  <h2 className="text-[#22c55e] font-semibold text-lg underline-offset-4
  under-ani"> Web Development</h2>
                  <div className="">
                    <RightArrow />
                  </div>
                </div>

              </li>
              <li className='mt-4'>
                <div className="fill-green-500  text-[#1c1e21] flex justify-start">
                  <div className="w-[32]">
                    <Android />
                  </div>
                  <h2 className="text-[#22c55e] font-semibold text-lg underline-offset-4
  under-ani"> Android Development</h2>
                  <div className="">
                    <RightArrow />
                  </div>
                </div>

              </li>
              <li className='mt-4'>
                <div className="fill-green-500  text-[#1c1e21] flex justify-start">
                  <div className="w-[32]">
                    <Windows />
                  </div>
                  <h2 className="text-[#22c55e] font-semibold text-lg underline-offset-4
  under-ani"> Windows Application</h2>
                  <div className="">
                    <RightArrow />
                  </div>
                </div>

              </li>
              <li className='mt-4'>
                <div className="fill-green-500  text-[#1c1e21] flex justify-start">
                  <div className="w-[32]">
                    <Python />
                  </div>
                  <h2 className="text-[#22c55e] font-semibold text-lg underline-offset-4
  under-ani"> Python  Development</h2>
                  <div className="">
                    <RightArrow />
                  </div>
                </div>

              </li>
              <li className='mt-4'>
                <div className="fill-green-500  text-[#1c1e21] flex justify-start">
                  <div className="w-[32]">
                    <Graphic />
                  </div>
                  <h2 className="text-[#22c55e] font-semibold text-lg underline-offset-4
 under-ani"> Graphic Design</h2>
                  <div className="">
                    <RightArrow />
                  </div>
                </div>

              </li>
            </ul>
          </li>
          <li className="p-4 px-6 hover:bg-[#21262d] ">  <Link to={"/projects"}>
            Projects
          </Link></li>
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