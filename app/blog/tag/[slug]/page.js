import Layout from '../../../components/layout';
import BlogNavbar from '../../../components/navbar/blognavbar';
import { getAllTagWithSlug, getBlogByTag, getTagDetail } from '../../../lib/blog-content';
import { customSort, isEmpty } from '../../../helpers/helpers';
import TagPage from '../../../components/PageComponent/Blog/tagsPage';
import { notFound } from 'next/navigation';
import { BLOG_TAG_SORTED_LIST } from '../../../constants/constant';

async function getContent({ slug }) {
  const allPosts = (await getBlogByTag(slug)) ?? [];
  const tagDetail = (await getTagDetail(slug)) ?? {};
  const tags = (await getAllTagWithSlug()) ?? [];
  const finalTagList = tags?.filter((tag) => tag?.name?.trim()?.[0] !== '#');
  const title = tagDetail?.meta_title ?? `${tagDetail?.name} - Copilot Blog`;
  const og_title = tagDetail?.og_title ?? tagDetail?.meta_title ?? title;
  const og_des = tagDetail?.meta_description ?? tagDetail?.description;
  const og_image = tagDetail?.feature_image;
  const description = tagDetail?.meta_description ?? tagDetail?.description;
  const canonical = 'https://www.copilot.com/blog/tag/' + tagDetail?.slug;
  const seoData = {
    title,
    og_title,
    og_des,
    og_image,
    description,
    canonical
  };
  customSort(finalTagList, BLOG_TAG_SORTED_LIST);

  return {
    allPosts,
    tags: finalTagList,
    seoData
  };
}

export async function generateMetadata({ params }) {
  const { seoData } = await getContent({ slug: params?.slug });

  return {
    title: seoData?.title,
    description: seoData?.description,
    canonical: seoData?.canonical ?? null,
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      site_name: 'copilot.com',
      title: seoData?.og_title,
      description: seoData?.og_des,
      images: isEmpty(seoData?.og_image)
        ? []
        : [
            {
              url: seoData?.og_image
            }
          ]
    }
  };
}

export default async function Tag({ params }) {
  const { allPosts, tags } = await getContent({ slug: params?.slug });
  const index = allPosts.findIndex((post) => post?.tags?.[0]?.slug === params?.slug);
  if (index === -1) return notFound();
  return (
    <>
      <Layout>
        <BlogNavbar tagData={tags} />
        <TagPage allPosts={allPosts} />
      </Layout>
    </>
  );
}
