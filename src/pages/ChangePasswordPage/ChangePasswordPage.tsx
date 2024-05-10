// import React from 'react';
import lockIcon from '../../assets/Lock-2.svg';
import ChangePasswordForm from '../../components/Forms/ChangePasswordForm/ChangePasswordForm';

const ChangePasswordPage = () => {
  return (
    <div className='py-[64px] w-[80%] 2xl:w-[1200px] mx-auto flex flex-col gap-[32px] mv-custom-password-page mv-custom-flex-col'>
      <h2 className='font-montserrat font-bold text-[2rem] leading-12 text-[#323842]'>
        Security
      </h2>
      <section className='flex justify-between gap-[32px] mv-custom-flex-col'>
        <div className='flex items-start justify-start gap-[4px] w-full  mb-[16px]'>
          <img src={lockIcon} alt='lock icon' />
          <p className='font-montserrat font-bold text-[1.1rem] leading-[1.5rem] text-[#323842]'>
            Change Password
          </p>
        </div>
        <ChangePasswordForm />
      </section>
    </div>
  );
};

export default ChangePasswordPage;
