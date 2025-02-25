import React from 'react'
import sulogo from '../assets/su logo mobile-01.png'
import Aright from './svg/Arrow.jsx/Aright'

const Edu = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

        <div className='p-[20px] text-left rounded-md flex flex-col
 flex-nowrap justify-center items-center'>
            
            <p className='text-2xl font-medium
 p-[120px] pb-6'> <h1 className='text-5xl p-2 mb-4'>Education: Bachelor of Computer Application</h1> (BCA) in Shreyath University from 2023-2026 get 8.5 CGPA
<br />
            <a className='text-lg justify-right flex  p-2  text-right underline-offset-4 underline text-[#3c0e40] hover:text-[#3crr00]'>Learn more <span className='p-2'><Aright /></span></a> 
            </p>
        </div>
        <div className='flex flex-wrap justify-center items-center'>
            <img className=' w-[327px]' src={sulogo} alt="" />
            </div>
        </div>
      </div>
  )
}

export default Edu
