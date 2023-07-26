import { combineReducers } from 'redux';
import appReducer from './appReducer';
import bookDemoReducer from './bookDemoReducer';

export default combineReducers({
  app: appReducer,
  bookDemo: bookDemoReducer
});
