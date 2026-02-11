import React, { useCallback, useMemo, useState } from 'react';
import { Container } from '../../../styles/commonStyles';
import {
  AuthorTitle,
  BlogCardsDiv,
  Divider,
  FeaturesLinkSectionWrapper,
  ListDiv,
  LoadMoreButton
} from '../../../styles/blogstyles';
import { ButtonVariant } from '../../../constants/constant';
import useMobileDevice from '../../../hooks/useMobileDevice';
import { isEmpty } from '../../../helpers/helpers';
import BlogCard from '../../blogCard';
import moment from 'moment';
import ButtonV2Component from '../../button/buttonV2/buttonV2';

function FeaturesLinkSection({ featuredLinks }) {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMobileDevice();

  const handleLoadMore = useCallback(async () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 500));
    setVisibleCount((prev) => prev + 3);
    setIsLoading(false);
  }, []);

  const featuredPosts = useMemo(() => {
    if (isEmpty(featuredLinks)) return [];
    return featuredLinks;
  }, [featuredLinks]);

  const renderData = useMemo(() => {
    if (isEmpty(featuredPosts)) return;

    return featuredPosts.slice(0, visibleCount).map((item, index) => {
      return (
        <React.Fragment key={`blog_list_index_${index}`}>
          <BlogCard name={item?.title} authorName={item.author} desc={item?.description} url={item?.url} />

          {isMobile
            ? (index + 1) % 2 !== 0 && <Divider isAuthorPage />
            : (index + 1) % 3 !== 0 && <Divider isAuthorPage />}
        </React.Fragment>
      );
    });
  }, [featuredPosts, visibleCount, isMobile]);

  return (
    <FeaturesLinkSectionWrapper>
      <Container>
        <AuthorTitle>Featured links</AuthorTitle>
        <BlogCardsDiv className='author-page'>{renderData}</BlogCardsDiv>
        {/* Show button only if there are more posts left */}
        {featuredPosts.length > visibleCount && (
          <LoadMoreButton>
            <ButtonV2Component
              title={'Load more'}
              variant={ButtonVariant.SECONDARY}
              onClick={handleLoadMore}
              isLoading={isLoading}
              disabled={isLoading}
            />
          </LoadMoreButton>
        )}
      </Container>
    </FeaturesLinkSectionWrapper>
  );
}

export default FeaturesLinkSection;
