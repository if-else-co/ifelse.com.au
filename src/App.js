/* React */
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import PageManager from './PageManager';

/* Styles */
import './App.css';

/* State */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './state/reducers';
import middleware from './state/middleware';
const store = createStore(reducers, applyMiddleware.apply(null, middleware));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <PageManager />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
