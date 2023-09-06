import { combineReducers } from 'redux';
import { createReducer as createReducerOrig } from '@reduxjs/toolkit';
import * as Actions from '../actions/types';
import { createReducer } from '../helpers/reduxHelpers';

const loadingReducer = createReducer({
  initialState: false,
  actionType: Actions.SET_BOOK_DEMO_LOADER
});
