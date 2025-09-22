'use client';
import React from 'react';
import SVGComponent from '../../../../public/images/svg/SVGComponent';
import { Buttons, ButtonWrap } from './style';
import { ButtonSize, ButtonTone, ButtonVariant } from '../../../constants/constant';

/**
 * ButtonV2Component renders a customizable button or link.
 * @param {string} title - The text displayed on the button.
 * @param {function} onClick - Function to call when the button is clicked.
 * @param {'primary' | 'secondary' | 'secondary-with-border'} variant - Defines the button style variant.
 * @param {'medium' | 'regular'} size - Specifies the size of the button.
 * @param {string} iconName - Name of the icon to display on the button.
 * @param {string} iconSize - Size of the icon (default is '16').
 * @param {string} href - URL to navigate to when the button is clicked (if it's a link).
 * @param {boolean} isWidth - Determines if the button should take full width.
 * @param {'regular' | 'dark'} tone - Sets the tone of the button.
 * @param {string} className - Additional class names for styling.
 * @param {boolean} download - Download attribute for anchor tags (filename or true for default).
 */

function ButtonV2Component({
  title,
  onClick,
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.MEDIUM,
  iconName,
  iconSize = '16',
  href,
  isWidth,
  tone = ButtonTone.REGULAR,
  className,
  download = false,
  target,
  isLoading = false
}) {
  return (
    <ButtonWrap isWidth={isWidth} isLoading={isLoading}>
      <Buttons
        onClick={onClick}
        size={size}
        as={href ? 'a' : 'button'}
        isWidth={isWidth}
        variant={variant}
        href={href}
        aria-label={title}
        tone={tone}
        className={className}
        target={target}
        {...(href && download && { download })}>
        <span>{title}</span>
        {iconName && (
          <SVGComponent name={iconName} width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} />
        )}
      </Buttons>
    </ButtonWrap>
  );
}

export default ButtonV2Component;
