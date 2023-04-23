import React from 'react';
import Topic from './Topic';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 bg-orange-200">
      <h1 className="text-2xl font-bold text-gray-800">Logo</h1>
      <div className="flex flex-col items-center">
        <ul className="flex space-x-4">
          <Topic title="Learning" />
          <Topic title="Robotics" />
          <Topic title="Processing" />
          <Topic title="Cognition" />
        </ul>
        <div className="flex items-center border rounded-md px-2 py-1 border-black ">
          <input className="bg-transparent focus:outline-none" type="text" placeholder="Search" />
          <img className='w-7' alt='search button' src='https://img.icons8.com/windows/256/search.png' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;