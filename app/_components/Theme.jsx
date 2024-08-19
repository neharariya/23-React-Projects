import React from 'react';
import ThemeComp from './ThemeComp';
import { useTheme,ThemeProvider } from './ThemeContext';


const Theme = () => {

  const{isDarkMode, toggleTheme}=useTheme();

  return (
    <>
    <input  className="h-7 w-7 mt-5" type="checkbox" checked={isDarkMode} onChange={toggleTheme}></input>
    </>

  )
}

const ThemeFunction = () => {
  return (
    <ThemeProvider>
      <ThemeComp/>
      <Theme/>
    </ThemeProvider>
  );
};

export default ThemeFunction