// import React from 'react';
import featureImg0 from '../../assets/features/feature-0.svg';
import featureImg1 from '../../assets/features/feature-1.svg';
import Button from '../../components/Button/Button';

const FeaturesPage = () => {
  return (
    <div className='py-[64px] w-[80%] mx-auto'>
      <h1 className='mb-[64px] font-montserrat font-semibold text-7xl leading-11 text-center text-[#171A1F]'>
        Features
      </h1>
      <h2 className='mb-[16px] font-montserrat font-semibold text-4xl leading-17 text-center text-[#171A1F]'>
        Learning
      </h2>
      <p className='font-poppins font-normal text-base leading-7 text-center text-[#9095A0]'>
        Nisi irure nisi mollit exercitation cupidatat excepteur. Lorem in
        ullamco <br /> reprehenderit exercitation sunt non tempor exercitation
        exercitation
      </p>
      <div className='my-[48px] flex items-center justify-between'>
        <div className='flex flex-col items-start justify-center gap-[12px]'>
          <h3 className='font-montserrat font-semibold text-5xl leading-14 text-[#171A1F]'>
            Feature
          </h3>
          <p className='w-[476px] font-poppins font-normal text-base leading-7 text-[#9095A0]'>
            Do consectetur proident proident id eiusmod deserunt consequat
            pariatur ad ex velit do Lorem reprehenderit. id eiusmod deserunt
            consequat pariatur ad ex velit do Lorem reprehenderit.
          </p>
          <Button
            text='Try now'
            type='button'
            className='py-[8px] px-[24px] bg-[#6355D8] rounded-[12px] text-[#FFFFFF]'
          />
        </div>

        <img src={featureImg0} alt='feature image' />
      </div>
      <div className='my-[48px] flex items-center justify-between'>
        <img src={featureImg1} alt='feature image' />

        <div className='flex flex-col items-start justify-center gap-[12px]'>
          <h3 className='font-montserrat font-semibold text-5xl leading-14 text-[#171A1F]'>
            Feature
          </h3>
          <p className='w-[476px] font-poppins font-normal text-base leading-7 text-[#9095A0]'>
            Do consectetur proident proident id eiusmod deserunt consequat
            pariatur ad ex velit do Lorem reprehenderit. id eiusmod deserunt
            consequat pariatur ad ex velit do Lorem reprehenderit.
          </p>
          <Button
            text='Try now'
            type='button'
            className='py-[8px] px-[24px] bg-[#6355D8] rounded-[12px] text-[#FFFFFF]'
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
