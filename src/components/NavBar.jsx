import React from 'react';

import logo from '../asset/img/logo.png';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { handleOpenSidebar, handleCloseSidebar, handleOpenSubmenu, handleCloseSubmenu } = useGlobalContext();

  const handleDisplaySubmenu = e => { 
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3; 
    handleOpenSubmenu(page, {center, bottom });
  };

  const handleSubmenu = e => {
    if(!e.target.classList.contains('link-btn')) {
      handleCloseSubmenu()
    }
    
  };

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <h5>Sapar delivery</h5>
          <button className='btn toggle-btn' onClick={handleOpenSidebar}>
            <FaBars />            
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={handleDisplaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={handleDisplaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={handleDisplaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn sign-in'>Baixar agora</button>
      </div>
    </nav>
  );
};

export default Navbar;
