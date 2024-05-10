import zeroImg from '../../assets/blog/blog-0.png';
import firstImg from '../../assets/blog/blog-1.png';
import secondImg from '../../assets/blog/blog-2.png';
import thirdImg from '../../assets/blog/blog-3.png';
import fourthImg from '../../assets/blog/blog-4.png';
import fifthImg from '../../assets/blog/blog-5.png';

const Box = ({ index }: { index: number }) => {
  const img = (index: number) => {
    switch (index) {
      case 0:
        return zeroImg;
      case 1:
        return firstImg;
      case 2:
        return secondImg;
      case 3:
        return thirdImg;
      case 4:
        return fourthImg;
      case 5:
        return fifthImg;
      default:
        return '';
    }
  };
  return (
    <>
      <div className='flex flex-col w-full border border-solid border-[#BCC1CAFF] rounded-[14px]'>
        <img className='w-full h-full' src={img(index)} alt='blog post image' />
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
