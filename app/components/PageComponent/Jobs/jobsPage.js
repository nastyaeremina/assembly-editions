'use client';
import { useCallback, useMemo, useState } from 'react';
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
  JobTitle,
  Icon,
  TeamBlock,
  Dot,
  TeamView,
  TeamDetail,
  TitleWrap,
  TeamLine,
  NameView,
  ImgWrap,
  ImgBorder,
  TabList,
  RegionView,
  Authorname,
  TopSection,
  Text,
  ReadMore,
  ImageSliderSection,
  SmallImage,
  ImageOverlayDiv,
  ResponsiveSection,
  LearnMore,
  MobileIcon
} from '../../../styles/jobsStyles';
import StandardHero from '../../standardHero/standardHero';
import { HeroTypes, THRESHOLD } from '../../../constants/constant';
import FAQ from '../../faq/faq';
import ModernV2 from '../../solution/modernV2/modernV2';
import Link from 'next/link';
import SVGComponent from '../../../../public/images/svg/SVGComponent';
import Image from 'next/image';
import SliderButton from '../../businessSlider/SliderButton';
import useMobileDevice from '../../../hooks/useMobileDevice';

export default function JobsPage({ details, jobList, faqData, jobBlogPostList, jobImagesList }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const isMobileDevice = useMobileDevice();

  // Swipe functionality for mobile devices
  const handleTouchStart = useCallback((e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    // 50px threshold to determine if swipe gesture is significant enough to trigger navigation
    const isLeftSwipe = distance > THRESHOLD;
    const isRightSwipe = distance < -THRESHOLD;

    if (isMobileDevice && jobImagesList && jobImagesList.length > 1) {
      if (isLeftSwipe) {
        // Swipe left: go to next image (circular)
        const nextIndex = selectedImageIndex === jobImagesList.length - 1 ? 0 : selectedImageIndex + 1;
        setSelectedImageIndex(nextIndex);
      } else if (isRightSwipe) {
        // Swipe right: go to previous image (circular)
        const prevIndex = selectedImageIndex === 0 ? jobImagesList.length - 1 : selectedImageIndex - 1;
        setSelectedImageIndex(prevIndex);
      }
    }
  }, [touchStart, touchEnd, isMobileDevice, selectedImageIndex, jobImagesList]);

  const renderJobsListingView = useCallback((list) => {
    if (isEmpty(list)) return null;
    return list?.map((item, index) => {
      return (
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
            <LearnMore className='link-hover'>
              <p>Learn More</p>
              <Icon>
                <SVGComponent name='hover-arrow-icon' width='18' height='16' viewBox='0 0 16 16' />
              </Icon>
              <MobileIcon>
                <SVGComponent name='slider-right-arrow-icon' width='16' height='16' viewBox='0 0 16 16' />
              </MobileIcon>
            </LearnMore>
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
          <JobTitle>{item?.department}</JobTitle>
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
        <SmallImage
          className={index === selectedImageIndex ? 'activetab' : ''}
          key={`jobimagetabview_index_${index}`}
          onClick={() => onClickImageTab(index)}>
          <Image
            src={item?.url || item?.src}
            alt={`job image ${index + 1}`}
            width={128}
            height={72}
            className='image'
          />
          <ImageOverlayDiv isActive={selectedImageIndex === index} className='overlay' />
        </SmallImage>
      );
    });
  }, [jobImagesList, onClickImageTab, selectedImageIndex]);

  const renderJobImageNameView = useMemo(() => {
    if (isEmpty(jobImagesList?.[selectedImageIndex]?.title)) return null;
    return (
      <RegionView>
        <p>{jobImagesList?.[selectedImageIndex]?.title}</p>
        <div className='bottom-overlay' />
      </RegionView>
    );
  }, [jobImagesList, selectedImageIndex]);

  const renderAuthorListView = useCallback((authorList) => {
    return authorList?.map((item, index) => {
      return (
        <>
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
        <Link href={link ?? ''} key={`jobblogpostitem_index_${index}`}>
          <TitleWrap>
            <TopSection>
              <TeamLine>
                <p>{item?.date}</p>
                <Dot />
                {!isEmpty(authorList) && <Authorname>{renderAuthorListView(authorList)}</Authorname>}
              </TeamLine>
              <NameView>{item?.name}</NameView>
            </TopSection>
            <ReadMore>
              <Text className='read-more'>Read More</Text>
              <SVGComponent name='hover-arrow-icon' width='16' height='14' viewBox='0 0 16 16' className='arrow-icon' />
            </ReadMore>
          </TitleWrap>
        </Link>
      );
    });
  }, [jobBlogPostList, renderAuthorListView]);

  return (
    <div className='component-wrapper'>
      <StandardHero
        type={HeroTypes.NEW_LEFT_HERO}
        data={{
          heroTitle: details?.title,
          heroDescription: details?.description,
          banner1: details?.banner,
          primaryButtonText: details?.primaryButtonText,
          primaryButtonLink: details?.primaryButtonLink,
          secondaryButtonText: details?.secondaryButtonText,
          secondaryButtonLink: details?.secondaryButtonLink
        }}
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

      <Container>
        <TeamBlock>
          <TeamView>{!isEmpty(details?.sectionTitle2) && <h2>{details?.sectionTitle2}</h2>}</TeamView>
          {!isEmpty(jobImagesList) && (
            <ImageSliderSection>
              <ImgWrap
                onTouchStart={isMobileDevice ? handleTouchStart : undefined}
                onTouchMove={isMobileDevice ? handleTouchMove : undefined}
                onTouchEnd={isMobileDevice ? handleTouchEnd : undefined}>
                {renderJobImageView}
                {renderJobImageNameView}
              </ImgWrap>
              <TabList>{renderJobImageTabView}</TabList>
              {jobImagesList?.length > 1 && (
                <ResponsiveSection>
                  <SliderButton
                    count={jobImagesList?.length}
                    currentIndex={selectedImageIndex}
                    setCurrentIndex={(index) => setSelectedImageIndex(index)}
                  />
                </ResponsiveSection>
              )}
            </ImageSliderSection>
          )}
          {!isEmpty(jobBlogPostList) && <TeamDetail>{renderJobBlogPostView}</TeamDetail>}
        </TeamBlock>
      </Container>
      <FAQ faqList={faqData} />
    </div>
  );
}
