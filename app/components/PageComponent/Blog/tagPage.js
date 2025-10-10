'use client';
import { useCallback, useMemo, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import moment from 'moment';
import { Container } from '../../../styles/commonStyles';
import Blogcard from '../../../components/Blogcard';
import { BlogCardsDiv, BlogListDiv, Divider, LoadMoreButton, MainContent } from '../../../styles/blogstyles';
import FeatureBlogCard from '../../Blogcard/fetaureBlogCard';
import { isEmpty } from '../../../helpers/helpers';
import DropDown from '../../dropdownComponent';
import TabComponent from '../../tabComponent';
import { useIsMobile } from '../../../hooks/useMobileDevice';
import ButtonV2Component from '../../button/buttonV2/buttonV2';
import { ButtonVariant } from '../../../constants/constant';
import NewCTA from '../../cta/newCTA';

// Tag-specific blog page with server-side pagination
export default function TagPage({ allPosts, tags, featuredBlog, currentTag, tagCTA = null }) {
  const [selectedTag, setSelectedTag] = useState('All');
  const [posts, setPosts] = useState(allPosts || []);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredBlogId, setFeaturedBlogId] = useState(featuredBlog?.id || null);
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();

  // Create dropdown items with All option and tags
  const dropdownItems = useMemo(() => {
    return [{ id: 'all', name: 'All', slug: 'all' }, ...tags];
  }, [tags]);

  // Set selectedTag based on current tag slug
  useEffect(() => {
    if (currentTag && tags.length > 0) {
      const currentSelectedTag = tags.find((tag) => tag.slug === currentTag.slug);
      if (currentTag) {
        setSelectedTag(currentSelectedTag.name);
      }
    }
  }, [currentTag, tags]);

  // Handle pathname changes for direct navigation
  useEffect(() => {
    if (pathname.startsWith('/blog/tag/')) {
      const tagSlug = pathname.split('/blog/tag/')[1];
      const tag = tags.find((t) => t.slug === tagSlug);
      if (tag) {
        setSelectedTag(tag.name);
      }
    }
  }, [pathname, tags]);

  // Filter tag list to remove empty and hashtag tags
  const filterTagList = useCallback((tagList) => {
    if (isEmpty(tagList)) return null;
    return tagList.filter((tag) => !isEmpty(tag?.name) && tag.name.trim()?.[0] !== '#');
  }, []);

  // Load more posts function
  const loadMorePosts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const nextPage = currentPage + 1;
      const tagParam = currentTag.slug || 'all';

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
  }, [loading, hasMore, currentPage, currentTag.slug, featuredBlogId]);

  // Handle dropdown clicks for tag filtering
  const handleDropdownClick = useCallback(
    (tag) => {
      setSelectedTag(tag.name);
      setPosts([]); // Clear current posts
      setCurrentPage(1);
      setHasMore(true);

      // Navigate to the correct page
      if (tag.slug === 'all') {
        router.push('/blog');
      } else {
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
        heading={currentTag.name}
      />
    );
  }, [featuredBlog, filterTagList, selectedTag]);

  // Render blog post cards
  const renderData = useMemo(() => {
    if (posts.length === 0) {
      return <div>No posts found for this tag.</div>;
    }

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

  // Get current tag object for dropdown defaultValue
  const getCurrentTagForDropdown = useMemo(() => {
    // Try to find tag by slug from pathname first
    if (pathname.startsWith('/blog/tag/')) {
      const tagSlug = pathname.split('/blog/tag/')[1];
      const foundBySlug = dropdownItems.find((item) => item.slug === tagSlug);
      if (foundBySlug) {
        return foundBySlug;
      }
    }

    // Try to find by currentTagSlug prop
    if (currentTag.slug) {
      const foundBySlug = dropdownItems.find((item) => item.slug === currentTag.slug);
      if (foundBySlug) {
        return foundBySlug;
      }
    }

    // Return All item if selectedTag is All
    if (selectedTag === 'All') {
      return dropdownItems.find((item) => item.slug === 'all');
    }

    // Try to find by name match
    const foundByName = dropdownItems.find((item) => item.name === selectedTag);
    if (foundByName) {
      return foundByName;
    }

    // Fallback to All
    return dropdownItems.find((item) => item.slug === 'all');
  }, [selectedTag, dropdownItems, pathname, currentTag.slug]);

  return (
    <>
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
            {hasMore && (
              <LoadMoreButton>
                <ButtonV2Component
                  title={'Load more'}
                  variant={ButtonVariant.SECONDARY_WITH_BORDER}
                  onClick={loadMorePosts}
                  disabled={loading}
                  isLoading={loading}
                />
              </LoadMoreButton>
            )}
          </BlogListDiv>
        </Container>
        {!isEmpty(tagCTA) && (
          <NewCTA
            title={tagCTA.title}
            description={tagCTA.description}
            primaryButtonLink={tagCTA.primaryButtonLink}
            primaryButtonText={tagCTA.primaryButtonText}
            secondaryButtonLink={tagCTA.secondaryButtonLink}
            secondaryButtonText={tagCTA.secondaryButtonText}
            banner={tagCTA.banner?.url}
          />
        )}
      </MainContent>
    </>
  );
}
