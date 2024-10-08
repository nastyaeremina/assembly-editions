'use client';
import React, { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Container } from '../../styles/commonStyles';
import { black, primary, whiteColor } from '../../styles/color';
import Button from '../../components/button/button';
import { isEmpty } from '../../helpers/helpers';
import ZoomImageSlider from '../../components/zoomImage/zoomImageslider';
import {
  ActiveTab,
  BLockImg,
  BlockLeft,
  BlockRight,
  ButtonSection,
  FeatureImage,
  HeroBlock,
  HeroBody,
  TabSection,
  TabView,
  TemplateHeroSection
} from './styles';

export default function TemplateDetailHero({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  imageList
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTabIbndex, setSelectedTabIbndex] = useState(0);
  const onClickTab = useCallback((index) => {
    setSelectedTabIbndex(index);
  }, []);

  const onClick = useCallback(
    (imageIndex) => {
      if (imageIndex) setSelectedTabIbndex(Number(imageIndex));
      setIsOpen(!isOpen);
    },
    [isOpen]
  );

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);
  const onClickNextImage = () => {
    setSelectedTabIbndex((prevIndex) => (prevIndex === imageList.length - 1 ? 0 : prevIndex + 1));
  };

  const onClickPreviousImage = () => {
    setSelectedTabIbndex((prevIndex) => (prevIndex === 0 ? imageList.length - 1 : prevIndex - 1));
  };
  const tabListView = useMemo(() => {
    return imageList?.map((item, index) => {
      return (
        <TabView
          key={`tablist_index_${index}`}
          onClick={() => onClickTab(index)}
          className={index === selectedTabIbndex ? 'activetab' : ''}>
          <span>{`${index < 9 ? '0' : ''}${index + 1}`}</span>
          {index === selectedTabIbndex && (
            <ActiveTab>
              <Image src='/images/smallvertical.svg' alt='line-icon' width={1} height={21} />
            </ActiveTab>
          )}
        </TabView>
      );
    });
  }, [imageList, onClickTab, selectedTabIbndex]);
  return (
    <>
      <TemplateHeroSection>
        <Container>
          <HeroBlock>
            <BlockLeft>
              {!isEmpty(title) && <h1>{title}</h1>}
              <HeroBody>{!isEmpty(description) && <ReactMarkdown>{description}</ReactMarkdown>}</HeroBody>
              <ButtonSection>
                {!isEmpty(primaryButtonText) && !isEmpty(primaryButtonLink) && (
                  <Button
                    text={primaryButtonText}
                    href={primaryButtonLink}
                    bgColor={primary}
                    fontColor={whiteColor}
                    borderColor={primary}
                    hoverColor='rgba(255, 255, 255,0.8)'
                  />
                )}
                {!isEmpty(secondaryButtonText) && !isEmpty(secondaryButtonLink) && (
                  <Button
                    text={secondaryButtonText}
                    href={secondaryButtonLink}
                    bgColor={'transparent'}
                    fontColor={black}
                    borderColor={black}
                    hoverColor={'rgba(0, 0, 0, 0.5)'}
                  />
                )}
              </ButtonSection>
            </BlockLeft>
            <BlockRight>
              <BLockImg>
                <FeatureImage
                  src={imageList[selectedTabIbndex]?.url}
                  alt='template-image'
                  height={400}
                  width={513}
                  layout='responsive'
                  className='heroimage'
                  onClick={() => onClick(selectedTabIbndex)}
                />
              </BLockImg>
              {isOpen ? (
                <ZoomImageSlider
                  isSlideButtonHide={imageList?.length <= 1}
                  imageUrl={imageList[selectedTabIbndex]?.url}
                  goToNextImage={onClickNextImage}
                  goToPreviousImage={onClickPreviousImage}
                  onCloseModal={onCloseModal}
                />
              ) : null}
              <TabSection>{tabListView}</TabSection>
            </BlockRight>
          </HeroBlock>
        </Container>
      </TemplateHeroSection>
    </>
  );
}
