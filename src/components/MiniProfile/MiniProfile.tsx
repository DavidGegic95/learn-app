import React, { Dispatch, SetStateAction } from 'react';
import avatarHeader from '../../assets/avatar-header.svg';
import { loggedinObject } from '../../App';
import moonIcon from '../../assets/mini-profile/moon-icon.svg';
import profileIcon from '../../assets/mini-profile/profile-icon.svg';
import SwitchComp from '../ProfileBox/SwitchComp';
import logoutIcon from '../../assets/mobile-nav-logout.svg';

const MiniProfile = ({
  isloggedin,
  setMiniProfile,
}: {
  isloggedin: loggedinObject | null;
  setMiniProfile: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div onClick={() => setMiniProfile(false)} className='custom-fixed'></div>
      <div className='fixed flex flex-col justify-between  top-[10px] right-[10px] w-[256px] h-[367px] bg-[#fff] rounded-[6px] custom-box-shadow-miniprofile'>
        <div className='flex  p-[16px] gap-[16px] border-b-[1px] border-[#DEE1E6] w-full'>
          <img src={avatarHeader} alt='' />
          <div className='w-full'>
            <p className='font-poppins font-bold text-[14px] leading-[22px] text-[#171A1FFF]'>
              {isloggedin?.username}
              <br />
              <span className='font-poppins font-normal text-[12px] leading-[20px] text-[#9095A0FF]'>
                {isloggedin?.email}
              </span>
            </p>
          </div>
        </div>
        <div className='flex h-full flex-col items-start justify-between w-full'>
          <div className='w-full'>
            <div className='flex items-center p-[16px] gap-[8px]'>
              <img src={profileIcon} alt='' />
              My Account
            </div>
            <div className='flex items-center justify-between p-[16px] w-full'>
              <div className='flex gap-[8px]'>
                <img src={moonIcon} alt='' />
                Night mode
              </div>

              <SwitchComp />
            </div>
          </div>
          <div className='flex w-full gap-[8px] border-t-[1px] border-[#DEE1E6] p-[16px]'>
            <img src={logoutIcon} alt='' />
            <span className='font-poppins text-[14px] leading-[22px] text-[#565E6C]'>
              Sign out
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniProfile;
