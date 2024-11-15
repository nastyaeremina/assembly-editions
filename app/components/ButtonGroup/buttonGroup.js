import React from 'react';
import Button from '../button/button';
import { isEmpty } from '../../helpers/helpers';
import { ButtonGroups } from './styles';

export default function ButtonGroup({
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  hasMarginTop,
  className
}) {
  const showPrimaryButton = !isEmpty(primaryButtonText) && !isEmpty(primaryButtonLink);
  const showSecondaryButton = !isEmpty(secondaryButtonText) && !isEmpty(secondaryButtonLink);
  if (!showPrimaryButton && !showSecondaryButton) {
    return null;
  }
  return (
    <>
      <ButtonGroups hasMarginTop={hasMarginTop} className={className}>
        {showPrimaryButton && <Button text={primaryButtonText} href={primaryButtonLink} />}
        {showSecondaryButton && (
          <Button
            text={secondaryButtonText}
            href={secondaryButtonLink}
            bgColor={'transparent'}
            fontColor={'--black'}
            borderColor={'--black'}
            hoverColor={'--hover-color'}
          />
        )}
      </ButtonGroups>
    </>
  );
}
