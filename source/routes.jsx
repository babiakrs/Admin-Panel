import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Sidebar } from 'Components/Sidebar';
import { Header } from 'Components/Header';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/'>
				<Sidebar />
				<Header />
				<main>
					<Route path='/' exact/>
					<Route path='/dashboard' exact/>
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

export { Routes };
