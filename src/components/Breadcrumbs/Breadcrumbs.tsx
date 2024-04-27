import Arrow from '../../components/Arrow/Arrow';

const Breadcrumbs = () => {
  const baseStyleText = 'font-montserrat text-[0.9rem] leading-[1.25rem]';
  const activeText = 'text-[#6355D8FF] ' + baseStyleText;
  const notActiveText = 'text-[#171A1FFF] ' + baseStyleText;
  return (
    <div className='flex items-center justify-start w-full gap-[8px]'>
      <p className={activeText}>My Account</p>
      <Arrow />
      <p className={notActiveText}>Add trainer</p>
      {/* <Arrow />
      <p className={notActiveText}>Add training</p> */}
    </div>
  );
};

export default Breadcrumbs;
