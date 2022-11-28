import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar/navbar";
import { isEmpty } from "../../helpers/helpers";
import { getAllJobsWithSlug, getJobDetails } from "../../lib/contentful-jobsListing";
import { Container, PrimaryButton } from "../../styles/commonStyles";
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
} from "../../styles/jobsStyles";

export default function JobsDetail({ jobDetail }) {

  const renderTeamMemberView = useMemo(() => {
    const teamMemberList = jobDetail?.teamMembersCollection?.items || []
    if (isEmpty(teamMemberList)) return null
    return teamMemberList?.map((item, index) => {
      return <Link href={item?.profileLink ?? ""} key={`teammember_index_${index}`} >
        <Image
          src={item?.profilePicture?.url}
          alt="bill-icon"
          width={30}
          height={30}
          layout={"fixed"}
          className="billimage"

        />
      </Link >
    })
  }, [jobDetail?.teamMembersCollection?.items])

  return (
    <>
      <NextSeo
        title="Create your portal, pick a plan later"
        description="Try Copilot free for 14 days, no credit card required"
      />
      <Layout>
        <Navbar />
        <JObMain>
          <Container>
            <Link href="/jobs">
              <DetailLink>

                <Image
                  src="/images/leftarrow.svg"
                  alt="bill-icon"
                  width={12}
                  height={12}
                  layout={"fixed"}
                />
                <p>Back to all Apps</p>

              </DetailLink>
            </Link>

            <JobDetail>
              <DetailLeft>
                <h3>{jobDetail?.name}</h3>
                {!isEmpty(jobDetail?.department) && <DetailWrap>
                  <p>Department</p>
                  <span>{jobDetail?.department}</span>
                </DetailWrap>}
                {!isEmpty(jobDetail?.location) && <DetailWrap>
                  <p>Location</p>
                  <span>{jobDetail?.location}</span>
                </DetailWrap>}
                {!isEmpty(jobDetail?.teamMembersCollection?.items) &&
                  <DetailWrap>
                    <p>Work with</p>
                    <ImageWrap>
                      {renderTeamMemberView}
                    </ImageWrap>
                  </DetailWrap>}
                <PrimaryButton>
                  <Link href={jobDetail?.applyLink ?? ""}>Apply now</Link>
                </PrimaryButton>
              </DetailLeft>
              <DetailRight>
                <DetailRIghtText>
                  {documentToReactComponents(jobDetail?.jobDescription?.json)}
                </DetailRIghtText>
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
    props: { jobDetail },
  };
}

export async function getServerSidePaths() {
  const allPosts = (await getAllJobsWithSlug()) ?? [];
  return {
    paths: allPosts?.map((slug) => `${slug}`) ?? [],

    fallback: true,
  };
}

