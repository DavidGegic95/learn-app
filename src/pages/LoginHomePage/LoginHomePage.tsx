import {
  grayText,
  headerStyle,
  purpleButtonStyle,
  subHeaderStyle,
} from '../../styles-for-tailwind';
import { loginBoxData } from './utils';
import LoginHomeBox from '../../components/LoginHomeBox/LoginHomeBox';
import Button from '../../components/Button/Button';
import { UserDataType } from '../../AppContext';
import { useNavigate } from 'react-router-dom';

const LoginHomePage = ({ userData }: { userData: UserDataType | null }) => {
  const navigate = useNavigate();
  return (
    <div className='w-[80%] 2xl:w-[1200px] my-[64px] mobile-view-w-90 mx-auto flex flex-col items-center justify-center gap-[32px]'>
      <h1 className={headerStyle}>Hi, {userData && userData.firstName}!</h1>
      <p className={grayText + ' max-min-in-char text-center'}>
        Welcome to Learn Platform - where every day is a day to learn. Dive into
        the vast ocean of knowledge and empower yourself with the tools for a
        successful tomorrow. Happy learning!
      </p>
      <h2 className={subHeaderStyle}>What's new?</h2>
      <p className={grayText + ' max-min-in-char text-center'}>
        Do consectetur proident proident id eiusmod deserunt consequat pariatur
        ad ex velit do Lorem reprehenderit.
      </p>
      <div className='flex items-center justify-center gap-[16px] flex-col lg:flex-row'>
        {loginBoxData.map((item, index) => {
          return <LoginHomeBox data={item} index={index} key={item.title} />;
        })}
      </div>
      <Button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
          navigate('/blog');
        }}
        className={purpleButtonStyle + ' py-[8px]'}
        text='Read more articles'
        type='button'
      />
    </div>
  );
};

export default LoginHomePage;
