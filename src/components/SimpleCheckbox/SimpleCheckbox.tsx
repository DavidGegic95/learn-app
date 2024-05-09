import { Dispatch, SetStateAction, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function SimpleCheckbox({
  name,
  setListChecked,
  listChecked,
}: {
  name: string;
  setListChecked: Dispatch<SetStateAction<{}>>;
  listChecked: object;
}) {
  useEffect(() => {}, []);
  const handleChange = (e: any) => {
    setListChecked((prevListChecked) => ({
      ...prevListChecked,
      [name]: e.target.checked,
    }));
  };

  return (
    <>
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
