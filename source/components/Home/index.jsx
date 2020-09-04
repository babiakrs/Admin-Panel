import React, { useEffect } from 'react';

import './styles.sass';

function Home() {
  useEffect(() => { document.title = 'Admin Panel • Home'; });

  return (
    <div className='home'>
      Тестовое задание :)
    </div>
  );
}

export { Home };