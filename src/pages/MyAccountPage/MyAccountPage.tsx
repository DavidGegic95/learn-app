// import React from 'react';

import { useState } from 'react';
import Button from '../../components/Button/Button';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import BasicTable from '../../components/Table/Table';
import {
  greenButtonStyle,
  headerStyle,
  purpleButtonStyle,
  redButtonStyle,
  subHeaderStyle,
} from '../../styles-for-tailwind';
import {
  mockDataStudent,
  mockDataTrainer,
  mockStudentList,
  mockTrainersList,
} from './utils';

const MyAccountPage = () => {
  const [role, setRole] = useState<'student' | 'trainer'>('trainer');
  const [data, setData] = useState(
    role === 'student' ? mockDataStudent : mockDataTrainer
  );
  const [tableData, setTableData] = useState(
    role === 'student' ? mockTrainersList : mockStudentList
  );
  return (
    <div className='w-[80%] my-[64px] mobile-view-w-90 mx-auto flex flex-col items-center justify-center gap-[32px]'>
      <h1 className={headerStyle}>My Account</h1>
      <div className='flex items-start w-full justify-between'>
        <ProfileBox role={role} data={data} />

        <div className='flex flex-col gap-[32px]'>
          <div className='flex items-center justify-between'>
            <p className='font-montserrat font-normal text-[2rem] leading-[3rem] text-[#171A1F]'>
              {role === 'student' ? 'My Trainers' : 'My Students'}
            </p>
            {role === 'student' && (
              <Button
                type='button'
                text='Add trainer'
                className={purpleButtonStyle + ' py-[8px]'}
              />
            )}
          </div>
          <BasicTable role={role} rows={tableData} />
        </div>
      </div>

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

        {role === 'student' && (
          <Button
            text='Delete profile'
            type='button'
            className={redButtonStyle + ' py-[8px]'}
          />
        )}
      </div>
      <h2 className={subHeaderStyle}>My Trainings</h2>
      <p className='font-poppins text-[1rem] leading-[1.75rem] text-[#171A1FFF] text-center max-min-in-char'>
        The Training Section is interactive, allowing you to engage with
        trainers and fellow learners, participate in quizzes, and track your
        progress. All our courses are flexible and adaptable to your schedule
        and learning speed.
      </p>
      <Button
        text='View trainings'
        type='button'
        className={purpleButtonStyle + ' py-[8px]'}
      />
    </div>
  );
};

export default MyAccountPage;
