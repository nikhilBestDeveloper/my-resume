import { list } from 'postcss';
import React from 'react';

const SkillsList = ({ darkMode }) => {
  return (
    <div className='w-full lg:w-1/3'>
        <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'dark:text-white' : ''}`}>Skills</h2>
        <ul className={ `list-disc text-xl text-gray-700 px-8 ${darkMode ? 'dark:text-gray-300' : ''}`}>
          <li>Jetpack Compose</li>
          <li>Kotlin/JAVA</li>
          <li>Retrofit</li>
          <li>Room / Realm</li>
          <li>Spring boot</li>
          <li>React js</li>
          <li>MVVM / MVI Architecture</li>
        </ul>
    </div>
  );
}

export default SkillsList;
