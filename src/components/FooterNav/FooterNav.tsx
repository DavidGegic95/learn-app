// import React from 'react';

interface FooterNav {
  title: string;
  list: string[];
}

const FooterNav = ({ title, list }: FooterNav) => {
  return (
    <div className='flex flex-col gap-[14px]'>
      <span className='font-montserrat font-bold text-20 leading-30'>
        {title}
      </span>
      {list.map((item) => {
        return (
          <span className='font-poppins font-normal text-base leading-6'>
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default FooterNav;
