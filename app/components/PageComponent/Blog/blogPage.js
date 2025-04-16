'use client';

import { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { OrganizationJsonLd } from 'next-seo';
import { Container } from '../../../styles/commonStyles';
import { FirstBlog, Last, MainContent, Par, PostDetail, Right, Text, Top } from '../../../styles/blogstyles';
import Blogcard from '../../Blogcard';
import { isEmpty } from '../../../helpers/helpers';
import BlogCTA from '../../blogCTA';
import { CURRENT_SITE_URL } from '../../../constants/constant';
import { COPILOT_TWITTER_LINK } from '../../../constants/externalLinks';

export default function BlogPage({ allPosts, tags }) {
  const [isOpen, setIsOpen] = useState(false);
  const [issubscribe, setIsSubscribe] = useState(false);
  const router = useRouter();

  const onOpenModel = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onSubscribe = useCallback(() => {
    setIsSubscribe(true);
  }, []);

  const onrequestCloseModel = useCallback(() => {
    setIsOpen(false);
  }, []);

  const filterTagList = useCallback((tagList) => {
    if (isEmpty(tagList)) return null;
    return tagList.filter((tag) => !isEmpty(tag?.name) && tag.name.trim()?.[0] !== '#');
  }, []);
  const renderFeaturedBlog = useMemo(() => {
    const featuredBlogList = allPosts?.filter((item) => item?.featured);
    if (isEmpty(featuredBlogList)) return null;
    return featuredBlogList?.map((item, index) => {
      if (isEmpty(item)) return null;
      const finalTagList = filterTagList(item.tags);
      return (
        <FirstBlog onClick={() => router.push(`/blog/${item.slug}`)} key={`featuredblog_index_${index}`}>
          {!isEmpty(item.feature_image) && (
            <Top>
              <Image src={item.feature_image} className='image' alt='blog' width={880} height={354} />
            </Top>
          )}
          <Text>
            <h2>{item.title}</h2>
            <PostDetail>
              {!isEmpty(item.published_at) && moment(new Date(item.published_at)).format('MMM DD, YYYY')}
              {!isEmpty(item.published_at) && !isEmpty(item.reading_time) && (
                <svg width='3' height='3' viewBox='0 0 3 3' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <circle cx='1.5' cy='1.5' r='1.5' fill='#757575' />
                </svg>
              )}
              {!isEmpty(item.reading_time) && <li>{`${item.reading_time} min read`}</li>}{' '}
            </PostDetail>
            {!isEmpty(item.excerpt) && <Par>{item.excerpt}</Par>}
          </Text>
          {!isEmpty(finalTagList) && (
            <Last>
              {finalTagList?.map((item) => {
                return <p key={`tag_list_index_${item.name}`}>{item.name}</p>;
              })}
            </Last>
          )}
        </FirstBlog>
      );
    });
  }, [allPosts, filterTagList, router]);

  const renderData = useMemo(() => {
    if (isEmpty(allPosts)) return null;
    return allPosts
      ?.filter((item) => item && !item.featured)
      .map((item, index) => {
        const finalTagList = filterTagList(item.tags);
        return (
          <Blogcard
            key={`blog_list_index_${index}`}
            name={item?.title}
            date={moment(new Date(item?.published_at)).format('MMM DD, YYYY')} //'Apr 28, 2022'
            read={`${item?.reading_time} min read`}
            desc={item?.excerpt}
            image={item?.feature_image}
            tags={finalTagList}
            slug={item?.slug}
          />
        );
      });
  }, [allPosts, filterTagList]);

  return (
    <>
      <OrganizationJsonLd
        type={'Organization'}
        name='Copilot'
        url={CURRENT_SITE_URL}
        logo={`${CURRENT_SITE_URL}/_next/static/media/blacklogo.370e156c.svg`}
        sameAs={[
          COPILOT_TWITTER_LINK,
          'https://www.linkedin.com/company/copilotplatforms/',
          'https://www.youtube.com/@copilotplatforms',
          'https://www.facebook.com/copilotplatforms',
          'https://www.instagram.com/copilotplatforms/'
        ]}
      />
      <MainContent>
        <Container>
          {renderFeaturedBlog}
          {renderData}
          <BlogCTA />
        </Container>
      </MainContent>
    </>
  );
}
