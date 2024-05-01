// import React from 'react';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Button from '../../components/Button/Button';
import DatePicker from '../../components/DatePicker/DatePicker';
import BasicTable from '../../components/Table/BasicTable';
// import BasicTable from '../../components/Table/Table';
import {
  greenButtonStyle,
  headerStyle,
  purpleButtonStyle,
  subHeaderStyle,
} from '../../styles-for-tailwind';
import { myPassedTrainings } from './utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toasterIcon from '../../assets/toaster-icon.svg';

const ToasterMessage = () => (
  <div className='flex items-center justify-start gap-[8px]'>
    <img src={toasterIcon} alt='' />
    Training added
  </div>
);

const TrainingPage = () => {
  const notify = () => toast(<ToasterMessage />, { theme: 'light' });

  return (
    <div className='py-[64px] w-[80%] mobile-view-w-90 mx-auto'>
      <Breadcrumbs steps={['My Account', 'Tranings']} />
      <ToastContainer hideProgressBar={true} theme='light' autoClose={5000} />

      <h1 className={headerStyle}>Trainings</h1>
      <Button
        onClick={notify}
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
        <BasicTable
          cells={Object.keys(myPassedTrainings[0])}
          rows={myPassedTrainings}
        />
      </div>
    </div>
  );
};

export default TrainingPage;
