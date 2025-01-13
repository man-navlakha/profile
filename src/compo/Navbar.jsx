import React, { useState, useEffect } from 'react';

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

      <nav className="px-12 hidden lg:block md:hidden sm:hidden sticky top-0 bg-[rgba(252,245,235,0.8)] backdrop-blur-sm p-4 z-50 border-b-2 border-[#cec9c1]">

        <div className="flex items-center">


          <div className="text-green-600 text-2xl font-bold">Man Navlakha</div>


          <div className="  mx-auto">
            <ul className="flex space-x-4 items-center cursor-pointer ease-in duration-150 text-xl">
              <li className="flex items-center  hover:underline-offset-4 decoration-green-500 hover:underline hover:ease-in hover:duration-150  cursor-pointer" onClick={toggleFeatures}>
                Experiances
                <i className={`fas ${submenuOpen ? 'fa-minus' : 'fa-plus'} p-2 hover:no-underline no-underline text-sm ease-in duration-150`} id="plus-icon"></i>
              </li>
              <ul className={` ${submenuOpen ? '' : 'hidden'} flex space-x-4 `} id="features-submenu">
                <li className="hover:underline-offset-4 decoration-green-500 hover:underline hover:ease-in hover:duration-150 ">Feature 1</li>
                <li className="hover:underline-offset-4 decoration-green-500 hover:underline hover:ease-in hover:duration-150 ">Feature 2</li>
                <li className="hover:underline-offset-4 decoration-green-500 hover:underline hover:ease-in hover:duration-150 ">Feature 3</li>
              </ul>
              <li className="hover:underline-offset-4 decoration-green-500 hover:underline hover:ease-in hover:duration-150 ">Projects</li>
              <li className="hover:underline-offset-4 decoration-green-500 hover:underline hover:ease-in hover:duration-150 ">Skills</li>
              <li className="hover:underline-offset-4 decoration-green-500 hover:underline hover:ease-in hover:duration-150 ">Download Resume </li>
              <li>
              </li>
            </ul>
          </div>


          <button className="bg-green-500 hover:text-white whitespace-nowrap  ease-in duration-150 px-4 py-2 m-2 border rounded-full border-[#1c1e21]  rounded-full flex items-center relative overflow-hidden hover-effect">
            <span>Hire me!</span>
            <i className="fas fa-briefcase ml-2"></i>
          </button>


        </div>
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
          <div
            className={` ease-in duration-150 text-[#25d366] font-bold text-2xl font`}>
            Man Navlakha</div>
        </div>
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