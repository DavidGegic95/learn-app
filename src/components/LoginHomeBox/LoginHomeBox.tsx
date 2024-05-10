import {
  loginBoxDataInterface,
  loginBoxStyles,
} from '../../pages/LoginHomePage/utils';
import zeroImg from '../../assets/loginHome/loginHome-1.svg';
import firstImg from '../../assets/loginHome/loginHome-2.svg';
import secondImg from '../../assets/loginHome/loginHome-3.svg';

const LoginHomeBox = ({
  data,
  index,
}: {
  data: loginBoxDataInterface;
  index: number;
}) => {
  const profileImg = (index: number) => {
    switch (index) {
      case 0:
        return zeroImg;
      case 1:
        return firstImg;
      case 2:
        return secondImg;
      default:
        return '';
    }
  };
  return (
    <div className='flex flex-col items-center justify-between]'>
      <img
        className='w-[376px] h-[257px] object-cover rounded-tl-[8px] rounded-tr-[8px]'
        src={profileImg(index)}
        alt={'image of ' + data.title}
      />
      <div className='flex flex-col p-[16px] gap-[8px] rounded-bl-[8px] rounded-br-[8px] custom-box-shadow'>
        <p className={loginBoxStyles.subtitle}>{data.subtitle}</p>
        <p className={loginBoxStyles.title}>{data.title}</p>
        <div className='flex items-center justify-between w-full mt-[8px]'>
          <span className={loginBoxStyles.date}>{data.date}</span>
          <span className={loginBoxStyles.readTime}>{data.readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default LoginHomeBox;
