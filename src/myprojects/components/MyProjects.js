import React, { useState } from 'react';
import projects from '../data/projects';
import ProjectDetails from './ProjectDetails';

export default function MyProjects({ darkMode }) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const selectedProject = projects[activeTab];

    return (
        <div>
            <div className="flex mb-4 mx-4">
                {projects.map((project, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`mx-2 px-4 py-2 rounded-3xl ${activeTab === index ? 'bg-blue-500 text-white' : (darkMode ? 'bg-gray-200 text-gray-700' : 'bg-gray-300 text-gray-800')}`}
                    >
                        {project.title}
                    </button>
                ))}
            </div>
            {selectedProject && (
                <ProjectDetails projectDetails={selectedProject} darkMode={darkMode} />
            )}
        </div>
    );
}
