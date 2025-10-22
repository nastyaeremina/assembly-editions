'use client';
import moment from 'moment';
import { Container, Content } from '../../../styles/commonStyles';
import { DetailSlug, LinkDiv, MainContent, UpdateDate, UpdateDes, UpdateDetail } from '../../../styles/updatestyle';
import { renderContentWithVideos } from '../../../helpers/clientSideHelpers';
import Breadcrumbs from '../../Breadcrumbs/breadcrumbs';
import NewCTA from '../../cta/newCTA';
import useNavbarHeight from '../../../hooks/useNavbarHeight';
import { isEmpty } from '../../../helpers/helpers';

export default function UpdatedetailPage({ details: updateDetails, updatesCTA = null }) {
  const contentWithVideos = renderContentWithVideos(updateDetails?.html);

  const BreadcrumbItem = [{ label: 'All updates', href: '/updates' }];

  // for sticky positioning
  const { totalHeight } = useNavbarHeight();

  return (
    <div className='component-wrapper'>
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
