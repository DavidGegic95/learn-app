// import React from 'react';

import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import Button from '../../components/Button/Button';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import BasicTable from '../../components/Table/BasicTable';
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
import { useNavigate } from 'react-router-dom';
import BasicModal from '../../components/Modal/Modal';
import AppContext, { UserDataType } from '../../AppContext';

const MyAccountPage = ({ userRole }: { userRole: string }) => {
  const navigate = useNavigate();
  const { userData }: { userData: UserDataType } = useContext(AppContext);
  const [role, setRole] = useState(userRole);
  const [tableData, setTableData] = useState(
    role === 'student' ? mockTrainersList : mockStudentList
  );
  useEffect(() => {
    try {
      if (
        (userData && 'role' in userData && userData.role === 'student') ||
        userData.role === 'trainer'
      ) {
        setRole(userData.role);
        setTableData(
          userData.role === 'student' ? mockTrainersList : mockStudentList
        );
      }
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <div className='w-[80%] my-[64px] mobile-view-w-90 mx-auto flex flex-col items-center justify-center gap-[32px]'>
      <h1 className={headerStyle}>My Account</h1>
      <div className='flex items-start w-full justify-between'>
        <ProfileBox role={role} />

        <div className='flex flex-col gap-[32px] mv-hidden-custom'>
          <div className='flex items-center justify-between'>
            <p className='font-montserrat font-normal text-[2rem] leading-[3rem] text-[#171A1F]'>
              {role === 'student' ? 'My Trainers' : 'My Students'}
            </p>
            {role === 'student' && (
              <Button
                onClick={() => navigate('/my-account/addTrainer')}
                type='button'
                text='Add trainer'
                className={purpleButtonStyle + ' py-[8px]'}
              />
            )}
          </div>
          <BasicTable rows={tableData} cells={Object.keys(tableData[0])} />
        </div>
      </div>

      <div className='flex items-center justify-between w-full '>
        <div className='flex gap-[16px]'>
          <Button
            onClick={() => navigate('/my-account/edit-profile')}
            text='Edit profile'
            type='button'
            className={purpleButtonStyle + ' py-[8px]'}
          />

          <Button
            text='Change Password'
            type='button'
            className={greenButtonStyle + ' py-[8px]'}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
              navigate('/change-password');
            }}
          />
        </div>

        {role === 'student' && <BasicModal type='delete' />}
      </div>
      <h2 className={subHeaderStyle}>My Trainings</h2>
      <p className='font-poppins text-[1rem] leading-[1.75rem] text-[#171A1FFF] text-center max-min-in-char'>
        The Training Section is interactive, allowing you to engage with
        trainers and fellow learners, participate in quizzes, and track your
        progress. All our courses are flexible and adaptable to your schedule
        and learning speed.
      </p>
      <Button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
          navigate('/my-account/trainings/' + role);
        }}
        text='View trainings'
        type='button'
        className={purpleButtonStyle + ' py-[8px]'}
      />
    </div>
  );
};

export default MyAccountPage;
