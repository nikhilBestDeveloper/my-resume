import React from 'react';

function ProjectDetails({ projectDetails, darkMode }) {

  const { title, logoImage, description, links, techStack, screenshotsFolder, timeline, technicalChallenges, features } = projectDetails;
  const screenshots = Array.from({ length: screenshotsFolder.size }, (_, i) => `${i + 1}.${screenshotsFolder.extension}`);
  return (
    <div>
      <div className={`flex flex-col ${darkMode ? 'dark bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'}  rounded p-4 m-2 mb-`}>
        <div className="flex items-center mb-4">
          <img src={require(`../assets/${logoImage}`)} alt={title} className="w-20 h-20 mr-2" />
          <h3 className={`text-xl font-semibold ${darkMode ? 'dark:text-white' : 'text-gray-800'}`}>{title}</h3>
        </div>
        {/* Description Section */}
        {description && (
          <div className="mb-4">
            <h4 className={`text-xl font-bold mb-1 ${darkMode ? 'dark:text-white' : 'text-gray-800'}`}>Description</h4>
            <p className={`text-lg ${darkMode ? 'dark:text-gray-300' : 'text-gray-700'}`}>{description}</p>
          </div>
        )}
        {/* Links Section */}
        {timeline &&
          <div>
            <h4 className={`text-xl font-bold mb-1 ${darkMode ? 'dark:text-white' : 'text-gray-800'}`}>Timeline</h4>
            <p className={`text-lg ${darkMode ? 'dark:text-gray-300' : 'text-gray-700'}`}>{`${timeline.start} - ${timeline.end}`}</p>
          </div>
        }
        {/* Links Section */}
        <div>
          <h4 className={`text-xl font-bold mb-1 ${darkMode ? 'dark:text-white' : 'text-gray-800'}`}>Links:</h4>
          <ul className={`text-lg list-disc list-inside ${darkMode ? 'dark:text-gray-300' : 'text-gray-700'}`}>
            {links && links.map((link, index) => (
              <li key={index}><a href={link.url}>{link.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      {/* Screenshots Section */}
      {screenshots && screenshots.length > 0 && (
        <div className={`relative ${darkMode ? 'dark bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'} rounded p-4 m-2`}>
          <h4 className={`text-xl font-bold mb-1 ${darkMode ? 'dark:text-white' : 'text-gray-800'}`}>Screenshots:</h4>
          <div className="overflow-x-scroll max-w-full">
            <div className="flex flex-row gap-8 my-4">
              <button
                className="absolute bottom-0 left-0 w-20 h-full flex items-center justify-center text-gray-600 text-6xl"
                style={{ zIndex: 1 }}
                onClick={() => {
                  const container = document.querySelector('.overflow-x-scroll');
                  if (container) container.scrollLeft -= 150; // Adjust scroll amount as needed
                }}
              >
                &lt;
              </button>
              {screenshots.map((screenshot, index) => (
                <div key={index} className="relative">
                  <img
                    src={require(`../assets/${projectDetails.screenshotsFolder.name}/${screenshot}`)}
                    alt={`Screenshot ${index + 1}`}
                    className={` ${projectDetails.screenshotsFolder.orientation === "landscape" ? "max-w-72":"max-w-48"} lg:max-w-96 cursor-pointer`}
                  />
                  <div className="absolute inset-0 bg-gray-300 opacity-20"></div>
                </div>
              ))}
              <button
                className="absolute bottom-0 right-0 w-20 h-full flex items-center justify-center text-gray-600 text-6xl"
                style={{ zIndex: 1 }}
                onClick={() => {
                  const container = document.querySelector('.overflow-x-scroll');
                  if (container) container.scrollLeft += 150; // Adjust scroll amount as needed
                }}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tech Stack Section */}
      {techStack && techStack.length > 0 && (
        <div className={`flex flex-col ${darkMode ? 'dark bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'}  rounded p-4 m-2`}>
          <h4 className={`text-xl font-bold mb-1 ${darkMode ? 'dark:text-white' : 'text-gray-800'}`}>Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <div key={index} className={`flex items-center px-4 py-2 bg-gray-300 rounded ${darkMode ? 'dark:bg-gray-600' : 'bg-gray-300'}`}>
                {tech.logo && <img src={require(`../assets/${tech.logo}`)} alt={tech.name} className="w-6 h-6 mr-2" />}
                <span className={`text-lg ${darkMode ? 'dark:text-white' : 'text-gray-800'}`}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Features Section */}
      {features && (
        <div className={`flex flex-col ${darkMode ? 'dark bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'}  rounded p-4 m-2`}>
          <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'dark:text-white' : 'text-gray-800'}`}>Features:</h4>
          <div className={`grid grid-cols-2 gap-4 ${darkMode ? 'dark:text-gray-300' : 'text-gray-700'}`}>
            {Object.entries(features).map(([label, featureList], index) => (
              <div key={index}>
                <h5 className="text-xl font-semibold mb-1">{label}:</h5>
                <ul className="text-lg list-disc list-inside">
                  {featureList.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technical Challenges Section */}
      {technicalChallenges && technicalChallenges.length > 0 && (
        <div className={`flex flex-col ${darkMode ? 'dark bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'}  rounded p-4 m-2`}>
          <h4 className={`text-xl font-semibold mb-1 ${darkMode ? 'dark:text-white' : 'text-gray-800'}`}>Technical Challenges:</h4>
          <ul className={`text-lg list-disc list-inside ${darkMode ? 'dark:text-gray-300' : 'text-gray-700'}`}>
            {technicalChallenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;
