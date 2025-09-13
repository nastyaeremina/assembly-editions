'use client';
import { useCallback, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { isEmpty } from '../../../helpers/helpers';
import { Container } from '../../../styles/commonStyles';
import {
  CareerSection,
  CareerBlock,
  RoleBlock,
  RoleWrap,
  JobDetailWrap,
  JobView,
  RoleList,
  RoleRow,
  LeftRow,
  RightRow,
  MainWrap,
  JobTitle,
  Icon
} from '../../../styles/jobsStyles';
import StandardHero from '../../standardHero/standardHero';
import { HeroTypes, LinkSize } from '../../../constants/constant';
import FAQ from '../../faq/faq';
import ModernV2 from '../../solution/modernV2/modernV2';
import LinkComponent from '../../linkComponent/linkComponent';
import Link from 'next/link';
import SVGComponent from '../../../../public/images/svg/SVGComponent';
import { useIsMobile } from '../../../hooks/useMobileDevice';

export default function JobsPage({ details, jobList, faqData }) {
  const isMobile = useIsMobile();
  const renderJobsListingView = useCallback(
    (list) => {
      if (isEmpty(list)) return null;
      return list?.map((item, index) => {
        return isMobile ? (
          <Link href={`/jobs/${item?.slug}`} key={`joblist_index_${index}`}>
            <RoleRow>
              <LeftRow>
                <p>{item?.name}</p>
              </LeftRow>
              {!isEmpty(item?.location) && (
                <RightRow>
                  <p>{item?.location}</p>
                </RightRow>
              )}
              <Icon>
                <SVGComponent name='slider-right-arrow-icon' width='16' height='16' viewBox='0 0 16 16' />
              </Icon>
            </RoleRow>
          </Link>
        ) : (
          <RoleRow key={`joblist_index_${index}`}>
            <LeftRow>
              <p>{item?.name}</p>
            </LeftRow>
            {!isEmpty(item?.location) && (
              <RightRow>
                <p>{item?.location}</p>
              </RightRow>
            )}
            <LinkComponent linkHref={`/jobs/${item?.slug}`} title={'Learn More'} isIcon size={LinkSize.LARGE} />
          </RoleRow>
        );
      });
    },
    [isMobile]
  );

  const renderJobsRolesListView = useMemo(() => {
    if (isEmpty(jobList)) return null;
    return jobList?.map((item, index) => {
      return (
        <JobView key={`jobsroleslist_index_${index}`}>
          <JobTitle>{item?.department}</JobTitle>
          <RoleList>{renderJobsListingView(item?.list)}</RoleList>
        </JobView>
      );
    });
  }, [jobList, renderJobsListingView]);

  return (
    <>
      <MainWrap>
        <StandardHero
          type={HeroTypes.CENTER}
          data={{
            heroTitle: details?.title,
            heroDescription: details?.description,
            banner1: details?.banner,
            primaryButtonText: details?.primaryButtonText,
            primaryButtonLink: details?.primaryButtonLink,
            secondaryButtonText: details?.secondaryButtonText,
            secondaryButtonLink: details?.secondaryButtonLink
          }}
          variant={HeroTypes.LEFT}
        />
        {!isEmpty(details?.internalFeaturesCollection?.items) && (
          <ModernV2 data={details?.internalFeaturesCollection?.items} title={details?.sectionTitle3} />
        )}
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
            </CareerBlock>
          </Container>
        </CareerSection>

        <FAQ faqList={faqData} />
      </MainWrap>
    </>
  );
}
