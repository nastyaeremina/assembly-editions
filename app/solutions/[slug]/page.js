import { notFound } from 'next/navigation';
import CTA from '../../components/cta/cta';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { isEmpty } from '../../helpers/helpers';
import { getSolutionBySlug } from '../../lib/contentful-solutions';
import SolutionPage from '../../components/PageComponent/solution/solutionDetailPage';

async function getContent({ slug }) {
  const details = await getSolutionBySlug(slug);
  return details;
}
export async function generateMetadata({ params }) {
  const details = await getContent({ slug: params?.slug });

  return {
    title: details?.seoMetadata?.seoTitle,
    description: details?.seoMetadata?.description,
    canonical: 'https://www.copilot.com/solutions/' + details?.slug,
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      site_name: 'copilot.com',
      images: isEmpty(details?.seoMetadata?.openGraphImage)
        ? []
        : [
            {
              url: details?.seoMetadata?.openGraphImage?.url
            }
          ]
    }
  };
}

export default async function Solution({ params }) {
  const details = await getContent({ slug: params?.slug });
  if (isEmpty(details)) return notFound();
  return (
    <>
      <Layout>
        <Navbar />
        <SolutionPage details={details} />

        <CTA />
      </Layout>
    </>
  );
}
