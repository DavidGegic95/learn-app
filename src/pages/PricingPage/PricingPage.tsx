// import React from 'react';

import AccordionContainer from '../../components/Accordion/Accordion';

const PricingPage = () => {
  return (
    <div className='py-[64px] w-[80%] mx-auto'>
      <h1 className='font-montserrat font-semibold text-7xl leading-14 text-center text-[#171A1F]'>
        Pricing
      </h1>
      <p className='font-poppins font-normal text-base leading-9 text-center text-[#9095A0]'>
        At Learn Platform, we believe in providing high-quality education that's
        accessible and affordable. We offer diverse pricing plans designed to
        cater to individual learners, groups, and organizations. Let's explore
        each option below:
      </p>
      <div className='w-full flex'></div>
      <h2 className='font-montserrat text-[48px] font-semibold text-4xl leading-17 text-center text-[#171A1F]'>
        Frequently asked questions
      </h2>
      <h3 className='font-poppins font-normal text-base leading-7 text-center text-[#9095A0]'>
        Exercitation dolore reprehenderit fugi
      </h3>
      <AccordionContainer />
    </div>
  );
};

export default PricingPage;
