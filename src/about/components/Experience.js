import React from 'react';

const Experience = ({ darkMode }) => {
  return (
    <div className={`w-full`}>
    <div className={`${darkMode ? 'dark dark:text-white bg-gray-800' : 'bg-gray-100 text-gray-700'} rounded-lg overflow-hidden shadow-md p-6 m-4`}>
      <h2 className={`text-3xl font-bold mb-4 ${darkMode ? '' : ''}`}>Experience</h2>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">2023 Oct to Present</h3>
        <p className="mb-4">FreeLancing</p>
        <p className="mb-4">Android, Web App Developer</p>
        <ul className="list-disc pl-6">
          <li>Developing advanced applications using Kotlin/Java using Android Studio</li>
          <li>Debugged and resolved issues, improving overall application stability and user satisfaction.</li>
          <li>Updating with the latest Android trends, technologies, and best practices, integrating them into the development process.</li>
          <li>Implemented a vast number of API calls using Retrofit library.</li>
          <li>Knowledge of TTS service to increase the scope of application users.</li>
          <li>Implemented Jetpack Compose in Android Project for Perfect and user-friendly UI.</li>
        </ul>
      </div>

      {/* Experience 2 */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">2020 DEC - 2023 Sept</h3>
        <p className="mb-4">Sweet Corner</p>
        <p className="mb-4">Co-Owner</p>
        <ul className="list-disc pl-6">
          <li>Managing Orders:</li>
          <ul className="list-disc pl-6">
            <li>Packaging products</li>
            <li>Creating and verifying bills</li>
          </ul>
          <li>Managing Customers:</li>
          <ul className="list-disc pl-6">
            <li>Taking orders</li>
            <li>Reviewing customer history, including credit and debit information</li>
          </ul>
          <li>Managing Stock:</li>
          <ul className="list-disc pl-6">
            <li>Understanding product trends</li>
            <li>Analyzing customer-product relationships</li>
            <li>Assessing customer-dealer relationships</li>
          </ul>
          <li>Managing Dealers:</li>
          <ul className="list-disc pl-6">
            <li>Issuing orders to dealers</li>
            <li>Updating stock and associated details</li>
            <li>Aligning dealer bills with stock inventory</li>
          </ul>
        </ul>
      </div>

      {/* Experience 3 */}
      <div>
        <h3 className="text-xl font-bold mb-2">2018 May - 2020 Dec</h3>
        <p className="mb-4">IT Junkies, Raigarh Chhattishgarh</p>
        <p className="mb-4">Mid Level Android App Developer</p>
        <ul className="list-disc pl-6">
          <li>Progressed from an entry-level role to a Mid Level developer through dedication and hard work.</li>
          <li>Mastery of foundational and advanced techniques in Android app development.</li>
          <li>Proficient in integrating creative and interactive designs with app functionalities.</li>
          <li>Successfully managed projects of varying scales, ranging from individual to extensive multi-app projects.</li>
          <li>Collaborated effectively within cross-functional teams, guiding both junior and senior colleagues.</li>
          <li>Established harmonious collaborations with backend developers to ensure seamless project execution.</li>
          <li>Managing group project as a project leader and a team player to effectively translate hard-hitting working hours to peaceful application development.</li>
          <li>Conducted code reviews to ensure code quality, performance, and adherence to best practices.</li>
          <li>Managed application across cross-functional teams and cross-functional environment with the use of GitHub and Git.</li>
          <li>Implemented a vast number of API calls using Retrofit library.</li>
          <li>Applied secure coding practices to protect user data and prevent vulnerabilities within the mobile applications.</li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Experience;
