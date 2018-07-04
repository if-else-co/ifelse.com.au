import { combineReducers } from 'redux';

import blogs from './Blogs/reducer';
import menu from './Menu/reducer';

export default combineReducers({
  blogs,
  menu,
});