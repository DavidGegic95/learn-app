import { ChangeEvent, Dispatch, FormEvent, useContext, useState } from 'react';
import Loading from '../..//Loading/Loading';
import ReCAPTCHA from 'react-google-recaptcha';
import PasswordIcon from '../../PasswordIcon/PasswordIcon';
import Button from '../../Button/Button';
import { purpleButtonStyle } from '../../../styles-for-tailwind';
import { Link, useNavigate } from 'react-router-dom';
import AppContext, { SetUserData } from '../../../AppContext';
import { AUTH_SERVICE } from '../../../env';

// const siteKey = import.meta.env.VITE_APP_SITE_KEY || 'invalid key';
const siteKey = ''; ///test env

const LoginForm = () => {
  const {
    setUserData,
    setToken,
  }: { setUserData: SetUserData; setToken: Dispatch<string> } =
    useContext(AppContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const loginUser = async () => {
    fetch(`${AUTH_SERVICE}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((response: any) => {
        if (!response.ok) {
          setErrors({
            email: 'Email or password is not valid',
            password: 'Email or password is not valid',
          });
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: any) => {
        setUserData({
          ...data?.user,
        });

        localStorage.setItem(
          'user',
          JSON.stringify({
            token: data?.token,
            userId: data?.user?.id,
            role: data?.user?.role,
          })
        );
        setToken(data?.token);
        navigate('/loginHome');
      })
      .catch((error: any) => {
        console.error('Error:', error);
      });
  };

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
    if (!formData.email || !formData.password) {
      if (!formData.email) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: 'Email is required',
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
    await loginUser();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <form
        className='flex w-[400px] mv-custom-w-340px align-center justify-center flex-col'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col'>
          <label htmlFor='email'>User email</label>
          <input
            className={`profileIcon box-shadow-custom-hover flex  pl-[32px] pr-1 bg-[#F3F4F6FF] rounded-lg border-0 w-full mv-custom-w-340px h-[40px]  font-poppins text-base leading-26 font-normal bg-[#F3F4F6FF] rounded-lg border-0 outline-none focus:text-[#171A1FFF] focus:outline-[#F3F4F6FF]  ${errors.email ? 'error-border' : ''}`}
            type='text'
            id='email'
            name='email'
            placeholder='Enter email'
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.password ? (
            <span className='error'>{errors.email}</span>
          ) : (
            <br></br>
          )}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password'>Password</label>
          <div
            className={`box-shadow-custom-hover focus-within:bg-white focus-within:border border-solid border-[#F3F4F6FF]  flex bg-[#F3F4F6FF] rounded-lg border-[1px] w-full mv-custom-w-340px h-[40px] ${errors.password ? 'error-border' : ''}`}
          >
            <input
              className={`passwordIcon flex  pl-[32px] pr-1 bg-[#F3F4F6FF] rounded-lg border-0 w-full  font-poppins text-base leading-26 font-normal bg-[#F3F4F6FF] rounded-lg border-0 outline-none focus:text-[#171A1FFF] focus:bg-white hover:border-none`}
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
          {errors.password ? (
            <span className='error'>{errors.password}</span>
          ) : (
            <br></br>
          )}
        </div>
        <Button
          text='Sign in'
          type='submit'
          className={
            purpleButtonStyle + ' w-full mv-custom-w-340px h-[40px] mt-[24px]'
          }
        />
      </form>
      <span className='text-center mt-[24px] font-poppins text-12 leading-20 font-bold text-[#6E7787FF]'>
        OR
      </span>
      <span className='text-center mt-[24px] font-poppins text-14 leading-22 text-[#171A1FFF]'>
        Don't have account?{' '}
        <Link
          className='font-poppins text-14 leading-22 font-bold text-[#6355D8FF]'
          to='/joinus'
        >
          Sign Up
        </Link>
      </span>
      <div className='flex align-center justify-center mt-[32px]'>
        <ReCAPTCHA sitekey={siteKey} />
      </div>
    </>
  );
};

export default LoginForm;
