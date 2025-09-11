'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { isEmpty } from '../../helpers/helpers';
import { ButtonGroup, CtaAnimation, CtaWrap, Description, TextSection, Title } from './newCTAStyles';
import { Container } from '../../styles/commonStyles';
import ButtonV2Component from '../button/buttonV2/buttonV2';
import { ButtonTone, ButtonVariant } from '../../constants/constant';

export default function NewCTA({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}) {
  //handle button empty state
  const showPrimaryButton = !isEmpty(primaryButtonText) && !isEmpty(primaryButtonLink);
  const showSecondaryButton = !isEmpty(secondaryButtonText) && !isEmpty(secondaryButtonLink);
  const isShowButton = showPrimaryButton || showSecondaryButton;

  return (
    <CtaAnimation>
      <Container>
        <CtaWrap>
          <TextSection>
            {!isEmpty(title) && (
              <Title>
                <ReactMarkdown>{title}</ReactMarkdown>
              </Title>
            )}
            {!isEmpty(description) && <Description>{description}</Description>}
            {isShowButton && (
              <ButtonGroup>
                {showPrimaryButton && (
                  <ButtonV2Component title={primaryButtonText} tone={ButtonTone.DARK} href={primaryButtonLink} />
                )}
                {showSecondaryButton && (
                  <ButtonV2Component
                    title={secondaryButtonText}
                    variant={ButtonVariant.SECONDARY}
                    tone={ButtonTone.DARK}
                    iconName={'cta-button-arrow'}
                    href={secondaryButtonLink}
                    iconSize='16'
                  />
                )}
              </ButtonGroup>
            )}
          </TextSection>
        </CtaWrap>
      </Container>
    </CtaAnimation>
  );
}
