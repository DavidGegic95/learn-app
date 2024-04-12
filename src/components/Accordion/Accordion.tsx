// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionContentType, accordionContent } from './utils';

export default function AccordionContainer() {
  return (
    <div>
      {accordionContent.map((content, index) => {
        return <AccordionComponent index={index} content={content} />;
      })}
    </div>
  );
}

function AccordionComponent({
  content,
  index,
}: {
  content: AccordionContentType;
  index: number;
}) {
  return (
    <Accordion defaultExpanded={index === 0 ? true : false}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel2-content'
        id='panel2-header'
      >
        <p className='font-poppins text-[20px] font-bold text-base leading-9 text-[#171A1F]'>
          {content.title}
        </p>
      </AccordionSummary>
      <AccordionDetails>
        <p className='font-poppins font-normal text-base leading-6 text-[#323842] min-w-[360px] max-w-[600px]'>
          {content.text}
        </p>
      </AccordionDetails>
    </Accordion>
  );
}
