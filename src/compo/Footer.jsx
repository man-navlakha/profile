import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='bg-[#111b21] text-white min-h-32 text-center p-4 h-full'>
      <div className='w-screen h-8 bg-[#fcf5eb] rounded-b-2xl   -m-4'>
        <div className='flex md:flex-col flex-row '>
            <div >

            </div>
        </div>
      </div>

 <div className='hidden flex flex-col gap-4 items-center content-center justify-between md:flex-col lg:flex-row mx-14 my-10'>
          <Link to="/" >
            <div className="flex-none text-green-600 text-xl mr-8 font-bold">Man Navlakha</div>
          </Link>
          <div className='flex justify-between gap-2 '>

            {/* <Link to="/" >
              <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000" alt="" />
            </Link> */}
            <Link to="https://www.linkedin.com/in/navlakhaman/" className='w-9 bg-white rounded' >
              <img src="https://img.icons8.com/?size=100&id=447&format=png&color=000000" alt="" />
            </Link>
            <Link to="https://figma.com/@mannavlakha" className='w-9 bg-white rounded' >
              <img src="https://img.icons8.com/?size=100&id=GflC6KLkdd0Y&format=png&color=000000" alt="" />
            </Link>
            <Link to="https://github.com/man-navlakha/" className='w-9 bg-white rounded' >
              <img src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000" alt="" />
            </Link>
          </div>
          <Link to="/" >
            <div className="flex-none text-white">2025</div>
          </Link>
        </div>

    </div>
  )
}

export default Footer

