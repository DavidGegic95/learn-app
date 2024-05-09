import React, { useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import {
  grayButtonStyle,
  headerStyle,
  purpleButtonStyle,
} from '../../styles-for-tailwind';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Button from '../../components/Button/Button';
import { TRAINING_SERVICE } from '../../env';
import { idFromLocalStorage } from '../../components/MiniProfile/utils';
import { uuid } from './utils';
import { toast } from 'react-toastify';
import toasterIcon from '../../assets/toaster-icon.svg';
import { useNavigate } from 'react-router-dom';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const inputStyle = `flex mb-[16px] pl-[16px]  bg-[#F3F4F6FF] rounded-lg border-0 min-w-[340px]  
  w-[50%] h-[40px]  font-poppins text-base leading-26 font-normal  outline-none 
  focus:text-[#171A1FFF] focus:outline-[#F3F4F6FF] 
  focus:bg-white 
   focus:border border-solid border-[#F3F4F6FF] box-shadow-custom-focus`;
const labelStyle =
  'font-poppins font-bold text-[1rem] leading-[1.6rem] text-[#424955] flex flex-col';
const ToasterMessage = () => (
  <div className='flex items-center justify-start gap-[8px]'>
    <img src={toasterIcon} alt='toaster icon' />
    Training added
  </div>
);

const MyAccountAddPassedTrainig = () => {
  const navigate = useNavigate();
  const notify = () => toast(<ToasterMessage />, { theme: 'light' });
  const [trainerNames, setTrainerNames] = React.useState<string[]>([]);
  const [date, setDate] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  const [formData, setFormData] = useState({
    name: '',
    duration: 0,
    type: '',
    description: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    date: '',
    duration: '',
    type: '',
    description: '',
  });
  const handleChangeForm = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };
  const handleChange = (event: SelectChangeEvent<typeof trainerNames>) => {
    const {
      target: { value },
    } = event;
    setTrainerNames(typeof value === 'string' ? value.split(',') : value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.description ||
      !formData.duration ||
      !formData.type ||
      !date ||
      !trainerNames[0]
    ) {
      Object.keys(formData).forEach((key) => {
        if (!formData[key as keyof typeof formData]) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [key as keyof typeof formData]: 'This field is required',
          }));
        }
      });
      return;
    }
    const requestData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        trainderId: trainerNames[0],
        date: date ? date.format('YYYY-MM-DD') : 'invalid date',
        id: uuid(),
        studentId: idFromLocalStorage(),
        trainerId: uuid(),
        type: {
          type: formData.type,
          id: uuid(),
        },
      }),
    };
    fetch(TRAINING_SERVICE, requestData)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        notify();
        navigate('/my-account/trainings/student');
        window.scrollTo({
          top: 0,
          behavior: 'auto',
        });
        console.log(data);
      })
      .catch((error) => {
        console.error('There was a problem with your fetch operation:', error);
      });

    TRAINING_SERVICE;
  };

  return (
    <div className='w-[80%] my-[64px] mv-custom-my-0 mv-custom-py-16px mx-auto flex flex-col items-start justify-center gap-[16px]'>
      <Breadcrumbs steps={['My Account', 'Tranings', 'Add training']} />
      <h1 className={headerStyle + ' text-center w-full'}>
        Add passed training
      </h1>
      <h2>Training</h2>
      <main className='flex items-start justify-start gap-[10%] w-full  flex-wrap'>
        <section>
          <form
            onChange={handleChangeForm}
            onSubmit={handleSubmit}
            action=''
            className='flex flex-col gap-[16px]'
          >
            <label className={labelStyle} htmlFor=''>
              Name
              <input
                onChange={handleChangeForm}
                name='name'
                value={formData.name}
                className={inputStyle + ` ${errors.name ? 'error-border' : ''}`}
                type='text'
              />
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <label className={labelStyle}>
                Traning start date
                <DatePicker
                  className='mv-custom-w-340px'
                  sx={{
                    input: {
                      padding: '10px',
                      borderColor: '#6355D8',
                    },
                    div: { borderColor: '#6355D8' },
                  }}
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                />
              </label>
            </LocalizationProvider>
            <label className={labelStyle} htmlFor=''>
              Duration
              <input
                onChange={handleChangeForm}
                value={formData.duration}
                name='duration'
                className={
                  inputStyle + ` ${errors.duration ? 'error-border' : ''}`
                }
                type='number'
              />
            </label>
            <label className={labelStyle} htmlFor=''>
              Type
              <select
                onChange={handleChangeForm}
                value={formData.type}
                name='type'
                className={inputStyle + ` ${errors.type ? 'error-border' : ''}`}
              >
                <option value='Java'>Java</option>
                <option value='Go'>Go</option>
                <option value='Rust'>Rust</option>
                <option value='C++'>C++</option>
              </select>
            </label>
            <label className={labelStyle} htmlFor=''>
              Description
              <textarea
                onChange={handleChangeForm}
                value={formData.description}
                name='description'
                placeholder='Enter item description'
                className={
                  'textarea w-[400px] mv-custom-w-340px h-[113px] pt-[9px] pb-[9px] pl-[12px] pr-[12px] font-poppins text-base leading-[26px] font-normal text-#171A1FFF bg-#F3F4F6FF rounded-[6px]' +
                  ` ${errors.description ? 'error-border' : ''}`
                }
                rows={10}
                cols={30}
              ></textarea>
            </label>
            <div className='flex items-center justify-end gap-[16px] mt-[16px]'>
              <Button
                type='button'
                text='Cancel'
                className={grayButtonStyle + ' py-[8px]'}
              />
              <Button
                type='submit'
                text='Add'
                className={purpleButtonStyle + ' py-[8px]'}
              />
            </div>
          </form>
        </section>
        <section className='flex flex-col'>
          <InputLabel htmlFor='demo-multiple-checkbo'>Add trainers</InputLabel>
          <Select
            sx={{
              width: '400px',
              div: {
                padding: '10px',
              },
              '@media (max-width: 600px)': {
                width: '340px',
              },
            }}
            className='mv-custom-w-340px'
            id='demo-multiple-checkbox'
            multiple
            value={trainerNames}
            onChange={handleChange}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled value=''>
              <em>Add trainers</em>
            </MenuItem>
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox
                  checked={trainerNames.indexOf(name) > -1}
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </section>
      </main>
    </div>
  );
};

export default MyAccountAddPassedTrainig;
