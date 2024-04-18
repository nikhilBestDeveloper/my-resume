import React, { useState } from 'react';
import darkModeIcon from './assets/day-mode.png';
import lightModeIcon from './assets/night-mode.png';
import About from './about/components/About';
import MyProjects from './myprojects/components/MyProjects';
import Home from './links/components/Home'

// Define page constants
const PAGES = {
  HOME: 'home',
  ABOUT: 'about',
  MYPROJECTS: 'projects',
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

  const handleDownloadResume = () => {
    const resumeUrl = process.env.PUBLIC_URL + '/Resume.pdf';
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'Resume.pdf';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  

  return (
    <div className={`min-h-screen min-w-screen flex flex-grow flex-col ${darkMode ? 'dark bg-gray-600' : 'bg-white'} transition select-text`}>
      <div className="dark-mode-toggle absolute top-4 right-4 cursor-pointer" onClick={toggleDarkMode}>
        <img src={darkMode ? lightModeIcon : darkModeIcon} alt="Dark Mode Toggle" className="w-8 h-8" />
      </div>
      <div className='flex flex-wrap flex-row h-20 items-center mb-8 '>
        <img src="/logo.png" alt="" className={`ms-4 mt-4 mr-4 cursor-pointer size-16 `} onClick={() => handlePageChange(PAGES.HOME)}></img>
        <nav className="justify-center items-center">
          <ul className="justify-center items-center flex space-x-4 text-2xl h-20 mr-10">

            <li>
              <button
                className={`nav-button relative ${getNavItemColor(activePage === PAGES.ABOUT, darkMode)} hover:text-blue-700 hover:bg-transparent`}
                onClick={() => handlePageChange(PAGES.ABOUT)}>About</button>
            </li>
            <li>
              <button
                className={`nav-button relative ${getNavItemColor(activePage === PAGES.MYPROJECTS, darkMode)} hover:text-blue-700 hover:bg-transparent`}
                onClick={() => handlePageChange(PAGES.MYPROJECTS)}>My Projects</button>
            </li>
          </ul>
        </nav>
      </div>
      {activePage === PAGES.HOME && <Home darkMode={darkMode} />}
      {activePage === PAGES.ABOUT && <About darkMode={darkMode} />}
      {activePage === PAGES.MYPROJECTS && <MyProjects darkMode={darkMode} />}


      <div className={`flex justify-center items-center mt-auto mb-4  ${darkMode ?'text-white' : 'text-gray-500'}`}>
        <span className={`mr-2 ${darkMode ? 'hover:text-blue-700' : 'hover:text-blue-500'}`} onClick={() => handlePageChange(PAGES.ABOUT)}>About</span>
        <span className="mx-2">|</span>
        <span className={`mx-2 ${darkMode ? 'hover:text-blue-700' : 'hover:text-blue-500'}`} onClick={() => handlePageChange(PAGES.MYPROJECTS)}>My Projects</span>
        <span className="mx-2">|</span>
        <button onClick={handleDownloadResume} className={`px-2 hover:text-blue-500 focus:outline-none ${darkMode ? 'hover:bg-transparent' : 'hover:bg-gray-200'}`}>Download Resume</button>
      </div>

    </div>
  );
}

export default App;


