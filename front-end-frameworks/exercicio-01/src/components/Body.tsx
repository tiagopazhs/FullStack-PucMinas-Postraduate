import React from 'react';
import Article from './Article';
import Sidebar from './Sidebar';

const Body: React.FC = () => {
  return (
    <div className="flex justify-between items-center ml-5 mr-5">
      <div className="h-screen flex flex-col justify-center items-center">
        <Article ArtImg='https://img.icons8.com/fluency/256/positive-dynamic.png' ArtTitle='The Advantages of Implementing AI in Business' ArtTxt='AI technology is revolutionizing the way businesses operate. It can streamline processes, reduce costs, and improve efficiency. With AI, companies can analyze data to make better decisions, automate tasks, and improve customer experiences. Implementing AI can give companies a competitive edge in the market.' />
        <Article ArtImg='https://img.icons8.com/color/256/cyborg.png' ArtTitle='AI in Healthcare: Transforming Patient Care' ArtTxt='AI is transforming the healthcare industry by providing innovative solutions for patient care. It can analyze vast amounts of data to detect patterns and make predictions, enabling earlier disease diagnosis and personalized treatment plans. AI can also automate administrative tasks, freeing up healthcare professionals to focus on patient care. With AI, the future of healthcare is brighter than ever.' />
        <Article ArtImg='https://img.icons8.com/ios-filled/256/machine-learning.png' ArtTitle='AI and Education: The Future of Learning' ArtTxt='AI technology is transforming the way we learn by providing personalized and adaptive learning experiences. It can analyze student data to identify strengths and weaknesses and create personalized learning paths. AI can also provide virtual tutors and learning assistants to enhance the learning experience. With AI, education is becoming more accessible and effective for all learners.' />
      </div>
      <div className='w-2/5'>
        <Sidebar />
      </div>
    </div>
  );
};

export default Body;