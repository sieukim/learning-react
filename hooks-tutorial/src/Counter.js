import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleClickIncrement = () => {
    setValue(value + 1);
  };

  const handleClickDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={handleClickIncrement}>+1</button>
      <button onClick={handleClickDecrement}>-1</button>
    </div>
  );
};

export default Counter;