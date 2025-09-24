'use client';

import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { BlogCardDiv, FirstBlog, IconDiv, Last, Par, PostDetail, Text, Top } from '../../styles/blogstyles';
import { isEmpty } from '../../helpers/helpers';
import { Container } from '../../styles/commonStyles';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { AuthorLink, DetailLeftDiv } from './styles';

export default function FeatureBlogCard({
  slug,
  title,
  excerpt,
  featureImage,
  publishedAt,
  author,
  tags = [],
  heading = 'Blog'
}) {
  return (
    <FirstBlog>
      <Container>
        <h1>{heading}</h1>
        <BlogCardDiv>
          <Link href={`/blog/${slug}`}>
            {!isEmpty(featureImage) && (
              <Top>
                <Image src={featureImage} className='image' alt='blog' width={720} height={354} priority />
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
                  {!isEmpty(author) && (
                    <AuthorLink href={`/blog/author/${author.slug}`} as={'div'}>
                      {author.name}
                    </AuthorLink>
                  )}
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
          </Link>
        </BlogCardDiv>
      </Container>
    </FirstBlog>
  );
}
