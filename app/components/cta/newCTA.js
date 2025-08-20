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
  PrimaryButton,
  SecondaryButton,
  TextSection,
  Title
} from './newCTAStyles';
import { Container } from '../../styles/commonStyles';
import SVGComponent from '../../../public/images/svg/SVGComponent';

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
              <PrimaryButton href={primaryButtonLink}>{primaryButtonText}</PrimaryButton>
              <SecondaryButton href={secondaryButtonLink}>
                {secondaryButtonText}
                <SVGComponent name='cta-button-arrow' width='15' height='13' viewBox='0 0 15 13' />
              </SecondaryButton>
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
