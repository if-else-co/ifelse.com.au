import { NOTIFICATION_STATUS } from './actions';

export const getErrors = notificationStore => 
  notificationStore
  .items
  .filter(notification => notification.status === NOTIFICATION_STATUS.ERROR);

export const getWarnings = notificationStore => 
  notificationStore
  .items
  .filter(notification => notification.status === NOTIFICATION_STATUS.WARNING);

export const getInfo = notificationStore => 
  notificationStore
  .items
  .filter(notification => notification.status === NOTIFICATION_STATUS.INFO);
  
export const getDebug = notificationStore => 
  notificationStore
  .items
  .filter(notification => notification.status === NOTIFICATION_STATUS.DEBUG);