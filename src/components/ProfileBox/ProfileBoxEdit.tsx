import avatarStudentImg from '../../assets/profile-box-avatar.svg';
import avatarTrainerImg from '../../assets/profile-box-avatar-trainer.svg';
import checkIcon from '../../assets/profile-box-check.svg';
import { useEffect, useState } from 'react';
import { classname_p, classname_span, studentList, trainerList } from './utils';
import { ProfileBoxData } from '../../pages/MyAccountPage/utils';
import Button from '../Button/Button';
import {
  grayButtonStyle,
  grayPurpleButtonStyle,
  purpleButtonStyle,
} from '../../styles-for-tailwind';
import Switch from '@mui/material/Switch';
import SwitchComp from './SwitchComp';
import UploadFile from '../UploadFile/UploadFile';
import { loggedinObject } from '../../App';
import { USER_SERVICE } from '../../env';
import { idFromLocalStorage } from '../MiniProfile/utils';

interface FormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: string;
  email: string;
}
const userId = idFromLocalStorage();
const ProfileBoxEdit = ({
  data,
  role,
  isloggedin,
}: {
  data: ProfileBoxData;
  role: 'student' | 'trainer';
  isloggedin: loggedinObject | null;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);
  // const newObject = { ...isloggedin } as Omit<typeof data, 'status'>;
  const [status, setStatus] = useState(true);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    email: '',
  });
  const [list, setList] = useState(
    role === 'student' ? studentList : trainerList
  );
  const keysOfFormData = Object.keys(formData);
  function fetchUser() {
    fetch(`${USER_SERVICE}/me?id=${userId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const { firstName, lastName, dateOfBirth, address, email } = data.data;
        setFormData({ firstName, lastName, dateOfBirth, address, email });
        console.log('Response:', data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  const valuesForMap: string[] = [];
  keysOfFormData.forEach((item) => {
    if (item !== 'status') {
      valuesForMap.push(item);
    }
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ ...formData, status: status });
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className='flex flex-col gap-[32px] w-full '>
      <p
        className={
          'font-montserrat font-normal text-[2rem] leading-[3rem] text-[#171A1F]'
        }
      >
        Edit profile
      </p>
      <div className='flex flex-col gap-[16px]'>
        <p className='font-poppins font-normal text-[0.9rem] leading-[1.4rem] text-[#323842]'>
          Profile photo
        </p>
        <div className='flex gap-[32px] w-full'>
          <img
            src={role === 'student' ? avatarStudentImg : avatarTrainerImg}
            alt=''
          />
          <div className='flex flex-col items-start justify-center gap-[16px]'>
            <p className='font-poppins font-normal text-[0.9rem] leading-[1.4rem] text-[#171A1F]'>
              Upload your photo
            </p>
            <div className='flex flex-col gap-[16px]'>
              <span className='font-poppins font-normal text-[0.75rem] leading-[1.25rem] text-[#565E6C]'>
                Your photo should be in PNG or JPG format
              </span>
              <UploadFile setIsOpen={setIsOpen} isOpen={isOpen} />
              <div className='flex items-center justify-start gap-[8px]'>
                <Button
                  onClick={() => setIsOpen((prev) => !prev)}
                  text='Choose image'
                  className={grayPurpleButtonStyle + ' py-[8px]'}
                  type='button'
                />
                <Button
                  text='Remove'
                  className={grayButtonStyle + ' py-[8px]'}
                  type='button'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className='flex flex-col w-full'>
        {valuesForMap.map((key: string, index) => {
          return (
            <div key={key}>
              <label key={key + 'label'} className={classname_p}>
                {list[index]}
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
