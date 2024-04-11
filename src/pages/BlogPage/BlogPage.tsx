// import React from 'react';

import Box from '../../components/Box/Box';
import Button from '../../components/Button/Button';
import paths from './utils';

const BlogPage = () => {
  return (
    <div className='py-[64px] w-[80%] mx-auto'>
      <h1 className='my-[64px] text-center font-montserrat text-5xl leading-7 font-bold text-[#171A1FFF]'>
        Blog
      </h1>
      <div className='grid grid-cols-3 grid-rows-2 gap-5'>
        {/* <div className='flex flex-wrap justify-between gap-[16px]'> */}
        {paths.map((path) => {
          return <Box path={path} />;
        })}
      </div>
      <div className='flex mt-[32px] w-full items-center justify-center'>
        <Button
          type='button'
          className='p-[8px] bg-[#6355D8] rounded-md border border-solid border-[#565E6C]  font-poppins font-normal text-xs leading-5 text-[#FFF]'
          text='Load more articles'
        />
      </div>
    </div>
  );
};

export default BlogPage;