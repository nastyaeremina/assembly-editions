'use client';

import { useCallback, useMemo, useState } from 'react';
import moment from 'moment';
import { OrganizationJsonLd } from 'next-seo';
import { Container } from '../../../styles/commonStyles';
import { MainContent, BlogListDiv, BlogCardsDiv, LoadMoreButton, Divider } from '../../../styles/blogstyles';
import Blogcard from '../../Blogcard';
import { isEmpty } from '../../../helpers/helpers';
import { CURRENT_SITE_URL } from '../../../constants/constant';
import {
  COPILOT_FACEBOOK_LINK,
  COPILOT_INSTAGRAM_LINK,
  COPILOT_LINKEDIN_LINK,
  COPILOT_TWITTER_LINK,
  COPILOT_YOUTUBE_CHANNEL_LINK
} from '../../../constants/externalLinks';
import NewCTA from '../../cta/newCTA';
import TabComponent from '../../tabComponent';
import { CTAData } from '../../../constants/raw';
import DropDown from '../../dropdownComponent/index';
import { useIsMobile } from '../../../hooks/useMobileDevice';
import FeatureBlogCard from '../../Blogcard/fetaureBlogCard';

export default function BlogPage({ allPosts, tags }) {
  const [selectedTag, setSelectedTag] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);
  const dropdownItems = [{ id: 'all', name: 'All', slug: 'all' }, ...tags];
  const isMobile = useIsMobile();

  const filterTagList = useCallback((tagList) => {
    if (isEmpty(tagList)) return null;
    return tagList.filter((tag) => !isEmpty(tag?.name) && tag.name.trim()?.[0] !== '#');
  }, []);

  const renderFeaturedBlog = useMemo(() => {
    if (isEmpty(allPosts)) return null;
    // pick the most recent blog from allPosts
    const recentBlog = [...allPosts].sort((a, b) => new Date(b.published_at) - new Date(a.published_at))[0];

    if (isEmpty(recentBlog)) return null;

    const finalTagList = filterTagList(recentBlog.tags);
    const authorName = recentBlog?.authors?.[0]?.name || '';

    return (
      <FeatureBlogCard
        key={recentBlog.title}
        slug={recentBlog.slug}
        title={recentBlog.title}
        excerpt={recentBlog.excerpt}
        featureImage={recentBlog.feature_image}
        publishedAt={recentBlog.published_at}
        authorName={authorName}
        tags={finalTagList}
      />
    );
  }, [allPosts, filterTagList]);

  const handleTagClick = useCallback((tag) => {
    setSelectedTag(tag);
    setVisibleCount(8);
  }, []);

  const handleDropdownClick = useCallback((tag) => {
    setSelectedTag(tag.name);
    setVisibleCount(8);
  }, []);

  const filteredPosts = useMemo(() => {
    if (isEmpty(allPosts)) return [];

    return selectedTag !== 'All'
      ? allPosts.filter((item) => item.tags.some((tag) => tag.name === selectedTag) && !item.featured)
      : allPosts.filter((item) => item && !item.featured);
  }, [allPosts, selectedTag]);

  const renderData = useMemo(() => {
    return filteredPosts.slice(0, visibleCount).map((item, index) => {
      const finalTagList = filterTagList(item.tags);
      const authorName = item?.authors?.[0]?.name || '';

      return (
        <>
          <Blogcard
            key={`blog_list_index_${index}`}
            name={item?.title}
            date={moment(new Date(item?.published_at)).format('MMM DD, YYYY')}
            authorName={authorName}
            desc={item?.excerpt}
            image={item?.feature_image}
            tags={finalTagList}
            slug={item?.slug}
          />
          {/* Show divider only after odd indexes */}
          {index % 2 == 0 && <Divider />}
        </>
      );
    });
  }, [filteredPosts, visibleCount, filterTagList]);

  if (isEmpty(allPosts)) return null;

  return (
    <>
      <OrganizationJsonLd
        type={'Organization'}
        name='Copilot'
        url={CURRENT_SITE_URL}
        logo={`${CURRENT_SITE_URL}/_next/static/media/blacklogo.370e156c.svg`}
        sameAs={[
          COPILOT_TWITTER_LINK,
          COPILOT_LINKEDIN_LINK,
          COPILOT_YOUTUBE_CHANNEL_LINK,
          COPILOT_FACEBOOK_LINK,
          COPILOT_INSTAGRAM_LINK
        ]}
      />
      <MainContent>
        {renderFeaturedBlog}
        <Container>
          <BlogListDiv>
            {isMobile ? (
              <DropDown items={dropdownItems} placeholder='Select Option' onSelect={handleDropdownClick} />
            ) : (
              <TabComponent items={tags} onTagClick={handleTagClick} selectedTag={selectedTag} />
            )}
            <BlogCardsDiv>{renderData}</BlogCardsDiv>
            {/* Show button only if there are more posts left */}
            {filteredPosts.length > visibleCount && (
              <LoadMoreButton onClick={() => setVisibleCount((prev) => prev + 8)}>Load more</LoadMoreButton>
            )}
          </BlogListDiv>
        </Container>
        <NewCTA
          title={CTAData.title}
          description={CTAData.description}
          primaryButtonLink={CTAData.primaryButtonLink}
          primaryButtonText={CTAData.primaryButtonText}
          secondaryButtonLink={CTAData.secondaryButtonLink}
          secondaryButtonText={CTAData.secondaryButtonText}
        />
      </MainContent>
    </>
  );
}
