import Layout from './components/layout';
import NotFoundPage from './components/404/404-MainPage';

export async function metadata() {
  return {
    title: 'Create your portal, pick a plan later',
    description: 'Try Assembly free for 14 days, no credit card required'
  };
}
export default async function NotFound() {
  return (
    <Layout>
      <NotFoundPage />
    </Layout>
  );
}
