import { getCTAContent, getTopBarContent } from './appServices';

export const appInit = () => async (dispatch) => {
  await dispatch(getTopBarContent());
  await dispatch(getCTAContent());
};
