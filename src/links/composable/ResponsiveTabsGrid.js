import React from 'react';

const ResponsiveTabsGrid = ({ data, darkMode }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`tabs-grid ${darkMode ? 'dark-mode' : ''}`}>
      <div className="tabs">
        {data.map((item, index) => (
          <div
            key={index}
            className={`tab ${index === value ? 'active' : ''}`}
            onClick={() => handleChange(index)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="content">
        <h2>{data[value].title}</h2>
        <div className="logo-and-text">
          <img src={require(`../assets/certificate.png`)} alt={data[value].title} />
          <p>{data[value].title}</p>
        </div>
        <a href={data[value].link} target="_blank" rel="noopener noreferrer">
          Open Link
        </a>
      </div>
    </div>
  );
};

export default ResponsiveTabsGrid;
