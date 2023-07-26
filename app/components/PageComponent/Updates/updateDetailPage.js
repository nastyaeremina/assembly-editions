'use client';
import moment from 'moment';
import Link from 'next/link';
import { Container } from '../../../styles/commonStyles';
import { Backlink, MainContent } from '../../../styles/blogstyles';
import { DetailSlug, UpdateDate, UpdateDes, UpdateDetail } from '../../../styles/updatestyle';

export default function UpdatedetailPage({ details: updateDetails }) {
  return (
    <>
      <MainContent>
        <Container>
          <Link href='/updates'>
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
              <p>Back to Updates</p>
            </Backlink>
          </Link>
          <UpdateDes>
            <svg width='14' height='7' viewBox='0 0 14 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M14 0L7 7L0 0H14Z' fill='black' />
            </svg>
            <DetailSlug>
              <UpdateDate href='#'>{moment(new Date(updateDetails?.published_at)).format('MMMM D, YYYY')}</UpdateDate>
              <UpdateDetail dangerouslySetInnerHTML={{ __html: updateDetails?.html }}></UpdateDetail>
            </DetailSlug>
          </UpdateDes>
        </Container>
      </MainContent>
    </>
  );
}
