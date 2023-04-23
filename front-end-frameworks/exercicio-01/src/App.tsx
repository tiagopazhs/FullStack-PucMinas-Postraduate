import './styles.css';
import React from 'react';
import { FC } from 'react'
import Navbar from './components/Navbar';

const App: FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="text-lg text-cyan-700">
        Hello world!
      </div>
    </div>
  );
}

export default App;