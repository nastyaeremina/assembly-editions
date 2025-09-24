'use client';
import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { isEmpty } from '../../../helpers/helpers';
import { Container, Content } from '../../../styles/commonStyles';
import {
  JObMain,
  JobDetail,
  DetailLeft,
  DetailWrap,
  ImageWrap,
  DetailRight,
  DetailPosition,
  NewHeroSection,
  Title,
  HeaderSeciton,
  ImageDiv,
  ImageSection,
  RoleDetails,
  LogoSection,
  RoleSection,
  WrapperDiv,
  Overlay,
  RoleTitle,
  Role,
  JobDetailSectionWrapper,
  OverlayDiv,
  AvtarWrapper
} from '../../../styles/jobsStyles';
import Breadcrumbs from '../../Breadcrumbs/breadcrumbs';
import ButtonV2Component from '../../button/buttonV2/buttonV2';
import HeroSectionImage from '../../../../public/images/job-detail-hero-profile.png';
import SVGComponent from '../../../../public/images/svg/SVGComponent';
import { ButtonSize } from '../../../constants/constant';
import useNavbarHeight from '../../../hooks/useNavbarHeight';

export default function JobsDetailPage({ data: jobDetail }) {
  const BreadcrumbItem = [{ label: 'All jobs', href: '/jobs' }];

  // for sticky positioning
  const { totalHeight } = useNavbarHeight();

  const renderTeamMemberView = () => {
    const teamMemberList = jobDetail?.teamMembersCollection?.items || [];
    if (isEmpty(teamMemberList)) return null;
    return teamMemberList?.map((item, index) => {
      return (
        <Link href={item?.profileLink ?? ''} key={`teammember_index_${index}`}>
          <AvtarWrapper>
            <Image
              src={item?.profilePicture?.url}
              alt='bill-icon'
              width={40}
              height={40}
              layout={'fixed'}
              className='billimage'
            />
            <OverlayDiv className='overlay' />
          </AvtarWrapper>
        </Link>
      );
    });
  };

  return (
    <>
      <JObMain>
        <Container>
          <JobDetailSectionWrapper>
            <NewHeroSection>
              <HeaderSeciton>
                <Breadcrumbs breadcrumbs={BreadcrumbItem} currentLabel={jobDetail?.department} />
                <Title>{jobDetail?.name}</Title>
                {jobDetail?.applyLink && <ButtonV2Component title='Apply now' href={jobDetail?.applyLink ?? ''} />}
              </HeaderSeciton>
              <ImageSection>
                <ImageDiv>
                  <Image src={HeroSectionImage} alt='hero-image' width={1224} height={398} className='image' />
                </ImageDiv>
                <RoleDetails>
                  <WrapperDiv>
                    <Overlay />
                    <LogoSection>
                      <SVGComponent
                        name='assembly-big-logo'
                        width='131'
                        height='24'
                        viewBox='0 0 200 38'
                        className='logo-icon'
                      />
                    </LogoSection>
                  </WrapperDiv>
                  <RoleSection>
                    <RoleTitle>Open Role</RoleTitle>
                    <Role>{jobDetail?.name}</Role>
                  </RoleSection>
                </RoleDetails>
              </ImageSection>
            </NewHeroSection>
            <JobDetail>
              <DetailPosition>
                <DetailLeft stickyTop={totalHeight}>
                  {!isEmpty(jobDetail?.department) && (
                    <DetailWrap>
                      <p>Department</p>
                      <span>{jobDetail?.department}</span>
                    </DetailWrap>
                  )}
                  {!isEmpty(jobDetail?.location) && (
                    <DetailWrap>
                      <p>Location</p>
                      <span>{jobDetail?.location}</span>
                    </DetailWrap>
                  )}
                  {!isEmpty(jobDetail?.compensation) && (
                    <DetailWrap>
                      <p>Compensation</p>
                      <span>{jobDetail?.compensation}</span>
                    </DetailWrap>
                  )}
                  {!isEmpty(jobDetail?.teamMembersCollection?.items) && (
                    <DetailWrap>
                      <p>Work with</p>
                      <ImageWrap>{renderTeamMemberView()}</ImageWrap>
                    </DetailWrap>
                  )}
                </DetailLeft>
              </DetailPosition>
              <DetailRight>
                <Content>{documentToReactComponents(jobDetail?.jobDescription?.json)}</Content>
                {jobDetail?.applyLink && (
                  <ButtonV2Component title='Apply now' href={jobDetail?.applyLink ?? ''} size={ButtonSize.SMALL} />
                )}
              </DetailRight>
            </JobDetail>
          </JobDetailSectionWrapper>
        </Container>
      </JObMain>
    </>
  );
}
