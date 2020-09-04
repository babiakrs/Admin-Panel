import React, { useEffect } from 'react';

import { GridItem } from 'Components/GridItem';

import './styles.sass';

function Dashboard() {
  useEffect(() => { document.title = 'Admin Panel • Dashboard'; });

  return (
    <div className='db__layout'>
      <GridItem className='db__currencies'></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
    </div>
  );
}

export { Dashboard };