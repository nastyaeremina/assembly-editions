import styled from "styled-components";
import { Body1, Body4, Heading3, Heading4, LinkTxt } from "../../styles/styles";
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
    background-image: url("/images/billhoverbg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    a {
      color: ${({ theme }) => theme.colors.whiteColor};
      position: relative;
      top: 3px;
    }
  }
  .file:hover .hide {
    display: block;
  }
  .file:hover .show {
    display: none;
  }

  .file:hover {
    background-image: url("/images/hoverfile.svg");
    background-repeat: no-repeat;
    background-size: cover;
    a {
      color: ${({ theme }) => theme.colors.whiteColor};
    }
  }
  .form:hover {
    background-image: url("/images/hoverform.svg");
  }
  .base:hover {
    background-image: url("/images/hoverbase.svg");
  }
  .contact:hover {
    background-image: url("/images/hovercontact.svg");
  }
`;
const ModuleCard = styled.div`
  padding: 24px 20px;
  border: 1px solid #01292c;
  border-radius: 4px;
  /* transition: all 5s ease; */
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
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 40px 50px;
  display: flex;
  gap: 60px;
`;
const BlockText = styled.div`
  text-align: left;
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
  .learn-link,
  .learn-link svg path {
    transition: all 300ms ease;
  }
  a {
    color: ${({ theme }) => theme.colors.title};
    cursor: pointer;
    display: block;
    :hover .HoverArrow__linePath {
      opacity: 1;
      fill: none;
    }
    :hover .HoverArrow__tipPath {
      transform: translateX(4px);
    }
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
const ImageWrapper = styled.div``;
const HelpLink = styled.div`
  display: block;
  margin-top: 40px;
  text-align: left;
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
  HelpLink,
};
