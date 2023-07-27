import BlogPage from '../components/PageComponent/Blog/blogPage';
import BlogNavbar from '../components/navbar/blognavbar';
import Layout from '../components/layout';
import { getAllTagWithSlug, getBlogPosts } from './../lib/blog-content';
import { getSEOData } from './../helpers/helpers';
import { BLOG_SEO_ID } from './../constants/constant';
import { getTopBarContent } from '../components/navbar/navbar';

async function getContent() {
  const allPosts = await getBlogPosts();
  const tagsData = await getAllTagWithSlug();
  const tags = tagsData?.filter((tagsData) => tagsData?.name?.trim()?.[0] !== '#');
  return { allPosts, tags };
}

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ id: BLOG_SEO_ID });
  seoData.canonical = 'https://www.copilot.com/blog';
  return seoData;
}

export default async function Blog() {
  const { allPosts, tags } = await getContent();
  const topbarContent = await getTopBarContent();

  return (
    <>
      <Layout>
        <BlogNavbar tagData={tags} topbarContent={topbarContent} />
        <BlogPage allPosts={allPosts} tags={tags} />
      </Layout>
    </>
  );
}
