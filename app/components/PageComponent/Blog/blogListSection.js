'use client';
import React, { useMemo, useState } from 'react';
import { Container } from '../../../styles/commonStyles';
import { AuthorTitle, BlogCardsDiv, Divider, ListDiv, LoadMoreButton } from '../../../styles/blogstyles';
import { isEmpty } from '../../../helpers/helpers';
import useMobileDevice from '../../../hooks/useMobileDevice';
import ButtonV2Component from '../../button/buttonV2/buttonV2';
import { ButtonVariant } from '../../../constants/constant';
import Blogcard from '../../Blogcard';
import moment from 'moment';

function BlogListSection({ authorName, allPosts }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const isMobile = useMobileDevice();

  const renderData = useMemo(() => {
    if (isEmpty(allPosts)) return notFound();
    return allPosts?.slice(0, visibleCount).map((item, index) => {
      const finalTagList = item?.tags?.filter((tag) => tag?.name?.trim()?.[0] !== '#');
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
            isAuthorPage
          />
          {/* Show divider only after odd indexes */}
          {isMobile ? (index + 1) % 2 !== 0 && <Divider /> : (index + 1) % 3 !== 0 && <Divider />}
        </>
      );
    });
  }, [allPosts, visibleCount, isMobile]);

  return (
    <Container>
      <ListDiv>
        {!isEmpty(authorName) && <AuthorTitle>{`Blogs from ${authorName}`}</AuthorTitle>}
        <BlogCardsDiv className='author-page'>{renderData}</BlogCardsDiv>
        {/* Show button only if there are more posts left */}
        {allPosts.length > visibleCount && (
          <LoadMoreButton>
            <ButtonV2Component
              title={'Load more'}
              variant={ButtonVariant.SECONDARY_WITH_BORDER}
              onClick={() => setVisibleCount((prev) => prev + 6)}
            />
          </LoadMoreButton>
        )}
      </ListDiv>
    </Container>
  );
}

export default BlogListSection;
