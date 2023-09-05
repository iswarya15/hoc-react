import React from 'react';

import withCounter from './withCounter';

function ClickCounter({ count, incrementCount }) {
  return (
    <>
      <h4>Click Counter</h4>
      <button onClick={incrementCount}>Click me!</button>

      <p style={{ fontSize: count }}>Count : {count}</p>
    </>
  );
}

export default withCounter(ClickCounter, 3);
