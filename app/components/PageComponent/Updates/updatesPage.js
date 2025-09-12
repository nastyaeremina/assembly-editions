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

export default function UpdatesPage({ allPosts, externalLinks = {} }) {
  const [stickyTop, setStickyTop] = useState(0);

  // Calculate navbar height for sticky positioning
  useEffect(() => {
    const updateHeight = () => {
      // Find navbar and topbar elements
      const navbar = document.querySelector('[data-navbar="true"]');
      const topbar = document.querySelector('[data-topbar="true"]');

      // Calculate total height needed for sticky positioning
      const totalHeight = (navbar?.offsetHeight || 0) + (topbar?.offsetHeight || 0);
      setStickyTop(totalHeight);
    };

    // Initial calculation
    updateHeight();

    // Update on window resize
    window.addEventListener('resize', updateHeight);

    // Cleanup event listener
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const renderPosts = useMemo(() => {
    if (isEmpty(allPosts)) return null;
    return allPosts?.map((item, index) => {
      const isLast = index === allPosts.length - 1;
      const contentWithVideos = renderContentWithVideos(item?.html);

      return (
        <UpdateDes key={`updatesitem_index_${index}`}>
          <Detail className={isLast ? 'last-item' : ''}>
            <UpdateDate href={'/updates/' + item?.slug} stickyTop={stickyTop}>
              {moment(new Date(item?.published_at)).format('MMMM D, YYYY')}
            </UpdateDate>
            <UpdateDetail>
              <Content dangerouslySetInnerHTML={{ __html: contentWithVideos }}></Content>
            </UpdateDetail>
          </Detail>
        </UpdateDes>
      );
    });
  }, [allPosts, stickyTop]);

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
