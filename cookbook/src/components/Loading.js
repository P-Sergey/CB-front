import React from 'react';
import loading from './loading.gif';

const Loading = () => {
  return (
    <div>
      <img src={loading} alt='loading...' className='loading' />
      <div>Loading...</div>
    </div>
  );
};

export default Loading;
