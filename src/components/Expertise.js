import React from 'react';

const Expertise = ({ darkMode }) => {
  return (
    <div className='w-full lg:w-1/3 '>
      <div className={`${darkMode ? 'dark dark:text-white bg-gray-800' : 'bg-gray-100 text-gray-700'} rounded-lg overflow-hidden shadow-md p-6 m-4`}>
        <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'dark:text-white' : ''}`}>Expertise</h2>
        <ul className={`text-gray-700 ${darkMode ? 'dark:text-gray-300' : ''}`}>
          <li>Project management</li>
          <li>Complex problem solver</li>
          <li>Android App Development</li>
          <li>Strong decision maker</li>
          <li>Familiarity with RESTful APIs and JSON</li>
          <li>Understanding of Material Design principles</li>
          <li>Experience with version control systems like Git</li>
        </ul>
      </div>
    </div>
  );
}

export default Expertise;
