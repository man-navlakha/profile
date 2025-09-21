import React from 'react'
import sulogo from '../assets/su logo mobile-01.png'
import Aright from './svg/Arrow.jsx/Aright'

const Edu = () => {
  return (
    <section className="w-full max-h-screen -my-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 order-2 px-6 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Bachelor of Computer Application
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                (BCA) in Shreyarth University
                <span className="block mt-2 text-gray-600">
                  2023-2026 • CGPA: 6.5
                </span>
              </p>
            </div>
            
            <a 
              href="#" 
              className="group inline-flex items-center space-x-3 text-lg text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
            >
              <span className="underline underline-offset-4">Learn more</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                <Aright />
              </span>
            </a>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img 
                src={sulogo} 
                alt="Shreyarth University Logo" 
                className="w-full h-94"
                loading="lazy"
              />
              {/* Optional: Add a decorative background element */}
              {/* <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-gray-200 to-purple-50 rounded-full blur-3xl opacity-50" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Edu
