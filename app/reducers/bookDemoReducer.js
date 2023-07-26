import { combineReducers } from 'redux';
import { createReducer as createReducerOrig } from '@reduxjs/toolkit';
import * as Actions from '../actions/types';
import { createReducer } from '../helpers/reduxHelpers';

const loadingReducer = createReducer({
  initialState: false,
  actionType: Actions.SET_BOOK_DEMO_LOADER
});

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  howDidYouFindUs: '',
  industry: '',
  industry_other: '',
  youInerestedBusiness: '',
  companySize: '',
  objectives: ''
};

const bookDemoReducer = createReducerOrig(initialState, (builder) => {
  builder
    .addCase(Actions.SET_BOOK_DEMO_ITEM, (state = initialState, action) => {
      return { ...(action.payload || state) };
    })
    .addCase(Actions.UPDATE_BOOK_DEMO_ITEM, (state, action) => {
      const data = { ...state };
      data[action.payload.propsName] = action.payload.value;
      return { ...data };
    })
    .addCase(Actions.CLEAR_BOOK_DEMO_ITEM, () => {
      const initialUserState = JSON.parse(JSON.stringify(initialState));
      return initialUserState;
    });
});

const formValidationErrorReducer = createReducer({
  initialState: null,
  actionType: Actions.SET_BOOK_DEMO_VALIDATION_ERRORS
});

export default combineReducers({
  loading: loadingReducer,
  validationError: formValidationErrorReducer,
  bookDemoData: bookDemoReducer
});
