import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Button from '../../components/Button/Button';
import DatePicker from '../../components/DatePicker/DatePicker';
import BasicTable from '../../components/Table/BasicTable';
import { DatePicker as BasicDatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  greenButtonStyle,
  headerStyle,
  purpleButtonStyle,
} from '../../styles-for-tailwind';
import { myPassedTrainings } from './utils';
import { useNavigate, useParams } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import { TRAINING_SERVICE } from '../../services';

const TrainingPage = () => {
  const navigate = useNavigate();
  const [trainingList, setTrainingList] = useState([]);

  const { roleparams } = useParams();
  useEffect(() => {
    fetch(TRAINING_SERVICE)
      .then((res) => {
        if (!res.ok) {
          console.error('error fetching training');
        }
        return res.json();
      })
      .then((data) => {
        setTrainingList(data.data);
      });
  }, []);

  return (
    <>
      {roleparams === 'student' ? (
        <div className='py-[64px] w-[80%] 2xl:w-[1200px] flex flex-col  mx-auto gap-[32px] mv-custom-w-full mv-custom-py-16px mv-custom-my-0'>
          <Breadcrumbs steps={['My Account', 'Tranings']} />

          <h1 className={headerStyle}>Trainings</h1>
          <Button
            onClick={() => navigate('/my-account/add-passed-training')}
            text='Add training'
            type='button'
            className={greenButtonStyle + ' max-w-[240px] py-[8px]'}
          />
          <h2
            className={
              'font-montserrat text-[2rem] font-bold leading-[3rem] text-[#171A1FFF]'
            }
          >
            Search Tranings
          </h2>
          <main className='flex w-full items-start justify-between mv-custom-flex-col gap-[32px] flex-wrap'>
            <section className='flex flex-col items-start justify-start gap-[16px]'>
              <div className='flex items-center justify-between gap-[32px] flex-wrap mv-custom-flex-col'>
                <div className='flex flex-col items-start justify-between '>
                  <label htmlFor='trainer-name'>Trainer name</label>
                  <input
                    className={`flex mb-[16px] pl-[16px]  bg-[#F3F4F6FF] rounded-lg border-0 min-w-[340px]  
                 w-[50%] h-[40px]  font-poppins text-base leading-26 font-normal  outline-none 
                 focus:text-[#171A1FFF] focus:outline-[#F3F4F6FF] 
                 focus:bg-white 
                  focus:border border-solid border-[#F3F4F6FF] box-shadow-custom-focus`}
                    type='text'
                    id='trainer-name'
                  />
                </div>
                <div className='flex flex-col items-start justify-between'>
                  <label htmlFor='trainer-Specializtion'>Specializtion</label>
                  <input
                    className={`flex mb-[16px] pl-[16px]  bg-[#F3F4F6FF] rounded-lg border-0 min-w-[340px]  
                 w-[50%] h-[40px]  font-poppins text-base leading-26 font-normal  outline-none 
                 focus:text-[#171A1FFF] focus:outline-[#F3F4F6FF] 
                 focus:bg-white 
                  focus:border border-solid border-[#F3F4F6FF] box-shadow-custom-focus`}
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
            <BasicTable
              cells={Object.keys(myPassedTrainings[0])}
              rows={myPassedTrainings}
            />
          </div>
        </div>
      ) : (
        <div className='py-[64px] 2xl:w-[1200px] w-[80%] mx-auto flex flex-col items-center justify-between gap-[32px]'>
          <h1 className={headerStyle}>Trainings</h1>
          <h2
            className={
              'font-montserrat text-[2rem] font-bold leading-[3rem] text-[#171A1FFF]' +
              ' text-start w-full'
            }
          >
            Trainings
          </h2>
          <div className='flex w-full items-start gap-[32px] justify-between mv-custom-flex-col'>
            <label
              className='flex flex-col items-start  font-poppins font-bold text-base leading-[1.4rem] text-[#424955]'
              htmlFor=''
            >
              Student name
              <input
                className={`flex mb-[16px] pl-[16px]  bg-[#F3F4F6FF] rounded-lg border-0 min-w-[400px]  
                  w-[50%] h-[40px]  font-poppins text-base leading-26 font-normal  outline-none 
                  focus:text-[#171A1FFF] focus:outline-[#F3F4F6FF] 
                  focus:bg-white 
                   focus:border border-solid border-[#F3F4F6FF] box-shadow-custom-focus`}
                type='text'
              />
            </label>

            <div className='mb-[32px]'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className='flex gap-[16px]'>
                  <label className='flex flex-col'>
                    From
                    <BasicDatePicker
                      sx={{ input: { padding: '8.5px' } }}
                    ></BasicDatePicker>
                  </label>
                  <label className='flex flex-col'>
                    To
                    <BasicDatePicker
                      sx={{ input: { padding: '8.5px' } }}
                    ></BasicDatePicker>
                  </label>
                </div>
              </LocalizationProvider>
            </div>
          </div>
          <Button
            type='button'
            text='Search'
            className={purpleButtonStyle + ' py-[8px] self-start'}
          />
          {trainingList.length !== 0 && (
            <BasicTable
              cells={Object.keys(myPassedTrainings[0])}
              rows={myPassedTrainings}
            />
          )}
        </div>
      )}
    </>
  );
};

export default TrainingPage;
