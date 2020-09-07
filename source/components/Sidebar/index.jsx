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
              <span className='sb__section-title'>Home</span>
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/dashboard' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='o-meter'/>
              <span className='sb__section-title'>Dashboard</span>
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/calendar' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='calendar'/>
              <span className='sb__section-title'>Calendar</span>
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/mailing' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='envelope'/>
              <span className='sb__section-title'>Mailing</span>
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/tickets' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='bug'/>
              <span className='sb__section-title'>Tickets</span>
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
              <span className='sb__section-title'>New</span>
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/admins' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='user-admin'/>
              <span className='sb__section-title'>Admins</span>
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/roles' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='user-tag'/>
              <span className='sb__section-title'>Roles</span>
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/blacklist' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='users-slash'/>
              <span className='sb__section-title'>Blacklist</span>
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
              <span className='sb__section-title'>Panel</span>
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/database' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='database'/>
              <span className='sb__section-title'>Database</span>
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/themes' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='brush'/>
              <span className='sb__section-title'>Themes</span>
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/status' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='chart'/>
              <span className='sb__section-title'>Server status</span>
            </NavLink>
          </li>
          <li className='sb__section-item'>
            <NavLink to='/activities' exact className='sb__section-item_link' activeClassName='sb__section-item_link--active'>
              <Icon className='sb__section-icon' type='ad'/>
              <span className='sb__section-title'>Activities</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export { Sidebar };