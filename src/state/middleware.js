import logger from './logger';
import blogs from './Blogs/middleware';
import projects from './Projects/middleware';
import notifications from './Notifications/middleware';

export default [
  logger,
  blogs,
  projects,
  notifications,
];