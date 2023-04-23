import React from 'react';
import Topic from './Topic';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 bg-orange-200">
      <div className="pl-9">
        <img className='w-20' alt='ai logo' src='https://img.icons8.com/color/256/artificial-intelligence.png' />
      </div>
      <div className="flex flex-col items-center pr-4">
        <ul className="flex space-x-4">
          <Topic title="Learning" />
          <Topic title="Robotics" />
          <Topic title="Processing" />
          <Topic title="Cognition" />
        </ul>
        <div className="flex items-center border rounded-md px-2 py-1 border-black ">
          <input className="bg-transparent focus:outline-none placeholder-black" type="text" placeholder="Search"/>
          <img className='w-7' alt='search button' src='https://img.icons8.com/windows/256/search.png' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;