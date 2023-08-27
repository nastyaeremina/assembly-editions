'use client';
import { useMemo } from 'react';
import moment from 'moment';
import { notFound } from 'next/navigation';
import { Container } from '../../../styles/commonStyles';
import Blogcard from '../../../components/Blogcard';
import { isEmpty } from '../../../helpers/helpers';
import { MainContent } from '../../../styles/blogstyles';

export default function AuthorPage({ allPosts }) {
  const renderData = useMemo(() => {
    if (isEmpty(allPosts)) return notFound();
    return allPosts?.map((item, index) => {
      const finalTagList = item?.tags?.filter((tag) => tag?.name?.trim()?.[0] !== '#');
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
  }, [allPosts]);

  return (
    <>
      <MainContent>
        <Container>{renderData}</Container>
      </MainContent>
    </>
  );
}
