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
  requiredFields,
  fetchUserRegistration,
} from './utils';
import Role, { UserData } from '../../pages/JoinUsPage/utils';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';
import { purpleButtonStyle } from '../../styles-for-tailwind';

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
    if (!requiredFields(formData, role, valueSelectTag)) {
      if (!formData.firstName) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          firstName: 'First is required',
        }));
      }
      if (!formData.lastName) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          lastName: 'Lastname is required',
        }));
      }
      if (!formData.email) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: 'Email is required',
        }));
      }
      if (!valueSelectTag) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          specialization: 'Specialization is required',
        }));
      }
    } else {
      setIsLoading(true);
      fetchUserRegistration(formData, role, valueSelectTag)
        .then((data) => {
          if (data) {
            console.log(data);
            setIsLoading(false);
            setUserData({
              username: data.username,
              password: data.password,
            });
            setIsSubmitted(true);
            navigate(`/joinus/${role}/validation`);
          } else {
            console.log('User registration data not found');
            setIsLoading(false);
          }
        })
        .catch((error) => console.error(error));
    }
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
            if (key === 'specialization') return;
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
          className={
            purpleButtonStyle + ' w-full self-start h-[40px] mt-[24px]'
          }
        />
      </form>
    </>
  );
};

export default RegistrationForm;
