import { useEffect, useState } from 'react';

const Box = ({ path }: { path: string }) => {
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    const importImage = async () => {
      const { default: logo } = await import(/* @vite-ignore */ path);
      setImgUrl(logo);
    };
    importImage();
  }, []);
  return (
    <>
      <div className='flex flex-col w-full border border-solid border-[#BCC1CAFF] rounded-[14px]'>
        {imgUrl && <img className='w-full h-full' src={imgUrl} alt='' />}
        <div className='w-full p-[24px]'>
          <span className='font-poppins text-base leading-6 font-normal text-[#6355D8FF]'>
            Do consectetur
          </span>
          <h1 className='font-montserrat mt-[8px] font-bold text-3xl leading-9 text-[#171A1F]'>
            Blog title
          </h1>
          <div className='flex justify-between items-center mt-[16px]'>
            <span className='font-poppins font-normal text-sm leading-5 text-[#9095A0]'>
              Date
            </span>
            <button className='p-[8px] border border-solid border-[#565E6C] rounded-full'>
              Duration
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
