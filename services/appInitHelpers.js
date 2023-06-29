import { setUserAuth } from '../actions/appActions';
import { getCTAContent, getNavbarSolutionList, getTopBarContent } from './appServices';

export const appInit = () => async (dispatch) => {
  await dispatch(getTopBarContent());
  await dispatch(getCTAContent());
  await dispatch(getNavbarSolutionList());
  //fetch cookie
  fetch('/api/userAuthenticated')
    .then((response) => response.json())
    .then((data) => {
      // Access the cookie value returned by the API
      const { myCookie } = data;
      if (myCookie) dispatch(setUserAuth(true));
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};
