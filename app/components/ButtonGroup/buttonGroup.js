import React from 'react';
import Button from '../button/button';
import { isEmpty } from '../../helpers/helpers';
import { ButtonGroups } from './styles';

/**
 * Automation section
 * @param {string} primaryButtonLink - URL for the primary button
 * @param {string} primaryButtonText - Text displayed on the primary button
 * @param {string} secondaryButtonLink - URL for the secondary button
 * @param {string} secondaryButtonText - Text displayed on the secondary button
 * @param {string} className - Additional CSS class names to apply to the button group.
 * @param {'white' | 'black'} secondaryButtonVariant - Indicates if the button should have a white style, affecting the font color and border color.
 * @param {boolean} isCamelCase - Determines if the button text should be displayed in camel case.
 */

export default function ButtonGroup({
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className,
  secondaryButtonVariant = 'black',
  isCamelCase
}) {
  const showPrimaryButton = !isEmpty(primaryButtonText) && !isEmpty(primaryButtonLink);
  const showSecondaryButton = !isEmpty(secondaryButtonText) && !isEmpty(secondaryButtonLink);
  if (!showPrimaryButton && !showSecondaryButton) {
    return null;
  }
  return (
    <>
      {(showPrimaryButton || showSecondaryButton) && (
        <ButtonGroups className={className}>
          {showPrimaryButton && <Button text={primaryButtonText} href={primaryButtonLink} />}
          {showSecondaryButton && (
            <Button
              text={secondaryButtonText}
              href={secondaryButtonLink}
              bgColor={'transparent'}
              fontColor={secondaryButtonVariant === 'white' ? '--light-green' : '--black'}
              borderColor={secondaryButtonVariant === 'white' ? '--light-green' : '--black'}
              hoverColor={secondaryButtonVariant === 'white' ? '--secondary-hover-color' : '--hover-color'}
              isCamelCase={isCamelCase}
            />
          )}
        </ButtonGroups>
      )}
    </>
  );
}
