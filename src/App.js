import React, { useState } from 'react';
import darkModeIcon from './assets/day-mode.png';
import lightModeIcon from './assets/night-mode.png';
import About from './about/components/About';
import MyProjects from './myprojects/components/MyProjects';

// Define page constants
const PAGES = {
  HOME: 'home',
  MYPROJECTS: 'projects'
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activePage, setActivePage] = useState(PAGES.HOME);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const getNavItemColor = (selected, darkMode) => {
    if (selected) {
      return darkMode ? 'text-blue-400' : 'text-blue-400';
    } else {
      return darkMode ? 'text-white' : 'text-gray-600';
    }
  };

  const getUnderlineColor = (selected, darkMode) => {
    return selected ? (getNavItemColor(selected, darkMode)) : 'bg-transparent';
  };

  return (
    <div className={`min-h-screen min-w-screen flex flex-grow flex-col ${darkMode ? 'dark bg-gray-600' : 'white'} transition select-text`}>
      {/* <Links darkMode={darkMode}/> */}
      <div className="dark-mode-toggle absolute top-4 right-4 cursor-pointer" onClick={toggleDarkMode}>
        <img src={darkMode ? lightModeIcon : darkModeIcon} alt="Dark Mode Toggle" className="w-8 h-8" />
      </div>
      <div className='flex flex-wrap lg:flex-row flex-col  items-center'>
        <h2 className={`text-4xl font-extrabold m-4 mr-20 ${darkMode ? 'dark:text-white' : 'text-gray-800'}`}>NIKHIL AMBUWANI</h2>
        <nav className="justify-center items-center">
          <ul className="flex space-x-4 text-2xl">
            <li>
              <button
                className={`nav-button relative ${getNavItemColor(activePage === PAGES.HOME, darkMode)} hover:text-blue-700 hover:bg-transparent`}
                onClick={() => handlePageChange(PAGES.HOME)}
              >
                About
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform transform translate-x-0 ${getUnderlineColor(activePage === PAGES.HOME, darkMode)}`}></span>
              </button>
            </li>
            <li>
              <button
                className={`nav-button relative ${getNavItemColor(activePage === PAGES.MYPROJECTS, darkMode)} hover:text-blue-700 hover:bg-transparent`}
                onClick={() => handlePageChange(PAGES.MYPROJECTS)}
              >
                My Projects
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform transform translate-x-0 ${getUnderlineColor(activePage === PAGES.MYPROJECTS, darkMode)}`}></span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {activePage === PAGES.HOME && <About darkMode={darkMode} />}
      {activePage === PAGES.MYPROJECTS && <MyProjects darkMode={darkMode} />}
    </div>
  );
}

export default App;
