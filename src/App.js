import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import './App.css';
import Routes from './views/routes'
import { Router } from 'react-router-dom'

import Header from './components/header/header'
import PlayBottom from './components/playerBottom/playerBottom'

import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers'
import historys from './history';

let data = {
	hash: '',
	songList: []
}

let store = createStore(reducers, data, applyMiddleware(thunk));

class App extends Component {

	constructor(a) {
		super(a);

	}

	updateTitle = (title) => {

	}

	render() {
		return (
			<Provider store={store}>
				<Router history={historys}>
					<div>
						<Header/>
						<div className="content" style={{paddingTop: '1rem'}}>
							<Routes />
						</div>
						<PlayBottom/>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
