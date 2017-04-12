import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {Router} from 'react-router'; //import { hashHistory } from 'react-router
import createHistory from 'history/lib/createHashHistory'; //用history替代react-router的hashHistory

import './index.css';
import routeConfig from './router';
import appReducers from './reducers/index';

let store = createStore(appReducers);

console.log(store);
console.log(store.getState()); // {todos: [], visibilityFilter: 'showAll'}

/*const routes = (
 <Route path="/" component={App}>
 
 </Route>
 );*/
/*const routes = {
 path: '/',
 component: App
 }*/

ReactDOM.render(
  <Provider store={ store }>
    <Router routes={ routeConfig } history={ createHistory() }/>
  </Provider>,
  document.getElementById('root')
);
