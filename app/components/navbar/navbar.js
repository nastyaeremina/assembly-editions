import { cookies } from 'next/headers';
import { isEmpty } from '../../helpers/helpers';
import { getSitemap } from '../../lib/contentful-sitemap';
import { TOP_BAR_CONTENT_ID } from '../../constants/constant';
import NavbarComponent from './mainNavbar';

export async function getTopBarContent() {
  const data = (await getSitemap(TOP_BAR_CONTENT_ID)) ?? '';
  if (!isEmpty(data?.content)) {
    const contentList = data?.content?.split(/[\[\]\(\)]/);

    const item = {
      title: contentList?.[1],
      url: contentList?.[3]
    };
    return item;
  }
  return null;
}

export default async function Navbar({ isModule, headerIndex, isEnterPrice }) {
  const cookie = cookies().get('current-portal-session');
  const topbarContent = await getTopBarContent();
  return (
    <>
      <NavbarComponent
        isModule={isModule}
        headerIndex={headerIndex}
        isEnterPrice={isEnterPrice}
        isAuthenticated={!isEmpty(cookie?.value)}
        topbarContent={topbarContent}
      />
    </>
  );
}
