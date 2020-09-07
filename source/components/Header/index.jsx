import React from 'react';
import { func, string } from 'prop-types';

import { Icon } from 'Components/Icon';

import './styles.sass';

function Header({ toggleSidebar, className }) {
  return (
    <header className={className}>
      <div className='sb__toggler' onClick={toggleSidebar}>
        <Icon className='sb__toggler-icon' type='menu'/>
      </div>
    </header>
  );
}

Header.propTypes = {
  toggleSidebar: func.isRequired,
  className: string
};

export { Header };