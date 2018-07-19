import React, { Component } from 'react';
import { connect } from 'react-redux';

import CountrySelect from '../CountrySelect';
import OutsideClickWatcher from '../OutsideClickWatcher';

import { toggleMenu } from '../../state/Menu/actions';
import { NOTIFICATION_STATUS } from '../../state/Notifications/actions';

import { encode } from '../../helpers';

import './styles.css';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    budget: '',
    country: '',
  }

  componentDidMount() {
    document.body.classList.add('stop-scrolling');
  }
  
  componentWillUnmount() {
    document.body.classList.remove('stop-scrolling');
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => this.props.toggleMenu({
        message: 'Thank you for reaching out! We will get back to you as soon as possible.',
        status: NOTIFICATION_STATUS.SUCCESS,
      }))
      .catch(error => alert(error));
  }

  handleChange(e) {
    let state = {};
    state[e.target.id] = e.target.value;
    this.setState(state);
  }

  render() {
    const budget = [
      '',
      'less than $1,000',
      '$1,000 - $5,000',
      '$5,000 - $10,000',
      'more than $10,000',
    ].map(budgetOption => <option key={budgetOption} value={budgetOption}>{budgetOption}</option>);

    return <OutsideClickWatcher onOutsideClick={() => this.props.toggleMenu()}>
      <div className="contact-form">
        <button className="contact-form__close" onClick={() => this.props.toggleMenu()}>-</button>
        <div className="contact-form__title">Get in touch</div>
        <form className="contact-form__form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-field form-field--text contact-form__field">
            <label className="form-field__label" htmlFor="name">Name</label>
            <input 
              className="form-field__input" 
              required="true" 
              id="name" 
              type="text" 
              value={this.state.name} 
              onChange={this.handleChange.bind(this)} />
          </div>
          <div className="form-field form-field--text contact-form__field">
            <label className="form-field__label" htmlFor="email">Email</label>
            <input 
              className="form-field__input" 
              required="true" 
              id="email" 
              type="email" 
              value={this.state.email} 
              onChange={this.handleChange.bind(this)} />
          </div>
          <div className="form-field form-field--select contact-form__field">
            <label className="form-field__label" htmlFor="budget">Budget (USD)</label>
            <select 
              className="form-field__input" 
              required="true" 
              name="budget" 
              id="budget" 
              onChange={this.handleChange.bind(this)}>{budget}</select>
          </div>
          <div className="form-field form-field--select contact-form__field">
            <label className="form-field__label" htmlFor="country">Country</label>
            <CountrySelect 
              className="form-field__input" 
              required="true"
              id="country" 
              name="country" 
              onChange={this.handleChange.bind(this)} 
              />
          </div>
          <div className="form-field form-field--submit">
            <input className="form-field__submit" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </OutsideClickWatcher>;
  }
}

const mapDispatchToProps = dispatch => ({
  toggleMenu: notification => dispatch(toggleMenu(notification))
});

export default connect(null, mapDispatchToProps)(ContactForm);
