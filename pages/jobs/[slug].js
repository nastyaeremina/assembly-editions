import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { isEmpty } from '../../helpers/helpers';
import { getAllJobsWithSlug, getJobDetails } from '../../lib/contentful-jobsListing';
import { Container, PrimaryButton } from '../../styles/commonStyles';
import {
  JObMain,
  DetailLink,
  JobDetail,
  DetailLeft,
  DetailWrap,
  ImageWrap,
  DetailRight,
  DetailText,
  DeatilTextSub,
  DetailInner,
  DetailInnerSub,
  BulletImage,
  DetailRIghtText,
  DetailPosition
} from '../../styles/jobsStyles';
import SEO from '../../components/seo';

export default function JobsDetail({ jobDetail }) {
  const renderTeamMemberView = useMemo(() => {
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
  }, [jobDetail?.teamMembersCollection?.items]);

  return (
    <>
      <SEO seoData={{seoTitle:`Copilot Jobs • ${jobDetail?.name}` ,description:`Join the Copilot team as a ${jobDetail?.name}.`}}/>

      <Layout>
        <Navbar />
        <JObMain>
          <Container>
            <Link href='/jobs'>
              <DetailLink>
                <Image src='/images/leftarrow.svg' alt='bill-icon' width={12} height={12} layout={'fixed'} />
                <p>Back to all Jobs</p>
              </DetailLink>
            </Link>

            <JobDetail>
              <DetailPosition>
                <DetailLeft>
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
                  {!isEmpty(jobDetail?.teamMembersCollection?.items) && (
                    <DetailWrap>
                      <p>Work with</p>
                      <ImageWrap>{renderTeamMemberView}</ImageWrap>
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
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const jobDetail = (await getJobDetails(params?.slug)) || {};

  return {
    props: { jobDetail }
  };
}

export async function getServerSidePaths() {
  const allPosts = (await getAllJobsWithSlug()) ?? [];
  return {
    paths: allPosts?.map((slug) => `${slug}`) ?? [],

    fallback: true
  };
}
