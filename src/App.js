/* React */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* Pages */
import Home from './pages/Home';
import Post from './pages/Post';

/* Components */
import Header from './components/Header';
import Footer from './components/Footer';

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
          <div className="App">
            <Header />
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/post/:id" component={Post} />
              </Switch>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
