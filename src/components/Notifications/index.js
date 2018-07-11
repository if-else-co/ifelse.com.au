import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

import { deleteNotification, NOTIFICATION_STATUS } from '../../state/Notifications/actions';

import './styles.css';

class Notifications extends Component {
  render() {
    const statusClasses = {};
    statusClasses[NOTIFICATION_STATUS.DEBUG] = 'notifications__item--debug';
    statusClasses[NOTIFICATION_STATUS.INFO] = 'notifications__item--info';
    statusClasses[NOTIFICATION_STATUS.SUCCESS] = 'notifications__item--success';
    statusClasses[NOTIFICATION_STATUS.WARNING] = 'notifications__item--warning';
    statusClasses[NOTIFICATION_STATUS.ERROR] = 'notifications__item-error';

    let notifications = this.props.notifications.map(notification => (
      <div key={notification.id} className={`notifications__item ${statusClasses[notification.status]}`}>
        {notification.message}
      </div>
    ));

    return (
      <div className="notifications">
        <CSSTransitionGroup
          transitionName="notifications__item"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {notifications}
        </CSSTransitionGroup>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteNotification: id => dispatch(deleteNotification(id)),
});

const mapStateToProps = state => ({
  notifications: state.notifications.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
