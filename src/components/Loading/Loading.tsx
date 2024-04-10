import React from 'react';
import './loading.css';

const Loading = () => {
  return (
    <div className='modal'>
      <div className='loading-spinner'></div>
      <div>Loading...</div>
    </div>
  );
};

export default Loading;
