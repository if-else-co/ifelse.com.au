import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const CallToAction = props => {
  return (
    <div style={{
      color: props.foreground,
      background: props.background
    }} className="call-to-action">
      <div className="call-to-action__prompt">{props.prompt}</div>
      <button className="call-to-action__action" onClick={props.onClick}>
        {props.buttonText}
      </button>
    </div>
  )
};

CallToAction.propTypes = {
  prompt: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  foreground: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
}

export default CallToAction;
