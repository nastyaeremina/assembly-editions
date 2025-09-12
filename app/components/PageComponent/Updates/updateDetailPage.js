'use client';
import moment from 'moment';
import { Container, Content } from '../../../styles/commonStyles';
import { DetailSlug, LinkDiv, MainContent, UpdateDate, UpdateDes, UpdateDetail } from '../../../styles/updatestyle';
import { renderContentWithVideos } from '../../../helpers/clientSideHelpers';
import Breadcrumbs from '../../Breadcrumbs/breadcrumbs';
import NewCTA from '../../cta/newCTA';
import { CTAData } from '../../../constants/raw';
import { useEffect, useState } from 'react';

export default function UpdatedetailPage({ details: updateDetails }) {
  const contentWithVideos = renderContentWithVideos(updateDetails?.html);

  const BreadcrumbItem = [{ label: 'All updates', href: '/updates' }];

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

  return (
    <MainContent>
      <Container>
        <LinkDiv>
          <Breadcrumbs
            breadcrumbs={BreadcrumbItem}
            currentLabel={moment(new Date(updateDetails?.published_at)).format('MMMM D, YYYY')}
          />
        </LinkDiv>
        <UpdateDes>
          <DetailSlug>
            <UpdateDate href='#' stickyTop={stickyTop}>
              {moment(new Date(updateDetails?.published_at)).format('MMMM D, YYYY')}
            </UpdateDate>
            <UpdateDetail>
              <Content dangerouslySetInnerHTML={{ __html: contentWithVideos }}></Content>
            </UpdateDetail>
          </DetailSlug>
        </UpdateDes>
      </Container>
      <NewCTA
        title={CTAData.title}
        description={CTAData.description}
        primaryButtonLink={CTAData.primaryButtonLink}
        primaryButtonText={CTAData.primaryButtonText}
        secondaryButtonLink={CTAData.secondaryButtonLink}
        secondaryButtonText={CTAData.secondaryButtonText}
      />
    </MainContent>
  );
}
