// import React from 'react';
import lockIcon from '../../assets/Lock-2.svg';
import ChangePasswordForm from '../../components/Forms/ChangePasswordForm/ChangePasswordForm';

const ChangePasswordPage = () => {
  return (
    <div className='py-[64px] w-[80%] mobile-view-w-90 mx-auto flex mv-custom-flex-col'>
      <section className='w-[40%] flex flex-col  gap-[32px]'>
        <h2 className='font-montserrat font-bold text-[2rem] leading-12 text-[#323842]'>
          Security
        </h2>
        <div className='flex items-center justify-start gap-[4px]'>
          <img src={lockIcon} alt='' />
          <p className='font-montserrat font-bold text-[1.1rem] leading-[1.5rem] text-[#323842]'>
            Change Password
          </p>
        </div>
      </section>
      <ChangePasswordForm />
    </div>
  );
};

export default ChangePasswordPage;
