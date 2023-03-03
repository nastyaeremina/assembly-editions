import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import ComparisonHero from '../../components/comparison/comparisonhero/comparisonhero';
import Modern from '../../components/comparison/modern/modern';
import {
  ComparisonHide,
  Comparisonname,
  ComparisonTable,
  Comparisontabledata,
  Details,
  Dropdownbox,
  G2criteria,
  G2group,
  G2progressbar,
  G2section,
  G2text,
  Groupdetail,
  Headingpart,
  MobileViewTable,
  Processdata,
  TableDropdown
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
import Cardsection from '../../components/comparison/cardsection/cardsection';

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
  const [isOpen, setIsOpen] = useState(false);
  const onclick = () => {
    setIsOpen(!isOpen);
  };

  const g2ComparisonGroupView = useMemo(() => {
    if (isEmpty(details?.g2GroupCollection?.items)) return null;
    return details?.g2GroupCollection?.items?.map((item, index) => {
      return (
        <G2text key={`g2groupcollection_${index}`}>
          <h3>{item?.name}</h3>
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
            {item?.name}
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
        const isUpdateTilte = value?.toLowerCase() !== 'yes' && value?.toLowerCase() !== 'no';

        return (
          <Details key={`g2comparisonrow_${index}`}>
            <Image
              src={value?.toLowerCase() === 'limited' || value?.toLowerCase() === 'no' ? cancelmark : checkmark}
              alt='check-mark'
              className='mobilecheckmark'
            />
            <p>{isUpdateTilte ? `${value} ${item?.name}` : item?.name}</p>
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
          <ComparisonHero
            title={'Compare Copilot to alternatives'}
            description={
              'Learn how Copilot stacks up against competing tools when it comes to pricing, features, support, security, and more.'
            }
            image={
              'https://images.ctfassets.net/l41zuz9np7js/3tCWcW1AwmKcbgrX3eN3Om/3d9324f730b08c4e24e9baf092c6acc0/suitedash.png'
            }
          />
          <Container>
            <Cardsection />
            <ComparisonTable>
              <h2>Compare client portal providers</h2>
              <p>
                Copilot stands out from all its competitors by offering a complete technology stack, perfect for any
                use-case.
              </p>
              <table>
                <thead>
                  <tr>
                    <th colSpan={3} className='leftheader'></th>
                    <th className='radius'>
                      <CopilotLogo alt='copilot logo' loading='lazy' width='188' height='40' src={CopilotLogos.src} />
                    </th>
                    <th className='secondheading'>
                      <TableDropdown onClick={onclick}>
                        <p>Suitedash</p>
                        <Image
                          src='/images/dropdownarrow.svg'
                          alt='logo'
                          width={20}
                          height={20}
                          layout={'fixed'}
                          className='dropdownicon'
                        />
                      </TableDropdown>
                      {isOpen ? (
                        <Dropdownbox>
                          <Comparisonname>HoneyBook</Comparisonname>
                          <Comparisonname>Softr</Comparisonname>
                          <Comparisonname>MOXO</Comparisonname>
                          <Comparisonname>Clientportal</Comparisonname>
                          <Comparisonname>Clinked</Comparisonname>
                        </Dropdownbox>
                      ) : (
                        ''
                      )}
                    </th>
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
                    {/* <h2>{details?.compititorName}</h2> */}
                    <TableDropdown onClick={onclick}>
                      <p>Suitedash</p>
                      <Image
                        src='/images/dropdownarrow.svg'
                        alt='logo'
                        width={20}
                        height={20}
                        layout={'fixed'}
                        className='dropdownicon'
                      />
                    </TableDropdown>
                    {isOpen ? (
                      <Dropdownbox>
                        <Comparisonname>HoneyBook</Comparisonname>
                        <Comparisonname>Softr</Comparisonname>
                        <Comparisonname>MOXO</Comparisonname>
                        <Comparisonname>Clientportal</Comparisonname>
                        <Comparisonname>Clinked</Comparisonname>
                      </Dropdownbox>
                    ) : (
                      ''
                    )}
                  </Headingpart>
                  <Comparisontabledata>{renderTableContentMobileView()}</Comparisontabledata>
                </ComparisonHide>
              </MobileViewTable>
            </ComparisonTable>
          </Container>
          {!isEmpty(details?.testimonial) && <Quote data={details?.testimonial} isComparison />}
          {/* <FAQ contentID={details?.faq?.sys?.id} /> */}
          <CTA />
        </MainWrap>
      </Layout>
    </>
  );
}

// export async function getStaticProps({ params, preview = false }) {
//   const postDetail = (await getComparisonDetail(params?.slug)) ?? [];
//   const seoData = (await getSEOdata(postDetail?.seoMetadata?.sys?.id)) ?? [];

//   return {
//     props: { postDetail, seoData }
//   };
// }
