import FirstTab from './tab-components/FirstTab';
import Button from '../Button/Button';
import xIcon from '../../assets/x-mark.svg';

export default function Modal({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: any;
  isOpen: boolean;
}) {
  return (
    <>
      {isOpen && (
        <div className='fixed z-10 inset-0 bg-white bg-opacity-80'>
          <div className='m-auto p-[16px] flex flex-col gap-[8px] justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[8px] border-[] custom-box-shadow-upload-modal'>
            <div className='flex w-full items-center justify-between'>
              <h3 className='font-montserrat font-bold text-[1.5rem]  leading-[3rem]  text-[#171A1F]'>
                Upload files
              </h3>
              <Button
                onClick={() => setIsOpen((prev: boolean) => !prev)}
                text=''
                type='button'
                className=''
              >
                <img src={xIcon}></img>
              </Button>
            </div>
            <FirstTab setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </>
  );
}
