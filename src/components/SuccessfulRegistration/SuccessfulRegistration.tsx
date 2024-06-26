import { useNavigate } from 'react-router-dom';
import checkmark from '../../assets/checkmark.svg';
import { UserData } from '../../pages/JoinUsPage/utils';
import { purpleButtonStyle } from '../../styles-for-tailwind';
import Button from '../Button/Button';

const SuccessfulRegistration = ({ data }: { data: UserData }) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center gap-[16px]'>
      <h1 className='font-montserrat text-4xl leading-16 font-bold text-[#171A1FFF]'>
        Registration
      </h1>
      <img src={checkmark} alt='' />
      <p className='w-[460px] text-center text-poppins text-base leading-8 text-[#171A1FFF]'>
        Congratulations, you have successfully registered with Learn Platform!
        Here is your credentials that you can change in your account
      </p>
      <div className='flex flex-col gap-[4px] items-start'>
        <span className='text-poppins font-bold text-base leading-6'>
          User name
        </span>
        <span>{data.username || ''}</span>
        <span className='text-poppins font-bold text-base leading-6'>
          Password
        </span>
        <span>{data.password || ''}</span>
      </div>
      <Button
        onClick={() => navigate('/login')}
        text='My account'
        className={
          purpleButtonStyle + ' w-[146px] h-[52px] text-white mt-[24px]'
        }
        type='button'
      />
    </div>
  );
};

export default SuccessfulRegistration;
