/* React */
import React, { Component } from 'react';
import { createBrowserHistory } from 'history'
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router'

import PageManager from './PageManager';

/* Styles */
import './App.css';

/* State */
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './state/reducers';
import middleware from './state/middleware';
import logger from './state/logger';
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}
const history = createBrowserHistory();
middleware.push(routerMiddleware(history));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(reducers),
  composeEnhancers(applyMiddleware.apply(null, middleware)),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <PageManager />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
