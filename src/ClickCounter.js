import React, { useContext } from 'react';

import withCounter from './withCounter';
import { ThemeContext } from './App';

function ClickCounter({ count, incrementCount }) {
  const theme = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      <h4>Click Counter</h4>
      <button onClick={incrementCount}>Click me!</button>

      <p style={{ fontSize: count }}>Count : {count}</p>
    </>
  );
}

export default withCounter(ClickCounter, 3);
