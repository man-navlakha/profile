import React from 'react'
import Navbar from '../../compo/Navbar'
import Footer from '../../compo/Footer'
import ho from '../../assets/ho.png';
import mho from '../../assets/mho.png';
import hs from '../../assets/hs.png';
import mhs from '../../assets/mhs.png';

import FeatureSection from '../../compo/FeatureSection'

const Parshwanath = () => {
  return (
    <div>
      <Navbar />
      <div className="px-6 sm:px-10 py-8 w-full">
      <div loading="lazy" className="w-full max-w-screen rounded-3xl h-[90vh] sm:h-screen bg-cover bg-center relative m-2 sm:m-6 flex flex-col sm:flex-row items-center justify-start bg-mobile-bg sm:bg-desktop-bg">

          {/* Left Text Content */}
          <div  className="lg:w-1/2 text-left bg-gradient-to-b from-[#fcf5eb] via-[#fcf5eb]/80 to-[#fcf5eb]/0 lg:bg-gradient-to-r from-[#fcf5eb] via-[#fcf5eb]/60 to-transparent py-6 mt-0 md:mt-1  lg:-mt-1/2 lg:text-left mb-0 py-6 lg:mb-0">
                <h1 className="text-4xl lg:text-4xl font-bold text-gray-900 px-12 py-2">
             Parshwanath Solutions
            </h1>
            <p className="text-md text-gray-700 px-12">
              That you can trust and rely on. Whether you need help building or repair Computer & Laptop .
            </p>

            <div className="flex flex-col gap-2 lg:flex-row justify-center lg:justify-start mt-3 px-12 text-md lg:text-base w-screen">
              <a href='' >
                <button title='If do you want to download my resume click here' className="bg-green-500 hover:text-white whitespace-nowrap  ease-in duration-150 px-4 py-3 border rounded-full border-[#1c1e21]  rounded-full flex items-center relative overflow-hidden hover-effect">
                  <span> Download Resume </span>
                  <i className="fas fa-download ml-2">
                  </i>
                </button>
              </a>
              <a href="/contect">
                <button title='To reach me click here' className=" bg-white hover:text-white  whitespace-nowrap ease-in duration-150 px-4 py-3 border rounded-full border-[#1c1e21]  rounded-full flex items-center relative overflow-hidden hover-effect">
                  <span>
                    Contect me
                  </span>
                  <i className="fas fa-mobile ml-2">
                  </i>
                </button>
              </a>
            </div>
          </div>

          {/* Right-side floating chat elements */}
          <div className="absolute top-20 right-10 space-y-4 text-sm max-w-xs">
            {/* Message 1 */}

          </div>
        </div>

      </div>
      <div className="text-center flex flex-col justify-center font-semibold text-gray-800  mx-[10%]">
      <img src={ho} className='object-scale-down w-auto hidden lg:block md:hidden sm:hidden' alt=""  />
      <img src={mho} className='object-scale-down w-auto lg:hidden sm:block  md:block' alt=""  />
      <div className='pt-4 pb-8'>
        <h2 className="text-[30px]/[32px] md:text-[60px]/[62px] p-6 font-normal hyphens-auto mb-2 -tracking-[0.03em]">
          Skilled IT pro with a solid background in desktop and system support. Focuses on keeping things running.
          {/* Skilled frontend developer with a solid background in building responsive, user-friendly interfaces. Focused on creating seamless digital experiences that just work. */}
          {/* Frontend developer with a strong focus on responsive, user-friendly interfaces and smooth digital experiences. */}
        </h2>


      </div>
      <img src={hs} className='object-scale-down w-auto hidden lg:block md:hidden sm:hidden' alt=""  />
      <img src={mhs} className='object-scale-down w-auto lg:hidden sm:block  md:block' alt=""  />
    </div>
      <div className="mx-auto max-w-max w-full p-6 flex flex-col justify-center justify-center-safe ">
        <FeatureSection
          title="Parshwanath Solutions"
          description="In his role as an Information Technology Help Desk Technician, he maintained 99.9% system uptime, resolved 60+ hardware/software issues, provided Windows/Linux OS configuration and Office 365 support, managed service desk operations, documented processes, and installed/maintained IT hardware."
          image="psf.png"
          
        />
      </div>

      <Footer />
    </div>
  )
}

export default Parshwanath
