'use client';

import { useCallback, useMemo, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useHotkeys } from 'react-hotkeys-hook';
import moment from 'moment';
import { OrganizationJsonLd } from 'next-seo';
import { Container } from '../../../styles/commonStyles';
import {
  MainContent,
  BlogListDiv,
  BlogCardsDiv,
  LoadMoreButton,
  Divider,
  InputWrap,
  InputText,
  SearchWrapper
} from '../../../styles/blogstyles';
import Blogcard from '../../Blogcard';
import { isEmpty } from '../../../helpers/helpers';
import { ButtonVariant, CURRENT_SITE_URL } from '../../../constants/constant';
import NewCTA from '../../cta/newCTA';
import TabComponent from '../../tabComponent';
import DropDown from '../../dropdownComponent/index';
import { useIsMobile } from '../../../hooks/useMobileDevice';
import FeatureBlogCard from '../../Blogcard/fetaureBlogCard';
import ButtonV2Component from '../../button/buttonV2/buttonV2';
import SVGComponent from '../../../../public/images/svg/SVGComponent';
import BlogSearch from './blogSearch';

export default function BlogPage({
  allPosts,
  tags,
  featuredBlog,
  socialMediaLinks = [],
  blogCTA = null,
  allBlogPost = []
}) {
  const [selectedTag, setSelectedTag] = useState('All');
  const [posts, setPosts] = useState(allPosts || []);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredBlogId, setFeaturedBlogId] = useState(featuredBlog?.id || null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();

  // Compute hotkey combination based on the operating system
  const hotkeyCombination = useMemo(() => {
    const isMacOS = navigator.userAgent.includes('Mac');
    return isMacOS ? 'meta+k' : 'ctrl+k';
  }, []);

  useHotkeys([hotkeyCombination], (event) => {
    event.preventDefault();
    setIsSearchModalOpen(true);
  });

  useHotkeys('esc', (event) => {
    event.preventDefault();
    setIsSearchModalOpen(false);
  });

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
        heading={selectedTag === 'All' ? 'Blog' : selectedTag}
      />
    );
  }, [featuredBlog, filterTagList, selectedTag]);

  // Load more posts function
  const loadMorePosts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const nextPage = currentPage + 1;
      const tagParam = selectedTag !== 'All' ? tags.find((t) => t.name === selectedTag)?.slug || 'all' : 'all';

      // Add featured blog ID to exclude it from results
      const excludeParam = featuredBlogId ? `&exclude=${featuredBlogId}` : '';

      const response = await fetch(`/api/blog/posts?page=${nextPage}&limit=8&tag=${tagParam}${excludeParam}`);
      const data = await response.json();

      if (data.posts && data.posts.length > 0) {
        setPosts((prev) => [...prev, ...data.posts]);
        setCurrentPage(nextPage);
        setHasMore(data.hasMore);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more posts:', error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, currentPage, selectedTag, tags, featuredBlogId]);

  // Handle dropdown/tab clicks for tag filtering
  const handleDropdownClick = useCallback(
    (tag) => {
      setSelectedTag(tag.name);
      setPosts([]); // Clear current posts
      setCurrentPage(1);
      setHasMore(true);

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

  // Update posts when allPosts changes (for initial load and navigation)
  useEffect(() => {
    setPosts(allPosts || []);
    setCurrentPage(1);
    setHasMore(allPosts?.length >= 8); // Assume more if we got full page
    setFeaturedBlogId(featuredBlog?.id || null); // Track featured blog ID
  }, [allPosts, featuredBlog]);

  // Render blog post cards
  const renderData = useMemo(() => {
    return posts.map((item, index) => {
      const finalTagList = filterTagList(item.tags);
      const authorName = item?.authors?.[0]?.name || '';

      return (
        <>
          <Blogcard
            key={`blog_list_${item.slug}_${index}`}
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
  }, [posts, filterTagList]);

  if (isEmpty(posts) && isEmpty(allPosts)) return null;

  const onCloseSearch = useCallback(() => {
    setIsSearchModalOpen(false);
  }, []);

  return (
    <>
      {isSearchModalOpen && (
        <div>
          <BlogSearch articleData={allBlogPost} onCloseSearch={onCloseSearch} />
        </div>
      )}

      <OrganizationJsonLd
        type={'Organization'}
        name='Copilot'
        url={CURRENT_SITE_URL}
        logo={`${CURRENT_SITE_URL}/_next/static/media/blacklogo.370e156c.svg`}
        sameAs={socialMediaLinks}
      />
      <MainContent>
        {renderFeaturedBlog}
        <Container>
          <BlogListDiv>
            {/* Render dropdown on mobile, tabs on desktop */}
            <SearchWrapper>
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
              <InputWrap onClick={() => setIsSearchModalOpen(true)}>
                <div className='desktop-search-icon'>
                  <SVGComponent name='search-icon' width='20' height='20' viewBox='0 0 20 20' className='search-icon' />
                </div>
                <InputText>Search</InputText>
              </InputWrap>
            </SearchWrapper>
            <BlogCardsDiv>{renderData}</BlogCardsDiv>
            {/* Show load more button if there are more posts */}
            {hasMore && (
              <LoadMoreButton>
                <ButtonV2Component
                  title={'Load more'}
                  variant={ButtonVariant.SECONDARY}
                  onClick={loadMorePosts}
                  disabled={loading}
                  isLoading={loading}
                />
              </LoadMoreButton>
            )}
          </BlogListDiv>
        </Container>
        {!isEmpty(blogCTA) && (
          <NewCTA
            title={blogCTA.title}
            description={blogCTA.description}
            primaryButtonLink={blogCTA.primaryButtonLink}
            primaryButtonText={blogCTA.primaryButtonText}
            secondaryButtonLink={blogCTA.secondaryButtonLink}
            secondaryButtonText={blogCTA.secondaryButtonText}
            banner={blogCTA.banner?.url}
          />
        )}
      </MainContent>
    </>
  );
}
