import { combineReducers } from 'redux';
import { createReducer as createReducerOrig, current } from '@reduxjs/toolkit';
import * as Actions from '../actions/types';

const initialState = [];
const guideReducer = createReducerOrig(initialState, (builder) => {
  builder
    .addCase(Actions.SET_GUIDE_SIDER_LIST, (state, action) => {
      return [...(action.payload || [])];
    })
    .addCase(Actions.ADD_GUIDE_SIDER_ITEM, (state = initialState, action) => {
      const currentState = current(state);
      let list = JSON.parse(JSON.stringify(currentState));
      list.push(action.payload);
      return list;
    })
    .addCase(Actions.DELETE_GUIDE_SIDER_ITEM, (state, action) => {
      const currentState = current(state);
      const newArray = currentState.filter((item) => item.id !== action.payload);
      return newArray;
    });
});

export default combineReducers({
  guideSectionData: guideReducer
});
