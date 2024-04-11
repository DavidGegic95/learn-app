// import React from 'react';
import { ChangeEvent, FormEvent, useState } from 'react';
import Loading from '../Loading/Loading';
import ReCAPTCHA from 'react-google-recaptcha';
import PasswordIcon from '../PasswordIcon/PasswordIcon';
import Button from '../Button/Button';

const siteKey = import.meta.env.VITE_APP_SITE_KEY || 'invalid key';

const LoginForm = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      if (!formData.username) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          username: 'Username is required',
        }));
      }
      if (!formData.password) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: 'Password is required',
        }));
      }
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };
  return (
    <>
      {isLoading && <Loading />}
      <form
        className='flex w-[400px] align-center justify-center flex-col'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col'>
          <label className={errors.username ? 'error' : ''} htmlFor='username'>
            User name
          </label>
          <input
            className={`profileIcon flex mb-[16px] pl-[32px] pr-1 bg-[#F3F4F6FF] rounded-lg border-0 w-full h-[40px]  font-poppins text-base leading-26 font-normal bg-[#F3F4F6FF] rounded-lg border-0 outline-none focus:text-[#171A1FFF] focus:outline-[#F3F4F6FF] focus:bg-white ${errors.username ? 'error-border' : ''}`}
            type='text'
            id='username'
            name='username'
            placeholder='Enter email'
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-col'>
          <label className={errors.password ? 'error' : ''} htmlFor='password'>
            Password
          </label>
          <div
            className={`focus-within:bg-white focus-within:border border-solid border-[#F3F4F6FF]  flex bg-[#F3F4F6FF] rounded-lg border-[1px] w-full h-[40px] ${errors.password ? 'error-border' : ''}`}
          >
            <input
              className={`passwordIcon flex  pl-[32px] pr-1 bg-[#F3F4F6FF] rounded-lg border-0 w-full font-poppins text-base leading-26 font-normal bg-[#F3F4F6FF] rounded-lg border-0 outline-none focus:text-[#171A1FFF] focus:bg-white`}
              type={isVisible ? 'text' : 'password'}
              id='password'
              name='password'
              placeholder='Enter password'
              value={formData.password}
              onChange={handleInputChange}
            />
            <span
              className='flex justify-around items-center pr-[8px]'
              onClick={() => setIsVisible((prev) => !prev)}
            >
              <PasswordIcon isVisible={isVisible} />
            </span>
          </div>
        </div>
        <Button
          text='Sign in'
          type='submit'
          className='w-full h-[40px] mt-[24px] text-white bg-[#6355D8FF] border-none rounded-md'
        />
      </form>
      <span className='text-center mt-[24px] font-poppins text-12 leading-20 font-bold text-[#6E7787FF]'>
        OR
      </span>
      <span className='text-center mt-[24px] font-poppins text-14 leading-22 text-[#171A1FFF]'>
        Don't have account?{' '}
        <a
          className='font-poppins text-14 leading-22 font-bold text-[#6355D8FF]'
          href=''
        >
          Sign Up
        </a>
      </span>
      <div className='flex align-center justify-center mt-[32px]'>
        <ReCAPTCHA sitekey={siteKey} />
      </div>
    </>
  );
};

export default LoginForm;
