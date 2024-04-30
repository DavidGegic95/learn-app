import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { headerStyle } from '../../styles-for-tailwind';
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
  const inputStyle = 'bg-white border border-[#6355D8] rounded-[6px] h-[42px]';
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
  return (
    <div className='w-[80%] my-[64px] mobile-view-w-90 mx-auto flex flex-col items-start justify-center gap-[16px]'>
      <Breadcrumbs />
      <h1 className={headerStyle + ' text-center w-full'}>
        Add passed training
      </h1>
      <h2>Training</h2>
      <main className='flex items-start justify-between w-full'>
        <section>
          <form action='' className='flex flex-col'>
            <label htmlFor=''>Name</label>
            <input className={inputStyle} type='text' />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <label>Traning start date</label>
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
            </LocalizationProvider>
            <label htmlFor=''>Duration</label>
            <input className={inputStyle} type='text' />
            <label htmlFor=''>Type</label>
            <select className={inputStyle} id='cars' name='cars'>
              <option value='volvo'>Volvo</option>
              <option value='saab'>Saab</option>
              <option value='fiat'>Fiat</option>
              <option value='audi'>Audi</option>
            </select>
            <label htmlFor=''>Description</label>
            <textarea
              placeholder='Enter item description'
              className='bg-white border border-[#6355D8] rounded-[6px] p-[8px]'
              name='message'
              rows={10}
              cols={30}
            ></textarea>
          </form>
        </section>
        <section className='flex'>
          <Select
            sx={{ width: '400px' }}
            id='demo-multiple-checkbox'
            multiple
            value={personName}
            onChange={handleChange}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
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
