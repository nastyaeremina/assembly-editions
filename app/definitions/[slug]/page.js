import React from 'react';
import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import GlossaryDetailsPage from '../../components/PageComponent/Glossary/glossaryDetailsPage';
import { getGlossaryDetails } from '../../lib/contentful-glossary';
import { isEmpty } from '../../helpers/helpers';
import { CURRENT_SITE_URL } from '../../constants/constant';

async function getContent({ slug }) {
  const { isEnabled } = await draftMode()
  const data = (await getGlossaryDetails(slug, isEnabled)) || {};
  return data;
}
export async function generateMetadata({ params }) {
  const data = await getContent({ slug: params?.slug });

  return {
    title: data?.metaTitle ? data?.metaTitle : `${data?.name} | Definition and examples`,
    description: data?.metaDescription,
    alternates: { canonical: `${CURRENT_SITE_URL}/definitions/${params?.slug}` }
  };
}
export default async function GlossaryDetails({ params }) {
  const detail = await getContent({ slug: params?.slug });
  if (isEmpty(detail)) return notFound();

  return (
    <Layout>
      <Navbar />
      <GlossaryDetailsPage detail={detail} />
    </Layout>
  );
}
