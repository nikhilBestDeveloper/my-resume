import React from 'react';
import ResponsiveTabsGrid from './ResponsiveTabsGrid';

export default function Links({darkMode}) {
  const data = [
    { title: 'Tab 1', logo: 'logo1.png', link: 'https://example.com/tab1' },
    { title: 'Tab 2', logo: 'logo2.png', link: 'https://example.com/tab2' },
    { title: 'Tab 3', logo: 'logo3.png', link: 'https://example.com/tab3' },
    { title: 'Tab 4', logo: 'logo4.png', link: 'https://example.com/tab4' }
  ];

  return (
    <div>
     <ResponsiveTabsGrid darkMode={darkMode} data={data}/>
    </div>
  );
}
