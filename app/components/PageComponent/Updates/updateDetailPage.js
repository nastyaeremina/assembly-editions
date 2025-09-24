'use client';
import moment from 'moment';
import { Container, Content } from '../../../styles/commonStyles';
import { DetailSlug, LinkDiv, MainContent, UpdateDate, UpdateDes, UpdateDetail } from '../../../styles/updatestyle';
import { renderContentWithVideos } from '../../../helpers/clientSideHelpers';
import Breadcrumbs from '../../Breadcrumbs/breadcrumbs';
import NewCTA from '../../cta/newCTA';
import { CTAData } from '../../../constants/raw';
import useNavbarHeight from '../../../hooks/useNavbarHeight';

export default function UpdatedetailPage({ details: updateDetails }) {
  const contentWithVideos = renderContentWithVideos(updateDetails?.html);

  const BreadcrumbItem = [{ label: 'All updates', href: '/updates' }];

  // for sticky positioning
  const { totalHeight } = useNavbarHeight();

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
            <UpdateDate href='#' stickyTop={totalHeight}>
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
