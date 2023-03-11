import { combineReducers } from 'redux';
import * as Actions from '../actions/types';
import { createReducer } from '../helpers/reduxHelpers';

const topBarContentReducer = createReducer({
  initialState: {},
  actionType: Actions.SET_TOP_BAR_CONTENT
});
const CTAContentReducer = createReducer({
  initialState: null,
  actionType: Actions.SET_CTA_CONTENT
});

export default combineReducers({
  topbarContent: topBarContentReducer,
  ctaContent: CTAContentReducer
});
