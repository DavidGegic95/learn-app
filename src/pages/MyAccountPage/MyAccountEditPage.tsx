import { headerStyle } from '../../styles-for-tailwind';
import ProfileBoxEdit from '../../components/ProfileBox/ProfileBoxEdit';

const MyAccountEditPage = () => {
  return (
    <div className='w-[80%] 2xl:w-[1200px] my-[64px] mv-custom-edit-page mx-auto flex flex-col items-start justify-center gap-[32px]'>
      <h1 className={headerStyle + ' w-full text-center'}>My Account</h1>
      <ProfileBoxEdit />
    </div>
  );
};

export default MyAccountEditPage;
