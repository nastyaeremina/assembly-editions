'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import { dateToMonthYear, isEmpty } from '../../../helpers/helpers';
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
  AboutWrap,
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
  BenefitsSection,
  BenefitWrap,
  BenefitBox,
  BoxView,
  ImgIcon,
  DetailView,
  MainWrap
} from '../../../styles/jobsStyles';

export default function JobsPage({ jobList, jobImagesList, jobBlogPostList }) {
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
    const imageUrl = jobImagesList?.[selectedImageIndex]?.image?.url;
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
    if (isEmpty(jobImagesList?.[selectedImageIndex]?.name)) return null;
    return (
      <RegionView>
        <p>{jobImagesList?.[selectedImageIndex]?.name}</p>
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
      const link = item?.blogLink; //?.split('copilot.com/')?.[1];
      return (
        <TitleWrap key={`jobblogpostitem_index_${index}`}>
          <TeamLine>
            <Link href={link ?? ''}>{item?.name}</Link>
            <p>{dateToMonthYear(item?.date)}</p>
          </TeamLine>
          {!isEmpty(authorList) && <NameView>{renderAuthorListView(authorList)}</NameView>}
        </TitleWrap>
      );
    });
  }, [jobBlogPostList, renderAuthorListView]);

  return (
    <>
      <MainWrap>
        <HeroJobSection>
          <Container>
            <JobsWrap>
              <UseCaseWrap>
                <h1>Work at Copilot</h1>
                <p>
                  We are reinventing how service businesses and clients work together. If we succeed, more businesses
                  will be started and those that do will have a way to serve customers directly, under their own brand,
                  without intermediaries in between.
                </p>
              </UseCaseWrap>
            </JobsWrap>
            <JobsMobi>
              <UseCaseWrapMobi>
                <h1>Work at Copilot</h1>
                <p>
                  We are reinventing how service businesses and clients work together. If we succeed, more businesses
                  will be started and those that do will have a way to serve customers directly, under their own brand,
                  without intermediaries in between.
                </p>
              </UseCaseWrapMobi>
            </JobsMobi>
          </Container>
        </HeroJobSection>
        <CareerSection>
          <Container>
            <CareerBlock>
              <RoleBlock>
                <RoleWrap>
                  <h2>Roles</h2>
                  <p>
                    We’re committed to an equitable recruiting process and an inclusive culture that welcomes
                    individuals across all races, ages, abilities, sexualities, gender identities/expressions,
                    ethnicities, nationalities, and class backgrounds.
                  </p>
                </RoleWrap>
                {!isEmpty(jobList) && <JobDetailWrap>{renderJobsRolesListView}</JobDetailWrap>}
              </RoleBlock>
              <TeamBlock>
                {!isEmpty(jobBlogPostList) && (
                  <TeamView>
                    <h2>Team writing & media</h2>
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
        <BenefitsSection>
          <Container>
            <BenefitWrap>
              <h2>Benefits</h2>
            </BenefitWrap>
            <BenefitBox>
              <BoxView>
                <ImgIcon>
                  <Image src='/images/equity.svg' width={44} height={44} alt='file-icon' className='desktop' />
                  <Image src='/images/equitymb.svg' width={24} height={24} alt='file-icon' className='mobiicon' />
                </ImgIcon>
                <DetailView>
                  <h3>Equity</h3>
                  <p>We want you to reap the benefits of the upside you create in the company.</p>
                </DetailView>
              </BoxView>
              <BoxView>
                <ImgIcon>
                  <Image src='/images/health.svg' width={44} height={44} alt='file-icon' className='desktop' />
                  <Image src='/images/healthmobi.svg' width={24} height={24} alt='file-icon' className='mobiicon' />
                </ImgIcon>
                <DetailView>
                  <h3>Health insurance</h3>
                  <p>Tier 1 Blue Cross plan with 100% coverage for you and 50% coverage for dependents.</p>
                </DetailView>
              </BoxView>
              <BoxView>
                <ImgIcon>
                  <Image src='/images/pto.svg' width={44} height={44} alt='file-icon' className='desktop' />
                  <Image src='/images/ptomobi.svg' width={24} height={24} alt='file-icon' className='mobiicon' />
                </ImgIcon>
                <DetailView>
                  <h3>Flexible PTO</h3>
                  <p>We recommend ~20 days of vacation per year. You can take whatever days you want.</p>
                </DetailView>
              </BoxView>
              <BoxView>
                <ImgIcon>
                  <Image src='/images/internet.svg' width={44} height={44} alt='file-icon' className='desktop' />
                  <Image src='/images/internetmobi.svg' width={24} height={24} alt='file-icon' className='mobiicon' />
                </ImgIcon>
                <DetailView>
                  <h3>International offsites</h3>
                  <p>We do team off-sites twice per year. In July, we met up in Istanbul.</p>
                </DetailView>
              </BoxView>
              <BoxView>
                <ImgIcon>
                  <Image src='/images/sickicon.svg' width={44} height={44} alt='file-icon' className='desktop' />
                  <Image src='/images/sickiconmobi.svg' width={24} height={24} alt='file-icon' className='mobiicon' />
                </ImgIcon>
                <DetailView>
                  <h3>Sick leave</h3>
                  <p>Take the time you need to recharge! We want everyone feeling their best at work.</p>
                </DetailView>
              </BoxView>
              <BoxView>
                <ImgIcon>
                  <Image src='/images/leaveicon.svg' width={44} height={44} alt='file-icon' className='desktop' />
                  <Image src='/images/leaveiconmobi.svg' width={24} height={24} alt='file-icon' className='mobiicon' />
                </ImgIcon>
                <DetailView>
                  <h3>Parental leave</h3>
                  <p>6 weeks of paid and 6 weeks of unpaid leave within the first year after becoming a parent.</p>
                </DetailView>
              </BoxView>
              <BoxView>
                <ImgIcon>
                  <Image src='/images/hardware.svg' width={44} height={44} alt='file-icon' className='desktop' />
                  <Image src='/images/hardwaremobi.svg' width={24} height={24} alt='file-icon' className='mobiicon' />
                </ImgIcon>
                <DetailView>
                  <h3>Hardware</h3>
                  <p>We’ll equip you with an M1 MacBook, 4K display, and anything else you need.</p>
                </DetailView>
              </BoxView>
              <BoxView>
                <ImgIcon>
                  <Image src='/images/education.svg' width={44} height={44} alt='file-icon' className='desktop' />
                  <Image src='/images/educationmobi.svg' width={24} height={24} alt='file-icon' className='mobiicon' />
                </ImgIcon>
                <DetailView>
                  <h3>Education</h3>
                  <p>Get reimbursed for relevant books, conferences, classes, and more.</p>
                </DetailView>
              </BoxView>
            </BenefitBox>
          </Container>
        </BenefitsSection>
      </MainWrap>
    </>
  );
}
