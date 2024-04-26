// import React from 'react';

import Box from '../../components/Box/Box';
import Button from '../../components/Button/Button';
import { headerStyle, purpleButtonStyle } from '../../styles-for-tailwind';
import paths from './utils';

const BlogPage = () => {
  return (
    <div className='py-[64px] w-[80%] mx-auto'>
      <h1 className={headerStyle + ' mb-[64px]'}>Blog</h1>
      <div className='grid grid-cols-3 grid-rows-2 gap-5'>
        {/* <div className='flex flex-wrap justify-between gap-[16px]'> */}
        {paths.map((path) => {
          return <Box key={path} path={path} />;
        })}
      </div>
      <div className='flex mt-[32px] w-full items-center justify-center'>
        <Button
          type='button'
          className={purpleButtonStyle + ' p-[8px]'}
          text='Load more articles'
        />
      </div>
    </div>
  );
};

export default BlogPage;
