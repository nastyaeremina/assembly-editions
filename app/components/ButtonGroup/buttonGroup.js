import React from 'react';
import { ButtonGroups } from './styles';
import Button from '../button/button';
import { isEmpty } from '../../helpers/helpers';
import { black } from '../../styles/color';

export default function ButtonGroup({
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  hasMarginTop
}) {
  const showPrimaryButton = !isEmpty(primaryButtonText) && !isEmpty(primaryButtonLink);
  const showSecondaryButton = !isEmpty(secondaryButtonText) && !isEmpty(secondaryButtonLink);
  if (!showPrimaryButton && !showSecondaryButton) {
    return null;
  }
  return (
    <>
      <ButtonGroups hasMarginTop={hasMarginTop}>
        {showPrimaryButton && <Button text={primaryButtonText} href={primaryButtonLink} />}
        {showSecondaryButton && (
          <Button
            text={secondaryButtonText}
            href={secondaryButtonLink}
            bgColor={'transparent'}
            fontColor={black}
            borderColor={black}
            hoverColor={'rgba(0, 0, 0, 0.5)'}
          />
        )}
      </ButtonGroups>
    </>
  );
}
