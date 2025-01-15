'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { isEmpty } from '../../helpers/helpers';
import { Container } from '../../styles/commonStyles';
import { Gradient } from '../../../public/js/Gradient';
import Button from '../button/button';
import {
  ButtonSection,
  Content,
  CtaAnimation,
  CtaWrap,
  Description,
  Image,
  ImageSection,
  TextSection,
  Title
} from './newCTAStyles';

export default function NewCTA({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  banner,
  moduleName
}) {
  const showPrimaryButton = !isEmpty(primaryButtonText) && !isEmpty(primaryButtonLink);
  const showSecondaryButton = !isEmpty(secondaryButtonText) && !isEmpty(secondaryButtonLink);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);

  const imageSectionRef = useRef(null);
  const [height, setHeight] = useState(() => {
    // Set a default height that fits most screens
    return window.innerHeight > 768 ? 400 : 300;
  });

  const updateHeight = useCallback(() => {
    if (imageSectionRef.current) {
      let imageHeight = imageSectionRef.current.offsetHeight;
      const additionalSpacing = window.innerHeight > 768 ? (isEmpty(banner) ? 157 : 135) : isEmpty(banner) ? 98 : 140;
      setHeight(imageHeight + additionalSpacing);
    }
  }, [banner]);

  useEffect(() => {
    updateHeight(); // Update height on mount
    window.addEventListener('resize', updateHeight); // Handle window resize
    return () => {
      window.removeEventListener('resize', updateHeight); // Cleanup event listener
    };
  }, [updateHeight]);

  return (
    <>
      <CtaAnimation isNoImage={isEmpty(banner)}>
        <canvas
          id='gradient-canvas'
          data-transition-in
          className={moduleName || 'entrance'}
          style={{ height: `${height}px` }}
        />
        <CtaWrap>
          <Container ref={imageSectionRef}>
            <Content isNoImage={isEmpty(banner)}>
              <TextSection isNoImage={isEmpty(banner)}>
                <Title isNoImage={isEmpty(banner)}>
                  <ReactMarkdown>{title}</ReactMarkdown>
                  {isEmpty(banner) && <Description>{description}</Description>}
                </Title>
                {(showPrimaryButton || showSecondaryButton) && (
                  <ButtonSection isNoImage={isEmpty(banner)}>
                    {showPrimaryButton && (
                      <Button text={primaryButtonText} href={primaryButtonLink} isCamelCase={false} />
                    )}
                    {showSecondaryButton && (
                      <Button
                        text={secondaryButtonText}
                        href={secondaryButtonLink}
                        bgColor={'transparent'}
                        fontColor={'--light-green'}
                        borderColor={'--light-green'}
                        hoverColor={'--secondary-hover-color'}
                        isCamelCase={false}
                      />
                    )}
                  </ButtonSection>
                )}
              </TextSection>
              {!isEmpty(banner) && (
                <ImageSection>
                  <Image src={banner} alt='CTA Image' width='612' height='310' />
                </ImageSection>
              )}
            </Content>
          </Container>
        </CtaWrap>
      </CtaAnimation>
    </>
  );
}
