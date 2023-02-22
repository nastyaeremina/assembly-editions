import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { useCallback, useMemo } from 'react';
import Link from 'next/link';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import ComparisonHero from '../../components/comparison/comparisonhero/comparisonhero';
import Modern from '../../components/comparison/modern/modern';
import {
  ComparisonHide,
  ComparisonTable,
  Comparisontabledata,
  Details,
  G2criteria,
  G2group,
  G2progressbar,
  G2section,
  G2text,
  Groupdetail,
  Headingpart,
  MobileViewTable,
  Processdata
} from '../../components/comparison/styles';
import CTA from '../../components/cta/cta';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { CopilotLogo } from '../../components/navbar/styles';
import { MainWrap } from '../../components/solution/clienttab/styles';
import { Container } from '../../styles/commonStyles';
import CopilotLogos from '../../public/images/blacklogo.svg';
import checkmark from '../../public/images/Check-mark.svg';
import cancelmark from '../../public/images/cancelmark.svg';

import FAQ from '../../components/faq/faq';
import { getAllComparisonWithSlug, getComparisonDetail } from '../../lib/contentful-comparison';
import { isEmpty } from '../../helpers/helpers';
import Quote from '../../components/solution/quote/quote';
import SEO from '../../components/seo';
import { getSEOdata } from '../../lib/contentful-seo';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 30,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 30,
    backgroundColor: theme.palette.mode === 'light' ? '#09AA6C' : 'red'
  }
}));
const BorderProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 30,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 30,
    backgroundColor: theme.palette.mode === 'light' ? '#CCCCD0' : 'red'
  }
}));

export default function Comparison({ postDetail: details, seoData }) {
  const g2ComparisonGroupView = useMemo(() => {
    if (isEmpty(details?.g2GroupCollection?.items)) return null;
    return details?.g2GroupCollection?.items?.map((item, index) => {
      return (
        <G2text key={`g2groupcollection_${index}`}>
          <h3>{item?.title}</h3>
          <G2progressbar>
            <Processdata>
              <span>{item?.copilotValue}</span>
              <BorderLinearProgress variant='determinate' value={item?.copilotValue * 10} />
            </Processdata>
            <Processdata>
              <span className='seconddata'>{item?.partnerValue}</span>
              <BorderProgress variant='determinate' value={item?.partnerValue * 10} />
            </Processdata>
          </G2progressbar>
        </G2text>
      );
    });
  }, [details?.g2GroupCollection?.items]);

  const renderTableData = useMemo(() => {
    return details?.comparisonTableCollection?.items?.map((item, index) => {
      return (
        <tr key={`g2comparisonrow_${index}`}>
          <td colSpan={3} className='leftside'>
            {item?.title}
          </td>
          <td>
            {item?.copilotValue?.toLowerCase() === 'yes' ? (
              <Image src={checkmark} alt='check-mark' />
            ) : item?.copilotValue?.toLowerCase() === 'no' ? (
              ''
            ) : (
              item?.copilotValue
            )}
          </td>
          <td>
            {item?.partnerValue?.toLowerCase() === 'yes' ? (
              <Image src={checkmark} alt='check-mark' />
            ) : item?.partnerValue?.toLowerCase() === 'no' ? (
              ''
            ) : (
              item?.partnerValue
            )}
          </td>
        </tr>
      );
    });
  }, [details?.comparisonTableCollection?.items]);

  const renderTableContentMobileView = useCallback(
    (isCopilot = false) => {
      if (isEmpty(details?.comparisonTableCollection?.items)) return null;
      return details?.comparisonTableCollection?.items?.map((item, index) => {
        const value = isCopilot ? item?.copilotValue : item?.partnerValue;
        const isUpdateTilte = value?.toLowerCase() !== 'yes' && value.toLowerCase() !== 'no';

        return (
          <Details key={`g2comparisonrow_${index}`}>
            <Image
              src={value?.toLowerCase() === 'limited' || value.toLowerCase() === 'no' ? cancelmark : checkmark}
              alt='check-mark'
              className='mobilecheckmark'
            />
            <p>{isUpdateTilte ? `${value} ${item?.title}` : item?.title}</p>
          </Details>
        );
      });
    },
    [details?.comparisonTableCollection?.items]
  );
  return (
    <>
      <SEO seoData={seoData}></SEO>

      <Layout>
        <Navbar />
        <MainWrap>
          <ComparisonHero title={details?.name} description={details?.description} image={details?.image?.url} />
          {!isEmpty(details?.solutionValueCollection?.items) && (
            <Modern title={details?.section1Header} data={details?.solutionValueCollection?.items} />
          )}
          <Container>
            <ComparisonTable>
              <h2>{details?.section2Header}</h2>
              <table>
                <thead>
                  <tr>
                    <th colSpan={3} className='leftheader'></th>
                    <th className='radius'>
                      <CopilotLogo alt='copilot logo' loading='lazy' width='188' height='40' src={CopilotLogos.src} />
                    </th>
                    <th className='secondheading'>{details?.compititorName}</th>
                  </tr>
                </thead>
                <tbody>{renderTableData}</tbody>
              </table>
              <MobileViewTable>
                <ComparisonHide>
                  <Headingpart>
                    <CopilotLogo alt='copilot logo' loading='lazy' width='188' height='40' src={CopilotLogos.src} />
                  </Headingpart>
                  <Comparisontabledata>{renderTableContentMobileView(true)}</Comparisontabledata>
                </ComparisonHide>
                <ComparisonHide className='mobilesecondtable'>
                  <Headingpart>
                    <h2>{details?.compititorName}</h2>
                  </Headingpart>
                  <Comparisontabledata>{renderTableContentMobileView()}</Comparisontabledata>
                </ComparisonHide>
              </MobileViewTable>
            </ComparisonTable>
            {!isEmpty(details?.g2GroupCollection?.items) && (
              <G2section>
                <h2>What do customer say on G2?</h2>
                <G2group>
                  <Groupdetail>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <rect width='16' height='16' rx='8' fill='#09AA6C' />
                    </svg>
                    <p>Copilot</p>
                  </Groupdetail>
                  <Groupdetail>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <rect width='16' height='16' rx='8' fill='#CCCCD0' />
                    </svg>
                    <p>{details?.compititorName}</p>
                  </Groupdetail>
                  <Groupdetail>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='reporticon'>
                      <path
                        d='M17.1376 16.6182C17.9806 18.0542 18.8142 19.4739 19.6472 20.8921C15.9586 23.6641 10.2197 23.9991 5.97141 20.8069C1.0825 17.1304 0.278961 10.8573 2.89641 6.34171C5.90685 1.14777 11.5404 -0.000905633 15.1676 0.841372C15.0695 1.05056 12.897 5.47452 12.897 5.47452C12.897 5.47452 12.7253 5.48559 12.6282 5.48744C11.556 5.53204 10.7575 5.77691 9.90165 6.21128C8.96264 6.69225 8.15793 7.39166 7.55787 8.24838C6.9578 9.10511 6.58064 10.0931 6.45936 11.1259C6.33281 12.1733 6.48036 13.2352 6.88808 14.2111C7.23281 15.0361 7.72045 15.7689 8.37418 16.3875C9.37703 17.3375 10.5704 17.9256 11.9537 18.1204C13.2637 18.305 14.5236 18.1222 15.7041 17.5399C16.1469 17.3218 16.5236 17.0809 16.9639 16.7505C17.02 16.7148 17.0699 16.6696 17.1376 16.6182Z'
                        fill='#FF492C'
                      />
                      <path
                        d='M17.1463 4.02373C16.9322 3.81701 16.7339 3.62628 16.5364 3.43432C16.4186 3.31989 16.3051 3.20083 16.1845 3.08917C16.1412 3.04887 16.0905 2.9938 16.0905 2.9938C16.0905 2.9938 16.1315 2.90828 16.1491 2.87321C16.38 2.41824 16.742 2.08569 17.1713 1.82113C17.6461 1.52637 18.1993 1.37638 18.7609 1.39015C19.4795 1.40399 20.1476 1.57965 20.7114 2.05278C21.1276 2.40193 21.341 2.84491 21.3786 3.37372C21.4413 4.26583 21.0652 4.94907 20.3184 5.42589C19.8797 5.70644 19.4065 5.92332 18.932 6.18018C18.6703 6.322 18.4465 6.44659 18.1908 6.70315C17.9658 6.96063 17.9548 7.20335 17.9548 7.20335L21.3542 7.19904V8.68518H16.1071V8.54152C16.087 7.81121 16.1738 7.12398 16.5145 6.46074C16.8279 5.85226 17.3149 5.40682 17.9 5.06381C18.3506 4.79956 18.8251 4.57469 19.2767 4.31167C19.5553 4.14955 19.7521 3.91176 19.7506 3.56691C19.7506 3.27097 19.5312 3.00795 19.2178 2.92582C18.4788 2.73017 17.7267 3.04241 17.3356 3.70626C17.2785 3.80316 17.2202 3.89945 17.1463 4.02373ZM23.7215 15.0379L20.8568 10.1818H15.1879L12.3047 15.0881H18.0153L20.8333 19.9212L23.7215 15.0379Z'
                        fill='#FF492C'
                      />
                    </svg>
                    <Link className='report' href={details?.g2ComparisonLink} target='_blank'>
                      <p className='report'>Read full report</p>
                    </Link>
                  </Groupdetail>
                </G2group>
                <G2criteria>{g2ComparisonGroupView}</G2criteria>
              </G2section>
            )}
          </Container>
          {!isEmpty(details?.testimonial) && <Quote data={details?.testimonial} isComparison />}
          <FAQ contentID={details?.faq?.sys?.id} />
          <CTA />
        </MainWrap>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const postDetail = (await getComparisonDetail(params?.slug)) ?? [];
  const seoData = (await getSEOdata(postDetail?.seoMetadata?.sys?.id)) ?? [];

  return {
    props: { postDetail, seoData }
  };
}

export async function getStaticPaths() {
  const allPosts = (await getAllComparisonWithSlug()) ?? [];
  return {
    paths: allPosts?.map(({ slug }) => `/comparison/${slug}`) ?? [],
    fallback: true
  };
}
