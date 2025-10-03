'use client';
import React from 'react';
import { isEmpty } from '../../../helpers/helpers';
import { ButtonVariant, HeroTypes } from '../../../constants/constant';
import { ButtonGroups, HeroHeading, LeftHeroSectionMainDiv, Para } from './style';
import ButtonV2Component from '../../button/buttonV2/buttonV2';

/**
 * Heading Component
 * A component that displays a heading section with optional buttons and social proof.
 *
 * @param {Object} props - Component props
 * @param {string} title - The section title, which can include HTML for styling.
 * @param {string} description - The section description, displayed below the title.
 * @param {string} primaryButtonText - The text for the primary button.
 * @param {string} primaryButtonLink - The link for the primary button.
 * @param {string} secondaryButtonText - The text for the secondary button.
 * @param {string} secondaryButtonLink - The link for the secondary button.
 * @param {'center' | 'left'} variant - Determines the alignment of the heading and buttons.
 * @param {React.ReactNode} children - Optional additional content to be rendered within the component.
 * @param {boolean} isDownload - Indicates whether the secondary button should link to a download.
 * each containing a link and a title to be displayed as part of the rating view.
 */

function Heading({
  title,
  description,
  primaryButtonLink,
  primaryButtonText,
  secondaryButtonLink,
  secondaryButtonText,
  variant = HeroTypes.LEFT,
  children,
  isDownload
}) {
  // button empty state
  const showPrimaryButton = !isEmpty(primaryButtonText) && !isEmpty(primaryButtonLink);
  const showSecondaryButton = !isEmpty(secondaryButtonText) && !isEmpty(secondaryButtonLink);
  const isShowButton = showPrimaryButton || showSecondaryButton;

  return (
    <LeftHeroSectionMainDiv variant={variant}>
      {!isEmpty(title) && (
        <HeroHeading
          dangerouslySetInnerHTML={{ __html: title }}
          className={variant === HeroTypes.CENTER ? 'center-title' : ''}
          variant={variant}
        />
      )}
      {!isEmpty(description) && <Para variant={variant}>{description}</Para>}
      {children}
      {isShowButton && (
        <ButtonGroups>
          {showPrimaryButton && (
            <ButtonV2Component title={primaryButtonText} href={primaryButtonLink} download={isDownload} />
          )}
          {showSecondaryButton && (
            <ButtonV2Component
              title={secondaryButtonText}
              href={secondaryButtonLink}
              variant={showPrimaryButton ? ButtonVariant.SECONDARY : ButtonVariant.SECONDARY_WITH_BORDER}
              postIcon
              download={isDownload}
            />
          )}
        </ButtonGroups>
      )}
    </LeftHeroSectionMainDiv>
  );
}

export default Heading;
