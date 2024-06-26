import avatarImg from '../../assets/Avatar 36.png';
import { useContext, useEffect, useState } from 'react';
import {
  classname_p,
  createFormDataByRole,
  studentList,
  trainerList,
} from './utils';
import Button from '../Button/Button';
import {
  grayButtonStyle,
  grayPurpleButtonStyle,
  purpleButtonStyle,
} from '../../styles-for-tailwind';
import SwitchComp from './SwitchComp';
import UploadFile from '../UploadFile/UploadFile';
import AppContext, { SetUserData, UserDataType } from '../../AppContext';
import { useNavigate } from 'react-router-dom';
import { USER_SERVICE } from '../../services';
import Loading from '../Loading/Loading';
interface FormData {
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  address?: string;
  username?: string;
}
const ProfileBoxEdit = () => {
  const defaultRole = 'student';
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const {
    userData,
    setUserData,
  }: { userData: UserDataType; setUserData: SetUserData } =
    useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(userData?.isActive || false);
  const [formData, setFormData] = useState<FormData>(
    createFormDataByRole(defaultRole)
  );
  const [errors, setErrors] = useState(createFormDataByRole(defaultRole));
  const [list, setList] = useState(
    defaultRole === 'student' ? studentList : trainerList
  );
  useEffect(() => {
    if (userData) {
      setStatus(userData?.isActive);
      setFormData(createFormDataByRole(userData.role));
      setList(userData.role === 'student' ? studentList : trainerList);
      setErrors(createFormDataByRole(userData.role));
      if (
        'role' in userData &&
        userData.role === 'student' &&
        'dateOfBirth' in userData &&
        'address' in userData
      ) {
        const { firstName, lastName, dateOfBirth, address } = userData;
        setFormData({
          firstName: firstName ?? '',
          lastName: lastName ?? '',
          dateOfBirth: dateOfBirth ?? '',
          address: address ?? '',
        });
      } else if ('username' in userData) {
        const { firstName, lastName, username } = userData;
        setFormData({
          firstName: firstName ?? '',
          lastName: lastName ?? '',
          username: username ?? '',
        });
      }
    }
  }, [userData]);

  const updateUser = async () => {
    try {
      const response = await fetch(`${USER_SERVICE}/update-info`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          isActive: status,
          id: userData.id,
          role: userData.role,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setUserData(data.user);
    } catch (error) {
      console.error('Error updating user info:', error);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    updateUser();
    setIsLoading(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate('/my-account');
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      {isLoading && <Loading />}
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
              className='w-[96px] h-[96px]'
              src={avatarImg}
              alt='avatar profile image'
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
          {userData &&
            list.map((item) => {
              return (
                <div key={item.text}>
                  <label key={item.text} className={classname_p}>
                    {item.text}
                  </label>
                  <input
                    required
                    className={`box-shadow-custom-1 flex mb-[16px] pl-[16px]  bg-[#F3F4F6FF] rounded-lg border-0 min-w-[400px] mv-custom-min-w-360px  
                    w-[50%] h-[40px]  font-poppins text-base leading-26 font-normal  outline-none 
                    focus:text-[#171A1FFF] focus:outline-[#F3F4F6FF] 
                    focus:bg-white ${errors[item.key as keyof typeof formData] ? 'error-border' : ''}
                     focus:border border-solid border-[#F3F4F6FF]`}
                    onChange={handleChange}
                    key={item.key + ' item'}
                    name={item.key}
                    type='text'
                    value={formData[item.key as keyof typeof formData]}
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
          <div className='w-full flex items-center justify-center gap-[8px] w-full  min-w-[400px] mv-custom-min-w-360px'>
            <div className='flex items-center justify-end w-[50%]'>
              <Button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                  navigate('/my-account');
                }}
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
    </>
  );
};

export default ProfileBoxEdit;
