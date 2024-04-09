// import React from 'react';
import logo from '../../assets/logo-header.png';

const Header = () => {
  return (
    <header className='bg-white border border-gray-300  flex items-center justify-start p-3'>
      <img src={logo} alt='logo-header' />
    </header>
  );
};

export default Header;
