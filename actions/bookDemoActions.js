import { createAction } from '@reduxjs/toolkit';
import * as Actions from './types';

/**
 * @desc Set  loader
 */
export const setBookDemoLoader = createAction(Actions.SET_BOOK_DEMO_LOADER);
/**
 * @desc Set book demo validation
 */
export const setformValidationError = createAction(Actions.SET_BOOK_DEMO_VALIDATION_ERRORS);

/**
 * @desc Set book demo item
 */
export const setBookDemoItem = createAction(Actions.SET_BOOK_DEMO_ITEM);

/**
 * @desc Update book demo Item
 */
export const updateBookDemoItem = createAction(Actions.UPDATE_BOOK_DEMO_ITEM);

/**
 * @desc Clear book demo Item
 */
export const clearBookDemoItem = createAction(Actions.CLEAR_BOOK_DEMO_ITEM);

/**
 * @desc Clear Book Demo Data
 */
export const clearPartnerData = () => (dispatch) => {
  dispatch(setBookDemoLoader(false));
  dispatch(setBookDemoItem(null));
  dispatch(setformValidationError(null));
};
