import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Wm from '../assets/Wrong.png';

const NotFound = () => {
  return (
    <>
    <Navbar />
    <div className="full">

    <div className="lg:p-56 md:p-12 grid lg:grid-cols-2 gap-4 ">

      <div className=" md:text-left py-10 px-[24px] text-[#1c1e21]">
            <h1 className="text-[46px]/[48px] md:text-[44px]/[62px]">
              404.
              </h1>
              <h1 className="text-[46px]/[48px] md:text-[44px]/[62px] font-normal hyphens-auto mb-2 -tracking-[0.03em]">
              This page
              doesn't exist. 
              </h1>
              <button title='To reach me click here' className=" bg-white hover:text-white mt-8 text-md  text-[#1C1E21] whitespace-nowrap ease-in duration-150 px-[28px] py-[16px] border rounded-full border-[#1c1e21]  rounded-full flex items-center relative overflow-hidden hover-effect">
                        <span>
                           <Link to={"/"}>
                           Return home
                           </Link> 
                        </span>
                    </button>
         </div>
        
      <div className="text-center md:text-left md:mr-8">
            <img src={Wm} alt="wrong png"  />
        </div>


    </div>
    </div>
    </>

  );
};

export default NotFound;