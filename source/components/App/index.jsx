import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from 'Components/Home';
import { Dashboard } from 'Components/Dashboard';
import { Sidebar } from 'Components/Sidebar';
import { Header } from 'Components/Header';

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
            <Route path='/calendar' exact/>
            <Route path='/mailing' exact/>
            <Route path='/tickets' exact/>
            <Route path='/create-user' exact/>
            <Route path='/admins' exact/>
            <Route path='/roles' exact/>
            <Route path='/blacklist' exact/>
            <Route path='/settings' exact/>
            <Route path='/database' exact/>
            <Route path='/themes' exact/>
            <Route path='/status' exact/>
            <Route path='/activities' exact/>
          </main>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}



export { App };