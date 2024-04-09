// import React from 'react';
import { FormEvent, useState } from 'react';
import Loading from '../Loading/Loading';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    console.log('Submitting login form...');
  };
  return (
    <>
      {isLoading && <Loading />}
      <form
        className='flex w-[400px] align-center justify-center flex-col'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col'>
          <label htmlFor='username'>User name</label>
          <input
            className='profile flex mb-[16px] pl-[32px] pr-1 bg-[#F3F4F6FF] rounded-lg border-0 w-full h-[40px]  pl-3 pr-1 font-poppins text-base leading-26 font-normal bg-[#F3F4F6FF] rounded-lg border-0 outline-none focus:text-[#171A1FFF] focus:outline-[#F3F4F6FF] focus:bg-white'
            type='text'
            id='username'
            placeholder='Enter email'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password'>Password</label>
          <input
            className='profile flex mb-[16px] pl-[32px] pr-1 bg-[#F3F4F6FF] rounded-lg border-0 w-full h-[40px]  pl-3 pr-1 font-poppins text-base leading-26 font-normal bg-[#F3F4F6FF] rounded-lg border-0 outline-none focus:text-[#171A1FFF] focus:outline-[#F3F4F6FF] focus:bg-white'
            type='password'
            id='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className='w-full h-[40px] mt-[24px] text-white bg-[#6355D8FF] border-none rounded-md'
          type='submit'
        >
          Sign in
        </button>
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
    </>
  );
};

export default LoginForm;
