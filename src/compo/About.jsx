import React from 'react'
import ho from '../assets/ho.png';
import mho from '../assets/mho.png';
import hs from '../assets/hs.png';
import mhs from '../assets/mhs.png';

const About = () => {
  return (
    <div className="text-center text-gray-800 h-screen flex flex-col justify-center items-center mx-[10%]">
      <img src={ho} className='object-scale-down w-auto hidden lg:block md:hidden sm:hidden' alt=""  />
      <img src={mho} className='object-scale-down w-auto lg:hidden sm:block  md:block' alt=""  />
      <div className='pt-4 pb-8'>
        <h2 className="text-[30px]/[37px] md:text-[60px]/[62px] p-6  hyphens-auto mb-2 -tracking-[0.03em]">
          {/* Skilled IT pro with a solid background in desktop and system support. Focuses on keeping things running. */}
          {/* Skilled frontend developer with a solid background in building responsive, user-friendly interfaces. Focused on creating seamless digital experiences that just work. */}
          Frontend developer with a strong focus on responsive, user-friendly interfaces and smooth digital experiences.
        </h2>


      </div>
      <img src={hs} className='object-scale-down w-auto hidden lg:block md:hidden sm:hidden' alt=""  />
      <img src={mhs} className='object-scale-down w-auto lg:hidden sm:block  md:block' alt=""  />
    </div>
  )
}

export default About
