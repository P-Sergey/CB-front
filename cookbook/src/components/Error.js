import React from 'react';
import errorImg from './error.png';

const Error = (props) => {
  const { error } = props;
  return (
    <div>
      <img src={errorImg} alt='Error' className='error' />
      <div>Ошибка: {error.message}</div>
    </div>
  );
};

export default Error;
