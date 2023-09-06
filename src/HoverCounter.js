import React from 'react';
import {PropTypes} from "prop-types";

import withCounter from './withCounter';


export default function HoverCounter({count, incrementCount}) {

  return (
    <>
      <h4>Hover counter</h4>
      <button onMouseOver={incrementCount}>Click me!</button>
      <p style={{ fontSize: count }}>Count : {count}</p>
    </>
  );
}

HoverCounter.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired
}

export default withCounter(HoverCounter, 5);