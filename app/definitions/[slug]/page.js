import React from 'react';
import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import Layout from '../../components/layout';
import GlossaryDetailsPage from '../../components/PageComponent/Glossary/glossaryDetailsPage';
import { getGlossaryDetails } from '../../lib/contentful-glossary';
import { isEmpty } from '../../helpers/helpers';
import { CURRENT_SITE_URL } from '../../constants/constant';
import { getExternalLinks } from '../../helpers/serverSideHelpers';

async function getContent({ slug }) {
  try {
    const { isEnabled } = await draftMode();

    const [data, externalLinks] = await Promise.all([
      getGlossaryDetails(slug, isEnabled),
      getExternalLinks({ asMap: true }),
    ]);

    return {
      detail: data ?? {},
      externalLinks: externalLinks ?? {},
    };
  } catch (error) {
    console.error('Error in getContent:', error);
    return {
      detail: {},
      externalLinks: {},
    };
  }
}

export async function generateMetadata({ params }) {
  const {detail:data} = await getContent({ slug: params?.slug });

  return {
    title: data?.metaTitle ? data?.metaTitle : `${data?.name} | Definition and examples`,
    description: data?.metaDescription,
    alternates: { canonical: `${CURRENT_SITE_URL}/definitions/${params?.slug}` }
  };
}
export default async function GlossaryDetails({ params }) {
  const {detail, externalLinks} = await getContent({ slug: params?.slug });
  if (isEmpty(detail)) return notFound();

  return (
    <Layout>
      <GlossaryDetailsPage detail={detail} externalLinks={externalLinks} />
    </Layout>
  );
}
