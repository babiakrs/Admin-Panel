import React from 'react';

import { Icon } from 'Components/Icon';

import './styles.sass';

function Header() {
  return (
    <header>
      <div className='sb__toggler'>
        <Icon className='sb__toggler-icon' type='menu'/>
      </div>
    </header>
  );
}

export { Header };