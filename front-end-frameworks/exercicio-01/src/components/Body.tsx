import React from 'react';
import Article from './Article';
import Sidebar from './Sidebar';

const Body: React.FC = () => {
  return (
    <div className="flex justify-between items-center ml-5 mr-5">
      <div>
        <Article />
        <Article />
        <Article />
      </div>
      <div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Body;