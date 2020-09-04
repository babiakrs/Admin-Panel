import React from 'react';

import { NavLink } from 'react-router-dom';
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
            <NavLink to='/' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='home'/>
              Home
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/dashboard' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='o-meter'/>
              Dashboard
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/calendar' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='calendar'/>
              Calendar
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/mailing' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='envelope'/>
              Mailing
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/tickets' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='bug'/>
              Tickets
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='sb__section'>
        <div className='sb__section-title'>Users</div>
        <ul className='sb__section-list'>
          <li className='sb__section-item'>
            <NavLink to='/create-user' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='user-plus'/>
              New
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/admins' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='user-admin'/>
              Admins
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/roles' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='user-tag'/>
              Roles
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/blacklist' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='users-slash'/>
              Blacklist
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='sb__section'>
        <div className='sb__section-title'>Settings</div>
        <ul className='sb__section-list'>
          <li className='sb__section-item'>
            <NavLink to='/settings' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='cogs'/>
              Panel
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/database' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='database'/>
              Database
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/themes' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='brush'/>
              Themes
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/status' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='chart'/>
              Server status
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/activities' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='ad'/>
              Activities
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='sb__panel-version'>v-1.dev</div>
    </aside>
  );
}

export { Sidebar };