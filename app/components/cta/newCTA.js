'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { isEmpty } from '../../helpers/helpers';
import { Container } from '../../styles/commonStyles';
import { Gradient } from '../../../public/js/Gradient';
import ButtonGroup from '../ButtonGroup/buttonGroup';
import { Content, CtaAnimation, CtaWrap, Description, Image, ImageSection, TextSection, Title } from './newCTAStyles';

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
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);

  return (
    <>
      <CtaAnimation>
        <canvas id='gradient-canvas' data-transition-in className={moduleName || 'entrance'} />
        <CtaWrap>
          <Container>
            <Content isNoImage={isEmpty(banner)}>
              <TextSection isNoImage={isEmpty(banner)}>
                <Title isNoImage={isEmpty(banner)}>
                  <ReactMarkdown>{title}</ReactMarkdown>
                  {isEmpty(banner) && <Description>{description}</Description>}
                </Title>
                <ButtonGroup
                  primaryButtonLink={primaryButtonLink}
                  primaryButtonText={primaryButtonText}
                  secondaryButtonLink={secondaryButtonLink}
                  secondaryButtonText={secondaryButtonText}
                  secondaryButtonVariant='white'
                  isCamelCase={false}
                  className={isEmpty(banner) ? 'button-group' : 'button'}
                />
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
