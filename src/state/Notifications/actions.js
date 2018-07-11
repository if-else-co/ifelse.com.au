export const NOTIFICATION_CREATE = 'NOTIFICATION_CREATE';
export const NOTIFICATION_DELETE = 'NOTIFICATION_DELETE';

export const NOTIFICATION_STATUS = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
};

export const createNotification = ({ id, message, status, duration }) => ({
  type: NOTIFICATION_CREATE,
  id,
  message,
  status,
  duration,
});

export const deleteNotification = id => ({
  type: NOTIFICATION_DELETE,
  id
});
