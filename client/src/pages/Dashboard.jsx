import React from 'react';
import Navbar from '../components/Landing Page/Navbar';

function TableauEmbed() {
  return (
    <div>
      <Navbar/>
      <iframe
        title="Tableau Public Embed"
        width="1400"
        height="800"
        src="https://public.tableau.com/views/Technovate/Dashboard1?:language=en-GB&:display_count=n&:origin=viz_share_link?:embed=yes&:showVizHome=no"
        allowFullScreen
        className='pt-28 pl-[30px]'
      />
    </div>
  );
}

export default TableauEmbed;