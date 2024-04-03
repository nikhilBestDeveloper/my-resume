import React from 'react';

const SkillsList = ({ darkMode }) => {
  return (
    <div className='w-full lg:w-1/3'>
      <div className={`${darkMode ? 'dark dark:text-white bg-gray-800' : 'bg-gray-100 text-gray-700'} rounded-lg overflow-hidden shadow-md p-6 m-4`}>
        <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'dark:text-white' : ''}`}>Skills</h2>
        <ul className={`text-gray-700 ${darkMode ? 'dark:text-gray-300' : ''}`}>
          <li>Jetpack Compose</li>
          <li>Kotlin/JAVA</li>
          <li>Retrofit</li>
          <li>Room / Realm</li>
          <li>Spring boot</li>
          <li>React js</li>
          <li>MVVM / MVI Architecture</li>
        </ul>
      </div>
    </div>
  );
}

export default SkillsList;
