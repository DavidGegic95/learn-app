import Arrow from '../../components/Arrow/Arrow';
import { v4 as uuidv4 } from 'uuid';

const Breadcrumbs = ({ steps }: { steps: string[] }) => {
  const baseStyleText = 'font-montserrat text-[0.9rem] leading-[1.25rem]';
  const activeText = 'text-[#6355D8FF] ' + baseStyleText;
  const notActiveText = 'text-[#171A1FFF] ' + baseStyleText;
  return (
    <div className='flex items-center justify-start w-full gap-[8px]'>
      {steps.map((step, index) => {
        if (index === steps.length - 1) {
          return (
            <p key={uuidv4()} className={notActiveText}>
              {step}
            </p>
          );
        } else {
          return (
            <div
              key={uuidv4()}
              className='flex items-center justify-between gap-[8px]'
            >
              <p key={uuidv4()} className={activeText}>
                {step}
              </p>
              <Arrow key={uuidv4()} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Breadcrumbs;
