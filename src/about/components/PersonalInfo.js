import React from 'react';

const PersonalInfo = ({ darkMode }) => {
  return (
    <div className={`w-full`}>
      <div className={`${darkMode ? 'dark text-white bg-gray-800' : 'bg-gray-100 text-gray-700'} rounded-lg overflow-hidden shadow-md p-6 m-4`}>
      <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'dark:text-white' : ''}`}>Personal Info</h2>
      <div className="flex flex-wrap mb-2">
        <div className="lg:w-1/4 px-4 pb-4">
          <h3 className={`text-xl font-bold mb-2`}>Long term goal</h3>
          <p className={`mb-2 text-lg`}>Embarking on a journey to code my way to success.</p>
        </div>
        <div className="lg:w-1/4 px-4 pb-4">
          <h3 className={`text-xl font-bold mb-2`}>Current Title</h3>
          <p className={`mb-2 text-lg`}>Android, Spring Boot, and ReactJS Mastery</p>
        </div>
        <div className="lg:w-1/4 px-4 pb-4">
          <h3 className={`text-xl font-bold mb-2`}>Contact</h3>
          <p className={`mb-2 text-lg`}>+91 8839286044</p>
        </div>
        <div className="lg:w-1/4 px-4 pb-4">
          <h3 className={`text-xl font-bold mb-2`}>Email</h3>
          <p className={`mb-2 text-lg`}>
            <a href="mailto:nikhilambuwani21@gmail.com" className={`text-blue-500 hover:underline ${darkMode ? 'dark:text-blue-300' : ''}`}>nikhilambuwani21@gmail.com</a>
          </p>
        </div>
      </div>
      <h2 className={`text-2xl font-bol mb-4 ${darkMode ? 'dark:text-white' : ''}`}>Summary</h2>
      <div className='flex flex-col'>
      <h3 className='text-xl font-semibold underline mb-1'>Full Stack Developer & Tech Enthusiast</h3>
      <p className={`mb-2 text-lg`}>
Experienced Mid Level Software Developer specializing in front-end development with a strong background in the entire Android app development lifecycle. Proficient in a variety of backend frameworks
including Node.js, Grails-Groovy, and React. Committed to driving successful software development careers through continuous learning and practical
application.</p>
      </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
