import { Link, useLocation } from 'react-router-dom';
import avatar from '../../assets/avatar-mobile-nav.svg';
import xButton from '../../assets/x-mobile-nav.svg';
import logoutIcon from '../../assets/mobile-nav-logout.svg';

import { Dispatch, SetStateAction } from 'react';

const MobileNav = ({
  isClicked,
  setIsClicked,
}: {
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
}) => {
  const location = useLocation();
  const { pathname } = location;
  const linksData = [
    { path: '/blog', text: 'Blog' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/aboutus', text: 'About us' },
    { path: '/home', text: 'My Account' },
  ];
  return (
    <div className={`${isClicked ? ' show-mobile-nav' : ' hide-mobile-nav'}`}>
      <div className='w-full  flex items-center justify-between gap-[16px] p-[16px]'>
        <img src={avatar} alt='' />
        <p className='font-poppins font-normal text-[14px] leading-[22px] text-[#171A1F]'>
          John_12
          <br />
          <span className='font-poppins font-normal text-[12px] leading-[20px] text-[#9095A0]'>
            John_12@gmail.com
          </span>
        </p>
        <button className='' onClick={() => setIsClicked((prev) => !prev)}>
          <img src={xButton} alt='' />
        </button>
      </div>
      <div className='flex h-full flex-col gap-[16px] '>
        {linksData.map((link) => {
          return (
            <Link
              key={link.path}
              className={
                'pl-[16px] font-poppins font-normal font-medium text-base leading-6 text-[#565E6C]' +
                (pathname === link.path
                  ? ' text-[#6355d8] border-left-purple'
                  : '')
              }
              to={link.path}
            >
              {link.text}
            </Link>
          );
        })}
      </div>

      <button
        className='flex gap-[8px] pl-[8px]  pb-[32px] font-poppins font-normal font-medium text-base leading-6 text-[#565E6C]'
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'instant',
          });
          setIsClicked((prev) => !prev);
        }}
      >
        <img src={logoutIcon} alt='' />
        Sign out
      </button>
    </div>
  );
};

export default MobileNav;
