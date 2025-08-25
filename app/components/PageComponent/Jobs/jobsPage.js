'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { isEmpty } from '../../../helpers/helpers';
import { Container } from '../../../styles/commonStyles';
import {
  HeroJobSection,
  JobsWrap,
  JobsMobi,
  UseCaseWrapMobi,
  UseCaseWrap,
  CareerSection,
  CareerBlock,
  RoleBlock,
  TeamBlock,
  RoleWrap,
  JobDetailWrap,
  JobView,
  RoleList,
  RoleRow,
  LeftRow,
  RightRow,
  Dot,
  TeamView,
  TeamDetail,
  TitleWrap,
  TeamLine,
  NameView,
  ImgWrap,
  ImgBorder,
  TabList,
  TabWrap,
  TabView,
  ActiveTab,
  RegionView,
  MainWrap
} from '../../../styles/jobsStyles';
import Modern from '../../solution/modern/modern';

export default function JobsPage({ details, jobList, jobImagesList, jobBlogPostList }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const renderJobsListingView = useCallback((list) => {
    if (isEmpty(list)) return null;
    return list?.map((item, index) => {
      return (
        <Link href={`/jobs/${item?.slug}`} key={`joblist_index_${index}`}>
          <RoleRow>
            <LeftRow>
              <p>{item?.name}</p>
            </LeftRow>
            <RightRow>
              {item?.isRemote && <p>Remote</p>}
              {!isEmpty(item?.location) && item?.isRemote ? (
                <>
                  <Dot className='bgdot'></Dot>
                  <p>{item?.location}</p>
                </>
              ) : (
                <p>{item?.location}</p>
              )}
            </RightRow>
          </RoleRow>
        </Link>
      );
    });
  }, []);

  const renderJobsRolesListView = useMemo(() => {
    if (isEmpty(jobList)) return null;
    return jobList?.map((item, index) => {
      return (
        <JobView key={`jobsroleslist_index_${index}`}>
          <h3>{item?.department}</h3>
          <RoleList>{renderJobsListingView(item?.list)}</RoleList>
        </JobView>
      );
    });
  }, [jobList, renderJobsListingView]);

  const renderJobImageView = useMemo(() => {
    const imageUrl = jobImagesList?.[selectedImageIndex]?.url;
    if (isEmpty(imageUrl)) return null;
    return (
      <ImgBorder>
        <Image src={imageUrl} alt='red-icon' width={552} height={320} />
      </ImgBorder>
    );
  }, [jobImagesList, selectedImageIndex]);

  const onClickImageTab = useCallback((index) => {
    setSelectedImageIndex(index);
  }, []);

  const renderJobImageTabView = useMemo(() => {
    if (isEmpty(jobImagesList)) return null;
    return jobImagesList?.map((item, index) => {
      return (
        <TabView
          className={index === selectedImageIndex ? 'activetab' : ''}
          key={`jobimagetabview_index_${index}`}
          onClick={() => onClickImageTab(index)}>
          <span>{`${index < 9 ? '0' : ''}${index + 1}`}</span>
          {index === selectedImageIndex && <ActiveTab></ActiveTab>}
        </TabView>
      );
    });
  }, [jobImagesList, onClickImageTab, selectedImageIndex]);

  const renderJobImageNameView = useMemo(() => {
    if (isEmpty(jobImagesList?.[selectedImageIndex]?.title)) return null;
    return (
      <RegionView>
        <p>{jobImagesList?.[selectedImageIndex]?.title}</p>
      </RegionView>
    );
  }, [jobImagesList, selectedImageIndex]);

  const renderAuthorListView = useCallback((authorList) => {
    return authorList?.map((item, index) => {
      return (
        <>
          {' '}
          {index !== 0 && item?.trim().length !== 0 && <Dot key={`authorlistitemwithdot_index_${index}`}></Dot>}
          <p key={`authorlistitem_index_${index}`}> {item?.trim()}</p>
        </>
      );
    });
  }, []);

  const renderJobBlogPostView = useMemo(() => {
    if (isEmpty(jobBlogPostList)) return null;
    return jobBlogPostList?.map((item, index) => {
      let authorList = [];
      if (!isEmpty(item?.author)) {
        authorList = item?.author.split(',');
      }
      const link = item?.link;
      return (
        <TitleWrap key={`jobblogpostitem_index_${index}`}>
          <TeamLine>
            <Link href={link ?? ''}>{item?.name}</Link>
            <p>{item?.date}</p>
          </TeamLine>
          {!isEmpty(authorList) && <NameView>{renderAuthorListView(authorList)}</NameView>}
        </TitleWrap>
      );
    });
  }, [jobBlogPostList, renderAuthorListView]);

  const renderHeaderView = useMemo(() => {
    return (
      <>
        {!isEmpty(details?.title) && <h1>{details?.title}</h1>}
        {!isEmpty(details?.description) && <ReactMarkdown>{details?.description}</ReactMarkdown>}
      </>
    );
  }, [details?.description, details?.title]);

  return (
    <>
      <MainWrap>
        <HeroJobSection>
          <Container>
            <JobsWrap imageUrl={details?.banner?.url}>
              <UseCaseWrap>{renderHeaderView}</UseCaseWrap>
            </JobsWrap>
            <JobsMobi>
              <UseCaseWrapMobi>{renderHeaderView}</UseCaseWrapMobi>
            </JobsMobi>
          </Container>
        </HeroJobSection>
        <CareerSection>
          <Container>
            <CareerBlock>
              <RoleBlock>
                <RoleWrap>
                  {!isEmpty(details?.sectionTitle1) && <h2>{details?.sectionTitle1}</h2>}
                  {!isEmpty(details?.sectionDescription1) && (
                    <ReactMarkdown>{details?.sectionDescription1}</ReactMarkdown>
                  )}
                </RoleWrap>
                {!isEmpty(jobList) && <JobDetailWrap>{renderJobsRolesListView}</JobDetailWrap>}
              </RoleBlock>
              <TeamBlock>
                {!isEmpty(jobBlogPostList) && (
                  <TeamView>
                    {!isEmpty(details?.sectionTitle2) && <h2>{details?.sectionTitle2}</h2>}
                    <TeamDetail>{renderJobBlogPostView}</TeamDetail>
                  </TeamView>
                )}
                {!isEmpty(jobImagesList) && (
                  <>
                    <ImgWrap>
                      {renderJobImageView}
                      <TabList>
                        <TabWrap>{renderJobImageTabView}</TabWrap>
                      </TabList>
                    </ImgWrap>
                    {renderJobImageNameView}
                  </>
                )}
              </TeamBlock>
            </CareerBlock>
          </Container>
        </CareerSection>
        {!isEmpty(details?.internalFeaturesCollection?.items) && (
          <Modern data={details?.internalFeaturesCollection?.items} title={details?.sectionTitle3} />
        )}
      </MainWrap>
    </>
  );
}
