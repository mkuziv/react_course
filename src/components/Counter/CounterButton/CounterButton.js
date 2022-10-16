import React from 'react';

import './CounterButton.css';

const CounterButton = (props) => {
  const isIncrease = props.sign === '+';
  let buttonName = isIncrease ? 'increase' : 'decrease';

  return (
    <button
      className='counter-button'
      onClick={() =>
        isIncrease ? props.updateCount(1) : props.updateCount(-1)} >
      {`${props.sign} ${buttonName}` }
    </button>

  );
}

export default CounterButton;
