'use client';
import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { isEmpty } from '../../helpers/helpers';
import { Container } from '../../styles/commonStyles';
import { Gradient } from '../../../public/js/Gradient';
import Button from '../button/button';
import { ButtonSection, Content, CtaAnimation, CtaWrap, Image, ImageSection, TextSection, Title } from './newCTAStyles';

export default function NewCTA({
  title,
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
    // Initialize background animation for the CTA section
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);

  const imageSectionRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Function to calculate and update the height of the CtaAnimation element
  const updateHeight = () => {
    if (imageSectionRef.current) {
      let imageHeight = imageSectionRef.current.offsetHeight; // Get the current height of the image section

      // Add additional space based on the window height
      if (window.innerHeight > 768) {
        // Add 180 pixels if the window height is greater than 768px
        imageHeight += 180; // 180 is spacing of CTA
      } else {
        // Add 148 pixels if the window height is 768px or less
        imageHeight += 148; // 148 is spacing of CTA
      }

      setHeight(imageHeight); // Update state with the new height
    }
  };

  useEffect(() => {
    // Update height on initial load
    updateHeight();

    // Add event listener to handle window resize
    window.addEventListener('resize', updateHeight);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <>
      <CtaAnimation>
        <canvas
          id='gradient-canvas'
          data-transition-in
          className={moduleName ? moduleName : 'entrance'}
          style={{ height: `${height}px` }}
        />
        <CtaWrap>
          <Container ref={imageSectionRef}>
            <Content>
              <TextSection>
                <Title>
                  <ReactMarkdown>{title}</ReactMarkdown>
                </Title>
                {(showPrimaryButton || showSecondaryButton) && (
                  <ButtonSection>
                    {showPrimaryButton && <Button text={primaryButtonText} href={primaryButtonLink} />}
                    {showSecondaryButton && (
                      <Button
                        text={secondaryButtonText}
                        href={secondaryButtonLink}
                        bgColor={'transparent'}
                        fontColor={'--light-green'}
                        borderColor={'--light-green'}
                        hoverColor={'--secondary-hover-color'}
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
