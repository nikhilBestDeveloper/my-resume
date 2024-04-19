import React from 'react';

const Expertise = ({ darkMode }) => {
  return (
    <div className={`w-full lg:w-1/3 ${darkMode ? 'text-white' : 'text-gray-700'} `}>
        <h2 className={`text-3xl font-bold mb-4`}>Expertise</h2>
        <ul className={ `list-disc text-xl px-8 `}>
          <li>Project management</li>
          <li>Complex problem solver</li>
          <li>Android App Development</li>
          <li>Strong decision maker</li>
          <li>Familiarity with RESTful APIs and JSON</li>
          <li>Understanding of Material Design principles</li>
          <li>Experience with version control systems like Git</li>
        </ul>
    </div>
  );
}

export default Expertise;
