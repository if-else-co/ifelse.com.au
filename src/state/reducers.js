import { combineReducers } from 'redux';

import blogs from './Blogs/reducer';
import projects from './Projects/reducer';
import menu from './Menu/reducer';
import notifications from './Notifications/reducer';

export default combineReducers({
  blogs,
  projects,
  menu,
  notifications,
});