import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'next-share';
import Layout from '../../components/layout';
import blogimage from '../../public/images/ii.png';
import BlogNavbar from '../../components/navbar/blognavbar';
import { Container, SecondryButton } from '../../styles/commonStyles';
import {
  Backlink,
  BlogImage,
  BlogTime,
  Content,
  Desc,
  DetailHero,
  Details,
  Icon,
  LastSection,
  Left,
  Leftsec,
  Leftside,
  MainContent,
  Post,
  Right,
  ShareButton,
  Table,
  TableHeading,
  Textcontent
} from '../../styles/blogstyles';
import { getAllAuthorWithSlug, getAllBlogWithSlug, getAllTagWithSlug, getBlogDetail } from '../../lib/blog-content';
import { isEmpty } from '../../helpers/helpers';
import SubscribeModel from '../../components/SubscribeModel';
import { BlogSubscribe, Button, Logo, Model, Premium } from '../../components/SubscribeModel/style';

export default function Blogdetail({ blogDetail, tags }) {
  const [isShowData, setShowData] = useState(true);
  const [isOpen, setIsOpen] = useState();
  const [issubscribe, setIsSubscribe] = useState(false);
  const router = useRouter();

  const onOpenModel = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onrequestCloseModel = useCallback(() => {
    setIsOpen(false);
    setIsSubscribe(true);
  }, []);

  const renderTableData = useMemo(() => {
    const newList = blogDetail?.html.match(/(?:<h2 id\=\s*)\S.*?(?=\s*<\/h2|$)/gs);

    return newList?.map((item, index) => {
      const headingList = item?.split('>');
      return (
        <li key={`tableDataHeading_index_${index}`}>
          <Link href={`#${headingList?.[0]?.replace(/['"]+/g, '')}`}>{headingList?.[1]?.replace(/^[0-9]./, '')}</Link>
        </li>
      );
    });
  }, [blogDetail?.html]);

  const currentPath = useMemo(() => {
    if (typeof window === 'object') return window.location.href;
  }, []);

  const renderNavbar = useMemo(() => {
    return <BlogNavbar tagData={tags} />;
  }, [tags]);

  const renderSeoData = useMemo(() => {
    let og_title = blogDetail?.title;
    let og_des = blogDetail?.meta_description;
    let og_image = blogDetail?.feature_image;
    if (!isEmpty(blogDetail?.og_title)) og_title = blogDetail?.og_title;
    else if (!isEmpty(blogDetail?.meta_title)) og_title = blogDetail?.meta_title;

    if (!isEmpty(blogDetail?.og_description)) og_des = blogDetail?.og_description;
    if (!isEmpty(blogDetail?.og_image)) og_image = blogDetail?.og_image;

    return (
      <NextSeo
        title={blogDetail?.meta_title ?? blogDetail?.title}
        description={blogDetail?.meta_description}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          site_name: 'copilot.com',
          title: og_title,
          description: og_des,
          images: isEmpty(og_image)
            ? []
            : [
                {
                  url: og_image
                }
              ]
        }}
      />
    );
  }, [
    blogDetail?.feature_image,
    blogDetail?.meta_description,
    blogDetail?.meta_title,
    blogDetail?.og_description,
    blogDetail?.og_image,
    blogDetail?.og_title,
    blogDetail?.title
  ]);
  return (
    <>
      {renderSeoData}
      <Layout>
        {renderNavbar}
        <MainContent>
          <Container>
            <Details>
              <DetailHero>
                <Link href='/blog'>
                  <Backlink>
                    {/* <Image src='/images/leftarrow.svg' alt='leftarrow' width={12} height={12} layout={'fixed'} /> */}
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
                <h3>{blogDetail?.title}</h3>
              </DetailHero>
              <BlogImage>
                <Image src={blogDetail?.feature_image} alt='blogdetail' className='image' width={880} height={496} />
              </BlogImage>
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
              {blogDetail?.custom_template !== 'custom-no-toc' && (
                <Table>
                  <TableHeading onClick={() => setShowData(!isShowData)}>
                    Table of contents
                    <p>
                      [<span>{isShowData ? 'Hide' : 'Show'}</span>]
                    </p>
                  </TableHeading>
                  {isShowData && <ol>{renderTableData}</ol>}
                </Table>
              )}
              {/* <Desc>
              Portal is now HIPAA-compliant, which means healthcare startups and healthcare consulting firms can now use
              our client portal software for their business operations without worrying about data privacy breaches for
              their patients. Our client collaboration portal allows you to easily productize your healthcare services
              and deliver streamlined customer experiences to your clients.
              <p>
                Portal’s comprehensive HIPAA audit was carried out by Insight Assurance LLC, a licensed accounting firm
                registered with the <span>American Institute of Certified Public Accountants (AICPA)</span>. Read on to
                learn more about HIPAA and how it benefits Portal users.
              </p>
            </Desc> */}
              {/* {blogDetail?.html} */}
              <Content dangerouslySetInnerHTML={{ __html: blogDetail?.html }} />
              {/* <Content>
              <h1>HIPAA explained</h1>
              <Textcontent>
                The Health Insurance Portability and Accountability Act (HIPAA) is a United States federal legislation
                regarding data privacy and security for sensitive medical information and was passed into law by
                President Bill Clinton on Aug. 21, 1996.
              </Textcontent>
              <p>The law consists of five sections or titles :</p>
              <ol>
                <li>
                  <span>HIPAA Health Insurance Reform</span> prevents the loss of health insurance coverage for people
                  who've lost their jobs, changed jobs, or have pre-existing medical conditions.
                </li>
                <li>
                  <span>HIPAA Health Insurance Reform</span> prevents the loss of health insurance coverage for people
                  who've lost their jobs, changed jobs, or have pre-existing medical conditions.
                </li>
                <li>
                  <span>HIPAA Health Insurance Reform</span> prevents the loss of health insurance coverage for people
                  who've lost their jobs, changed jobs, or have pre-existing medical conditions.
                </li>
                <li>
                  <span>HIPAA Health Insurance Reform</span> prevents the loss of health insurance coverage for people
                  who've lost their jobs, changed jobs, or have pre-existing medical conditions.
                </li>
              </ol>
            </Content> */}
            </Details>

            <ShareButton>
              <p>Share this post</p>
              <Icon>
                <TwitterShareButton url={currentPath} title={blogDetail?.title}>
                  <div>
                    <svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.74003 4.5571L8.77904 5.20048L8.12875 5.1217C5.76165 4.8197 3.6937 3.79553 1.93789 2.07546L1.0795 1.22198L0.858395 1.85224C0.39018 3.25719 0.689318 4.74092 1.66477 5.73883C2.18501 6.2903 2.06795 6.36909 1.17054 6.04083C0.858396 5.93578 0.58527 5.857 0.559258 5.89639C0.468216 5.98831 0.78036 7.18317 1.02747 7.65586C1.36563 8.31238 2.05495 8.95577 2.80929 9.33655L3.44659 9.63855L2.69224 9.65168C1.9639 9.65168 1.93789 9.66481 2.01593 9.94055C2.27605 10.794 3.30352 11.7 4.44805 12.0939L5.25442 12.3697L4.5521 12.7898C3.51162 13.3938 2.28905 13.7352 1.06649 13.7615C0.481222 13.7746 0 13.8271 0 13.8665C0 13.9978 1.58673 14.7331 2.51016 15.022C5.28043 15.8755 8.57095 15.5078 11.0421 14.0504C12.7979 13.0131 14.5537 10.9516 15.3731 8.95577C15.8153 7.89221 16.2575 5.94891 16.2575 5.01666C16.2575 4.41266 16.2965 4.33388 17.0248 3.61171C17.454 3.19154 17.8572 2.73197 17.9353 2.60067C18.0653 2.35119 18.0523 2.35119 17.389 2.57441C16.2835 2.96832 16.1274 2.9158 16.6737 2.32493C17.0769 1.90476 17.5581 1.1432 17.5581 0.919983C17.5581 0.880592 17.363 0.946244 17.1419 1.06442C16.9078 1.19572 16.3876 1.39268 15.9974 1.51085L15.295 1.73407L14.6578 1.30076C14.3066 1.06442 13.8124 0.80181 13.5522 0.723027C12.8889 0.539202 11.8745 0.565463 11.2762 0.775549C9.65045 1.36642 8.62297 2.88954 8.74003 4.5571Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                </TwitterShareButton>
                <FacebookShareButton url={currentPath} title={blogDetail?.title}>
                  <div>
                    <svg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.94102 10.0485L9.43689 6.81553H6.33495V4.71845C6.33495 3.83374 6.76748 2.97087 8.1568 2.97087H9.56796V0.218447C9.56796 0.218447 8.28786 0 7.06456 0C4.50874 0 2.83981 1.54879 2.83981 4.35146V6.81553H0V10.0485H2.83981V17.8646C3.40995 17.9541 3.9932 18 4.58738 18C5.18155 18 5.76481 17.9541 6.33495 17.8646V10.0485H8.94102Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                </FacebookShareButton>
                <LinkedinShareButton url={currentPath} title={blogDetail?.title}>
                  <div>
                    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M4.08781 5.9873H0.230469V17.577H4.08781V5.9873Z' fill='white' />
                      <path
                        d='M4.33949 2.40179C4.31446 1.26543 3.50184 0.399902 2.18226 0.399902C0.862691 0.399902 0 1.26543 0 2.40179C0 3.51462 0.837193 4.40506 2.13219 4.40506H2.15684C3.50184 4.40506 4.33949 3.51462 4.33949 2.40179Z'
                        fill='white'
                      />
                      <path
                        d='M17.9986 10.9315C17.9986 7.37166 16.0956 5.71484 13.5573 5.71484C11.5093 5.71484 10.5924 6.83975 10.0805 7.62889V5.9873H6.22266C6.2735 7.07482 6.22266 17.577 6.22266 17.577H10.0805V11.1044C10.0805 10.758 10.1055 10.4125 10.2075 10.1645C10.4863 9.47247 11.121 8.75602 12.1867 8.75602C13.5831 8.75602 14.1412 9.81877 14.1412 11.3762V17.5767H17.9984L17.9986 10.9315Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                </LinkedinShareButton>
              </Icon>
            </ShareButton>
            <LastSection>
              <Left>
                <h1>Sign up for our newsletter</h1>
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
        {isOpen && <SubscribeModel onRequestClose={onrequestCloseModel} />}
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
      </Layout>
    </>
  );
}
export async function getStaticProps({ params, preview = false }) {
  const blogDetail = (await getBlogDetail(params?.slug)) ?? [];
  const tags = (await getAllTagWithSlug()) ?? [];
  const finalTagList = tags?.filter((tag) => tag?.name?.trim()?.[0] !== '#');
  return {
    props: { blogDetail, tags: finalTagList }
  };
}

export async function getStaticPaths() {
  const allPosts = (await getAllBlogWithSlug()) ?? [];
  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],

    fallback: true
  };
}
