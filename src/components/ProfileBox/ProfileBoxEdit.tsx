import avatarStudentImg from '../../assets/profile-box-avatar.svg';
import avatarTrainerImg from '../../assets/profile-box-avatar-trainer.svg';
import checkIcon from '../../assets/profile-box-check.svg';
import { useState } from 'react';
import { classname_p, classname_span, studentList, trainerList } from './utils';
import { ProfileBoxData } from '../../pages/MyAccountPage/utils';
import { String } from 'aws-sdk/clients/codebuild';
import Button from '../Button/Button';
import { grayButtonStyle, purpleButtonStyle } from '../../styles-for-tailwind';
import Switch from '@mui/material/Switch';
import SwitchComp from './SwitchComp';

interface FormData {
  name: string;
  lastname: string;
  dateOfBirth: string;
  address: string;
  email: string;
}
const ProfileBoxEdit = ({
  data,
  role,
}: {
  data: ProfileBoxData;
  role: 'student' | 'trainer';
}) => {
  const newObject = { ...data } as Omit<typeof data, 'status'>;
  const [status, setStatus] = useState(true);
  const [formData, setFormData] = useState(newObject as FormData);
  const [errors, setErrors] = useState({
    name: '',
    lastname: '',
    dateOfBirth: '',
    address: '',
    email: '',
  });
  const [list, setList] = useState(
    role === 'student' ? studentList : trainerList
  );
  const keysOfFormData = Object.keys(formData);

  const valuesForMap: string[] = [];
  keysOfFormData.forEach((item) => {
    if (item !== 'status') {
      valuesForMap.push(item);
    }
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className='flex flex-col gap-[32px] w-full'>
      <p
        className={
          'font-montserrat font-normal text-[2rem] leading-[3rem] text-[#171A1F]'
        }
      >
        Edit profile
      </p>
      <div className='flex gap-[32px] w-full'>
        <img
          src={role === 'student' ? avatarStudentImg : avatarTrainerImg}
          alt=''
        />
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

      <form onSubmit={handleSubmit} className='flex flex-col w-full'>
        {valuesForMap.map((key: string) => {
          return (
            <div key={key}>
              <label key={key + 'label'} className={classname_p}>
                {key}
              </label>
              <input
                className={`flex mb-[16px] pl-[16px] pr-1 bg-[#F3F4F6FF] rounded-lg border-0 min-w-[400px] w-[50%] h-[40px]  font-poppins text-base leading-26 font-normal bg-[#F3F4F6FF] rounded-lg border-0 outline-none focus:text-[#171A1FFF] focus:outline-[#F3F4F6FF] focus:bg-white ${errors[key as keyof typeof formData] ? 'error-border' : ''}`}
                onChange={handleChange}
                key={key + ' item'}
                name={key}
                type='text'
                value={formData[key as keyof typeof formData]}
              />
            </div>
          );
        })}
        <div className='flex items-center justify-start gap-[16px]'>
          <p className='font-poppins font-bold text-[1rem] leading-[1.75rem] text-[#323842]'>
            Active
          </p>
          <SwitchComp setStatus={setStatus} status={status} />
        </div>
        <div className='w-full flex items-center justify-center gap-[8px] w-full'>
          <div className='flex items-center justify-end w-[50%] min-w-[400px]'>
            <Button
              text='Cancel'
              type='button'
              className={grayButtonStyle + ' py-[8px]'}
            />
          </div>

          <div className='flex items-center justify-start w-[50%]'>
            <Button
              text='Save changes'
              type='submit'
              className={purpleButtonStyle + ' py-[8px]'}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileBoxEdit;
