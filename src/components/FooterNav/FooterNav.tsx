// import React from 'react';
import { v4 as uuidv4 } from 'uuid';

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
          <span
            key={item + uuidv4()}
            className='font-poppins font-normal text-base leading-6'
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default FooterNav;
