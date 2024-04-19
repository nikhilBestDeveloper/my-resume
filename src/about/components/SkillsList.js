import React from 'react';

const SkillsList = ({ darkMode }) => {
  return (
    <div className={`w-full lg:w-1/3 ${darkMode ? 'text-white' : 'text-gray-700'} `}>
        <h2 className={`text-3xl font-bold mb-4 `}>Skills</h2>
        <ul className={ `list-disc text-xl px-8 `}>
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
