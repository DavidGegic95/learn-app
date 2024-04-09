// import React,{useState} from 'react';
import { ChangeEvent, FormEvent, useState } from 'react';

const RegistrationForm = () => {
  interface FormDataInterface {
    firstname: string;
    lastname: string;
    email: string;
  }
  const registrationList = ['First name', 'Last name', 'Email'];
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });
  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
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
    if (!formData.firstname || !formData.lastname || !formData.email) {
      if (!formData.firstname) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          firstname: 'Username is required',
        }));
      }
      if (!formData.lastname) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          lastname: 'Username is required',
        }));
      }
      if (!formData.email) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: 'Username is required',
        }));
      }
      return;
    }
    //   // setIsLoading(true);
    //   // await new Promise((resolve) => setTimeout(resolve, 2000));
    //   // setIsLoading(false);
    console.log('Submitting registration form...', formData);
    // }
  };
  return (
    <>
      {/* {isLoading && <Loading />} */}
      <form
        className='flex w-[400px] align-center justify-center flex-col'
        onSubmit={handleSubmit}
      >
        {Object.keys(formData).map((key: string, index) => {
          let label = registrationList[index];
          let keyIn = key as keyof FormDataInterface;
          let value = formData[keyIn];
          return (
            <div className='flex flex-col'>
              <label className={errors[keyIn] ? 'error' : ''} htmlFor={key}>
                {label}
              </label>
              <input
                className={`flex mb-[16px] pl-[16px] pr-1 bg-[#F3F4F6FF] rounded-lg border-0 w-full h-[40px]  font-poppins text-base leading-26 font-normal bg-[#F3F4F6FF] rounded-lg border-0 outline-none focus:text-[#171A1FFF] focus:outline-[#F3F4F6FF] focus:bg-white ${errors[keyIn] ? 'error-border' : ''}`}
                type='text'
                id={key}
                name={key}
                placeholder={`Enter ${label}`}
                value={value}
                onChange={handleInputChange}
              />
            </div>
          );
        })}
        <button
          className='w-full h-[40px] mt-[24px] text-white bg-[#6355D8FF] border-none rounded-md'
          type='submit'
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;
