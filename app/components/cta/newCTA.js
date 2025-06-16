'use client';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { isEmpty } from '../../helpers/helpers';
import { Gradient } from '../../../public/js/Gradient';
import ButtonGroup from '../ButtonGroup/buttonGroup';
import {
  Canvas,
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
  const [isGradientReady, setIsGradientReady] = useState(false);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
    setIsGradientReady(true);
  }, []);

  return (
    <CtaAnimation>
      <Canvas
        id='gradient-canvas'
        data-transition-in
        className={moduleName || 'entrance'}
        isGradientReady={isGradientReady}
      />
      <CtaWrap isNoImage={isEmpty(banner)}>
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
      </CtaWrap>
    </CtaAnimation>
  );
}
