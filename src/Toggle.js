import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import icons from react-icons
import './Toggle.css'; // Import your stylesheet
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
   
    // You can implement theme switching logic here
  };

  return (
    
    <div className='toggle__container'>
    <div className="theme-toggle">
    <input type="checkbox" id="toggle" className="toggle-checkbox"/>
    <label for="toggle" className="toggle-label">
      <div className="toggle-container">
        <div className="icons">
          <div className="icon sun">
            
          <WbSunnyIcon/>
          </div>
          <div className="icon moon">
              

          </div>
        </div>
      </div>
    </label>
  </div>
  </div>
  );
};

export default ToggleTheme;
