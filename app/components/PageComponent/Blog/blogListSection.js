'use client';
import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { Container } from '../../../styles/commonStyles';
import { AuthorTitle, BlogCardsDiv, Divider, ListDiv, LoadMoreButton } from '../../../styles/blogstyles';
import { isEmpty } from '../../../helpers/helpers';
import useMobileDevice from '../../../hooks/useMobileDevice';
import ButtonV2Component from '../../button/buttonV2/buttonV2';
import { ButtonVariant } from '../../../constants/constant';
import BlogCard from '../../blogCard';
import moment from 'moment';

function BlogListSection({ authorName, allPosts, authorSlug }) {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState(allPosts || []);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  // Load more posts function
  const loadMorePosts = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const nextPage = currentPage + 1;
      const authorParam = authorSlug || '';

      const response = await fetch(`/api/blog/posts?page=${nextPage}&limit=6&author=${authorParam}`);
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
      setIsLoading(false);
    }
  }, [isLoading, hasMore, currentPage, authorSlug]);

  // Update posts when allPosts changes (for initial load and navigation)
  useEffect(() => {
    // Only take the first 6 posts initially
    const initialPosts = allPosts?.slice(0, 6) || [];
    setPosts(initialPosts);
    setCurrentPage(1);
    // Set hasMore based on whether there are more posts than the initial limit
    setHasMore((allPosts?.length || 0) > 6);
  }, [allPosts]);

  const isMobile = useMobileDevice();

  const renderData = useMemo(() => {
    if (posts.length === 0) {
      return <div>No posts found for this Author.</div>;
    }
    return posts?.map((item, index) => {
      const finalTagList = item?.tags?.filter((tag) => tag?.name?.trim()?.[0] !== '#');
      const authorName = item?.authors?.[0]?.name || '';
      return (
        <>
          <BlogCard
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
          {isMobile
            ? (index + 1) % 2 !== 0 && <Divider isAuthorPage />
            : (index + 1) % 3 !== 0 && <Divider isAuthorPage />}
        </>
      );
    });
  }, [posts, isMobile]);

  return (
    <Container>
      <ListDiv>
        {!isEmpty(authorName) && <AuthorTitle>{`Blogs from ${authorName}`}</AuthorTitle>}
        <BlogCardsDiv className='author-page'>{renderData}</BlogCardsDiv>
        {/* Show button only if there are more posts left */}
        {hasMore && (
          <LoadMoreButton>
            <ButtonV2Component
              title={'Load more'}
              variant={ButtonVariant.SECONDARY}
              onClick={loadMorePosts}
              isLoading={isLoading}
              disabled={isLoading}
            />
          </LoadMoreButton>
        )}
      </ListDiv>
    </Container>
  );
}

export default BlogListSection;
