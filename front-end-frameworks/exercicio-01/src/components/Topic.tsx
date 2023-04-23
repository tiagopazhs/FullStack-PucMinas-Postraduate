import React from 'react';

interface Props {
  title: string;
}

const Topic: React.FC<Props> = ({ title }) => {
  return (
    <li className='p-2'>
      <a href="Topic 1" className="text-sm text-gray-800 hover:text-gray-600">{title}</a>
    </li>
  );
};

export default Topic;