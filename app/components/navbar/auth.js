import Cookies from 'js-cookie';

export function isAuth() {
  const session = Cookies.get('current-portal-session');
  if (session) return true;
  else return false;
}
