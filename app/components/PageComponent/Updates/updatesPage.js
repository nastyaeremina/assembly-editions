'use client';

import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';
import { ButtonVariant, EXTERNAL_LINK_KEYS } from '../../../constants/constant';
import { isEmpty } from '../../../helpers/helpers';
import { Container, Content } from '../../../styles/commonStyles';
import {
  Detail,
  Pagination,
  PostContent,
  UpadtePage,
  UpdateDate,
  UpdateDes,
  UpdateDetail,
  UpdateSubscribe
} from '../../../styles/updatestyle';
import { renderContentWithVideos } from '../../../helpers/clientSideHelpers';
import ButtonV2Component from '../../button/buttonV2/buttonV2';
import NewCTA from '../../cta/newCTA';
import { CTAData } from '../../../constants/raw';
import useNavbarHeight from '../../../hooks/useNavbarHeight';

export default function UpdatesPage({ allPosts, externalLinks = {} }) {
  // for sticky positioning
  const { totalHeight } = useNavbarHeight();

  const renderPosts = useMemo(() => {
    if (isEmpty(allPosts)) return null;
    return allPosts?.map((item, index) => {
      const isLast = index === allPosts.length - 1;
      const contentWithVideos = renderContentWithVideos(item?.html);

      return (
        <UpdateDes key={`updatesitem_index_${index}`}>
          <Detail className={isLast ? 'last-item' : ''}>
            <UpdateDate href={'/updates/' + item?.slug} stickyTop={totalHeight}>
              {moment(new Date(item?.published_at)).format('MMMM D, YYYY')}
            </UpdateDate>
            <UpdateDetail>
              <Content dangerouslySetInnerHTML={{ __html: contentWithVideos }}></Content>
            </UpdateDetail>
          </Detail>
        </UpdateDes>
      );
    });
  }, [allPosts, totalHeight]);

  return (
    <>
      <UpadtePage>
        <Container>
          <UpdateSubscribe>
            <h1>Updates</h1>
            <p>
              Trusted by consulting, accounting, real estate, law, marketing, and tech firms with 1M+ clients and
              counting.
            </p>
            <ButtonV2Component
              title={'Subscribe to updates'}
              href={externalLinks?.[EXTERNAL_LINK_KEYS.SubscribeLink] || '#'}
            />
          </UpdateSubscribe>
        </Container>
        <Container>
          <PostContent>
            {renderPosts}
            <Pagination>
              <ButtonV2Component
                title={'Next page'}
                variant={ButtonVariant.SECONDARY_WITH_BORDER}
                href={`/updates/page/2`}
              />
            </Pagination>
          </PostContent>
        </Container>
        <NewCTA
          title={CTAData.title}
          description={CTAData.description}
          primaryButtonLink={CTAData.primaryButtonLink}
          primaryButtonText={CTAData.primaryButtonText}
          secondaryButtonLink={CTAData.secondaryButtonLink}
          secondaryButtonText={CTAData.secondaryButtonText}
        />
      </UpadtePage>
    </>
  );
}
