// import React from 'react';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import registrationStudent from '../../assets/registration-student.svg';
import registrationTrainer from '../../assets/registration-trainer.png';

import { useEffect, useState } from 'react';
import Role, { UserData } from './utils';
import JoinUsBox from '../../components/JoinUsBox/JoinUsBox';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import SuccessfulRegistration from '../../components/SuccessfulRegistration/SuccessfulRegistration';

const JoinUsPage = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const { roleparams } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    username: '',
    password: '',
  });
  const [role, setRole] = useState<Role>('');

  useEffect(() => {
    let value = '' as Role;
    if (roleparams) {
      value = roleparams as Role;
    }
    if (!roleparams) {
      setIsSubmitted(false);
      setUserData({
        username: '',
        password: '',
      });
      navigate('/joinus');
    }
    setRole(value);
  }, [roleparams]);
  useEffect(() => {
    const { pathname } = location;
    const path = pathname.split('/');
    const validationPath = path[path.length - 1];
    if (validationPath !== 'validation') {
      setIsSubmitted(false);
      setUserData({
        username: '',
        password: '',
      });
    }
  }, [location]);
  return (
    <div className='py-[64px]'>
      {!isSubmitted && role && (
        <>
          <div className='w-[80%] mobile-view-w-90 mx-auto'>
            <h1 className='font-montserrat text-4xl leading-16 font-bold text-[#171A1FFF]'>
              Registration
            </h1>
            <h2 className='mb-[32px] mt-[8px] font-poppins text-base leading-7 font-normal text-[#9095A0FF]'>
              {role}
            </h2>
          </div>
          <div className='flex mx-auto gap-[64px] items-start w-[80%] mobile-view-w-90  h-[625px] mobile-view-registration'>
            {role === 'Student' ? (
              <img
                src={registrationStudent}
                alt='student picture for registration form'
              />
            ) : (
              <img
                src={registrationTrainer}
                alt='trainer picture for registration form'
              />
            )}
            <RegistrationForm
              setUserData={setUserData}
              setIsSubmitted={setIsSubmitted}
              role={role}
            />
          </div>
        </>
      )}
      {!role && (
        <>
          <h3 className='text-center mb-[64px] font-montserrat text-[56px] leading-11 font-bold text-[#171A1FFF]'>
            Join us
          </h3>
          <div className='flex flex-col gap-[64px]'>
            <JoinUsBox setRole={setRole} role={'Trainer'} />
            <JoinUsBox setRole={setRole} role={'Student'} />
          </div>
        </>
      )}
      {isSubmitted && (
        <>
          <SuccessfulRegistration data={userData} />
        </>
      )}
    </div>
  );
};

export default JoinUsPage;
