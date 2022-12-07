import Link from 'next/link';
import { React } from 'react';
import { ButtonContainer } from './style';

function myFunction(e) {
  e.target.style.setProperty('--cursor-x', e.clientX - e.target.offsetLeft);
  e.target.style.setProperty('--cursor-y', e.clientY - e.target.offsetTop - document.body.getBoundingClientRect().top);
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
  isLink = true
}) {
  return (
    <ButtonContainer
      onClick={onClick}
      onMouseMove={(e) => myFunction(e)}
      backgroundColor={bgColor}
      hoverColor={hoverColor}
      borderColor={borderColor}
      fontColor={fontColor}
      className={className}>
      {isLink ? <Link href={href}>{text}</Link> : <a>{text}</a>}
    </ButtonContainer>
  );
}
