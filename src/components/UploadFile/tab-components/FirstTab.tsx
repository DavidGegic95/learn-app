import { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import Button from '../../Button/Button';
import {
  browseButtonStyle,
  grayButtonStyle,
  grayPurpleButtonStyle,
  purpleButtonStyle,
} from '../../../styles-for-tailwind';
import uploadIcon from '../../../assets/upload-cloud.svg';

export default function FirstTab({ setIsOpen }: { setIsOpen: any }) {
  const [file, setFile] = useState({
    selectedFile: null,
  });

  const [dragActive, setDragActive] = useState(false);
  const [msg, setMsg] = useState('');

  const checkFileType = (e: any, eventType: any) => {
    let extension;

    if (eventType === 'drop') {
      extension = e.dataTransfer.files[0].name.match(/\.([^.]+)$/)[1];
    } else {
      extension = e.target.value.match(/\.([^.]+)$/)[1];
    }

    switch (extension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'pdf':
        eventType !== 'drop'
          ? setFile({ selectedFile: e.target.files[0] })
          : setFile({ selectedFile: e.dataTransfer.files[0] });
        setMsg('');
        break;
      default:
        setFile({ selectedFile: null });
        setMsg(`.${extension} format is not supported.`);
    }
  };

  const checkSize = (e: any, eventType: any) => {
    let size;
    if (eventType === 'drop') {
      // console.log("size", e.dataTransfer.files[0]);
      size = e.dataTransfer.files[0].size / 8;
    } else {
      // console.log("size", e.target.files[0].size);
      size = e.target.files[0].size / 8;
    }
    // console.log("converted size", size);

    if (size <= 51200) {
      checkFileType(e, eventType);
    } else {
      setMsg('Size should be less than 50KB');
    }
  };

  const chooseFile = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      checkSize(e, '');
      checkFileType(e, '');
    }
  };

  const handleDrag = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      checkSize(e, 'drop');
      // checkFileType(e, "drop");
    }
  };

  return (
    <div className='FirstTab'>
      <form
        className=''
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onSubmit={(e) => {
          e.preventDefault();
          setIsOpen((prev: boolean) => !prev);
        }}
      >
        <div className='bg-[#FAFAFBFF] rounded-[8px] border-[2px] border-dashed border-[#BCC1CAFF] flex flex-col items-center justify-center py-[32px] px-[96px]'>
          {file.selectedFile !== null ? (
            <p className='filename'>{file.selectedFile['name']}</p>
          ) : msg !== '' ? (
            msg
          ) : (
            <img src={uploadIcon} alt='upload icon' />
          )}

          <div>
            <div className=''>
              <p className='text-center font-montserrat font-normal text-[1.5rem] leading-[3rem] text-[#171A1F]'>
                Drop files here
              </p>
              <p className='text-center font-poppins text-[1rem] leading-[1.5rem] text-[#6E7787FF]'>
                Supported format: PNG, JPG
              </p>
              <p className='text-center font-bold text-center font-poppins text-[1rem] leading-[1.5rem] text-[#6E7787FF]'>
                OR
              </p>
              <div className='w-full flex items-center justify-center'>
                <label
                  htmlFor='img'
                  className={
                    browseButtonStyle + ' text-center  cursor-pointer'
                  }
                  onClick={() => document.getElementById('getFile')?.click()}
                >
                  Browse files
                  <input
                    type='file'
                    data-max-size='2048'
                    id='getFile'
                    className='hidden'
                    onChange={chooseFile}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-end py-[8px] gap-[8px]'>
          <Button
            type='button'
            className={grayButtonStyle + ' py-[8px]'}
            text='Cancel'
            onClick={() => setIsOpen((prev: boolean) => !prev)}
          />
          <Button
            type='submit'
            className={purpleButtonStyle + ' py-[8px]'}
            text='Upload'
          />
        </div>
      </form>
    </div>
  );
}
