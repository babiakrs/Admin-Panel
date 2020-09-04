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
				</main>
			</Route>
		</Switch>
	</BrowserRouter>
);

export { Routes };
