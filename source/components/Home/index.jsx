import React, { useEffect } from 'react';

import { Icon } from 'Components/Icon';

import './styles.sass';

function Home() {
  useEffect(() => { document.title = 'Admin Panel • Home'; });

  return (
    <div className='home__wrapper'>
      <a href='https://github.com/Almost-Infinity/Admin-Panel' target='_blank' rel='noreferrer' className='home__link'>
        <Icon type='github' className='home__icon'/>
        Source on github
      </a>
    </div>
  );
}

export { Home };