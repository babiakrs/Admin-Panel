import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from 'Components/Home';
import { Header } from 'Components/Header';
import { Sidebar } from 'Components/Sidebar';
import { Dashboard } from 'Components/Dashboard';
import { Calendar } from 'Components/Calendar';

import { toggleClass } from 'Utilities';

function App() {
  const [ sidebarState, setSidebarState ] = useState(true);
  const toggleSidebar = () => {
    setSidebarState(!sidebarState);
    toggleClass(document.body, 'sidebar__hidden');
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          {sidebarState && <Sidebar />}
          <Header toggleSidebar={toggleSidebar}/>
          <main>
            <Route path='/' component={Home} exact/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/calendar' component={Calendar}/>
            <Route path='/mailing'/>
            <Route path='/tickets'/>
            <Route path='/create-user'/>
            <Route path='/admins'/>
            <Route path='/roles'/>
            <Route path='/blacklist'/>
            <Route path='/settings'/>
            <Route path='/database'/>
            <Route path='/themes'/>
            <Route path='/status'/>
            <Route path='/activities'/>
          </main>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}



export { App };