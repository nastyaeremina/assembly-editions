'use client';
import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { isEmpty } from '../../../helpers/helpers';
import { Container, PrimaryButton } from '../../../styles/commonStyles';
import {
  JObMain,
  DetailLink,
  JobDetail,
  DetailLeft,
  DetailWrap,
  ImageWrap,
  DetailRight,
  DetailRIghtText,
  DetailPosition
} from '../../../styles/jobsStyles';

export default function JobsDetailPage({ data: jobDetail }) {
  const renderTeamMemberView = () => {
    const teamMemberList = jobDetail?.teamMembersCollection?.items || [];
    if (isEmpty(teamMemberList)) return null;
    return teamMemberList?.map((item, index) => {
      return (
        <Link href={item?.profileLink ?? ''} key={`teammember_index_${index}`}>
          <Image
            src={item?.profilePicture?.url}
            alt='bill-icon'
            width={30}
            height={30}
            layout={'fixed'}
            className='billimage'
          />
        </Link>
      );
    });
  };

  return (
    <>
      <JObMain>
        <Container>
          <JobDetail>
            <DetailPosition>
              <DetailLeft>
                <Link href='/jobs'>
                  <DetailLink>
                    <Image src='/images/leftarrow.svg' alt='bill-icon' width={12} height={12} layout={'fixed'} />
                    <p>Back to all Jobs</p>
                  </DetailLink>
                </Link>
                <h3>{jobDetail?.name}</h3>
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
                <PrimaryButton>
                  <Link href={jobDetail?.applyLink ?? ''}>Apply now</Link>
                </PrimaryButton>
              </DetailLeft>
            </DetailPosition>
            <DetailRight>
              <DetailRIghtText>{documentToReactComponents(jobDetail?.jobDescription?.json)}</DetailRIghtText>
            </DetailRight>
          </JobDetail>
        </Container>
      </JObMain>
    </>
  );
}
