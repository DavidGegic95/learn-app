// import React from 'react';
// import { ReactComponent as FB } from '../../assets/Logo-facebook.svg';
import twitter from '../../assets/Logo-twitter.svg';
import facebook from '../../assets/Logo-facebook.svg';
import youtube from '../../assets/Logo-youtube.svg';
import logo from '../../assets/logo-header.png';
import Select from '../Select/Select';
import FooterNav from '../FooterNav/FooterNav';
import FooterForm from '../FooterForm/FooterForm';

const Footer = () => {
  return (
    <footer className='w-full bg-[#FAFAFBFF] mobile-view-custom'>
      <div className='w-[80%] py-[64px] mx-auto flex justify-between items-start mobile-view-custom mobile-view-p'>
        <img src={logo} alt='learn app logo' className='mobile-view-hidden' />
        <FooterNav
          title='Product'
          routes={['/features', '/pricing']}
          list={['Features', 'Pricing']}
        />
        <FooterNav
          routes={['/blog', '/']}
          title='Resources'
          list={['Blog', 'Webinars']}
        />
        <FooterNav
          routes={['/aboutus', '/']}
          title='Company'
          list={['About us', 'Contacts us']}
        />
        <Select
          className='mobile-view-show'
          list={['English', 'Italian', 'German']}
        />
        <div className='flex flex-row justify-center items-center gap-[8px] mobile-view-show'>
          <img src={twitter} alt='twitter-logo' />
          <img src={facebook} alt='facebook-logo' />
          <img src={youtube} alt='youtube-logo' />
        </div>
        <FooterForm />
      </div>
      <div className=' flex items-center justify-between w-[80%] py-[8px] mx-auto border-t-2 border-[#D9D9D9] bg-color-blue mobile-view-center'>
        <Select
          className='mobile-view-hidden'
          list={['English', 'Italian', 'German']}
        />
        <span className='font-poppins font-normal text-base leading-normal text-[#424955]'>
          @2024 Learn Inc. · Privacy · Terms
        </span>
        <div className='flex flex-row justify-center items-center gap-[8px] mobile-view-hidden'>
          <img src={twitter} alt='twitter-logo' />
          <img src={facebook} alt='facebook-logo' />
          <img src={youtube} alt='youtube-logo' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
