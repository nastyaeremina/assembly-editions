import { createAction } from '@reduxjs/toolkit';
import * as Actions from './types';

/**
 * @desc Set app loader
 */
export const setGuideSiderList = createAction(Actions.SET_GUIDE_SIDER_LIST);
/**
 * @desc delete guide Sider
 */
export const deleteGuideSiderItem = createAction(Actions.DELETE_GUIDE_SIDER_ITEM);

/**
 * @desc add guide Sider
 */
export const addGuideSiderItem = createAction(Actions.ADD_GUIDE_SIDER_ITEM);
