import React from 'react';
import { notFound } from 'next/navigation';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import GlossaryDetailsPage from '../../components/PageComponent/Glossary/glossaryDetailsPage';
import { getGlossaryDetails } from '../../lib/contentful-glossary';
import { isEmpty } from '../../helpers/helpers';

async function getContent({ slug }) {
  const data = (await getGlossaryDetails(slug)) || {};
  return data;
}
export async function generateMetadata({ params }) {
  const data = await getContent({ slug: params?.slug });

  return {
    title: data?.metaTitle ? data?.metaTitle : `${data?.name} | Definition and examples`,
    description: data?.metaDescription
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
