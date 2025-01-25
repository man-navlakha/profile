import React from 'react'
import ho from '../assets/ho.png'; 
import mho from '../assets/mho.png'; 
import hs from '../assets/hs.png'; 
import mhs from '../assets/mhs.png'; 

const About = () => {
  return (
    <div className="text-center lg:text-3xl text-xl font-semibold text-gray-800 p-[8px]">
    <img src={ho} className='object-scale-down w-auto hidden lg:block md:hidden sm:hidden' alt=""  />
    <img src={mho} className='object-scale-down w-auto lg:hidden sm:block  md:block' alt=""  />
    <div className='pt-4 pb-8'>
    Skilled IT pro with a solid background in desktop and system support. Focuses on keeping things running. Good at fixing hardware and software problems, setting up operating systems, and looking after network systems. Has experience helping with tech issues for more than 50+ workstations. Make sure they work well and stay secure by taking care of them and upgrading when needed. Known to solve problems well, pay close attention.

</div>
    <img src={hs} className='object-scale-down w-auto hidden lg:block md:hidden sm:hidden' alt=""  />
    <img src={mhs} className='object-scale-down w-auto lg:hidden sm:block  md:block' alt=""  />
    </div>
  )
}

export default About
