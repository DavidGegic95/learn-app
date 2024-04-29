// import React from 'react';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Button from '../../components/Button/Button';
import DatePicker from '../../components/DatePicker/DatePicker';
import {
  greenButtonStyle,
  headerStyle,
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
      <main className='flex w-full items-center justify-between'>
        <section className='flex w-[50%] h-[400px]'></section>
        <section className='flex w-[50%] '>
          <DatePicker />
        </section>
      </main>
    </div>
  );
};

export default TrainingPage;
