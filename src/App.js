import React, { createContext } from 'react';
import { createPortal } from 'react-dom';
import './style.css';

import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

export const ThemeContext = createContext(null); //returns a context object

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <div>
        <h1>Hello!</h1>
        <p>Start editing to see some magic happen :)</p>
        <ClickCounter />
        <HoverCounter>{/*<ClickCounter /> */}</HoverCounter>

        {createPortal(<p>created thru Portal</p>, document.body)}
      </div>
    </ThemeContext.Provider>
  );
}
