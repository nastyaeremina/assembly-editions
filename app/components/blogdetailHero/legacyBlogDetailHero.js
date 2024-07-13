import Link from 'next/link';
import React from 'react';
import { Backlink, BlogImage, BlogTime, DetailHero, Image, Post } from './styles';
import moment from 'moment';
import { isEmpty } from '../../helpers/helpers';
import { useRouter } from 'next/navigation';

export default function LegacyBlogDetailHero({ blogDetail }) {
  const router = useRouter();
  return (
    <>
      <DetailHero>
        <Link href='/blog'>
          <Backlink>
            <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M8.42969 1.37109L3.8012 5.99958L8.42969 10.6281'
                stroke='#757575'
                stroke-width='1.92854'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <p>Back to Blog</p>
          </Backlink>
        </Link>
        <h1>{blogDetail?.title}</h1>
      </DetailHero>
      {!isEmpty(blogDetail?.feature_image) && (
        <BlogImage>
          <Image src={blogDetail?.feature_image} alt='blogdetail' className='image' width={880} height={496} />
        </BlogImage>
      )}
      <BlogTime>
        <Post>
          {blogDetail?.published_at && moment(new Date(blogDetail?.published_at)).format('MMM DD, YYYY')}
          <svg width='3' height='3' viewBox='0 0 3 3' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='1.5' cy='1.5' r='1.5' fill='#757575' />
          </svg>
          {blogDetail?.reading_time && <li>{`${blogDetail?.reading_time} min read`}</li>}
        </Post>
        <span onClick={() => router.push(`/blog/author/${blogDetail?.authors?.[0]?.slug}`)}>
          {blogDetail?.authors?.[0]?.name}
        </span>
      </BlogTime>
    </>
  );
}
