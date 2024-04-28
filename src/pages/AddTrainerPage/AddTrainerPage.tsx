import React, { useState } from 'react';
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
  const [formData, setFormData] = useState();
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  const rows = [
    { id: 1, name: 'Elizabeth Watson', specialization: 'Go Lang' },
    { id: 2, name: 'Elizabeth Allen', specialization: 'Rust' },
    { id: 3, name: 'Caleb Jones', specialization: 'Python' },
    { id: 4, name: 'Javier Ortiz', specialization: 'HTML' },
    { id: 5, name: 'Brandon Taylor', specialization: 'CSS' },
  ];
  let object: any = {};
  rows.forEach((row) => {
    const newObj: any = { ...row };
    newObj.checked = false;
    object[newObj.name] = { ...newObj };
  });
  const [controlObject, setControlObject] = useState(object);

  const handleChange = (event: any) => {
    const checkedCurrent = controlObject[event.target.name].checked;
    const newState = { ...controlObject };
    newState[event.target.name].checked = checkedCurrent;
    setControlObject(newState);
  };
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
          <form action='' onChange={handleChange} onSubmit={handleSubmit}>
            <BasicTable
              state={controlObject}
              rows={rows}
              role='student'
              checkbox
            />
            <Button
              text='Add'
              className={
                purpleButtonStyle + ' mt-[16px] max-w-[80px]  py-[8px]'
              }
              type='submit'
            />
          </form>
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
