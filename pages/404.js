import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import ErrorPage from '../components/404/404-page';
import Navbar from '../components/navbar/navbar';

export default function ErorPage() {
  return (
    <>
      <NextSeo
        title='Create your portal, pick a plan later'
        description='Try Copilot free for 14 days, no credit card required'
      />
      <Layout>
        <Navbar />
        <ErrorPage />
      </Layout>
    </>
  );
}
