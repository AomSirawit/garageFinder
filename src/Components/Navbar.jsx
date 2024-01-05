import React from "react";
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 font-semibold">
      <h4 className="text-xl font-bold">Garage<span className='text-blue-500'>Finder</span></h4>
      <ul className="flex space-x-4 text-sm">
        <li className="cursor-pointer"><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li className="cursor-pointer"><Link to="features" smooth={true} duration={500}>Features</Link></li>
        <li className="cursor-pointer"><Link to="reviews" smooth={true} duration={500}>Reviews</Link></li>
        <li className="cursor-pointer"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
        Let's Go
      </button>
    </nav>
  );
}

export default Navbar;
