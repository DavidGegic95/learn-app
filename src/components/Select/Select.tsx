// import React from 'react';

import { useEffect } from 'react';

const Select = ({
  list,
  valueSelectTag,
  setValueSelectTag,
  className,
}: {
  list: string[];
  setValueSelectTag?: (p: string) => void;
  valueSelectTag?: string;
  className?: string;
}) => {
  const handleChange = (event: any) => {
    const { value } = event.target;
    if (value && setValueSelectTag) {
      setValueSelectTag(value);
    }
  };
  useEffect(() => {
    setValueSelectTag && setValueSelectTag(list[0]);
  }, []);
  return (
    <select
      value={valueSelectTag}
      onChange={handleChange}
      defaultValue={list[0]}
      name='select'
      id='select'
      className={
        ' flex flex-col  mt-1 bg-[#F5F5F5] border border-gray-300 rounded-md px-3 py-2 text-sm font-poppins font-normal' +
        ` ${className}`
      }
    >
      {list.map((item, index) => {
        return (
          <option
            key={item + index}
            className='mt-1 bg-[#F5F5F5] border border-gray-300 rounded-md px-3 py-2 text-sm font-poppins font-normal'
            value={item}
          >
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
