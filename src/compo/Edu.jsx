import React from 'react'
import sulogo from '../assets/su logo mobile-01.png'
import Aright from './svg/Arrow.jsx/Aright'

const Edu = () => {
  return (
    <div>










<div className="lg:p-36 md:p-10 grid lg:grid-cols-2 gap-4 justify-center justify-items-center-safe">

<div className=" md:text-left py-10 px-[24px] text-[#1c1e21]">
      <h1 className="text-[46px]/[48px] font-bold mb-1 md:text-[44px]/[48px]">
      Bachelor of Computer Application
        </h1>
        <h1 className="text-[30px]/[32px] md:text-[36px]/[39px] font-normal hyphens-auto mb-2 -tracking-[0.03em]">
        (BCA) in Shreyath University from 2023-2026 get 6.5 CGPA
        </h1>
        <a className='text-lg justify-right flex  p-2  text-right underline-offset-4 underline text-[#3c0e40] hover:text-[#3crr00]'>Learn more <span className='p-2'><Aright /></span></a> 
   </div>
  
<div className="text-center md:text-left md:mr-8">
      <img className=' w-[327px]'  src={sulogo} alt="wrong png" />
  </div>


</div>
      </div>
  )
}

export default Edu
