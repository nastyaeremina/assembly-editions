'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { isEmpty } from '../../helpers/helpers';
import {
  ButtonGroup,
  CtaAnimation,
  CtaWrap,
  Description,
  Image,
  ImageSection,
  TextSection,
  Title
} from './newCTAStyles';
import { Container } from '../../styles/commonStyles';
import ButtonV2Component from '../button/buttonV2/buttonV2';
import { ButtonTone, ButtonVariant } from '../../constants/constant';

export default function NewCTA({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  banner
}) {
  return (
    <CtaAnimation>
      <Container>
        <CtaWrap isNoImage={isEmpty(banner)}>
          <TextSection isNoImage={isEmpty(banner)}>
            <Title isNoImage={isEmpty(banner)}>
              <ReactMarkdown>{title}</ReactMarkdown>
            </Title>
            {isEmpty(banner) && <Description>{description}</Description>}
            <ButtonGroup isNoImage={isEmpty(banner)}>
              <ButtonV2Component title={primaryButtonText} tone={ButtonTone.DARK} href={primaryButtonLink} />
              <ButtonV2Component
                title={secondaryButtonText}
                variant={ButtonVariant.SECONDARY}
                tone={ButtonTone.DARK}
                iconName={'cta-button-arrow'}
                href={secondaryButtonLink}
                iconSize='16'
              />
            </ButtonGroup>
          </TextSection>
          {!isEmpty(banner) && (
            <ImageSection>
              <Image src={banner} alt='CTA Image' width='612' height='310' />
            </ImageSection>
          )}
        </CtaWrap>
      </Container>
    </CtaAnimation>
  );
}
