import React from 'react';

interface Props {
  title: string;
}

const Topic: React.FC<Props> = ({ title }) => {
  return (
    <li>
      <a href="Topic 1" className="text-gray-800 hover:text-gray-600">{title}</a>
    </li>
  );
};

export default Topic;