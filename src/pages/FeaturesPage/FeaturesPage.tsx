// import React from 'react';
import featureImg0 from '../../assets/features/feature-0.svg';
import featureImg1 from '../../assets/features/feature-1.svg';
import Button from '../../components/Button/Button';
import { headerStyle, purpleButtonStyle } from '../../styles-for-tailwind';

const FeaturesPage = () => {
  return (
    <div className='py-[64px] w-[80%] mobile-view-w-90 mx-auto'>
      <h1 className={headerStyle + ' mb-[64px]'}>Features</h1>
      <h2 className='mb-[16px] font-montserrat font-semibold text-4xl leading-17 text-center text-[#171A1F]'>
        Learning
      </h2>
      <p className='font-poppins font-normal text-base leading-7 text-center text-[#9095A0]'>
        Nisi irure nisi mollit exercitation cupidatat excepteur. Lorem in
        ullamco <br /> reprehenderit exercitation sunt non tempor exercitation
        exercitation
      </p>
      <div className='my-[48px] flex items-center justify-between mobile-view-aboutus-reverse'>
        <div className='flex flex-col items-start justify-center gap-[12px] mobile-view-featurePage'>
          <h3 className='font-montserrat font-semibold text-5xl leading-14 text-[#171A1F]'>
            Feature
          </h3>
          <p className='w-[476px] font-poppins font-normal text-base leading-7 text-[#9095A0] mobile-view-featurePage-p'>
            Do consectetur proident proident id eiusmod deserunt consequat
            pariatur ad ex velit do Lorem reprehenderit. id eiusmod deserunt
            consequat pariatur ad ex velit do Lorem reprehenderit.
          </p>
          <Button
            text='Try now'
            type='button'
            className={purpleButtonStyle + ' py-[8px] px-[24px]'}
          />
        </div>

        <img src={featureImg0} alt='feature image' />
      </div>
      <div className='my-[48px] flex items-center justify-between mobile-view-featurePage'>
        <img src={featureImg1} alt='feature image' />

        <div className='flex flex-col items-start justify-center gap-[12px] mobile-view-featurePage'>
          <h3 className='font-montserrat font-semibold text-5xl leading-14 text-[#171A1F]'>
            Feature
          </h3>
          <p className='w-[476px] font-poppins font-normal text-base leading-7 text-[#9095A0] mobile-view-featurePage-p'>
            Do consectetur proident proident id eiusmod deserunt consequat
            pariatur ad ex velit do Lorem reprehenderit. id eiusmod deserunt
            consequat pariatur ad ex velit do Lorem reprehenderit.
          </p>
          <Button
            text='Try now'
            type='button'
            className={purpleButtonStyle + ' py-[8px] px-[24px]'}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
