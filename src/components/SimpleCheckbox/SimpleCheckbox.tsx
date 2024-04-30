import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

export default function SimpleCheckbox({
  name,
  setListChecked,
  listChecked,
}: {
  name: string;
  setListChecked: Dispatch<SetStateAction<{}>>;
  listChecked: object;
}) {
  //   const [isChecked, setIsChecked] = useState(
  //     listChecked[name as keyof typeof listChecked]
  //   );
  useEffect(() => {}, []);
  const handleChange = (e: any) => {
    // console.log(e?.target?.checked);
    // setIsChecked(e.target.checked);
    setListChecked((prevListChecked) => ({
      ...prevListChecked,
      [name]: e.target.checked,
    }));
  };

  return (
    <>
      {/* <Checkbox checked={isChecked} onChange={handleChange} />{' '} */}
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={listChecked[name as keyof typeof listChecked]}
              onChange={handleChange}
            />
          }
          label=''
        />
      </FormGroup>
    </>
  );
}
