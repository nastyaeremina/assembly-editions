import styled, { css } from 'styled-components';
import Link from 'next/link';
import { Body1, Body4, Heading3, Heading4, LinkTxt } from '../../styles/styles';

const ClientMain = styled.div`
  padding: 50px 0 100px 0;
  &::before {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    z-index: -1;
    content: url(/images/billhoverbg.svg) url(/images/hoverfile.svg) url(/images/hoverblock.svg)
      url(/images/hoverform.svg) url(/images/hoverbase.svg) url(/images/hovermessage.svg);
  }
  @media only screen and (max-width: 769px) {
    padding: 40px 0 80px 0;
  }
`;
const ClientHero = styled.div`
  text-align: center;
  h2 {
    max-width: 920px;
    width: 100%;
    ${Heading3};
    color: var(--title);
    margin: 0 auto;
    span {
      color: var(--primary);
    }
  }
  @media only screen and (max-width: 749px) {
    text-align: left;
  }
`;
const CardSection = styled.div`
  /* display: grid; */
  gap: 16px;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: stretch;
  align-content: stretch;
  width: 100%;
  padding-bottom: 16px;
  padding-top: 40px;
  ${(props) =>
    props.isProductdemo &&
    css`
      /* display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
    `}
  /* transition: all 0.5s ease; */
  .mydiv:hover .hide {
    display: block;
    @media only screen and (max-width: 749px) {
      display: none;
    }
  }
  .mydiv:hover .show {
    display: none;
    @media only screen and (max-width: 749px) {
      display: block;
    }
  }
  ${(props) =>
    props.bgImage &&
    css`
      .mydiv:hover {
        background-image: url('/images/billhoverbg.svg');
      }
    `}
  .mydiv:hover {
    /* background-image: url('/images/billhoverbg.svg'); */
    background-repeat: no-repeat;
    background-size: cover;
    a {
      color: var(--light-blue);
      /* position: relative;
      top: 3px; */
    }
    @media only screen and (max-width: 749px) {
      background-image: none;
      a {
        color: var(--title);
      }
    }
  }
  @media only screen and (max-width: 749px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .file {
    border: 1px solid var(--dark-purple);
  }
  .form {
    border: 1px solid var(--dark-yellow);
  }
  .Helpdesk {
    border: 1px solid var(--dark-orange);
  }
  .message {
    border: 1px solid var(--dark-magenta);
  }
  .file:hover .hide {
    display: block;
    @media only screen and (max-width: 749px) {
      display: none;
    }
  }
  .file:hover .show {
    display: none;
    @media only screen and (max-width: 749px) {
      display: block;
    }
  }
  .file:hover {
    background-image: url('/images/hoverfile.svg');
    background-repeat: no-repeat;
    background-size: cover;
    a {
      color: var(--light-purple);
    }
    @media only screen and (max-width: 991px) {
      background-image: none;
      a {
        color: var(--title);
      }
    }
  }
  .form:hover {
    background-image: url('/images/hoverform.svg');
    a {
      color: var(--light-yellow);
    }
    @media only screen and (max-width: 991px) {
      background-image: none;
      a {
        color: var(--title);
      }
    }
  }
  .Helpdesk:hover {
    background-image: url('/images/hoverbase.svg');
    @media only screen and (max-width: 991px) {
      background-image: none;
    }
    a {
      color: var(--light-orange);
      @media only screen and (max-width: 991px) {
        color: var(--title);
      }
    }
  }
  .message:hover {
    background-image: url('/images/hovermessage.svg');
    @media only screen and (max-width: 991px) {
      background-image: none;
    }
    a {
      color: var(--light-brown);
      @media only screen and (max-width: 991px) {
        color: var(--title);
      }
    }
  }
  @media only screen and (max-width: 749px) {
    grid-template-columns: 1fr 1fr;
    gap: 11px;
    row-gap: 16px;
    flex-wrap: wrap;
  }
`;
const BlockSection = styled(Link)`
  border: 1px solid var(--dark-green);
  border-radius: 4px;
  padding: 40px 49px;
  display: flex;
  align-items: center;
  gap: 60px;
  width: 100%;
  img {
    max-width: 185px;
    width: 100%;
    max-height: 145px;
    height: 100%;
  }
  @media only screen and (max-width: 749px) {
    padding: 30px 35px;
    gap: 40px;

    img {
      max-width: 124px;
    }
  }
  @media only screen and (max-width: 749px) {
    flex-direction: column;
    gap: 0;
    padding: 20px;
    max-width: 100%;
    width: 100%;
  }
  :hover {
    background-image: url('/images/hoverblock.svg');
    background-repeat: no-repeat;
    background-size: cover;
    @media only screen and (max-width: 991px) {
      background-image: none;
    }
    a {
      color: var(--light-green);
      @media only screen and (max-width: 991px) {
        color: var(--title);
      }
    }
    h3 {
      color: var(--light-green);
      @media only screen and (max-width: 991px) {
        color: var(--title);
      }
    }
    .hide {
      display: block;
      @media only screen and (max-width: 749px) {
        display: none;
      }
    }
    .show {
      display: none;
      @media only screen and (max-width: 749px) {
        display: block;
      }
    }
  }

  :hover .HoverArrow__linePath {
    opacity: 1;
    fill: none;
  }
  :hover .HoverArrow__tipPath {
    transform: translateX(4px);
  }
  .hide {
    display: none;
  }
`;
const BlockText = styled.div`
  text-align: left;
  max-width: 879px;
  width: 100%;
  h3 {
    margin: 0 0 50px 0;
    ${Body1};
    color: var(--dark-green);
  }
  .hidden {
    display: none;
  }
  .learn-link:hover {
    color: var(--light-green);

    @media only screen and (max-width: 991px) {
      color: var(--title);
    }
  }
  @media only screen and (max-width: 991px) {
    h3 {
      font-size: 18px;
      line-height: 23px;
      margin-bottom: 0;
    }
    @media only screen and (max-width: 749px) {
      h3 {
        display: none;
      }
    }
  }
`;
const HelpLeftSub = styled.div`
  display: block;
  margin-top: 40px;
  h4 {
    ${Heading4};
    color: var(--title);
    margin: 0 0 12px 0;
  }
  p {
    ${Body4};
    margin: 0 0 20px 0;
    color: var(--body);
  }
  @media only screen and (max-width: 769px) {
    margin-top: 18px;
  }
`;

const HelpLink = styled.div`
  text-align: left;
  white-space: nowrap;
  .mobilearrow {
    display: none;
  }
  @media only screen and (max-width: 769px) {
    display: flex;
    align-items: center;
    .center {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .mobilearrow {
      display: block;
    }
  }
  .learn-link {
    transition: transform 300ms ease;
    height: 100%;
  }
  .learn-link svg path {
    transition: transform 300ms ease;
  }
  .learn-link:hover {
    @media only screen and (max-width: 749px) {
      color: var(--title);
    }
  }
  .learn-link svg path {
    transition: transform 300ms ease;
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
    margin-left: var(--arrowSpacing);
    stroke-width: 2px;
    fill: none;
    stroke: currentColor;
    margin-left: 8px;
    @media only screen and (max-width: 769px) {
      display: none;
    }
  }
  a {
    color: var(--title);
    cursor: pointer;
    display: block;
    ${LinkTxt};
    @media only screen and (max-width: 769px) {
      font-size: 16px;
      line-height: 24px;
    }
    :hover .HoverArrow__linePath {
      opacity: 1;
      fill: none;
      @media only screen and (max-width: 749px) {
        opacity: 0;
      }
    }
    :hover .HoverArrow__tipPath {
      transform: translateX(4px);
      @media only screen and (max-width: 749px) {
        transform: none;
      }
    }
  }
`;

export { ClientMain, ClientHero, CardSection, BlockSection, BlockText, HelpLeftSub, HelpLink };
