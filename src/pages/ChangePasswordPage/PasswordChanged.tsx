import {
  grayText,
  purpleButtonStyle,
  subHeaderStyle,
} from '../../styles-for-tailwind';
import checkmark from '../../assets/checkmark.svg';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const PasswordChanged = () => {
  const navigate = useNavigate();
  return (
    <div className='py-[64px] w-[80%] mobile-view-w-90 mx-auto flex flex-col gap-[32px] items-center justify-center'>
      <h1 className={subHeaderStyle}>Password changed</h1>
      <img className='w-[50px]' src={checkmark} alt='' />
      <p className={grayText}>Please proceed sign in with new password</p>
      <Button
        onClick={() => navigate('/login')}
        type='button'
        text='Sign In'
        className={purpleButtonStyle + ' py-[8px]'}
      />
    </div>
  );
};

export default PasswordChanged;
