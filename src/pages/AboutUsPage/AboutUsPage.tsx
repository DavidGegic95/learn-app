// import React from 'react';
import aboutUsImg from '../../assets/about-us.svg';
import AboutProfile from '../../components/AboutProfile/AboutProfile';
import { grayText, headerStyle } from '../../styles-for-tailwind';
import { styleClasses, profilesData } from './utils';

const AboutUsPage = () => {
  return (
    <div className='py-[64px] w-[80%] mobile-view-w-90 mx-auto'>
      <h1 className={headerStyle}>About Us</h1>
      <p className={grayText + ' text-center  my-[64px]'}>
        Welcome to the 'About Us' section of Learn Platform, where we aim to
        provide you with a deeper <br /> understanding of our philosophy,
        values, and mission. Established in 2023, Learn Platform was born out of
        a <br /> passion for learning and a belief in the power of knowledge to
        transform lives.{' '}
      </p>
      <img
        src={aboutUsImg}
        alt=''
        className='w-full aspect-w-1176 aspect-h-600'
      />
      <div className='grid grid-cols-4 gap-5 w-full h-full mobile-view-aboutus'>
        <div className='flex flex-col items-start justify-center w-full px-[8px] gap-[16px]'>
          <h2 className='font-montserrat font-semibold text-4xl leading-17 text-[#171A1F]'>
            Our Team
          </h2>
          <p className='font-poppins font-normal text-base leading-7 text-[#9095A0]'>
            Aliqua ipsum tempor aliqua eiusmod lorem ad labore culpa aliquip
          </p>
        </div>
        {profilesData.map((profile) => {
          return (
            <AboutProfile
              styleClasses={styleClasses}
              key={profile.name}
              profile={profile}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutUsPage;
