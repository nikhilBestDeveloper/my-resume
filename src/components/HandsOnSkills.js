import React from 'react';

const HandsOnSkills = ({ darkMode }) => {
  return (
    <div className={`w-full`}>
    <div className={`${darkMode ? 'dark bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'} rounded-lg overflow-hidden shadow-md p-6 m-4 `}>
      <h2 className={`text-3xl font-bold mb-4 `}>Hands-On Skills</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Expertise in working in Android Studio</li>
        <li>Proficient in programming languages: Kotlin, Java, JavaScript</li>
        <li>Wide knowledge of Android Libraries: Jetpack Compose, Retrofit, Room, Okhttp, Gson, Korouties, and lifecycle components</li>
        <li>Competent with using development tools like Git and Gradle</li>
        <li>Implementing complex UI/UX into smooth Android screens</li>
        <li>Ability to troubleshoot and resolve complex technical issues using team-building and team-effort</li>
        <li>Basic understanding of implementing Kotlin for cross-platform application</li>
        <li>Advance Web Development using Groovy on Grails</li>
        <li>MS Office Package (Excel, PowerPoint, etc.)</li>
      </ul>
    </div>
    </div>
  );
}

export default HandsOnSkills;
