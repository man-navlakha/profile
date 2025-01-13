import React from 'react'
import photo from '../assets/photo.jpg'; // Adjust the path as necessary
import '../App.css';



const One = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                <h1 className="text-5xl font-bold text-gray-900 mb-4 p-2">
                Yourrr favvv IT Technician
                </h1>
                <p className="text-lg text-gray-700 pr-2 pl-2">
                that you can trust, and rely on. Whether you need help with computer repairs, network setup, or software installation, I can help.
                </p>
                
                <div className="flex justify-center lg:justify-start mt-6 p-4 text-sm lg:text-base w-screen">
                <button className="bg-green-500 hover:text-white whitespace-nowrap  ease-in duration-150 px-4 py-2 m-2 border rounded-full border-[#1c1e21]  rounded-full flex items-center relative overflow-hidden hover-effect">
      <span>
       Download Resume
      </span>
      <i className="fas fa-download ml-2">
      </i>
     </button>
                <button className=" bg-white hover:text-white  whitespace-nowrap ease-in duration-150 px-4 py-2 m-2 border rounded-full border-[#1c1e21]  rounded-full flex items-center relative overflow-hidden hover-effect">
      <span>
      Contect me
      </span>
      <i className="fas fa-mobile ml-2">
      </i>
     </button>
     </div>
            </div>
            
   <div className="lg:w-1/2 flex justify-center lg:justify-end">
    <div className="relative">


     <img alt="A mother and child smiling and hugging" className="rounded-lg h-auto w-screen shadow-lg" src={photo}/>


            <div className="absolute top-4 left-4 bg-white rounded-md px-4 py-2 flex items-center shadow">
            <img alt="Profile picture of Ayesha Pawar" className="w-8 h-8 object-cover rounded-full mr-2" src="https://th.bing.com/th/id/OIP.XSZAFm-5JI7nriDLwZqRQQHaE7?w=261&h=180&c=7&r=0&o=5&pid=1.7"/>
            <div>
            <p className="text-sm font-semibold">
                My PC stuck on the boot screen
            </p>
            <p className="text-xs text-right text-gray-500">
                Today, 13:04
            </p>
            <div className="absolute top-3 -left-3 Z-10 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45">
            </div>
            </div>
            <i className="fa-solid fa-message ml-2 text-gray-500">
            </i>
            </div>
                <div className="hidden lg:visible absolute mt-60 top-6 z-10 right-4 bg-white rounded-md px-4 py-2 flex items-center shadow">
                <img alt="Profile picture of Ayesha Pawar" className="w-8 h-8 object-cover rounded-full mr-2" src="https://th.bing.com/th/id/OIP.l-B_s5v5nBp_x034SAjAzgHaEa?w=1024&h=610&rs=1&pid=ImgDetMain"/>
                <div>
                <p className="text-sm font-semibold">
                    Laptop not connecting to the internet
                </p>
                <p className="text-xs text-right text-gray-500">
                    Today, 16:30
                </p>
                <div className="absolute top-3 right-1  transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45">
                </div>
                </div>
                <i className="fa-solid fa-message ml-2 text-gray-500">
                </i>
                </div>

            

     <div className="absolute bottom-52  bg-white rounded-full px-4 py-2 flex left-4 items-center shadow">
      <i className="fas fa-play text-gray-500 mr-2">
      </i>
      <div className="flex items-center">
       <div className="w-24 h-1 bg-gray-300 rounded-full mr-2">
        <div className="w-12 h-1 bg-green-500 rounded-full">
        </div>
       </div>
       <span className="text-xs text-gray-500">
        0:03
       </span>
      </div>
      <img alt="Profile picture of a person" className="w-8 h-8 rounded-full ml-2" src="https://th.bing.com/th/id/OIP.M5-JX2Wq3fC1NLiqBe1j4wHaGl?w=900&h=800&rs=1&pid=ImgDetMain"/>
     
     </div>
     <div className="absolute bottom-1 right-4 bg-white rounded-lg shadow-lg p-2">
      <img alt="A child and an elderly person writing together" className="rounded-lg w-64 h-auto" src="https://i.ytimg.com/vi/eJYofPwxfbw/maxresdefault.jpg"/>
      <p className="text-sm font-semibold">
        Some hardware problem in my Laptop
       </p>
       <p className="text-xs text-right text-gray-500">
        Today, 16:30
       </p>
     </div>
            <div className="absolute top-1/4 right-4 transform -translate-y-1/2">
            <div className="bg-white rounded-full px-4 py-2 flex items-center shadow mb-2">
            <p className="text-sm text-gray-700">
                PC not turning on
            </p>
            <i className="fas fa-check-double text-green-500 ml-2">
            </i>
            </div>
            <div className="bg-white rounded-full px-4 py-2 flex items-center shadow">
            <p className="text-sm text-gray-700">
                Printer not working
            </p>
            <i className="fas fa-check-double text-green-500 ml-2">
            </i>
            </div>
            </div>
                                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 mt-16">
                                    <i className="fas fa-star text-yellow-500 text-2xl">
                                    </i>
                                    </div>
    </div>
   </div>
  </div>
  )
}

export default One
