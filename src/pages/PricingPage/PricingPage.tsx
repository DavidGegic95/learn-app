// import React from 'react';

import AccordionContainer from '../../components/Accordion/Accordion';
import PricingOptionBox from '../../components/PricingOptionBox/PricingOptionBox';
import { PricingOptionContent } from '../../components/PricingOptionBox/utils';
import { grayText, headerStyle } from '../../styles-for-tailwind';

const PricingPage = () => {
  return (
    <div className='py-[64px] w-[80%] mobile-view-w-90 mx-auto flex flex-col gap-[48px] items-center mobile-view-pricingPage'>
      <h1 className={headerStyle}>Pricing</h1>
      <p className={grayText + ' max-min-in-char  text-center'}>
        At Learn Platform, we believe in providing high-quality education that's
        accessible and affordable. We offer diverse pricing plans designed to
        cater to individual learners, groups, and organizations. Let's explore
        each option below:
      </p>
      <div className='w-full flex items-center justify-center mobile-view-pricing-boxes'>
        {PricingOptionContent.map((content) => {
          return <PricingOptionBox key={content.title} {...content} />;
        })}
      </div>
      <div className='flex flex-col gap-[24px]'>
        <h2 className='font-montserrat text-[48px] font-semibold text-4xl leading-17 text-center text-[#171A1F]'>
          Frequently asked questions
        </h2>
        <h3 className='font-poppins font-normal text-base leading-7 text-center text-[#9095A0]'>
          Exercitation dolore reprehenderit fugi
        </h3>
      </div>

      <div className='w-full'>
        <AccordionContainer />
      </div>
    </div>
  );
};

export default PricingPage;
