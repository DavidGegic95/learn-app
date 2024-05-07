import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import avatarHeader from '../../assets/Avatar 36.png';
import moonIcon from '../../assets/mini-profile/moon-icon.svg';
import profileIcon from '../../assets/mini-profile/profile-icon.svg';
import SwitchComp from '../ProfileBox/SwitchComp';
import logoutIcon from '../../assets/mobile-nav-logout.svg';
import { idFromLocalStorage } from './utils';
import { useNavigate } from 'react-router-dom';
import AppContext, { SetUserData, UserDataType } from '../../AppContext';
import Loading from '../Loading/Loading';
import { AUTH_SERVICE } from '../../env';

const MiniProfile = ({
  setMiniProfile,
}: {
  setMiniProfile: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    userData,
    setUserData,
  }: { userData: UserDataType; setUserData: SetUserData } =
    useContext(AppContext)!;
  const navigate = useNavigate();
  const signout = () => {
    fetchSignoutUser();
  };
  async function fetchSignoutUser() {
    let userId = idFromLocalStorage();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    fetch(`${AUTH_SERVICE}/logout?id=${userId}`)
      .then((response: any) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: any) => {
        setUserData(null);
        localStorage.removeItem('user');
        setMiniProfile(false);
        navigate('/');
        setIsLoading(false);
      })
      .catch((error: any) => {
        console.error('Error:', error);
      });
  }
  return (
    <>
      {isLoading && <Loading />}
      <div
        onClick={() => setMiniProfile(false)}
        className='absolute flex flex-col justify-between  top-[10px] right-[10px] w-[256px] h-[367px] bg-[#fff] rounded-[6px] custom-box-shadow-miniprofile miniprofile-custom'
      >
        <div className='flex  p-[16px] gap-[16px] border-b-[1px] border-[#DEE1E6] w-full'>
          <img className='w-[48px] h-[48px]' src={avatarHeader} alt='' />
          <div className='w-full'>
            <p className='font-poppins font-bold text-[14px] leading-[22px] text-[#171A1FFF]'>
              {userData?.username}
              <br />
              <span className='font-poppins font-normal text-[12px] leading-[20px] text-[#9095A0FF]'>
                {userData?.email}
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
            <img src={logoutIcon} alt='logout icon' />
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
