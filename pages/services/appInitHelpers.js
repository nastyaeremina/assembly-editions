import { getTopBarContent } from './appServices';

export const appInit = () => async (dispatch) => {
  await dispatch(getTopBarContent());
};
