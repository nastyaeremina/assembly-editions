'use client';

import { useCallback, useMemo, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import moment from 'moment';
import { OrganizationJsonLd } from 'next-seo';
import { Container } from '../../../styles/commonStyles';
import { MainContent, BlogListDiv, BlogCardsDiv, LoadMoreButton, Divider } from '../../../styles/blogstyles';
import Blogcard from '../../Blogcard';
import { isEmpty } from '../../../helpers/helpers';
import { ButtonVariant, CURRENT_SITE_URL } from '../../../constants/constant';
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
import ButtonV2Component from '../../button/buttonV2/buttonV2';

export default function BlogPage({ allPosts, tags, featuredBlog }) {
  const [selectedTag, setSelectedTag] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();

  // Create dropdown items with current tag included
  const dropdownItems = useMemo(() => {
    const baseItems = [{ id: 'all', name: 'All', slug: 'all' }, ...tags];

    // If we're on a tag page, ensure the current tag is included
    if (pathname.startsWith('/blog/tag/')) {
      const tagSlug = pathname.split('/blog/tag/')[1];
      const currentTag = tags.find((t) => t.slug === tagSlug);

      if (currentTag) {
        // Tag exists in tags array, ensure it's in dropdownItems
        if (!baseItems.some((item) => item.slug === currentTag.slug)) {
          baseItems.push(currentTag);
        }
      } else {
        // Tag not found in tags array, create a temporary one
        const urlTagName = decodeURIComponent(tagSlug).replace(/-/g, ' ');
        const tempTag = {
          id: `temp-${tagSlug}`,
          name: urlTagName,
          slug: tagSlug
        };

        if (!baseItems.some((item) => item.slug === tagSlug)) {
          baseItems.push(tempTag);
        }
      }
    }

    return baseItems;
  }, [tags, pathname]);

  // Find current tag for dropdown defaultValue
  const getCurrentTagForDropdown = useMemo(() => {
    if (selectedTag === 'All') {
      return dropdownItems.find((item) => item.slug === 'all');
    }

    // First try to find by name in dropdownItems
    let foundTag = dropdownItems.find((item) => item.name === selectedTag);

    // If not found, try to find by slug in the current pathname
    if (!foundTag && pathname.startsWith('/blog/tag/')) {
      const tagSlug = pathname.split('/blog/tag/')[1];
      foundTag = dropdownItems.find((item) => item.slug === tagSlug);
    }

    // If still not found, create a temporary tag object for the current selection
    if (!foundTag && selectedTag !== 'All') {
      foundTag = {
        id: `temp-${selectedTag.toLowerCase().replace(/\s+/g, '-')}`,
        name: selectedTag,
        slug: pathname.startsWith('/blog/tag/')
          ? pathname.split('/blog/tag/')[1]
          : selectedTag.toLowerCase().replace(/\s+/g, '-')
      };
    }

    return foundTag;
  }, [selectedTag, dropdownItems, pathname]);

  // Set selectedTag based on current URL
  useEffect(() => {
    if (pathname.startsWith('/blog/tag/')) {
      const tagSlug = pathname.split('/blog/tag/')[1];
      const tag = tags.find((t) => t.slug === tagSlug);
      if (tag) {
        setSelectedTag(tag.name);
      } else {
        // If tag not found in tags array, try to get it from the URL
        const urlTagName = decodeURIComponent(tagSlug).replace(/-/g, ' ');
        setSelectedTag(urlTagName);
      }
    } else if (pathname === '/blog') {
      setSelectedTag('All');
    }
  }, [pathname, tags]);

  // Filter tag list to remove empty and hashtag tags
  const filterTagList = useCallback((tagList) => {
    if (isEmpty(tagList)) return null;
    return tagList.filter((tag) => !isEmpty(tag?.name) && tag.name.trim()?.[0] !== '#');
  }, []);

  // Render featured blog post
  const renderFeaturedBlog = useMemo(() => {
    if (isEmpty(featuredBlog)) return null;

    const finalTagList = filterTagList(featuredBlog.tags);
    const author = featuredBlog?.authors?.[0] || {};

    return (
      <FeatureBlogCard
        key={featuredBlog.title}
        slug={featuredBlog.slug}
        title={featuredBlog.title}
        excerpt={featuredBlog.excerpt}
        featureImage={featuredBlog.feature_image}
        publishedAt={featuredBlog.published_at}
        author={author}
        tags={finalTagList}
      />
    );
  }, [featuredBlog, filterTagList]);

  // Handle dropdown/tab clicks for tag filtering
  const handleDropdownClick = useCallback(
    (tag) => {
      setSelectedTag(tag.name);
      setVisibleCount(8);

      if (tag.slug === 'all') {
        // Navigate to main blog page
        router.push('/blog');
      } else {
        // Navigate to tag page
        router.push(`/blog/tag/${tag.slug}`);
      }
    },
    [router]
  );

  // Filter posts based on selected tag
  const filteredPosts = useMemo(() => {
    if (isEmpty(allPosts)) return [];

    return selectedTag !== 'All'
      ? allPosts.filter((item) => item.tags.some((tag) => tag.name === selectedTag))
      : allPosts;
  }, [allPosts, selectedTag]);

  // Render blog post cards with pagination
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
            authorSlug={item?.authors?.[0]?.slug}
            desc={item?.excerpt}
            image={item?.feature_image}
            tags={finalTagList}
            slug={item?.slug}
          />
          {/* Show divider only after odd indexes */}
          {(index + 1) % 2 !== 0 && <Divider />}
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
            {/* Render dropdown on mobile, tabs on desktop */}
            {isMobile ? (
              <DropDown
                items={dropdownItems}
                placeholder='Select Option'
                onSelect={handleDropdownClick}
                defaultValue={getCurrentTagForDropdown}
              />
            ) : (
              <TabComponent items={dropdownItems} selectedTag={selectedTag} />
            )}
            <BlogCardsDiv>{renderData}</BlogCardsDiv>
            {/* Show load more button if there are more posts */}
            {filteredPosts.length > visibleCount && (
              <LoadMoreButton>
                <ButtonV2Component
                  title={'Load more'}
                  variant={ButtonVariant.SECONDARY_WITH_BORDER}
                  onClick={() => setVisibleCount((prev) => prev + 8)}
                />
              </LoadMoreButton>
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
