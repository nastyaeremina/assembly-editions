import { notFound } from 'next/navigation';
import { parse } from 'node-html-parser';
import Layout from '../../components/layout';
import BlogNavbar from '../../components/navbar/blognavbar';
import { getAllTagWithSlug, getBlogDetail } from '../../lib/blog-content';
import { customSort, isEmpty } from '../../helpers/helpers';
import { isSameDomain } from '../../helpers/serverSideHelpers';
import BlogdetailPage from '../../components/PageComponent/Blog/blogDetailPage';
import { BLOG_TAG_SORTED_LIST } from '../../constants/constant';

async function getContent({ slug }) {
  const blogDetail = (await getBlogDetail(slug)) ?? [];
  const tags = (await getAllTagWithSlug()) ?? [];
  const finalTagList = tags?.filter((tag) => tag?.name?.trim()?.[0] !== '#');
  customSort(finalTagList, BLOG_TAG_SORTED_LIST);

  return {
    blogDetail,
    tags: finalTagList
  };
}

/* 
   This section generates metadata for the page based on the fetched blog content.
   It sets the title, description, and Open Graph metadata.
*/
export async function generateMetadata({ params, searchParams }, parent) {
  const { blogDetail } = await getContent({ slug: params?.slug });

  let og_title = blogDetail?.title;
  let og_des = blogDetail?.meta_description;
  let og_image = blogDetail?.feature_image;
  if (!isEmpty(blogDetail?.og_title)) og_title = blogDetail?.og_title;
  else if (!isEmpty(blogDetail?.meta_title)) og_title = blogDetail?.meta_title;

  if (!isEmpty(blogDetail?.og_description)) og_des = blogDetail?.og_description;
  if (!isEmpty(blogDetail?.og_image)) og_image = blogDetail?.og_image;
  return {
    title: blogDetail?.meta_title ?? blogDetail?.title,
    description: blogDetail?.meta_description,
    canonical: `https://www.copilot.com/blog/${blogDetail?.slug}`,
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      site_name: 'copilot.com',
      title: og_title,
      description: og_des,
      images: isEmpty(og_image)
        ? []
        : [
            {
              url: og_image
            }
          ]
    }
  };
}
export default async function Blogdetail({ params }) {
  const { blogDetail, tags } = await getContent({ slug: params?.slug });

  // Check if the fetched blog content is empty; if so, return a 404 response
  if (isEmpty(blogDetail)) return notFound();

  // Create a JSON-LD script for structured data related to the blog post
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.copilot.com/blog/${blogDetail?.slug}/`
    },
    headline: blogDetail?.title,
    description: blogDetail?.excerpt,
    image: blogDetail?.feature_image,
    author: {
      '@type': 'Person',
      name: blogDetail?.authors[0].name,
      url: blogDetail?.authors[0]?.url
    },
    publisher: {
      '@type': 'Organization',
      name: 'Copilot',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.copilot.com/blog/assets/images/logo-copilot.svg?v=d96fa6b44d'
      }
    },
    datePublished: blogDetail?.created_at,
    dateModified: blogDetail?.updated_at
  };
  // Define a regular expression to match the <cta> tag and its contents,
  // specifically targeting nested <title> and <description> tags
  const ctaRegex = /<cta>\s*<title>([^<]+)<\/title>\s*<description>([^<]+)<\/description>\s*<\/cta>/;

  // Attempt to match the regular expression against the HTML content
  const match = blogDetail?.html.match(ctaRegex);

  // Extract the title from the <title> tag if a match is found, otherwise set to an empty string
  const ctaTitle = match ? match[1] : '';

  // Extract the description from the <description> tag if a match is found, otherwise set to an empty string
  const ctaDescription = match ? match[2] : '';

  // Remove the <cta> tag and its contents from the original HTML string
  const cleanedHtmlString = blogDetail?.html?.replace(ctaRegex, '');

  // Use Cheerio to load the blog content's HTML
  const root = parse(cleanedHtmlString);
  // List of allowed routes where links should open in the same tab
  const allowedRoutes = ['/blog', '/pricing'];

  // Process anchor elements within the content
  root.querySelectorAll('a').forEach((element) => {
    const href = element.getAttribute('href');

    if (href) {
      // Check if href is a valid URL or a fragment identifier
      const isFragmentIdentifier = href.startsWith('#');
      if (!isFragmentIdentifier) {
        // Extract the pathname from the URL and set the 'target' attribute
        const linkPathname = new URL(href)?.pathname;
        if (isSameDomain(href) && allowedRoutes.some((route) => linkPathname.startsWith(route))) {
          // If it's the same domain and matches an allowed route, set target to "_self"
          element.setAttribute('target', '_self');
        } else {
          // If it's a different domain or doesn't match an allowed route, set target to "_blank"
          element.setAttribute('target', '_blank');
        }
      }
    }
  });
  const modifiedHtmlData = root.toString();

  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Layout>
        <BlogNavbar tagData={tags} />
        <BlogdetailPage
          blogDetail={blogDetail}
          htmlData={modifiedHtmlData}
          ctaTitle={ctaTitle}
          ctaDescription={ctaDescription}
        />
      </Layout>
    </>
  );
}
