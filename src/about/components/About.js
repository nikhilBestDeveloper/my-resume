import HandsOnSkills from './HandsOnSkills';
import SkillsList from './SkillsList';
import Expertise from './Expertise';
import Certifications from './Certificates';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';

export default function Home({darkMode}){
    return  (
<div>
        <PersonalInfo darkMode={darkMode} />
        <div className={`flex flex-wrap lg:space-y-2 justify-between w-full ${darkMode ? 'dark dark:text-white bg-gray-800' : 'bg-gray-100 text-gray-700'} rounded-lg overflow-hidden shadow-md p-6 m-4`}>
          <SkillsList darkMode={darkMode} />
          <Expertise darkMode={darkMode} />
          <Certifications darkMode={darkMode}/>
        </div>
        <Education darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <HandsOnSkills darkMode={darkMode} />
        </div>
    )
}