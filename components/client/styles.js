import styled from 'styled-components';
import { Body1, Body4, Heading3, Heading4, LinkTxt } from '../../styles/styles';
const ClientMain = styled.div`
  padding: 50px 0;
`;
const ClientHero = styled.div`
  text-align: center;
  h3 {
    max-width: 920px;
    width: 100%;
    ${Heading3};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 auto;
  }
`;
const CardSection = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  padding-bottom: 16px;
  padding-top: 40px;
  /* transition: all 0.5s ease; */
  .mydiv:hover .hide {
    display: block;
  }
  .mydiv:hover .show {
    display: none;
  }

  .mydiv:hover {
    background-image: url('/images/billhoverbg.svg');
    background-repeat: no-repeat;
    background-size: cover;
    a {
      color: ${({ theme }) => theme.colors.bluelight};
      position: relative;
      top: 3px;
    }
  }
  .file {
    border: 1px solid #01011d;
  }
  .form {
    border: 1px solid #171500;
  }
  .Helpdesk {
    border: 1px solid #1c0c00;
  }
  .message {
    border: 1px solid #27000a;
  }
  .file:hover .hide {
    display: block;
  }
  .file:hover .show {
    display: none;
  }

  .file:hover {
    background-image: url('/images/hoverfile.svg');
    background-repeat: no-repeat;
    background-size: cover;
    a {
      color: ${({ theme }) => theme.colors.purplelight};
    }
  }
  .form:hover {
    background-image: url('/images/hoverform.svg');
    a {
      color: ${({ theme }) => theme.colors.yellowlight};
    }
  }
  .Helpdesk:hover {
    background-image: url('/images/hoverbase.svg');
    a {
      color: ${({ theme }) => theme.colors.orangelight};
    }
  }
  .message:hover {
    background-image: url('/images/hovermessage.svg');
    a {
      color: ${({ theme }) => theme.colors.brownlight};
    }
  }
`;
const ModuleCard = styled.div`
  padding: 36px;
  border: 1px solid #01292c;
  border-radius: 4px;
  display: block;
  /* transition: all 5s ease; */
  .learn-link,
  .learn-link svg path {
    transition: all 300ms ease;
  }

  .learn-link:hover {
    color: black;
  }
  .learn-link svg path {
    transition: all 300ms ease;
  }
  .HoverArrow__linePath {
    opacity: 0;
    fill: none;
  }
  .HoverArrow {
    stroke-width: 2px;
    fill: none;
    stroke: currentColor;
    position: relative;
    /* top: 1px; */
    margin-left: var(--arrowSpacing);
    stroke-width: 2px;
    fill: none;
    stroke: currentColor;
    margin-left: 8px;
  }
  a {
    color: ${({ theme }) => theme.colors.title};
    cursor: pointer;
    display: block;
    ${LinkTxt};
    :hover .HoverArrow__linePath {
      opacity: 1;
      fill: none;
    }
    :hover .HoverArrow__tipPath {
      transform: translateX(4px);
    }
  }
  .hide {
    display: none;
  }
  :hover {
    display: block;
    color: white;
  }

  :hover .HoverArrow__linePath {
    opacity: 1;
    fill: none;
  }
  :hover .HoverArrow__tipPath {
    transform: translateX(4px);
  }
`;
const CardText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 40px;
  transition: all 300ms ease-in-out;
  h4 {
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
    ${LinkTxt};
  }
  h4:hover {
    color: white;
  }
`;
const BlockSection = styled.div`
  border: 1px solid #00160e;
  border-radius: 4px;
  padding: 40px 49px;
  display: flex;
  gap: 60px;
  img {
    max-width: 185px;
    width: 100%;
    max-height: 145px;
    height: 100%;
  }
  :hover {
    background-image: url('/images/hoverblock.svg');
    background-repeat: no-repeat;
    background-size: cover;
    a {
      color: ${({ theme }) => theme.colors.greenlight};
    }
    h3 {
      color: ${({ theme }) => theme.colors.greenlight};
    }
  }
  :hover .HoverArrow__linePath {
    opacity: 1;
    fill: none;
  }
  :hover .HoverArrow__tipPath {
    transform: translateX(4px);
  }
`;
const BlockText = styled.div`
  text-align: left;
  max-width: 879px;
  width: 100%;
  h3 {
    margin: 0 0 50px 0;
    ${Body1};
    color: ${({ theme }) => theme.colors.greendark};
  }
  .hidden {
    display: none;
  }
`;
const BlockWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .hidden {
    display: none;
  }
  .show {
    display: block;
  }
  h4 {
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
    ${LinkTxt};
  }
  .show:hover {
    display: none;
  }
  .hidden:hover {
    display: block;
  }
`;
const HelpLeftSub = styled.div`
  h4 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 12px 0;
  }
  p {
    ${Body4};
    margin: 0 0 20px 0;
    color: ${({ theme }) => theme.colors.bodycolor};
  }
`;
const ImageWrapper = styled.div`
  max-height: 165px;
  height: 100%;
`;
const HelpLink = styled.div`
  display: block;
  margin-top: 40px;
  text-align: left;
  .learn-link,
  .learn-link svg path {
    transition: all 300ms ease;
  }

  .learn-link:hover {
    color: black;
  }
  .learn-link svg path {
    transition: all 300ms ease;
  }
  .HoverArrow__linePath {
    opacity: 0;
    fill: none;
  }
  .HoverArrow {
    stroke-width: 2px;
    fill: none;
    stroke: currentColor;
    position: relative;
    /* top: 1px; */
    margin-left: var(--arrowSpacing);
    stroke-width: 2px;
    fill: none;
    stroke: currentColor;
    margin-left: 8px;
  }
  a {
    color: ${({ theme }) => theme.colors.title};
    cursor: pointer;
    display: block;
    ${LinkTxt};
    :hover .HoverArrow__linePath {
      opacity: 1;
      fill: none;
    }
    :hover .HoverArrow__tipPath {
      transform: translateX(4px);
    }
  }
`;
export {
  ClientMain,
  ClientHero,
  CardSection,
  ModuleCard,
  CardText,
  BlockSection,
  BlockText,
  BlockWrap,
  HelpLeftSub,
  ImageWrapper,
  HelpLink
};
