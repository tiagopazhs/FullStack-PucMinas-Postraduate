import React from 'react';
import Topic from './Topic';

const Sidebar: React.FC = () => {
  return (
      <ul className="border border-teal-400">
        <Topic title="Section1" />
        <Topic title="Section2" />
        <Topic title="Section3" />
        <Topic title="Section4" />
        <Topic title="Section5" />
        <Topic title="Section6" />
        <Topic title="Section7" />
        <Topic title="Section8" />
        <Topic title="Section9" />
        <Topic title="Section10" />
        <Topic title="Section11" />
        <Topic title="Section12" />
      </ul>
  );
};

export default Sidebar;