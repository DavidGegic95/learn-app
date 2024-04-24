// import React from 'react';
import videoImg from '../../assets/video.svg';
import Button from '../../components/Button/Button';
import { headerStyle, purpleButtonStyle } from '../../styles-for-tailwind';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-[32px] items-center justify-center py-[64px] w-[80%] mx-auto'>
      <h1 className={headerStyle}>Let's start learning</h1>
      <p className='w-[780px] text-center  font-poppins font-normal text-base leading-9 text-center text-[#9095A0]'>
        Welcome to Learn Platform - where every day is a day to learn. Dive into
        the vast <br /> ocean of knowledge and empower yourself with the tools
        for a <br />
        successful tomorrow. Happy learning!
      </p>
      <img className='mt-[16px]' src={videoImg} alt='' />
      <div className='bg-image mt-[124px] flex flex-col items-center justify-center gap-[16px]'>
        <h1 className='font-montserrat font-semibold text-[48px] leading-17 text-center text-[#6355D8]'>
          Join us
        </h1>
        <p className='font-poppins font-normal text-base leading-7 text-center text-[#171A1F]'>
          Qui ut exercitation officia proident enim non tempor tempor <br />{' '}
          ipsum ex nulla ea adipisicing sit consequat enim <br /> elit cupidatat
          o
        </p>
        <Button text='Join us' type='button' className={purpleButtonStyle} />
      </div>
    </div>
  );
};

export default HomePage;
