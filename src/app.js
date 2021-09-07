import React from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Submenu from './components/Submenu';

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu/>
    </div>
  );
};

export default App;
