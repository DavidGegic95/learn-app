import React, { useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import {
  headerStyle,
  purpleButtonStyle,
  subHeaderStyle,
} from '../../styles-for-tailwind';
// import DataTable from '../../components/DataTable/DataTable';
import Button from '../../components/Button/Button';
import BasicTable from '../../components/Table/BasicTable';
import { trainerList } from '../../components/ProfileBox/utils';
import { TrainerType, mockTrainersList } from '../MyAccountPage/utils';
import { rows } from './utils';

const AddTrainerPage = () => {
  // const [formData, setFormData] = useState();
  const [currentList, setCurrentList] = useState(mockTrainersList);
  const [allTrainers, setAllTrainers] = useState(rows);
  let objectOfCheckedRows = {};
  [...rows].forEach((row) => {
    objectOfCheckedRows = {
      ...objectOfCheckedRows,
      [row.name]: false,
    };
  });
  const [listChecked, setListChecked] = useState(objectOfCheckedRows);

  const deleteProperty = (propertyName: string) => {
    const newObj = { ...listChecked };
    delete newObj[propertyName as keyof typeof listChecked];
    setListChecked(newObj);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const updateList: TrainerType[] = [];
    Object.keys(listChecked).forEach((key) => {
      if (listChecked[key as keyof typeof listChecked] === true) {
        allTrainers.forEach((row, index) => {
          if (row.name === key) {
            const newCurrentList: TrainerType[] = [];
            [...currentList].forEach((item) => {
              if (!(item.name === key)) {
                newCurrentList.push(item);
              }
              const newAlltrainers = [...allTrainers];
              newAlltrainers.splice(index, 1);
              setAllTrainers(newAlltrainers);
            });
            setCurrentList(newCurrentList);
            updateList.push(row);
            deleteProperty(key);
          }
        });
      }
    });
    setCurrentList((prev) => {
      return [...prev, ...updateList];
    });

    console.log(listChecked);
  };

  let object: any = {};
  [...rows].forEach((row) => {
    const newObj: any = { ...row };
    newObj.checked = false;
    object[newObj.name] = { ...newObj };
  });

  return (
    <div className='w-[80%] my-[64px] mobile-view-w-90 mx-auto flex flex-col items-start justify-center gap-[32px]'>
      <Breadcrumbs steps={['My Account', 'Add trainer']} />
      <h1 className={headerStyle + ' w-full text-center'}>Add trainer</h1>
      <p className='w-[50%] self-start'>
        Please select trainers for adding them into your trainers list * - There
        is no possibility to remove the trainer.{' '}
      </p>
      <main className='flex w-full items-start justify-between'>
        <section className='flex flex-col gap-[16px]'>
          <p className='font-montserrat font-normal text-[2rem] leading-[3rem] text-[#171A1F]'>
            All Trainers
          </p>
          <form action='' onSubmit={handleSubmit}>
            <BasicTable
              cells={Object.keys(rows[0])}
              rows={allTrainers}
              checkbox
              listChecked={listChecked}
              setListChecked={setListChecked}
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
          <BasicTable cells={Object.keys(currentList[0])} rows={currentList} />
        </section>
      </main>
    </div>
  );
};

export default AddTrainerPage;
