import React from 'react'
import ho from '../assets/ho.png'; 
import mho from '../assets/mho.png'; 
import hs from '../assets/hs.png'; 
import mhs from '../assets/mhs.png'; 

const About = () => {
  return (
    <div class="text-center mx-54 lg:text-3xl text-xl font-semibold text-gray-800 p-12">
    <img src={ho} className='object-scale-down w-auto hidden lg:block md:hidden sm:hidden' alt="" srcset="" />
    <img src={mho} className='object-scale-down w-auto lg:hidden sm:block  md:block' alt="" srcset="" />
    <div className='pt-4 pb-8'>
    I'm a full-stack engineer helping digital founders build unique web experiences that make their products stand out and attract more investors.

I specialize in crafting pixel-perfect frontend applications.

Off the clock, I dive into photography, geek out on the latest gadgets , and play games like a 12-year-old.
</div>
    <img src={hs} className='object-scale-down w-auto hidden lg:block md:hidden sm:hidden' alt="" srcset="" />
    <img src={mhs} className='object-scale-down w-auto lg:hidden sm:block  md:block' alt="" srcset="" />
    </div>
  )
}

export default About
