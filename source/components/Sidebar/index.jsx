import React from 'react';

import { Icon } from 'Components/Icon';

import './styles.sass';

function Sidebar() {
  return (
    <aside>
      <div className='sb__logo'>A-PANEL</div>
      <div className='sb__section'>
        <div className='sb__section-title'>Main</div>
        <ul className='sb__section-list'>
          <li className='sb__section-item'>
            <Icon className='sb__section-icon' type='o-meter'/>
            Dashboard
          </li>
          <li className='sb__section-item'>
            <Icon className='sb__section-icon' type='calendar'/>
            Calendar
          </li>
          <li className='sb__section-item'>
            <Icon className='sb__section-icon' type='envelope'/>
            Mailing
          </li>
          <li className='sb__section-item'>
            <Icon className='sb__section-icon' type='bug'/>
            Tickets
          </li>
        </ul>
      </div>
      <div className='sb__section'>
        <div className='sb__section-title'>Users</div>
        <ul className='sb__section-list'>
          <li className='sb__section-item'>
            <Icon className='sb__section-icon' type='user-plus'/>
            New
          </li>
          <li className='sb__section-item'>
            <Icon className='sb__section-icon' type='user-admin'/>
            Admins
          </li>
          <li className='sb__section-item'>
            <Icon className='sb__section-icon' type='user-tag'/>
            Roles
          </li>
          <li className='sb__section-item'>
            <Icon className='sb__section-icon' type='users-slash'/>
            Blacklist
          </li>
        </ul>
      </div>
      <div className='sb__section'>
        <div className='sb__section-title'>Settings</div>
        <ul className='sb__section-list'>
          <li className='sb__section-item'>
            <Icon className='sb__section-icon' type='cogs'/>
            Panel
          </li>
          <li className='sb__section-item'>
            <Icon className='sb__section-icon' type='database'/>
            Database
          </li>
          <li className='sb__section-item'>
            <Icon className='sb__section-icon' type='brush'/>
            Themes
          </li>
          <li className='sb__section-item'>
            <Icon className='sb__section-icon' type='chart'/>
            Server status
          </li>
          <li className='sb__section-item'>
            <Icon className='sb__section-icon' type='ad'/>
            Activities
          </li>
        </ul>
      </div>
      <div className='sb__panel-version'>v-1.dev</div>
    </aside>
  );
}

export { Sidebar };