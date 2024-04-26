import { useEffect, useState } from 'react';
import {
  loginBoxDataInterface,
  loginBoxStyles,
} from '../../pages/LoginHomePage/utils';

const LoginHomeBox = ({
  data,
  index,
}: {
  data: loginBoxDataInterface;
  index: number;
}) => {
  const [imgUrl, setImgUrl] = useState('');
  const path = `../../assets/loginHome/loginHome-${index}.svg`;
  useEffect(() => {
    const importImage = async () => {
      const { default: logo } = await import(/* @vite-ignore */ path);
      setImgUrl(logo);
    };
    importImage();
  }, []);
  return (
    <div className='flex flex-col items-center justify-between'>
      <img
        className='w-[376px] h-[257px] object-cover rounded-tl-[8px] rounded-tr-[8px]'
        src={imgUrl}
        alt={'image of ' + data.title}
      />
      <div className='p-[16px] gap-[8px] rounded-bl-[8px] rounded-br-[8px] custom-box-shadow'>
        <p className={loginBoxStyles.subtitle}>{data.subtitle}</p>
        <p className={loginBoxStyles.title}>{data.title}</p>
        <div className='flex items-center justify-between w-full'>
          <span className={loginBoxStyles.date}>{data.date}</span>
          <span className={loginBoxStyles.readTime}>{data.readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default LoginHomeBox;
