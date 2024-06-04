import { Link, useLocation, useNavigate } from 'react-router-dom';
import avatar from '../../assets/Avatar 36.png';
import xButton from '../../assets/x-mobile-nav.svg';
import logoutIcon from '../../assets/mobile-nav-logout.svg';

import { Dispatch, SetStateAction, useContext } from 'react';
import { idFromLocalStorage } from '../MiniProfile/utils';
import AppContext, { UserDataType } from '../../AppContext';
import { AUTH_SERVICE } from '../../services';

const MobileNav = ({
  isClicked,
  setIsClicked,
  setUserData,
}: {
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  setUserData: Dispatch<SetStateAction<UserDataType | null>>;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const { userData }: { userData: UserDataType } = useContext(AppContext);
  const linksData = [
    { path: '/blog', text: 'Blog' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/aboutus', text: 'About us' },
  ];

  const signout = () => {
    let userId = idFromLocalStorage();
    fetch(`${AUTH_SERVICE}/logout?id=${userId}`)
      .then((response: any) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        setUserData(null);
        localStorage.removeItem('user');
        setIsClicked((prev) => !prev);
        window.scrollTo({
          top: 0,
          behavior: 'instant',
        });
        navigate('/');
      })
      .catch((error: any) => {
        console.error('Error:', error);
      });
  };
  return (
    <div className={`${isClicked ? ' show-mobile-nav' : ' hide-mobile-nav'}`}>
      <div className='w-full  flex items-center justify-between gap-[16px] p-[16px]'>
        <img className='w-[54px] h-[54px]' src={avatar} alt='avatar image' />
        <p className='font-poppins font-normal text-[14px] leading-[22px] text-[#171A1F]'>
          {userData?.username}
          <br />
          <span className='font-poppins font-normal text-[12px] leading-[20px] text-[#9095A0]'>
            {userData?.email}
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
              onClick={() => setIsClicked((prev) => !prev)}
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
        {userData && (
          <Link
            onClick={() => setIsClicked((prev) => !prev)}
            className={
              'pl-[16px] font-poppins font-normal font-medium text-base leading-6 text-[#565E6C]' +
              (pathname === '/my-account'
                ? ' text-[#6355d8] border-left-purple'
                : '')
            }
            to='/my-account'
          >
            My Account
          </Link>
        )}
        {!userData && (
          <>
            <Link
              onClick={() => setIsClicked((prev) => !prev)}
              className={
                'pl-[16px] font-poppins font-normal font-medium text-base leading-6 text-[#565E6C]' +
                (pathname === '/login'
                  ? ' text-[#6355d8] border-left-purple'
                  : '')
              }
              to='/login'
            >
              Login
            </Link>
            <Link
              onClick={() => setIsClicked((prev) => !prev)}
              className={
                'pl-[16px] font-poppins font-normal font-medium text-base leading-6 text-[#565E6C]' +
                (pathname === '/register'
                  ? ' text-[#6355d8] border-left-purple'
                  : '')
              }
              to='/register'
            >
              Register
            </Link>
          </>
        )}
      </div>

      <button
        className='flex gap-[8px] pl-[8px]  pb-[32px] font-poppins font-normal font-medium text-base leading-6 text-[#565E6C]'
        onClick={signout}
      >
        <img src={logoutIcon} alt='' />
        Sign out
      </button>
    </div>
  );
};

export default MobileNav;
