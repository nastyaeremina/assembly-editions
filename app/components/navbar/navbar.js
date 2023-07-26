import { cookies } from 'next/headers';
import { isEmpty } from '../../helpers/helpers';
import NavbarComponent from './mainNavbar';

export default function Navbar({ isModule, headerIndex, isEnterPrice }) {
  const cookie = cookies().get('current-portal-session');

  return (
    <>
      <NavbarComponent
        isModule={isModule}
        headerIndex={headerIndex}
        isEnterPrice={isEnterPrice}
        isAuthenticated={!isEmpty(cookie?.value)}
      />
    </>
  );
}
