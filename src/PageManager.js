import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

/* Pages */
import Home from './pages/Home';
import Blog from './pages/Blog';

/* Components */
import Notifications from './components/Notifications';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

class PageManager extends Component {
  render() {
    let contactForm = this.props.isMenuOpen ? <ContactForm /> : null;

    return (
      <div className="App">
        {contactForm}
        <div className={`page-manager${this.props.isMenuOpen ? ' blur-background' : ''}`}>
          <Notifications />
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/post/:slug" component={Blog} />
            </Switch>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  router: state.router,
  isMenuOpen: state.menu.open,
});

export default connect(mapStateToProps)(PageManager);
