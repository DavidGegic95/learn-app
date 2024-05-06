import React, { useContext, useEffect } from 'react';
import { headerStyle } from '../../styles-for-tailwind';
import ProfileBoxEdit from '../../components/ProfileBox/ProfileBoxEdit';
import { profilesData } from '../AboutUsPage/utils';
import AppContext, { SetUserData, UserDataType } from '../../AppContext';
import { USER_SERVICE } from '../../env';
import { idFromLocalStorage } from '../../components/MiniProfile/utils';
const id = idFromLocalStorage();

const MyAccountEditPage = () => {
  const { setUserData }: { setUserData: SetUserData } = useContext(AppContext);
  useEffect(() => {
    fetch(USER_SERVICE + '/me?id=' + id)
      .then((res) => {
        if (!res.ok) {
          setUserData(null);
          throw new Error('Failed to fetch user data');
        }
        return res.json();
      })
      .then((data) => {
        setUserData({ ...data?.data });
        console.log(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className='w-[80%] my-[64px] mobile-view-w-90 mx-auto flex flex-col items-start justify-center gap-[32px]'>
      <h1 className={headerStyle + ' w-full text-center'}>My Account</h1>
      <ProfileBoxEdit />
    </div>
  );
};

export default MyAccountEditPage;
