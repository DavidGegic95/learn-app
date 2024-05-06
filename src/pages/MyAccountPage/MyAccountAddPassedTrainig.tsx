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
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Button from '../../components/Button/Button';
import { allValuesTruthy } from '../../components/Forms/ChangePasswordForm/utils';
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

const MyAccountAddPassedTrainig = () => {
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const inputStyle =
    'bg-white border border-[#6355D8] px-[8px] rounded-[6px] h-[42px]';
  const labelStyle =
    'font-poppins font-bold text-[1rem] leading-[1.6rem] text-[#424955] flex flex-col';
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    date: dayjs('2022-04-17'),
    duration: 0,
    type: '',
    description: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    date: '',
    duration: 0,
    type: '',
    description: '',
  });
  const handleChangeForm = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!allValuesTruthy(formData)) {
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
    console.log({ ...formData, ...names });
    ///////
  };

  const handleChangeDate = (event: any) => {
    const {
      target: { value },
    } = event;
    // event.$d.toISOString();
    // let onlyDate = event.$d.toISOString().split('T')[0];
    console.log(value);
    setFormData((prev) => ({
      ...prev,
      date: dayjs(value),
    }));
  };
  return (
    <div className='w-[80%] my-[64px] mobile-view-w-90 mx-auto flex flex-col items-start justify-center gap-[16px]'>
      <Breadcrumbs steps={['My Account', 'Tranings', 'Add training']} />
      <h1 className={headerStyle + ' text-center w-full'}>
        Add passed training
      </h1>
      <h2>Training</h2>
      <main className='flex items-start justify-start gap-[10%] w-full'>
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
                className={inputStyle}
                type='text'
              />
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <label className={labelStyle}>
                Traning start date
                <DatePicker
                  sx={{
                    input: {
                      padding: '10px',
                      borderColor: '#6355D8',
                    },
                    div: { borderColor: '#6355D8' },
                  }}
                  value={formData.date}
                  name='date'
                  onChange={() => handleChangeDate(event)}
                />
              </label>
            </LocalizationProvider>
            <label className={labelStyle} htmlFor=''>
              Duration
              <input
                onChange={handleChangeForm}
                value={formData.duration}
                name='duration'
                className={inputStyle}
                type='number'
              />
            </label>
            <label className={labelStyle} htmlFor=''>
              Type
              <select
                onChange={handleChangeForm}
                value={formData.type}
                name='type'
                className={inputStyle}
              >
                <option value='volvo'>Java</option>
                <option value='saab'>Go</option>
                <option value='fiat'>Rust</option>
                <option value='audi'>C++</option>
              </select>
            </label>
            <label className={labelStyle} htmlFor=''>
              Description
              <textarea
                onChange={handleChangeForm}
                value={formData.description}
                name='description'
                placeholder='Enter item description'
                className='textarea w-[400px] h-[113px] pt-[9px] pb-[9px] pl-[12px] pr-[12px] font-poppins text-base leading-[26px] font-normal text-#171A1FFF bg-#F3F4F6FF rounded-[6px]'
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
            sx={{ width: '400px', div: { padding: '10px' } }}
            id='demo-multiple-checkbox'
            multiple
            value={personName}
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
                  checked={personName.indexOf(name) > -1}
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
