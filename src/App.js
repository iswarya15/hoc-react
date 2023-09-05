import React, { createContext, useContext } from 'react';
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
        <HoverCounter />
      </div>
    </ThemeContext.Provider>
  );
}
