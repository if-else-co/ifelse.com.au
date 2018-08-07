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
const preloadedState = window.__PRELOADED_STATE__ || {};
const store = createStore(
  connectRouter(history)(reducers),
  preloadedState,
  composeEnhancers(applyMiddleware.apply(null, middleware)),
);

class App extends Component {
  componentDidMount() {
    let snapshot;
    const interval = setInterval(() => {
      snapshot = store.getState();
      if (
        !(
          snapshot.blogs.blogs.length === 0 && snapshot.blogs.fetching ||
          snapshot.projects.projects.length === 0 && snapshot.projects.fetching
        )
      ) {
        const preloadedState = document.createElement('script');
        preloadedState.innerHTML = `window.__PRELOADED_STATE__ = ${JSON.stringify(snapshot)};`;
        document.body.insertBefore(preloadedState, document.body.firstChild);
        clearInterval(interval);
      }
    }, 1000);
  }

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
