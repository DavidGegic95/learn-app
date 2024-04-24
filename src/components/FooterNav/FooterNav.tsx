// import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

interface FooterNav {
  title: string;
  list: string[];
  routes: string[];
}

const FooterNav = ({ title, list, routes }: FooterNav) => {
  const onClickLink = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='flex flex-col gap-[14px]'>
      <span className='font-montserrat font-bold text-20 leading-30'>
        {title}
      </span>
      {list.map((item, index) => {
        return (
          <Link
            onClick={onClickLink}
            to={routes[index]}
            key={item + uuidv4()}
            className='font-poppins font-normal text-base leading-6'
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
};

export default FooterNav;
