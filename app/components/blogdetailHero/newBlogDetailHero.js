import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { isEmpty } from '../../helpers/helpers';
import { Backlink, BlogImage, BlogTime, DetailHero, HeroLeft, Image, Post } from './styles';

export default function NewBlogDetailHero({ blogDetail }) {
  const router = useRouter();
  return (
    <DetailHero isNewHero>
      <HeroLeft>
        <Link href='/blog'>
          <Backlink isNewHero>
            <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M8.42969 1.37109L3.8012 5.99958L8.42969 10.6281'
                stroke='#757575'
                stroke-width='1.92854'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <p>Back to Blog Home</p>
          </Backlink>
        </Link>
        {!isEmpty(blogDetail?.title) && <h1>{blogDetail?.title}</h1>}
        <BlogTime isNewHero>
          <Post>
            {!isEmpty(blogDetail?.published_at) && (
              <>
                {moment(new Date(blogDetail?.published_at)).format('MMM DD, YYYY')}
                {(!isEmpty(blogDetail?.authors?.[0]?.name) || !isEmpty(blogDetail?.reading_time)) && (
                  <svg width='4' height='4' viewBox='0 0 3 3' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='1.5' cy='1.5' r='1.5' fill='#757575' />
                  </svg>
                )}
              </>
            )}
            
            {!isEmpty(blogDetail?.authors?.[0]?.name) && (
              <>
                <span onClick={() => router.push(`/blog/author/${blogDetail?.authors?.[0]?.slug}`)}>
                  {blogDetail?.authors?.[0]?.name}
                </span>
                {!isEmpty(blogDetail?.reading_time) && (
                  <svg width='4' height='4' viewBox='0 0 3 3' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='1.5' cy='1.5' r='1.5' fill='#757575' />
                  </svg>
                )}
              </>
            )}
            
            {!isEmpty(blogDetail?.reading_time) && <li>{`${blogDetail?.reading_time} min read`}</li>}
          </Post>
        </BlogTime>
      </HeroLeft>
      {!isEmpty(blogDetail?.feature_image) && (
        <BlogImage>
          <Image src={blogDetail?.feature_image} alt='blogdetail' className='image' width={612} height={345} />
        </BlogImage>
      )}
    </DetailHero>
  );
}
