'use client';
import React from 'react';
import { HeaderSection, Title, Description, ButtonGroup, TitleSection } from './style';
import { isEmpty } from 'lodash';
import ButtonV2Component from '../button/buttonV2/buttonV2';
import { ButtonVariant, SectionTone } from '../../constants/constant';

/**
 * SectionHeader component for displaying a section title, description, and optional call-to-action buttons.
 * @param {Object} props - Component props.
 * @param {string} props.title - The main title of the section, which can contain HTML.
 * @param {string} props.description - The description text for the section.
 * @param {string} props.primaryButtonText - The text displayed on the primary call-to-action button.
 * @param {string} props.primaryButtonLink - The URL for the primary call-to-action button.
 * @param {string} props.secondaryButtonText - The text displayed on the secondary call-to-action button.
 * @param {string} props.secondaryButtonLink - The URL for the secondary call-to-action button.
 * @param {SectionTone} [props.tone=SectionTone.LIGHT] - The visual tone of the section, either light or dark.
 */

function SectionHeader({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  tone = SectionTone.LIGHT
}) {
  return (
    <HeaderSection>
      <TitleSection>
        <Title dangerouslySetInnerHTML={{ __html: title }} tone={tone} />
        {!isEmpty(description) && <Description tone={tone}>{description}</Description>}
      </TitleSection>
      {(!isEmpty(primaryButtonText) || !isEmpty(secondaryButtonText)) && (
        <ButtonGroup>
          {!isEmpty(primaryButtonText) && (
            <ButtonV2Component title={primaryButtonText} href={primaryButtonLink} tone={tone} />
          )}
          {!isEmpty(secondaryButtonText) && (
            <ButtonV2Component
              title={secondaryButtonText}
              href={secondaryButtonLink}
              variant={ButtonVariant.SECONDARY}
              postIcon
              tone={tone}
            />
          )}
        </ButtonGroup>
      )}
    </HeaderSection>
  );
}

export default SectionHeader;
