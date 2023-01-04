// eslint-disable-next-line import/no-cycle
import { getTopBarContent } from './appServices';

export const appInit = () => async (dispatch) => {
  await dispatch(getTopBarContent());
};
