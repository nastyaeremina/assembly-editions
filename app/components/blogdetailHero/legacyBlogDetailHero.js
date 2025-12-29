import React, { useMemo } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { isEmpty } from '../../helpers/helpers';
import Breadcrumbs from '../Breadcrumbs/breadcrumbs';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { BlogTime, DetailHero, Post, HeroWrapper } from './styles';
import Image from 'next/image';

export default function LegacyBlogDetailHero({ blogDetail, onCopyLink }) {
  // Create breadcrumbs with blog tags
  const breadcrumbs = useMemo(() => {
    const baseBreadcrumbs = [{ label: 'Blog home', href: '/blog' }];

    if (blogDetail?.tags && blogDetail.tags.length > 0) {
      // Get the first tag for breadcrumb
      const firstTag = blogDetail.tags[0];
      const { name, slug } = firstTag || {};
      if (firstTag) {
        baseBreadcrumbs.push({ label: name, href: `/blog/tag/${slug}` });
      }
    }

    return baseBreadcrumbs;
  }, [blogDetail]);

  return (
    <HeroWrapper>
      <DetailHero>
        {/* breadcrumbs */}
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        {!isEmpty(blogDetail?.title) && <h1>{blogDetail?.title}</h1>}{' '}
        <BlogTime>
          <Post>
            {!isEmpty(blogDetail?.authors?.[0]?.name) && (
              <Link href={`/blog/author/${blogDetail?.authors?.[0]?.slug}`}>
                {!isEmpty(blogDetail?.authors?.[0]?.profile_image) && (
                  <Image src={blogDetail?.authors?.[0]?.profile_image} width={22} height={22} />
                )}
                {blogDetail?.authors?.[0]?.name}
              </Link>
            )}
            {!isEmpty(blogDetail?.published_at) && !isEmpty(blogDetail?.reading_time) && (
              <SVGComponent name='small-dot-icon' width='4' height='4' viewBox='0 0 4 4' />
            )}
            {!isEmpty(blogDetail?.published_at) && moment(new Date(blogDetail?.published_at)).format('MMM DD, YYYY')}
            {!isEmpty(blogDetail?.published_at) && !isEmpty(blogDetail?.reading_time) && (
              <SVGComponent name='small-dot-icon' width='4' height='4' viewBox='0 0 4 4' />
            )}
            <button onClick={onCopyLink}>
              <span>Copy link</span>
            </button>
          </Post>
        </BlogTime>
      </DetailHero>
    </HeroWrapper>
  );
}
