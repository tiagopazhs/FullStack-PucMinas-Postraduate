import './styles.css';
import React from 'react';
import { FC } from 'react'
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import Body from './components/Body';

const App: FC = () => {
  return (
    <div className="App">
      <Navbar />
      <SubNavbar />
      <Body />
    </div>
  );
}

export default App;