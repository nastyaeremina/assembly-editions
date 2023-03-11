import { createAction } from '@reduxjs/toolkit';
import * as Actions from './types';

/**
 * @desc Set app loader
 */
export const setAppLoading = createAction(Actions.APP_SET_LOADING);
/**
 * @desc Set Top bar content
 */
export const setTopBarContent = createAction(Actions.SET_TOP_BAR_CONTENT);
/**
 * @desc Set CTA content
 */
export const setCTAContent = createAction(Actions.SET_CTA_CONTENT);
