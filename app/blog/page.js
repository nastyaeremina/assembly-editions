import BlogPage from '../components/PageComponent/Blog/blogPage';
import BlogNavbar from '../components/navbar/blognavbar';
import Layout from '../components/layout';
import { getTopBarContent } from '../components/navbar/navbar';
import { getAllTagWithSlug, getBlogPosts } from './../lib/blog-content';
import { getSEOData } from './../helpers/helpers';
import { BLOG_SEO_ID } from './../constants/constant';

async function getContent() {
  const allPosts = await getBlogPosts();
  const tagsData = await getAllTagWithSlug();
  const tags = tagsData?.filter((tagsData) => tagsData?.name?.trim()?.[0] !== '#');
  return { allPosts, tags };
}

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ id: BLOG_SEO_ID });
  seoData.alternates = { canonical: 'https://www.copilot.com/blog' };
  return seoData;
}

export default async function Blog() {
  const { allPosts, tags } = await getContent();
  const { topbarContent } = await getTopBarContent();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Copilot',
    url: 'https://www.copilot.com',
    logo: 'https://www.copilot.com/_next/static/media/blacklogo.370e156c.svg',
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
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Layout>
        <BlogNavbar tagData={tags} topbarContent={topbarContent} />
        <BlogPage allPosts={allPosts} tags={tags} />
      </Layout>
    </>
  );
}
