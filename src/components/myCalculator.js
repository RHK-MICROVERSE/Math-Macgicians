// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import calculate from '../logic/calculator.js';
// eslint-disable-next-line no-unused-vars
import Buttons from './button.js';
// eslint-disable-next-line no-unused-vars
import Render from './render.js';

function Calculator() {
  const [state, setState] = useState({
    obj: {
      total: null,
      next: null,
      operation: null,
    },
  });

  const handleClick = (buttonName) => setState(({ obj }) => ({ obj: calculate(obj, buttonName) }));

  return (
    <div className="calculator-cont">
      <h2>Let’s do some math !</h2>
      <div className="calculator-main-cont">
        <Render total={state.obj.total} next={state.obj.next} />
        <Buttons handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Calculator;