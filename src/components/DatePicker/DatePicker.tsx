import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { pickersLayoutClasses } from '@mui/x-date-pickers/PickersLayout';
import { useState } from 'react';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

export default function DatePicker() {
  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null]>([
    dayjs(new Date()),
    dayjs(new Date()),
  ]);
  const handleChange = (e: any) => {
    try {
      const formattedDate = dayjs(e[0]['$d']).format('YYYY-MM-DD');
      const formattedDate1 = dayjs(e[1]['$d']).format('YYYY-MM-DD');
      setDateRange([dayjs(formattedDate), dayjs(formattedDate1)]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker', 'StaticDateRangePicker']}>
        <DateRangePicker
          localeText={{ start: 'From', end: 'To' }}
          value={dateRange}
          onChange={handleChange}
        />
        <DateRangeCalendar
          sx={{
            span: {
              color: '#6355D8',
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '14px',
            },
          }}
          value={dateRange}
          onChange={handleChange}
          calendars={1}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
