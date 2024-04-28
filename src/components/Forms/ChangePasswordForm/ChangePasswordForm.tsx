import { ChangeEvent, FormEvent, useState } from 'react';
import Loading from '../..//Loading/Loading';
import PasswordIcon from '../../PasswordIcon/PasswordIcon';
import Button from '../../Button/Button';
import {
  grayButtonStyle,
  purpleButtonStyle,
} from '../../../styles-for-tailwind';
import {
  FormaDataType,
  allValuesTruthy,
  formsLabelText,
  formsPlaceholder,
  initalStateIsVisible,
  initilState,
} from './utils';
import { useNavigate } from 'react-router-dom';

const ChangePasswordForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(initalStateIsVisible);
  const [formData, setFormData] = useState<FormaDataType>(initilState);
  const [errors, setErrors] = useState(initilState);

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
    if (!allValuesTruthy(formData)) {
      Object.keys(formData).forEach((key) => {
        if (!formData[key as keyof typeof formData]) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [key as keyof typeof formData]: 'This field is required',
          }));
        }
      });
      return;
    }
    if (formData.newPassword !== formData.confirmNewPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmNewPassword: 'Please enter same password',
      }));
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    navigate('/change-password/changed-successful');
  };
  return (
    <>
      {isLoading && <Loading />}
      <form
        className='flex w-[50%] min-w-[400px] align-center justify-center flex-col'
        onSubmit={handleSubmit}
      >
        {Object.keys(formData).map((key: string) => {
          return (
            <div key={key} className='flex flex-col'>
              <label
                className={errors[key as keyof typeof errors] ? 'error' : ''}
                htmlFor='password'
              >
                {formsLabelText[key as keyof typeof errors]}
              </label>
              <div
                className={`focus-within:bg-white focus-within:border border-solid border-[#F3F4F6FF]  flex bg-[#F3F4F6FF] rounded-lg border-[1px] w-full h-[40px] ${errors[key as keyof typeof errors] ? 'error-border' : ''}`}
              >
                <input
                  className={`flex pl-[16px] pr-1 bg-[#F3F4F6FF] rounded-lg border-0 w-full font-poppins text-base leading-26 font-normal bg-[#F3F4F6FF] rounded-lg border-0 outline-none focus:text-[#171A1FFF] focus:bg-white`}
                  type={
                    isVisible[key as keyof typeof isVisible]
                      ? 'text'
                      : 'password'
                  }
                  id={key}
                  name={key}
                  placeholder={formsPlaceholder[key as keyof typeof errors]}
                  value={formData[key as keyof typeof errors]}
                  onChange={handleInputChange}
                />
                <span
                  className='flex justify-around items-center pr-[8px]'
                  onClick={() => {
                    let current = !isVisible[key as keyof typeof isVisible];
                    setIsVisible({ ...isVisible, [key]: current });
                  }}
                >
                  <PasswordIcon
                    isVisible={isVisible[key as keyof typeof isVisible]}
                  />
                </span>
              </div>
            </div>
          );
        })}
        <div className='flex items-center justify-end gap-[8px]'>
          <Button
            text='Cancel'
            type='button'
            className={grayButtonStyle + ' h-[40px] mt-[24px]'}
          />
          <Button
            text='Change password'
            type='submit'
            className={purpleButtonStyle + ' h-[40px] mt-[24px]'}
          />
        </div>
      </form>
    </>
  );
};

export default ChangePasswordForm;