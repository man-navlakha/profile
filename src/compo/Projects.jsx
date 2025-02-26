import React from 'react';
import RightArrow from './svg/right';

function scrollLeft() {
  const container = document.getElementById('cardContainer');
  container.scrollBy({ left: -330, behavior: 'smooth' });
}

function scrollRight() {
  const container = document.getElementById('cardContainer');
  container.scrollBy({ left: 330, behavior: 'smooth' });
}

const Projects = () => {
  return (
    <div className="bg-white container cardContainer py-[96px] px-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="mb-6 pl-12  md:mb-0">
          <h2 className="text-[60px]/[50px] p-6 font-normal mb-2 -tracking-[0.03em]">
            Here are some projects
          </h2>
          <p className="text-lg p-6 text-gray-600 mb-4">
            that i made as a BCA student
          </p>

          <div className='p-6'>
            <div className="flex space-x-2">
              <button className=" md:text-[18px] p-[25px] flex items-center justify-center border border-gray-400 rounded-full" onClick={scrollLeft}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className=" md:text-[18px] p-[25px] flex items-center justify-center border border-gray-400 rounded-full" onClick={scrollRight}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

        </div>
        <div id="cardContainer" className="flex -m-4 overflow-x-auto block lg:w-[1080px] md:w-[320px] max-w-full p-4 space-x-4">

          <div >
            <img className='rounded-3xl' src="https://scontent.whatsapp.net/v/t39.8562-34/409923743_807244881161302_7535830063297760273_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=DspqiAKRiZMQ7kNvgE45JV6&_nc_oc=Adjl_trtDbifPMCnARCdeoFsSNMMqR01bEJbqnikdFaJs0PrXjcxyvpL3U4RzG3kis8&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=AhoJ30iNVG7G0Kut4t7Fw8F&oh=01_Q5AaIF6JR3D_8FaWXziIu8ha1T1Co2-VqzXp06eCL1yRRNs8&oe=67C4EE8A" alt="" />

            <div className=" flex-shrink-0 flex flex-col">
              <h1 className="text-2xl font-bold mb-2">
                System App for Windows
              </h1>
              <div className="mt-auto"> {/* Pushes the link to the bottom */}
                <a
                  className="text-blue-500 underline flex items-center"
                  href="https://github.com/man-navlakha/system-app"
                >
                  View Project
                  <RightArrow />
                </a>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Projects;