import BlogPage from '../components/PageComponent/Blog/blogPage';
import BlogNavbar from '../components/navbar/blognavbar';
import Layout from '../components/layout';
import { getTopBarContent } from '../components/navbar/navbar';
import AggregateRating from '../components/aggregateRating';
import { getAllTagWithSlug, getBlogPosts } from './../lib/blog-content';
import { customSort, getSEOData, isEmpty } from './../helpers/helpers';
import { BLOG_SEO_ID, BLOG_TAG_SORTED_LIST, CURRENT_SITE_URL } from './../constants/constant';

async function getContent() {
  const allPosts = (await getBlogPosts()) || [];
  const tagsData = await getAllTagWithSlug();
  const tags = tagsData?.filter((tagsData) => tagsData?.name?.trim()?.[0] !== '#');

  customSort(tags, BLOG_TAG_SORTED_LIST);
  return { allPosts, tags };
}

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ id: BLOG_SEO_ID });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/blog` };
  return seoData;
}

export default async function Blog() {
  const { allPosts, tags } = await getContent();
  const { topbarContent } = await getTopBarContent();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Copilot',
    url: CURRENT_SITE_URL,
    logo: `${CURRENT_SITE_URL}/_next/static/media/blacklogo.370e156c.svg`,
    sameAs: [
      'https://twitter.com/copilot',
      'https://www.linkedin.com/company/copilotplatforms/',
      'https://www.youtube.com/@copilotplatforms',
      'https://www.facebook.com/copilotplatforms',
      'https://www.instagram.com/copilotplatforms/'
    ]
  };
  return (
    <>
      <AggregateRating id={BLOG_SEO_ID} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Layout>
        <BlogNavbar tagData={tags} topbarContent={topbarContent} />
        <BlogPage allPosts={allPosts} tags={tags} />
      </Layout>
    </>
  );
}
