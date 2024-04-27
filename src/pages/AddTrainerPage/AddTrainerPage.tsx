import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import {
  headerStyle,
  purpleButtonStyle,
  subHeaderStyle,
} from '../../styles-for-tailwind';
import DataTable from '../../components/DataTable/DataTable';
import Button from '../../components/Button/Button';
import BasicTable from '../../components/Table/Table';
import { trainerList } from '../../components/ProfileBox/utils';
import { mockTrainersList } from '../MyAccountPage/utils';

const AddTrainerPage = () => {
  return (
    <div className='w-[80%] my-[64px] mobile-view-w-90 mx-auto flex flex-col items-start justify-center gap-[32px]'>
      <Breadcrumbs />
      <h1 className={headerStyle}>Add trainer</h1>
      <p className='w-[50%] self-start'>
        Please select trainers for adding them into your trainers list * - There
        is no possibility to remove the trainer.{' '}
      </p>
      <main className='flex w-full items-start justify-between'>
        <section className='flex flex-col gap-[16px]'>
          <p className='font-montserrat font-normal text-[2rem] leading-[3rem] text-[#171A1F]'>
            All Trainers
          </p>
          <DataTable />
          <Button
            text='Add'
            className={purpleButtonStyle + ' max-w-[80px]  py-[8px]'}
            type='button'
          />
        </section>
        <section className='flex flex-col gap-[16px]'>
          <p className='font-montserrat font-normal text-[2rem] leading-[3rem] text-[#171A1F]'>
            My Trainers
          </p>
          <BasicTable role='student' rows={mockTrainersList} />
        </section>
      </main>
    </div>
  );
};

export default AddTrainerPage;
