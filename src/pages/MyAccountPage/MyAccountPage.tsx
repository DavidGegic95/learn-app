// import React from 'react';

import Button from '../../components/Button/Button';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import {
  greenButtonStyle,
  headerStyle,
  purpleButtonStyle,
  redButtonStyle,
} from '../../styles-for-tailwind';

const mockData = {
  status: true,
  name: 'Marta',
  lastname: 'Black',
  dateOfBirth: '01.01.2001',
  address: '123 Main StreetBoston, MA 02108United States',
  email: 'marta_12334@gmail.com',
};

const MyAccountPage = () => {
  return (
    <div className='w-[80%] my-[64px] mobile-view-w-90 mx-auto flex flex-col items-center justify-center gap-[32px]'>
      <h1 className={headerStyle}>My Account</h1>
      <div className='flex items-center w-full justify-between'>
        <ProfileBox data={mockData} />
      </div>
      <div></div>

      <div className='flex items-center justify-between w-full '>
        <div className='flex gap-[16px]'>
          <Button
            text='Edit profile'
            type='button'
            className={purpleButtonStyle + ' py-[8px]'}
          />

          <Button
            text='Change Password'
            type='button'
            className={greenButtonStyle + ' py-[8px]'}
          />
        </div>

        <Button
          text='Delete profile'
          type='button'
          className={redButtonStyle + ' py-[8px]'}
        />
      </div>
    </div>
  );
};

export default MyAccountPage;
