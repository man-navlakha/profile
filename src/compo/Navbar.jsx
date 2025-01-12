import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-[rgba(252,245,235,0.8)] backdrop-blur-sm p-4 z-50 border-b-2 border-[#cec9c1]">
      <div className="flex justify-between items-center">
      <div className="text-[#25d366] text-2xl font-bold">Man Navlakha</div>
      <ul className="flex space-x-4">
        <li><Link to="/download" className="text-black bg-[#25d366] p-2 border rounded-full border-[#1c1e21]">Get Resume <i class="fa fa-download" aria-hidden="true"></i></Link></li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;