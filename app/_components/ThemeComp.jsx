import React from 'react';
import { useTheme} from './ThemeContext';

const ThemeComp = () => {

  const{isDarkMode}=useTheme();


  return (
    <h1 className={`h-16 ${isDarkMode ? "bg-black" : "bg-white"}`}></h1>
  )
    
}



export default ThemeComp