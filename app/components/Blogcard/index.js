'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import Link from 'next/link';
import { IconDiv, Par, PostDetail, Textarea } from '../../styles/blogstyles';
import { isEmpty } from '../../helpers/helpers';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { BlogDetail, Bottom, DetailLeftDiv, Leftside, AuthorLink } from './styles';

export default function Blogcard(props) {
  const tagListReder = useMemo(() => {
    if (isEmpty(props.tags)) return null;
    return props.tags?.map((item, index) => {
      return <span key={`tag_list_index_${index}`}>{item?.name}</span>;
    });
  }, [props.tags]);

  if (isEmpty(props)) return null;

  return (
    <>
      <BlogDetail>
        <Link href={`/blog/${props.slug}`}>
          {!isEmpty(props.image) && (
            <Leftside>
              <Image src={props.image} width={266} height={266} className='image' alt='blog' />
            </Leftside>
          )}
          <Textarea>
            <PostDetail>
              <DetailLeftDiv>
                {!isEmpty(props.date) && props.date}
                {!isEmpty(props.date) && !isEmpty(props.authorName) && (
                  <IconDiv>
                    <SVGComponent name='dot-icon' width='6' height='6' viewBox='0 0 6 6' />
                  </IconDiv>
                )}
                {!isEmpty(props.authorName) && <AuthorLink>{`${props.authorName}`}</AuthorLink>}
              </DetailLeftDiv>
              <SVGComponent
                name='blog-card-hover-arrow-icon'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                className='svg-icon'
              />
            </PostDetail>
            <h3>{props.name}</h3>
            <Par>{props.desc}</Par>
          </Textarea>
          {!isEmpty(props.tags) && <Bottom>{tagListReder}</Bottom>}
        </Link>
      </BlogDetail>
    </>
  );
}
