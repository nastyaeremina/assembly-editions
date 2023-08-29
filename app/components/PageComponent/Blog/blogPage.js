'use client';

import { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { OrganizationJsonLd } from 'next-seo';
import { Container, SecondryButton } from '../../../styles/commonStyles';
import {
  FirstBlog,
  Last,
  LastSection,
  Left,
  MainContent,
  Par,
  PostDetail,
  Right,
  Text,
  Top
} from '../../../styles/blogstyles';
import Blogcard from '../../Blogcard';
import { isEmpty } from '../../../helpers/helpers';
import SubscribeModel from '../../SubscribeModel';
import { BlogSubscribe, Logo, Premium, Button, Model } from '../../SubscribeModel/style';

export default function BlogPage({ allPosts, tags }) {
  const [isOpen, setIsOpen] = useState(false);
  const [issubscribe, setIsSubscribe] = useState(false);
  const router = useRouter();

  const onOpenModel = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onSubscribe = useCallback(() => {
    setIsSubscribe(true);
  }, []);

  const onrequestCloseModel = useCallback(() => {
    setIsOpen(false);
  }, []);

  const renderFeaturedBlog = useMemo(() => {
    const featuredBlogList = allPosts?.filter((item) => item?.featured);
    if (isEmpty(featuredBlogList)) return null;
    return featuredBlogList?.map((item, index) => {
      const finalTagList = item?.tags?.filter((tag) => tag?.name?.trim()?.[0] !== '#');
      return (
        <FirstBlog onClick={() => router.push(`/blog/${item?.slug}`)} key={`featuredblog_index_${index}`}>
          <Top>
            <Image src={item?.feature_image} className='image' alt='blog' width={880} height={354} />
          </Top>
          <Text>
            <h2>{item?.title}</h2>
            <PostDetail>
              {moment(new Date(item?.published_at)).format('MMM DD, YYYY')}
              <svg width='3' height='3' viewBox='0 0 3 3' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='1.5' cy='1.5' r='1.5' fill='#757575' />
              </svg>
              <li>{`${item?.reading_time} min read`}</li>
            </PostDetail>
            <Par>{item?.excerpt}</Par>
          </Text>
          {!isEmpty(finalTagList) && (
            <Last>
              {finalTagList?.map((item, index) => {
                return <p key={`tag_list_index_${index}`}>{item?.name}</p>;
              })}
            </Last>
          )}
        </FirstBlog>
      );
    });
  }, [allPosts, router]);

  const renderData = useMemo(() => {
    if (isEmpty(allPosts)) return null;
    return allPosts?.map((item, index) => {
      if (item?.featured) return null;

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
      <OrganizationJsonLd
        type={'Organization'}
        name='Copilot'
        url='https://www.copilot.com'
        logo='https://www.copilot.com/_next/static/media/blacklogo.370e156c.svg'
        sameAs={[
          'https://twitter.com/copilot',
          'https://www.linkedin.com/company/copilotplatforms/',
          'https://www.youtube.com/@copilotplatforms',
          'https://www.facebook.com/copilotplatforms',
          'https://www.instagram.com/copilotplatforms/'
        ]}
      />
      <MainContent>
        <Container>
          {renderFeaturedBlog}
          {renderData}
          <LastSection>
            <Left>
              <h2>Sign up for our newsletter</h2>
              <p>
                Subscribe below to receive our newsletter. We’ll email you about important announcements, product
                updates, and guides relevant to your industry
              </p>
              <SecondryButton onClick={onOpenModel}>
                <Link href='#'>Subscribe</Link>
              </SecondryButton>
            </Left>
            <Right>
              <svg width='264' height='264' viewBox='0 0 264 264' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g clip-path='url(#clip0_6660_27079)'>
                  <path
                    d='M0 0H260.838C262.584 0 264 1.41553 264 3.16168V260.838C264 262.584 262.584 264 260.838 264H0V0Z'
                    fill='#00160E'
                  />
                  <path
                    d='M0 -3.16168H320.91C322.656 -3.16168 324.072 -1.74615 324.072 -5.24521e-06V305.626C324.072 307.372 322.656 308.788 320.91 308.788H0V-3.16168Z'
                    fill='#00160E'
                  />
                  <path
                    d='M133.244 93.2696C141.68 93.25 149.888 95.9888 156.626 101.075L149.833 107.863C144.939 104.534 139.16 102.75 133.244 102.75C127.329 102.75 121.55 104.53 116.655 107.863L109.855 101.075C116.593 95.9848 124.805 93.2461 133.244 93.2696Z'
                    fill='#E3FFEE'
                  />
                  <path
                    d='M133.246 161.575C126.834 161.595 120.589 159.501 115.48 155.616L108.723 162.369C115.663 167.991 124.322 171.059 133.246 171.059C142.171 171.059 150.829 167.991 157.774 162.369L151.017 155.616C145.907 159.501 139.663 161.595 133.246 161.575Z'
                    fill='#E3FFEE'
                  />
                  <path
                    d='M103.815 132.144C103.795 125.735 105.885 119.499 109.762 114.405L103.021 107.656C97.5548 114.389 94.4952 122.762 94.3348 131.44C94.1744 140.118 96.917 148.6 102.128 155.533L108.932 148.737C105.583 143.854 103.799 138.064 103.819 132.14L103.815 132.144Z'
                    fill='#E3FFEE'
                  />
                  <path
                    d='M84.9846 132.145C84.9533 120.732 88.9988 109.687 96.3935 101.001L89.6679 94.2754C80.6848 104.577 75.6572 117.747 75.485 131.425C75.3129 145.103 80.0118 158.394 88.7367 168.914L95.4779 162.173C88.6545 153.659 84.9533 143.06 84.9807 132.145H84.9846Z'
                    fill='#E3FFEE'
                  />
                  <path
                    d='M188.885 132.144C188.901 118.219 183.865 104.76 174.714 94.2784L167.988 101.004C175.195 109.514 179.229 120.265 179.397 131.424C179.565 142.582 175.864 153.455 168.919 162.18L175.629 168.96C184.206 158.62 188.889 145.591 188.865 132.148H188.885V132.144Z'
                    fill='#E3FFEE'
                  />
                </g>
                <path
                  d='M0.39521 0.39521H260.838C262.366 0.39521 263.605 1.6338 263.605 3.16168V260.838C263.605 262.366 262.366 263.605 260.838 263.605H0.39521V0.39521Z'
                  stroke='black'
                  stroke-width='0.790419'
                />
                <defs>
                  <clipPath id='clip0_6660_27079'>
                    <path
                      d='M0 0H260.838C262.584 0 264 1.41553 264 3.16168V260.838C264 262.584 262.584 264 260.838 264H0V0Z'
                      fill='white'
                    />
                  </clipPath>
                </defs>
              </svg>
            </Right>
          </LastSection>
        </Container>
      </MainContent>
      {isOpen && <SubscribeModel onRequestClose={onrequestCloseModel} onSubscribe={onSubscribe} />}
      {issubscribe ? (
        <Model>
          <BlogSubscribe>
            <Premium>
              <Logo>
                <svg
                  width='100'
                  height='100'
                  viewBox='0 0 100 100'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='last-step'>
                  <path
                    d='M12.5 29.1668C12.5 26.9567 13.378 24.8371 14.9408 23.2743C16.5036 21.7115 18.6232 20.8335 20.8333 20.8335H79.1667C81.3768 20.8335 83.4964 21.7115 85.0592 23.2743C86.622 24.8371 87.5 26.9567 87.5 29.1668V70.8335C87.5 73.0436 86.622 75.1632 85.0592 76.726C83.4964 78.2889 81.3768 79.1668 79.1667 79.1668H20.8333C18.6232 79.1668 16.5036 78.2889 14.9408 76.726C13.378 75.1632 12.5 73.0436 12.5 70.8335V29.1668Z'
                    stroke='#09AA6C'
                    stroke-width='4'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M12.5 29.1665L50 54.1665L87.5 29.1665'
                    stroke='#09AA6C'
                    stroke-width='4'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <p>Now check your email!</p>
              </Logo>
              <h2>
                To complete sign up, click the confirmation link in your inbox. If it doesn’t arrive within 3 minutes,
                check your spam folder!
                <Button
                  onClick={() => {
                    setIsSubscribe(false);
                  }}>
                  <a href='#'>Close</a>
                </Button>
              </h2>
            </Premium>
          </BlogSubscribe>
        </Model>
      ) : (
        ''
      )}
    </>
  );
}
