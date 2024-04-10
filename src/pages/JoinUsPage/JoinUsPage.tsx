// import React from 'react';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import registrationImage from '../../assets/Registration.png';
import { useEffect, useState } from 'react';
import Role from './utils';
import JoinUsBox from '../../components/JoinUsBox/JoinUsBox';
import { useParams } from 'react-router-dom';

const JoinUsPage = () => {
  let { roleparams } = useParams();
  const [role, setRole] = useState<Role>('');
  console.log(roleparams);

  useEffect(() => {
    let value = '' as Role;
    if (roleparams) {
      value = roleparams as Role;
    }
    setRole(value);
  }, [roleparams]);
  return (
    <div className='py-[64px]'>
      {role && (
        <>
          <div className='w-[80%] mx-auto'>
            <h1 className='font-montserrat text-4xl leading-16 font-bold text-[#171A1FFF]'>
              Registration
            </h1>
            <h2 className='mb-[32px] mt-[8px] font-poppins text-base leading-7 font-normal text-[#9095A0FF]'>
              {role}
            </h2>
          </div>
          <div className='flex mx-auto gap-[64px] items-start w-[80%]  h-[625px]'>
            <img src={registrationImage} alt='' />
            <RegistrationForm role={role} />
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
    </div>
  );
};

export default JoinUsPage;
