// import React,{useState} from 'react';
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import Select from '../Select/Select';
import Loading from '../Loading/Loading';
import {
  scienceSpecializations,
  trainerList,
  FormDataType,
  studentList,
  inputsListStudent,
  inputsListTrainer,
  areValuesTruthy,
} from './utils';
import Role, { UserData } from '../../pages/JoinUsPage/utils';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';

const RegistrationForm = ({
  role,
  setIsSubmitted,
  setUserData,
}: {
  role: Role;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
  setUserData: Dispatch<SetStateAction<UserData>>;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputsList, setInputsList] = useState(inputsListTrainer);
  const [formData, setFormData] = useState<FormDataType>(trainerList);
  const [valueSelectTag, setValueSelectTag] = useState('');
  const [errors, setErrors] = useState<FormDataType>(trainerList);
  const navigate = useNavigate();

  useEffect(() => {
    if (role === 'Student') {
      setFormData(studentList);
      setErrors(studentList);
      setInputsList(inputsListStudent);
    }
  }, []);
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
    if (!areValuesTruthy(formData)) {
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
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setUserData({
      username: formData.firstname + '-' + formData.lastname,
      password: uuidv4().slice(0, 6),
    });
    setIsSubmitted(true);
    navigate(`/joinus/${role}/validation`);

    // console.log('Submitting registration form...', {
    //   ...formData,
    //   specialization: valueSelectTag,
    // });
  };
  return (
    <>
      {isLoading && <Loading />}
      <form
        className='flex flex-col w-full h-full align-start justify-between'
        onSubmit={handleSubmit}
      >
        <div>
          {Object.keys(formData).map((key: string, index) => {
            let label = inputsList[index];
            let keyIn = key as keyof FormDataType;
            let value = formData[keyIn];
            return (
              <div key={key + 1} className='flex flex-col'>
                <label
                  key={key + 2}
                  className={`${errors[keyIn] ? 'error ' : ''} font-poppins text-base leading-7 font-bold mb-[4px]`}
                  htmlFor={key}
                >
                  {label}
                </label>
                <input
                  key={key + 3}
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
          {role === 'Trainer' && (
            <>
              <label
                htmlFor='select'
                className={`font-poppins text-base leading-7 font-bold mb-[4px]`}
              >
                Specialization
              </label>
              <Select
                className='w-full'
                valueSelectTag={valueSelectTag}
                setValueSelectTag={setValueSelectTag}
                list={[...scienceSpecializations]}
              />
            </>
          )}
        </div>
        <Button
          text='Submit'
          type='submit'
          className='w-full self-start h-[40px] mt-[24px] text-white bg-[#6355D8FF] border-none rounded-md'
        />
      </form>
    </>
  );
};

export default RegistrationForm;
