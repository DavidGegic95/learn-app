import React from 'react';
import { headerStyle } from '../../styles-for-tailwind';
import ProfileBoxEdit from '../../components/ProfileBox/ProfileBoxEdit';
import { profilesData } from '../AboutUsPage/utils';

const MyAccountEditPage = () => {
  const mockDataStudent = {
    status: true,
    name: 'Marta',
    lastname: 'Black',
    dateOfBirth: '01.01.2001',
    address: '123 Main StreetBoston, MA 02108United States',
    email: 'marta_12334@gmail.com',
  };
  return (
    <div className='w-[80%] my-[64px] mobile-view-w-90 mx-auto flex flex-col items-start justify-center gap-[32px]'>
      <h1 className={headerStyle + ' w-full text-center'}>My Account</h1>
      <ProfileBoxEdit data={mockDataStudent} role='student' />
    </div>
  );
};

export default MyAccountEditPage;