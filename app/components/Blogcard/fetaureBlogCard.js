'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { BlogCardDiv, FirstBlog, IconDiv, Last, Par, PostDetail, Text, Top } from '../../styles/blogstyles';
import { isEmpty } from '../../helpers/helpers';
import { Container } from '../../styles/commonStyles';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { DetailLeftDiv } from './styles';

export default function FeatureBlogCard({ slug, title, excerpt, featureImage, publishedAt, authorName, tags = [] }) {
  const router = useRouter();
  const [imageHeight, setImageHeight] = useState();

  return (
    <FirstBlog onClick={() => router.push(`/blog/${slug}`)}>
      <Container>
        <h1>Blog</h1>
        <BlogCardDiv>
          {!isEmpty(featureImage) && (
            <Top maxHeight={imageHeight}>
              <Image
                src={featureImage}
                className='image'
                alt='blog'
                width={720}
                height={354}
                priority
                onLoad={(e) => setImageHeight(e.target.offsetHeight)}
              />
            </Top>
          )}
          <Text>
            <PostDetail>
              <DetailLeftDiv>
                {!isEmpty(publishedAt) && moment(new Date(publishedAt)).format('MMM DD, YYYY')}
                {!isEmpty(publishedAt) && (
                  <IconDiv>
                    <SVGComponent name='dot-icon' width='6' height='6' viewBox='0 0 6 6' />
                  </IconDiv>
                )}
                {!isEmpty(authorName) && <li>{authorName}</li>}
              </DetailLeftDiv>
            </PostDetail>
            <h3>{title}</h3>
            {!isEmpty(excerpt) && <Par>{excerpt}</Par>}
          </Text>
          {!isEmpty(tags) && (
            <Last>
              {tags.map((tag) => (
                <p key={`tag_${tag.name}`}>{tag.name}</p>
              ))}
            </Last>
          )}
        </BlogCardDiv>
      </Container>
    </FirstBlog>
  );
}
