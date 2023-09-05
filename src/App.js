import React from 'react';
import './style.css';

import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

export default function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}
