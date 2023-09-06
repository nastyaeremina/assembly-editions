import { combineReducers } from 'redux';
import appReducer from './appReducer';
import bookDemoReducer from './bookDemoReducer';
import guideReducer from './guideReducer';
export default combineReducers({
  app: appReducer,
  bookDemo: bookDemoReducer,
  guide: guideReducer
});
