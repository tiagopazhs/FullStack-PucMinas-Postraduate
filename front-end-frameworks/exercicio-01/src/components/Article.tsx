import React from 'react';

interface Props {
  ArtImg: string;
  ArtTitle: string;
  ArtTxt: string;
}

const Article: React.FC<Props> = ({ArtImg, ArtTitle, ArtTxt}) => {
  return (
    <div className="text-sm text-cyan-700 flex p-3">
      <img className='w-32' alt='article' src={ArtImg}/>
      <div>
        <div className='text font-bold pl-6 pr-6 pt-9'>{ArtTitle}</div>
        <div className='text pl-6 pr-6 pt-1'>{ArtTxt}</div>
      </div>
    </div>
  );
};

export default Article;