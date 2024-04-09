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
    <footer className='w-full bg-[#FAFAFBFF]'>
      <div className='w-[80%] py-[64px] mx-auto flex justify-between items-start'>
        <img src={logo} alt='' />
        <FooterNav title='Product' list={['Features', 'Pricing']} />
        <FooterNav title='Resources' list={['Blog', 'Webinars']} />
        <FooterNav title='Company' list={['About us', 'Contacts us']} />
        <FooterForm />
      </div>
      <div className='flex items-center justify-between w-[80%] py-[8px] mx-auto border-t-2 border-[#D9D9D9] bg-color-blue'>
        <Select languages={['English', 'Italian', 'German']} />
        <span className='font-poppins font-normal text-base leading-normal text-[#424955]'>
          @2024 Learn Inc. · Privacy · Terms
        </span>
        <div className='flex flex-row justify-center items-center gap-[8px]'>
          <img src={twitter} alt='twitter-logo' />
          <img src={facebook} alt='facebook-logo' />
          <img src={youtube} alt='youtube-logo' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
