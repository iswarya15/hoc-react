import React from 'react';
import withCounter from './withCounter'

export default function HoverCounter({count, incrementCount}) {

  return (
    <>
      <h4>Hover counter</h4>
      <button onMouseOver={incrementCount}>Click me!</button>
      <p style={{ fontSize: count }}>Count : {count}</p>
    </>
  );
}

export default withCounter(HoverCounter, 5);