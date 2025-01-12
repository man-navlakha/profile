import React from 'react'
import photo from '../assets/photo.jpg'; // Adjust the path as necessary
import '../App.css';



const One = () => {
  return (
    <div class="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                <h1 class="text-5xl font-bold text-gray-900 mb-4">
                Yourrr favvv IT Technician
                </h1>
                <p class="text-lg text-gray-700">
                that you can trust, and rely on. Whether you need help with computer repairs, network setup, or software installation, I can help.
                </p>
                
                <div class="flex justify-center lg:justify-start mt-6">
                <button class="bg-green-500 hover:text-white  ease-in duration-150 p-2 border rounded-full border-[#1c1e21] px-6 py-2 rounded-full flex items-center relative overflow-hidden hover-effect">
      <span>
       Download Resume
      </span>
      <i class="fas fa-download ml-2">
      </i>
     </button>
                <button class=" ml-4 bg-white hover:text-white  ease-in duration-150 p-2 border rounded-full border-[#1c1e21] px-6 py-2 rounded-full flex items-center relative overflow-hidden hover-effect">
      <span>
      Contect me
      </span>
      <i class="fas fa-mobile ml-2">
      </i>
     </button>
     </div>
            </div>
            
   <div class="lg:w-1/2 flex justify-center lg:justify-end">
    <div class="relative">


     <img alt="A mother and child smiling and hugging" class="rounded-lg h-auto w-screen shadow-lg" src={photo}/>


            <div class="absolute top-4 left-4 bg-white rounded-md px-4 py-2 flex items-center shadow">
            <img alt="Profile picture of Ayesha Pawar" class="w-8 h-8 object-cover rounded-full mr-2" src="https://th.bing.com/th/id/OIP.XSZAFm-5JI7nriDLwZqRQQHaE7?w=261&h=180&c=7&r=0&o=5&pid=1.7"/>
            <div>
            <p class="text-sm font-semibold">
                My PC stuck on the boot screen
            </p>
            <p class="text-xs text-right text-gray-500">
                Today, 13:04
            </p>
            <div class="absolute top-3 -left-3 Z-10 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45">
            </div>
            </div>
            <i class="fa-solid fa-message ml-2 text-gray-500">
            </i>
            </div>
                <div class="hidden lg:visible absolute mt-60 top-6 z-10 right-4 bg-white rounded-md px-4 py-2 flex items-center shadow">
                <img alt="Profile picture of Ayesha Pawar" class="w-8 h-8 object-cover rounded-full mr-2" src="https://th.bing.com/th/id/OIP.l-B_s5v5nBp_x034SAjAzgHaEa?w=1024&h=610&rs=1&pid=ImgDetMain"/>
                <div>
                <p class="text-sm font-semibold">
                    Laptop not connecting to the internet
                </p>
                <p class="text-xs text-right text-gray-500">
                    Today, 16:30
                </p>
                <div class="absolute top-3 right-1  transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45">
                </div>
                </div>
                <i class="fa-solid fa-message ml-2 text-gray-500">
                </i>
                </div>

            

     <div class="absolute bottom-52  bg-white rounded-full px-4 py-2 flex left-4 items-center shadow">
      <i class="fas fa-play text-gray-500 mr-2">
      </i>
      <div class="flex items-center">
       <div class="w-24 h-1 bg-gray-300 rounded-full mr-2">
        <div class="w-12 h-1 bg-green-500 rounded-full">
        </div>
       </div>
       <span class="text-xs text-gray-500">
        0:03
       </span>
      </div>
      <img alt="Profile picture of a person" class="w-8 h-8 rounded-full ml-2" src="https://th.bing.com/th/id/OIP.M5-JX2Wq3fC1NLiqBe1j4wHaGl?w=900&h=800&rs=1&pid=ImgDetMain"/>
     
     </div>
     <div class="absolute bottom-1 right-4 bg-white rounded-lg shadow-lg p-2">
      <img alt="A child and an elderly person writing together" class="rounded-lg w-64 h-auto" src="https://i.ytimg.com/vi/eJYofPwxfbw/maxresdefault.jpg"/>
      <p class="text-sm font-semibold">
        Some hardware problem in my Laptop
       </p>
       <p class="text-xs text-right text-gray-500">
        Today, 16:30
       </p>
     </div>
            <div class="absolute top-1/4 right-4 transform -translate-y-1/2">
            <div class="bg-white rounded-full px-4 py-2 flex items-center shadow mb-2">
            <p class="text-sm text-gray-700">
                PC not turning on
            </p>
            <i class="fas fa-check-double text-green-500 ml-2">
            </i>
            </div>
            <div class="bg-white rounded-full px-4 py-2 flex items-center shadow">
            <p class="text-sm text-gray-700">
                Printer not working
            </p>
            <i class="fas fa-check-double text-green-500 ml-2">
            </i>
            </div>
            </div>
                                    <div class="absolute top-1/2 right-4 transform -translate-y-1/2 mt-16">
                                    <i class="fas fa-star text-yellow-500 text-2xl">
                                    </i>
                                    </div>
    </div>
   </div>
  </div>
  )
}

export default One
