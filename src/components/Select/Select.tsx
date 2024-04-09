// import React from 'react';

const Select = ({ languages }: { languages: string[] }) => {
  return (
    <select
      name='language'
      id='language'
      className='mt-1 bg-[#F5F5F5] border border-gray-300 rounded-md px-3 py-2 text-sm font-poppins font-normal'
    >
      {languages.map((language) => {
        return (
          <option
            className='mt-1 bg-[#F5F5F5] border border-gray-300 rounded-md px-3 py-2 text-sm font-poppins font-normal'
            value='language'
          >
            {language}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
