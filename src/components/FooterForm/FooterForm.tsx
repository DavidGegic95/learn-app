// import React from 'react';

const FooterForm = () => {
  return (
    <div className='flex flex-col gap-[8px]'>
      <div className='flex flex-col'>
        <span className='text-[#6355D8] font-montserrat font-bold text-base leading-9'>
          Subscribe to our newsletter
        </span>
        <span className='text-[#424955] font-poppins font-normal text-xs leading-5'>
          For product announcements and exclusive insights
        </span>
      </div>

      <form>
        <input
          type='text'
          id='email'
          name='email'
          placeholder='Input your email'
          className='mailIcon w-68 h-8 pl-[32px] border border-[#9095A0] rounded-l-lg font-poppins font-normal text-base leading-6'
        />
        <button
          type='submit'
          className='w-28 h-9 border text-white rounded-r-lg bg-[#6355D8]'
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
