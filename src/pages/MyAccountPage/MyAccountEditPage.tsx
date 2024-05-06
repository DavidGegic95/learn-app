import React, { useContext } from 'react';
import { headerStyle } from '../../styles-for-tailwind';
import ProfileBoxEdit from '../../components/ProfileBox/ProfileBoxEdit';
import { profilesData } from '../AboutUsPage/utils';
import AppContext, { UserDataType } from '../../AppContext';

const MyAccountEditPage = () => {
  return (
    <div className='w-[80%] my-[64px] mobile-view-w-90 mx-auto flex flex-col items-start justify-center gap-[32px]'>
      <h1 className={headerStyle + ' w-full text-center'}>My Account</h1>
      <ProfileBoxEdit />
    </div>
  );
};

export default MyAccountEditPage;
