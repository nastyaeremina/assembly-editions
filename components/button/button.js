import Link from 'next/link';
import { React } from 'react';
import { ButtonContainer } from './style';

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
  target = '_self'
}) {
  return (
    <ButtonContainer
      onClick={onClick}
      backgroundColor={bgColor}
      hoverColor={hoverColor}
      borderColor={borderColor}
      fontColor={fontColor}
      className={className}>
      {isLink ? (
        <Link onMouseMove={(e) => myFunction(e)} href={href} target={target}>
          {text}
        </Link>
      ) : (
        <a>{text}</a>
      )}
    </ButtonContainer>
  );
}
