import React, { Dispatch, SetStateAction } from 'react';
import avatarHeader from '../../assets/avatar-header.svg';
import { loggedinObject } from '../../App';
import moonIcon from '../../assets/mini-profile/moon-icon.svg';
import profileIcon from '../../assets/mini-profile/profile-icon.svg';
import SwitchComp from '../ProfileBox/SwitchComp';
import logoutIcon from '../../assets/mobile-nav-logout.svg';
import { idFromLocalStorage } from './utils';
import { useNavigate } from 'react-router-dom';

const MiniProfile = ({
  isloggedin,
  setMiniProfile,
  setIsLoggedin,
}: {
  isloggedin: loggedinObject | null;
  setMiniProfile: Dispatch<SetStateAction<boolean>>;
  setIsLoggedin: Dispatch<SetStateAction<loggedinObject | null>>;
}) => {
  const navigate = useNavigate();
  const signout = () => {
    let userId = idFromLocalStorage();
    fetch(
      `https://j2xsxqcnd6.execute-api.eu-central-1.amazonaws.com/dev/auth/logout?id=${userId}`
    )
      .then((response: any) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: any) => {
        setIsLoggedin(null);
        localStorage.removeItem('user');
        setMiniProfile(false);
        navigate('/');
      })
      .catch((error: any) => {
        console.error('Error:', error);
      });
  };
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
            <div
              onClick={() => {
                setMiniProfile(false);
                navigate('/my-account');
              }}
              className='flex items-center p-[16px] gap-[8px] cursor-pointer'
            >
              <img src={profileIcon} alt='profile icon' />
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
          <div
            onClick={signout}
            className='flex w-full gap-[8px] border-t-[1px] border-[#DEE1E6] p-[16px] cursor-pointer'
          >
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
