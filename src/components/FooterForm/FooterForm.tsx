import Button from '../Button/Button';
import { purpleButtonStyle } from '../../styles-for-tailwind';

const FooterForm = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className='flex flex-col gap-[8px] mobile-view-custom'>
      <div className='flex flex-col'>
        <span className='text-[#6355D8] font-montserrat font-bold text-base leading-9 mobile-view-text'>
          Subscribe to our newsletter
        </span>
        <span className='text-[#424955] font-poppins font-normal text-xs leading-5'>
          For product announcements and exclusive insights
        </span>
      </div>

      <form onSubmit={handleSubmit} className='flex'>
        <input
          type='text'
          id='email'
          name='email'
          placeholder='Input your email'
          className='mailIcon w-68 h-8 pl-[32px] border border-[#9095A0] rounded-l-lg font-poppins font-normal text-base leading-6'
        />
        <Button
          type='submit'
          className={purpleButtonStyle + '  border rounded-none rounded-r-lg'}
          text='Subscribe'
        />
      </form>
    </div>
  );
};

export default FooterForm;
