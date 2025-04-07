'use client';

import moment from 'moment';
import { useMemo } from 'react';
import Button from '../../button/button';
import { UPDATE_SUBSCRIBE_LINK } from '../../../constants/externalLinks';
import { isEmpty } from '../../../helpers/helpers';
import { Container } from '../../../styles/commonStyles';
import {
  Detail,
  Details,
  Left,
  Pagination,
  UpadtePage,
  UpdateDate,
  UpdateDes,
  UpdateDetail,
  UpdateSubscribe
} from '../../../styles/updatestyle';
import { renderContentWithVideos } from '../../../helpers/clientSideHelpers';

export default function UpdatesPage({ allPosts }) {
  const renderPosts = useMemo(() => {
    if (isEmpty(allPosts)) return null;
    return allPosts?.map((item, index) => {
      const isLast = index === allPosts.length - 1;
      const contentWithVideos = renderContentWithVideos(item?.html);

      return (
        <UpdateDes key={`updatesitem_index_${index}`}>
          <svg width='14' height='7' viewBox='0 0 14 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M14 0L7 7L0 0H14Z' fill='black' />
          </svg>
          <Detail className={isLast ? 'last-item' : ''}>
            <UpdateDate href={'/updates/' + item?.slug}>
              {moment(new Date(item?.published_at)).format('MMMM D, YYYY')}
            </UpdateDate>
            <UpdateDetail dangerouslySetInnerHTML={{ __html: contentWithVideos }}></UpdateDetail>
          </Detail>
        </UpdateDes>
      );
    });
  }, [allPosts]);

  return (
    <>
      <UpadtePage>
        <Container>
          <UpdateSubscribe>
            <h1>Updates</h1>
            <p>New updates and improvements to Copilot.</p>
            <Button
              bgColor={'transparent'}
              fontColor={'--black'}
              borderColor={'--black'}
              text={'Subscribe to updates'}
              href={UPDATE_SUBSCRIBE_LINK}
              hoverColor={'--hover-color'}
            />
          </UpdateSubscribe>
          {renderPosts}
          <Details>
            <Left></Left>
            <UpdateDetail>
              <Pagination>
                <Button
                  bgColor={'transparent'}
                  fontColor={'--black'}
                  borderColor={'--black'}
                  text={'Next Page'}
                  href={`/updates/page/2`}
                  hoverColor={'--hover-color'}
                  className={'pagination-button'}
                />
              </Pagination>
            </UpdateDetail>
          </Details>
        </Container>
      </UpadtePage>
    </>
  );
}
