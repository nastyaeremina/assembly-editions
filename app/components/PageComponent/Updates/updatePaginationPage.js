'use client';
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';
import { isEmpty } from '../../../helpers/helpers';
import { ButtonVariant, EXTERNAL_LINK_KEYS } from '../../../constants/constant';
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
import ButtonV2Component from '../../button/buttonV2/buttonV2';
import NewCTA from '../../cta/newCTA';
import useNavbarHeight from '../../../hooks/useNavbarHeight';

export default function UpdatesPaginationPage({ allPosts, pagination, externalLinks = {}, updatesCTA = null }) {
  // for sticky positioning
  const { totalHeight } = useNavbarHeight();

  const renderPosts = useMemo(() => {
    if (isEmpty(allPosts)) return null;
    return allPosts?.map((item, index) => {
      return (
        <UpdateDes key={`updatesitem_index_${index}`}>
          <Detail>
            <UpdateDate href={'/updates/' + item?.slug} stickyTop={totalHeight}>
              {moment(new Date(item?.published_at)).format('MMMM D, YYYY')}
            </UpdateDate>
            <UpdateDetail>
              <Content dangerouslySetInnerHTML={{ __html: item?.html }}></Content>
            </UpdateDetail>
          </Detail>
        </UpdateDes>
      );
    });
  }, [allPosts, totalHeight]);

  return (
    <div className='component-wrapper'>
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
            {!isEmpty(pagination?.prev) && (
              <ButtonV2Component
                title={'Previous page'}
                variant={ButtonVariant.SECONDARY}
                href={pagination?.page === 2 ? `/updates/` : `/updates/page/${pagination?.page - 1}`}
              />
            )}
            {!isEmpty(pagination?.next) && (
              <ButtonV2Component
                title={'Next page'}
                variant={ButtonVariant.SECONDARY}
                href={`/updates/page/${pagination?.page + 1}`}
              />
            )}
          </Pagination>
        </PostContent>
      </Container>
      {!isEmpty(updatesCTA) && (
        <NewCTA
          title={updatesCTA.title}
          description={updatesCTA.description}
          primaryButtonLink={updatesCTA.primaryButtonLink}
          primaryButtonText={updatesCTA.primaryButtonText}
          secondaryButtonLink={updatesCTA.secondaryButtonLink}
          secondaryButtonText={updatesCTA.secondaryButtonText}
          banner={updatesCTA.banner?.url}
        />
      )}
    </div>
  );
}
