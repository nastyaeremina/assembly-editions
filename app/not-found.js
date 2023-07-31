import { cookies } from 'next/headers';
import { getContent } from './components/layout';
import { getTopBarContent } from './components/navbar/navbar';
import NotFoundPage from './components/404/404-MainPage';
import { isEmpty } from './helpers/helpers';

export async function metadata() {
  return {
    title: 'Create your portal, pick a plan later',
    description: 'Try Copilot free for 14 days, no credit card required'
  };
}
export default async function NotFound() {
  const { topbarContent, solutionDataList } = await getTopBarContent();
  const { footerData } = await getContent();
  const cookie = cookies().get('current-portal-session');

  return (
    <>
      <NotFoundPage
        topbarContent={topbarContent}
        solutionDataList={solutionDataList}
        isAuthenticated={!isEmpty(cookie?.value)}
        footerData={footerData}
      />
    </>
  );
}
