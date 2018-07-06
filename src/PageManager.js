import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

/* Pages */
import Home from './pages/Home';
import Post from './pages/Blog';

/* Components */
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

class PageManager extends Component {
  render() {
    let contactForm = this.props.isMenuOpen ? <ContactForm /> : null;

    return (
      <div className="App">
        {contactForm}
        <form id="contact" style={{display: 'none'}} data-netlify="true">
          <input type="text" name="name" />
          <input type="email" name="email" />
          <select name="budget" id="budget"></select>
          <select name="country" id="country"></select>
        </form>
        <div className={`page-manager${this.props.isMenuOpen ? ' blur-background' : ''}`}>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/post/:id" component={Post} />
            </Switch>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isMenuOpen: state.menu.open
});

export default connect(mapStateToProps)(PageManager);
