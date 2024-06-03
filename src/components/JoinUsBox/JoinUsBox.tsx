import { Dispatch, SetStateAction } from 'react';
import studentImg from '../../assets/joinus-student.png';
import trainerImg from '../../assets/joinus-trainer.png';
import Role from '../../pages/JoinUsPage/utils';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { purpleButtonStyle } from '../../styles-for-tailwind';

const JoinUsBox = ({
  role,
  setRole,
}: {
  role: Role;
  setRole: Dispatch<SetStateAction<Role>>;
}) => {
  const navigate = useNavigate();

  return (
    <div className='grid grid-cols-2 w-[80%] mobile-view-w-90 mx-auto mobile-view-joinusBox'>
      <div className='bg-[#FAFAFBFF] p-[64px] mobile-view-joinusBox'>
        <h2 className='font-montserrat text-[48px] leading-[68px] font-bold text-[#171A1FFF]'>
          Register as {role}
        </h2>
        <p className='font-poppins mt-[8px] mb-[24px]  leading-7 font-normal text-[#171A1FFF]'>
          Do consectetur proident proident id eiusmod deserunt consequat
          pariatur ad ex velit do Lorem reprehenderit.
        </p>
        <Button
          type='button'
          text='Join us'
          className={purpleButtonStyle + ' w-[112px] h-[52px]'}
          onClick={() => {
            setRole(role);
            navigate(`/joinus/${role}`);
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        />
      </div>
      {role === 'Student' ? (
        <img src={studentImg} alt='' />
      ) : (
        <img src={trainerImg} alt='' />
      )}
    </div>
  );
};

export default JoinUsBox;
