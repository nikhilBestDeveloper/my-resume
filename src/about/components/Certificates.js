import React from 'react';
import customBulletIcon from '../assets/certificate.png'; 

const Certifications = ({ darkMode }) => {
  return (
    <div className={`w-max lg:w-1/3 h-full ${darkMode ? 'text-white' : 'text-gray-700'} `}>
        <h2 className="text-3xl font-bold mb-4">Certifications</h2>
        <ul className={ `list-disc text-xl`}>
          <li className="mb-4 relative flex items-center">
            <img src={customBulletIcon} alt="Custom Bullet" className={darkMode?"icon-dark":"icon-light"} />
            <span>Advance Web Development - Verbatim Technologies 2016.<br/> 
            Using Groovy on grails</span>
          </li>
          <li className="mb-4 relative flex items-center">
            <img src={customBulletIcon} alt="Custom Bullet" className={darkMode?"icon-dark":"icon-light"} />
            <span>MS Office Package, Computer Based Society of Education 2012.<br/> 
            Used MS Office Package (Excel, Powerpoint etc.)</span>
          </li>
        </ul>
      </div>
  );
}

export default Certifications;
