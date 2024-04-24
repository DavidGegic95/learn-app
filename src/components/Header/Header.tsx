// import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-header.png';

const Header = () => {
  return (
    <header className='w-full bg-white border border-gray-300  flex items-center justify-start p-3 gap-[32px]'>
      <img src={logo} alt='logo-header' />
      <nav className='w-full flex justify-between items-center'>
        <div className='flex items-center justify-between gap-[16px]'>
          <Link
            className='font-poppins font-normal font-medium text-base leading-6 text-[#565E6C]'
            to={'/blog'}
          >
            Blog
          </Link>
          <Link
            className='font-poppins font-normal font-medium text-base leading-6 text-[#565E6C]'
            to={'/pricing'}
          >
            Pricing
          </Link>
          <Link
            className='font-poppins font-normal font-medium text-base leading-6 text-[#565E6C]'
            to={'/aboutus'}
          >
            About us
          </Link>
        </div>

        <div className='flex items-center justify-between'>
          <Link
            className='py-[6px] px-[12px] flex items-center justify-center font-poppins text-base leading-6 font-normal text-[#6355D8FF] bg-[#00000000] opacity-100 border- rounded-md'
            to={'/joinus'}
          >
            Join us
          </Link>
          <Link
            className='py-[6px] px-[12px] flex items-center justify-center font-poppins text-base leading-6 font-normal text-white bg-[#6355D8FF] opacity-100 border-none rounded-md hover:text-white hover:bg-[#4D3ED3FF] disabled:opacity-40 button-purple-active'
            to={'/login'}
          >
            Sign us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
