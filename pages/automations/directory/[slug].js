import Layout from '/components/layout';
import Link from 'next/link';
import Navbar from '../../../components/navbar/navbar';
import { DetailLink, AppsDetailMain } from '../../../styles/appsStyles';
import { Container, PrimaryButton } from '../../../styles/commonStyles';
import CTA from '../../../components/cta/cta';
import Image from 'next/image';
import {
  DetailButtonSection,
  DetailCaption,
  DetailTitle,
  Head,
  IconButton,
  ImageSection,
  LogoSection
} from '../../../styles/automationStyles';
import bluelogo from '../../../public/images/bluelogo.png';
import Vector from '../../../public/images/vector.svg';
import Make from '../../../public/images/make.svg';
import Button from '../../../components/button/button';
import Graphic from '../../../public/images/graphics.png';
import FeatureSlider from '../../../components/FeatureSlider/featureslider';
import { getAllAutomations, getAllAutomationsWithSlug, getAutomationDetail } from '../../../lib/contentful-automation';
import { isEmpty } from '../../../helpers/helpers';

export default function AutomationDetail({ detail, relatedApps }) {
  return (
    <>
      <Layout>
        <Navbar />
        <AppsDetailMain>
          <Container>
            <Link href={'/automations/directory'}>
              <DetailLink>
                <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M8.42969 1.37109L3.8012 5.99958L8.42969 10.6281'
                    stroke='#757575'
                    stroke-width='1.92854'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <p>Back to all Automations</p>
              </DetailLink>
            </Link>
          </Container>
        </AppsDetailMain>
        <Container>
          <LogoSection>
            {detail?.productLogosCollection?.items?.map((logo, index) => {
              return (
                <Image
                  key={`automation_logo_${index}`}
                  src={logo?.url}
                  alt='logo'
                  width={80}
                  height={80}
                  className='logo'
                />
              );
            })}
          </LogoSection>
          <DetailTitle>{detail?.name}</DetailTitle>
          <DetailCaption>{detail?.description}</DetailCaption>
          <DetailButtonSection>
            {!isEmpty(detail?.zapierLink) && (
              <Button
                bgColor={'#09AA6C'}
                fontColor={'#fff'}
                borderColor={'#09AA6C'}
                text={'Go to Zapier'}
                href={detail?.zapierLink}
                hoverColor={'rgba(255, 255, 255,0.8)'}
                target={'_blank'}
                isicon={true}
                imgUrl={Vector}
                className={'iconbutton'}
              />
            )}
            {!isEmpty(detail?.makeLink) && (
              <Button
                bgColor={'#09AA6C'}
                fontColor={'#fff'}
                borderColor={'#09AA6C'}
                text={'Go to Make'}
                href={detail?.makeLink}
                hoverColor={'rgba(255, 255, 255,0.8)'}
                target={'_blank'}
                isicon={true}
                imgUrl={Make}
              />
            )}
            {!isEmpty(detail?.apiLink) && (
              <Button
                bgColor={'transparent'}
                fontColor={'#000000'}
                borderColor={'#000000'}
                text={'Read setup instructions'}
                href={detail?.apiLink}
                hoverColor={'rgba(0, 0, 0, 0.5)'}
                target={'_blank'}
              />
            )}
          </DetailButtonSection>
        </Container>
        <ImageSection>
          <Container>
            <Image
              src={detail?.automationImage?.url}
              alt='detail-image'
              width={849}
              height={232}
              className='detailimage'
            />
          </Container>
        </ImageSection>
        <Container>
          <Head>Related Automations</Head>
        </Container>
        {!isEmpty(relatedApps) && <FeatureSlider data={relatedApps} isDetailSlider={true} />}
        <CTA />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const detail = (await getAutomationDetail(params?.slug, preview)) ?? {};

  let relatedApps = [];
  if (!isEmpty(detail)) {
    let allPosts = [];
    let data = [];
    let page = 0;
    do {
      const skip = page * 100;
      data = (await getAllAutomations(skip)) || [];
      allPosts = allPosts.concat(data);

      if (data?.length !== 100) break;
      // eslint-disable-next-line no-plusplus
      else page++;
    } while (data?.length !== 0);

    const categoryList = detail?.automationCategoriesCollection?.items?.map((item) => item?.slug);
    relatedApps = allPosts
      ?.filter(
        (item) =>
          item?.automationCategoriesCollection &&
          item?.automationCategoriesCollection?.items?.some((element) => categoryList.includes(element?.slug)) &&
          item?.slug !== params?.slug
      )
      ?.slice(0, 4);
  }
  return {
    props: { detail, relatedApps }
  };
}

export async function getStaticPaths() {
  const allPosts = (await getAllAutomationsWithSlug()) ?? [];
  return {
    paths: allPosts?.map(({ slug }) => `/automations/directory/${slug}`) ?? [],
    fallback: true
  };
}
