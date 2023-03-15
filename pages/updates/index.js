import moment from 'moment';
import Link from 'next/link';
import { useMemo } from 'react';
import Button from '../../components/button/button';
import CTA from '../../components/cta/cta';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import SEO from '../../components/seo';
import { UPDATES_SEO_ID } from '../../constants/constant';
import { COPILOT_UPDATE_LINK, UPDATE_SUBSCRIBE_LINK } from '../../constants/externalLinks';
import { isEmpty } from '../../helpers/helpers';
import { getSEOdata } from '../../lib/contentful-seo';
import { getUpdatesPosts } from '../../lib/updates-content';
import { Container, SecondryButton } from '../../styles/commonStyles';
import {
  Detail,
  Pagination,
  UpadtePage,
  UpdateDate,
  UpdateDes,
  UpdateDetail,
  UpdateSubscribe
} from '../../styles/updatestyle';

export default function Updates({ seoData, allPosts }) {
  const renderPosts = useMemo(() => {
    if (isEmpty(allPosts)) return null;
    return allPosts?.map((item, index) => {
      return (
        <UpdateDes key={`updatesitem_index_${index}`}>
          <svg width='14' height='7' viewBox='0 0 14 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M14 0L7 7L0 0H14Z' fill='black' />
          </svg>
          <Detail>
            <UpdateDate href={'/updates/' + item?.slug}>
              {moment(new Date(item?.published_at)).format('MMMM D, YYYY')}
            </UpdateDate>
            <UpdateDetail dangerouslySetInnerHTML={{ __html: item?.html }}></UpdateDetail>
          </Detail>
        </UpdateDes>
      );
    });
  }, [allPosts]);

  return (
    <>
      <SEO seoData={seoData} />
      <Layout>
        <Navbar />
        <UpadtePage>
          <Container>
            <UpdateSubscribe>
              <h1>Updates</h1>
              <p>New updates and improvements to Copilot.</p>
              <Button
                bgColor={'transparent'}
                fontColor={'#000000'}
                borderColor={'#000000'}
                text={'Subscribe to updates'}
                href={UPDATE_SUBSCRIBE_LINK}
                hoverColor={'rgba(0, 0, 0, 0.5)'}
              />
            </UpdateSubscribe>
            {renderPosts}
            <Pagination>
              <Button
                bgColor={'transparent'}
                fontColor={'#000000'}
                borderColor={'#000000'}
                text={'Previous page'}
                href={'#'}
                hoverColor={'rgba(0, 0, 0, 0.5)'}
                className={'pagination-button'}
              />
              <Button
                bgColor={'transparent'}
                fontColor={'#000000'}
                borderColor={'#000000'}
                text={'Next Page'}
                href={'#'}
                hoverColor={'rgba(0, 0, 0, 0.5)'}
                className={'pagination-button'}
              />
            </Pagination>
          </Container>
        </UpadtePage>
        <CTA />
      </Layout>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const seoData = (await getSEOdata(UPDATES_SEO_ID)) ?? [];
  const allPosts = (await getUpdatesPosts()) ?? [];
  seoData.canonical = 'https://www.copilot.com/updates';

  return {
    props: {
      seoData,
      allPosts
    }
  };
}
