import {
  createNotification,
  deleteNotification,
  NOTIFICATION_STATUS,
} from './actions';

export default (store) => next => action => {
  if (typeof action.meta !== 'undefined') {
    if (typeof action.meta.notification !== 'undefined') {
      action.meta.notification.id = store.getState().notifications.nextId;
      action.meta.notification.status = 
        typeof action.meta.notification.status !== 'undefined' ? 
        action.meta.notification.status : 
        NOTIFICATION_STATUS.INFO;
      action.meta.notification.duration = 
        typeof action.meta.notification.duration !== 'undefined' ? 
        action.meta.notification.duration : 
        5000;
      
      setTimeout(() => store.dispatch(createNotification(action.meta.notification)));

      let duration = action.meta.notification.duration;
      if (typeof duration !== 'undefined') {
        if (duration > 0) {
          setTimeout(() => store.dispatch(deleteNotification(action.meta.notification.id)), duration);
        }
      }
    }
  }

  return next(action);
}
