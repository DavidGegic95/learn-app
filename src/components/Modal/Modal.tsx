import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '../Button/Button';
import { grayButtonStyle, redButtonStyle } from '../../styles-for-tailwind';
import xIcon from '../../assets/x-mark.svg';
import { USER_SERVICE } from '../../env';
import { idFromLocalStorage } from '../MiniProfile/utils';
import { useNavigate } from 'react-router-dom';
import AppContext, { SetUserData } from '../../AppContext';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#FFF',
  boxShadow: '0px 4px 9px #171a1f, 0px 0px 2px #171a1f',
  p: 4,
};
const userId = await idFromLocalStorage();

export default function BasicModal({ type }: { type: 'delete' | 'upload' }) {
  const { setUserData }: { setUserData: SetUserData } =
    React.useContext(AppContext);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const deleteAccount = () => {
    fetch(`${USER_SERVICE}/me`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: userId }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setUserData(null);
        localStorage.removeItem('user');
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        type='button'
        className={redButtonStyle + ' py-[8px]'}
        text={type === 'delete' ? 'Delete' : ' Upload'}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='flex items-center justify-between mb-[16px]'>
            <h2 className='font-montserrat font-normal text-[1.75rem] leading-[2.25rem] text-[#171A1F]'>
              {type === 'delete' ? 'Profile Deletion Confirmation' : ''}
            </h2>
            <Button
              text=''
              className='custom-hover-x-icon border-none rounded-md p-[4px]'
              type='button'
              onClick={handleClose}
            >
              <img src={xIcon} alt='' />
            </Button>
          </div>
          {type === 'delete' && (
            <p>
              We're truly sorry to see you go. Before you proceed with deleting
              your profile, we want you to know that this action is permanent
              and irreversible. You'll lose access to all your account
              information, course progress, certificates, and any learning
              communities you're a part of. <br /> <br /> If there's anything we
              can do to improve your experience or if you need assistance with
              any issues you've encountered, please reach out to our support
              team. We're always here to help. <br /> <br /> If you still wish
              to delete your account, please click on the 'Confirm' button
              below.
            </p>
          )}
          <div className='flex items-center justify-end gap-[8px]'>
            <Button
              text='Cancel'
              type='button'
              onClick={handleClose}
              className={grayButtonStyle + ' py-[8px]'}
            />
            <Button
              text='Confirm'
              type='button'
              onClick={deleteAccount}
              className={redButtonStyle + ' py-[8px]'}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
