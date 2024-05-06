import { subHeaderStyle } from '../../styles-for-tailwind';
import avatarStudentImg from '../../assets/profile-box-avatar.svg';
import avatarTrainerImg from '../../assets/profile-box-avatar-trainer.svg';
import checkIcon from '../../assets/profile-box-check.svg';
import { useContext, useState } from 'react';
import { classname_p, classname_span, studentList, trainerList } from './utils';
import { ProfileBoxData } from '../../pages/MyAccountPage/utils';
import AppContext, { UserDataType } from '../../AppContext';

const ProfileBox = ({ role }: { role: 'student' | 'trainer' }) => {
  const [list, setList] = useState(
    role === 'student' ? studentList : trainerList
  );
  const { userData }: { userData: UserDataType } = useContext(AppContext);
  return (
    <div className='flex flex-col gap-[32px]'>
      <p
        className={
          'font-montserrat font-normal text-[2rem] leading-[3rem] text-[#171A1F]'
        }
      >
        My profile
      </p>
      <div className='flex gap-[32px]'>
        <img
          src={role === 'student' ? avatarStudentImg : avatarTrainerImg}
          alt=''
        />
        <div>
          <p>Status</p>
          <div className='flex gap-[8px]'>
            <img src={checkIcon} alt='' />
            <span className={classname_span + ' text-[#60CFA5]'}>
              {userData?.isActive ? 'Active' : 'Not Active'}
            </span>
          </div>
        </div>
      </div>
      {userData &&
        list?.map((item) => {
          return (
            <p key={item?.text} className={classname_p}>
              {item?.text}
              <br />
              <span className={classname_span}>
                {userData && userData[item?.key as keyof typeof userData]}
              </span>
            </p>
          );
        })}
    </div>
  );
};

export default ProfileBox;
