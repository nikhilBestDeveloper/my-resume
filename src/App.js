// App.js
import React, { useState } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import darkModeIcon from './assets/day-mode.png';
import lightModeIcon from './assets/night-mode.png';
import HandsOnSkills from './components/HandsOnSkills';
import SkillsList from './components/SkillsList';
import Expertise from './components/Expertise';
import Certifications from './components/Certificates';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen min-w-screen flex flex-grow flex-col ${darkMode ? 'dark bg-gray-700' : 'white'} transition`} >
      <div className="dark-mode-toggle absolute top-4 right-4 cursor-pointer" onClick={toggleDarkMode}>
        <img src={darkMode ? lightModeIcon : darkModeIcon} alt="Dark Mode Toggle" className="w-12 h-12" />
      </div>
      <div className="flex-grow flex flex-col justify-start items-start">
      <h2 className={`text-5xl font-extrabold text-gray-800 m-4 ${darkMode ? 'dark:text-white' : ''}`}>NIKHIL AMBUWANI</h2>
        <PersonalInfo darkMode={darkMode} />
        <div className='flex flex-wrap justify-between w-full'>
        <SkillsList darkMode={darkMode} />
        <Expertise darkMode={darkMode} />
        <Certifications darkMode={darkMode}/>
        </div>
        <Education darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <HandsOnSkills darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
