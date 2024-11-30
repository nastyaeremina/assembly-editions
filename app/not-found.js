import { getContent } from './components/layout';
import Navbar from './components/navbar/navbar';
import NotFoundPage from './components/404/404-MainPage';

export async function metadata() {
  return {
    title: 'Create your portal, pick a plan later',
    description: 'Try Copilot free for 14 days, no credit card required'
  };
}
export default async function NotFound() {
  const { footerData } = await getContent();

  return (
    <>
      <NotFoundPage footerData={footerData}>
        <Navbar />
      </NotFoundPage>
    </>
  );
}
