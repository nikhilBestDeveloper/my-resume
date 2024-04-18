import React, { useState, useEffect } from 'react';

export default function App() {
  const [nameAnimationComplete, setNameAnimationComplete] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNameAnimationComplete(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const roles = [
    'Native Android Developer',
    'Spring Boot Developer',
    'React Developer'
  ];

  useEffect(() => {
    if (nameAnimationComplete && currentRoleIndex < roles.length) {
      const roleTimer = setInterval(() => {
        setCurrentRoleIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      return () => clearInterval(roleTimer);
    }
  }, [nameAnimationComplete, currentRoleIndex, roles.length]);


  const links = [
    { title: 'Github', icon: 'github.png', url: 'https://www.github.com/nikhilBestDeveloper', bg: "bg-white" },
    { title: 'Linkedin', icon: 'linkedin.png', url: 'https://www.linkedin.com/in/nikhilambuwani' },
    { title: 'Instagram', icon: 'instagram.png', url: "https://www.instagram.com/priya_nikhil2511/" },
    { title: 'Whatsapp', icon: 'whatsapp.png', url: "https://wa.me/918839286044" },
    { title: 'Fiverr', icon: 'fiverr.png', url: "https://www.fiverr.com/nikhilambuwani" },
    { title: 'Fiverr Gig', icon: 'gig.png', url: "https://www.fiverr.com/s/j9oQrw" },
  ];
  const rolesString = roles.join(", ")
  return (
    <div className="flex flex-grow flex-col justify-center items-center w-max-screen">
      {/* Name typing animation */}
      <div className="w-max justify-center items-center">
        <h2 className={`animate-typing overflow-hidden whitespace-nowrap pr-5 text-4xl lg:text-5xl font-bold mb-4 text-center`}>NIKHIL AMBUWANI</h2>
        <div className='text-xl lg:text-2xl font-semibold mb-4'>
        {nameAnimationComplete && currentRoleIndex < roles.length && (
          <h1 className="animate-typingInfinite  whitespace-nowrap overflow-hidden font-bold w-max">{roles[currentRoleIndex]}</h1>
        )}

        {currentRoleIndex === roles.length &&
          <div className='justify-center items-center w-full'>
            {roles.map((role) => <h2 className="w-full text-center whitespace-normal break-words">{role}</h2>)}
          </div>
          }
        </div>
      </div>
      
      <div className="flex flex-wrap mb-8 mx-2">
        {links.map((link, index) => (
          <a key={index} href={link.url} className="inline-block px-4 py-2 mx-2 my-1 bg-slate-800 text-white rounded-lg transition-colors duration-300 hover:bg-gray-700">
            {link.icon && <img src={require(`../assets/${link.icon}`)} alt={link.title} className={`w-6 h-6 inline-block mr-2 ${link.bg}`} />}
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
