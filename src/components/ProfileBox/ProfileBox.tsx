import { subHeaderStyle } from '../../styles-for-tailwind';
import avatarImg from '../../assets/profile-box-avatar.svg';
import checkIcon from '../../assets/profile-box-check.svg';
import { useState } from 'react';
import { classname_p, classname_span, studentList, trainerList } from './utils';
import { ProfileBoxData } from '../../pages/MyAccountPage/utils';

const ProfileBox = ({
  data,
  role,
}: {
  data: ProfileBoxData;
  role: 'student' | 'trainer';
}) => {
  const [list, setList] = useState(
    role === 'student' ? trainerList : studentList
  );
  const dataValues = Object.values(data);

  return (
    <div className='flex flex-col gap-[16px]'>
      <p
        className={
          'font-montserrat font-normal text-[2rem] leading-[3rem] text-[#171A1F]'
        }
      >
        My profile
      </p>
      <div className='flex gap-[32px]'>
        <img src={avatarImg} alt='' />
        <div>
          <p>Status</p>
          <div className='flex gap-[8px]'>
            <img src={checkIcon} alt='' />
            <span className={classname_span + ' text-[#60CFA5]'}>
              {data.status ? 'Active' : 'Not Active'}
            </span>
          </div>
        </div>
      </div>
      {list.map((item, index) => {
        return (
          <p className={classname_p}>
            {item}
            <br />
            <span className={classname_span}>{dataValues[index + 1]}</span>
          </p>
        );
      })}
    </div>
  );
};

export default ProfileBox;
