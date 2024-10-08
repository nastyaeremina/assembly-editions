'use client';

import Link from 'next/link';
import Image from 'next/image';
import { React } from 'react';
import { ButtonContainer, Buttons } from './style';

/**
 * Adjusts the CSS custom properties for the cursor position.
 * @param {MouseEvent} e - The mouse event triggered on movement.
 */
function myFunction(e) {
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left; //x position within the element.
  var y = e.clientY - rect.top; //y position within the element.
  e.target.style.setProperty('--cursor-x', x);
  e.target.style.setProperty('--cursor-y', y);
}

/**
 * Button component that renders different types of buttons or links based on the props.
 * @param {string} bgColor - Background color for the button.
 * @param {string} hoverColor - Hover color for the button.
 * @param {string} borderColor - Border color for the button.
 * @param {string} fontColor - Font color for the button text.
 * @param {string} href - The URL to navigate to if the button is a link.
 * @param {string} text - The text to display on the button.
 * @param {string} className - Custom class name for additional styling.
 * @param {function} onClick - Function to handle click events.
 * @param {boolean} isLink - Whether the button should act as a link.
 * @param {string} target - Specifies where to open the link (e.g., '_self', '_blank').
 * @param {string} type - Type of the button (e.g., 'button' or 'submit').
 * @param {string} imgUrl - URL for the icon image if `isicon` is true.
 * @param {boolean} isicon - Whether to display an icon alongside the text.
 * @param {boolean} isCamelCase - Whether to convert the text to camel case.
 * @param {boolean} isLoading - Loading state of the button.
 * @param {boolean} isDownload - Whether the link should trigger a download.
 * @returns {JSX.Element} A rendered button or link component.
 */

export default function Button({
  bgColor = '#09AA6C',
  hoverColor,
  borderColor = 'transparent',
  fontColor = '#ffffff',
  href = '#',
  text,
  className,
  onClick,
  isLink = true,
  target = '_self',
  type = 'button',
  imgUrl,
  isicon = false,
  isCamelCase = true,
  isLoading,
  isDownload = false
}) {
  return (
    <ButtonContainer
      onClick={onClick}
      backgroundColor={bgColor}
      hoverColor={hoverColor}
      borderColor={borderColor}
      fontColor={fontColor}
      className={className}
      isLoading={isLoading}>
      {type === 'submit' ? (
        // Renders a submit button if `type` is 'submit'.
        <Buttons
          type={'submit'}
          onClick={onClick}
          isLoading={isLoading}
          fontColor={fontColor}
          backgroundColor={bgColor}
          hoverColor={hoverColor}
          borderColor={borderColor}>
          {text}
        </Buttons>
      ) : isDownload ? (
        // Renders an anchor tag with a download attribute if `isDownload` is true.
        <a onMouseMove={(e) => myFunction(e)} href={href} download>
          {isicon && <Image src={imgUrl} alt={'icon'} width={20} height={20} className='icon' />}
          {isCamelCase ? text[0].toUpperCase() + text.substring(1).toLowerCase() : text}
        </a>
      ) : isLink ? (
        // Renders a Next.js Link component if `isLink` is true.
        <Link onMouseMove={(e) => myFunction(e)} href={href} target={target}>
          {isicon && <Image src={imgUrl} alt={'icon'} width={20} height={20} className='icon' />}
          {isCamelCase ? text[0].toUpperCase() + text.substring(1).toLowerCase() : text}
        </Link>
      ) : (
        // Renders a plain anchor tag if neither `isLink` nor `isDownload` is true.
        <a>{text[0].toUpperCase() + text.substring(1).toLowerCase()}</a>
      )}
    </ButtonContainer>
  );
}
