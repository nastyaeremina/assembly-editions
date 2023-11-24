'use client';

import Link from 'next/link';
import Image from 'next/image';
import { React } from 'react';
import Vector from '../../../public/images/vector.svg';
import { ButtonContainer, Buttons } from './style';

function myFunction(e) {
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left; //x position within the element.
  var y = e.clientY - rect.top; //y position within the element.
  e.target.style.setProperty('--cursor-x', x);
  e.target.style.setProperty('--cursor-y', y);
}
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
  isLoading
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
      ) : isLink ? (
        <Link onMouseMove={(e) => myFunction(e)} href={href} target={target}>
          {isicon && <Image src={imgUrl} alt={'icon'} width={20} height={20} className='icon' />}
          {isCamelCase ? text[0].toUpperCase() + text.substring(1).toLowerCase() : text}
        </Link>
      ) : (
        <a>{text[0].toUpperCase() + text.substring(1).toLowerCase()}</a>
      )}
    </ButtonContainer>
  );
}
