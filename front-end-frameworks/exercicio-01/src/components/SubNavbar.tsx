import React from 'react';
import Topic from './Topic';

const SubNavbar: React.FC = () => {
  return (
    <nav className="flex justify-center py-6">
      <ul className="border border-teal-400 flex justify-around items-center w-screen ml-5 mr-5">
        <Topic title="Learning" />
        <Topic title="Robotics" />
        <Topic title="Processing" />
        <Topic title="Cognition" />
      </ul>
    </nav>

  );
};

export default SubNavbar;