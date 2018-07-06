import logger from './logger';
import blogs from './Blogs/middleware';
import projects from './Projects/middleware';

export default [
  logger,
  blogs,
  projects,
];