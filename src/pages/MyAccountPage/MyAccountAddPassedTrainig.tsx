import React from 'react';
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
  const [date, setDate] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className='w-[80%] my-[64px] mobile-view-w-90 mx-auto flex flex-col items-start justify-center gap-[16px]'>
      <Breadcrumbs />
      <h1 className={headerStyle + ' text-center w-full'}>
        Add passed training
      </h1>
      <h2>Training</h2>
      <main className='flex items-start justify-between w-full'>
        <section>
          <form
            onSubmit={handleSubmit}
            action=''
            className='flex flex-col gap-[16px]'
          >
            <label className={labelStyle} htmlFor=''>
              Name
              <input className={inputStyle} type='text' />
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
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                />
              </label>
            </LocalizationProvider>
            <label className={labelStyle} htmlFor=''>
              Duration
              <input className={inputStyle} type='text' />
            </label>
            <label className={labelStyle} htmlFor=''>
              Type
              <select className={inputStyle} id='cars' name='cars'>
                <option value='volvo'>Volvo</option>
                <option value='saab'>Saab</option>
                <option value='fiat'>Fiat</option>
                <option value='audi'>Audi</option>
              </select>
            </label>
            <label className={labelStyle} htmlFor=''>
              Description
              <textarea
                placeholder='Enter item description'
                className='textarea w-[400px] h-[113px] pt-[9px] pb-[9px] pl-[12px] pr-[12px] font-poppins text-base leading-[26px] font-normal text-#171A1FFF bg-#F3F4F6FF rounded-[6px]'
                name='message'
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
                {/* <Checkbox checked={personName.indexOf(name) > -1} /> */}
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
