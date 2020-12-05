import React from 'react';
import { func, string } from 'prop-types';

import { Icon } from 'Components/Icon';
import { Picture } from 'Components/Picture';

import webpPhAvatar from 'Images/ph-avatar.webp';
import jpegPhAvatar from 'Images/ph-avatar.jpg';

import './styles.sass';

function Header({ toggleSidebar, className }) {
  return (
    <header className={className}>
      <div className='sb__toggler' onClick={toggleSidebar}>
        <Icon className='sb__toggler-icon' type='menu'/>
      </div>
      <div className='user__wrapper'>
        <Picture className='user__avatar' webpURL={webpPhAvatar} fallbackURL={jpegPhAvatar} fallbackText='Avatar'/>
        <span className='user__name'>John Doe</span>
      </div>
    </header>
  );
}

Header.propTypes = {
  toggleSidebar: func.isRequired,
  className: string
};

export { Header };