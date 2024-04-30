// import React from 'react';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Button from '../../components/Button/Button';
import DatePicker from '../../components/DatePicker/DatePicker';
// import BasicTable from '../../components/Table/Table';
import {
  greenButtonStyle,
  headerStyle,
  purpleButtonStyle,
  subHeaderStyle,
} from '../../styles-for-tailwind';

const TrainingPage = () => {
  return (
    <div className='py-[64px] w-[80%] mobile-view-w-90 mx-auto'>
      <Breadcrumbs />
      <h1 className={headerStyle}>Trainings</h1>
      <Button
        text='Add training'
        type='button'
        className={greenButtonStyle + ' py-[8px]'}
      />
      <h2
        className={
          'font-montserrat text-[2rem] font-bold leading-[3rem] text-[#171A1FFF]'
        }
      >
        Search Tranings
      </h2>
      <main className='flex flex w-full items-start justify-between'>
        <section className='flex flex-col items-start justify-start gap-[16px]'>
          <div className='flex items-center justify-between gap-[32px]'>
            <div className='flex flex-col items-start justify-between '>
              <label htmlFor='trainer-name'>Trainer name</label>
              <input
                className='flex min-w-[200px] py-[4px] pl-[16px] pr-1 bg-[#F3F4F6FF] rounded-lg border-0 w-full font-poppins text-base leading-26 font-normal bg-[#F3F4F6FF] rounded-lg border-0 outline-none focus:text-[#171A1FFF] '
                type='text'
                id='trainer-name'
              />
            </div>
            <div className='flex flex-col items-start justify-between'>
              <label htmlFor='trainer-Specializtion'>Specializtion</label>
              <input
                className='flex min-w-[200px] py-[4px] pl-[16px] pr-1 bg-[#F3F4F6FF] rounded-lg border-0 w-full font-poppins text-base leading-26 font-normal bg-[#F3F4F6FF] rounded-lg border-0 outline-none focus:text-[#171A1FFF] '
                type='text'
                id='trainer-Specializtion'
              />
            </div>
          </div>
          <Button
            type='button'
            text='Search'
            className={purpleButtonStyle + ' py-[8px]'}
          />
        </section>
        <section className='flex'>
          <DatePicker />
        </section>
      </main>
      <div>
        <h3 className='font-montserrat text-[2rem] font-bold leading-[3rem] text-[#171A1FFF]'>
          My passed trainings
        </h3>
        {/* <BasicTable checkbox rows={[{ firstname: '' }]} role='student' /> */}
      </div>
    </div>
  );
};

export default TrainingPage;
