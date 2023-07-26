import styled, { css } from 'styled-components';
import { Body4, FooterText, Heading2, Body1, Body2, Body3 } from '../../styles/styles';
import {
  greendark,
  greenlight,
  lightgray,
  neutral,
  title,
  whiteColor,
  greenmidlight
} from './../../styles/color';

const FooterSection = styled.div`
  background-color: ${neutral};
  padding: 40px 0 60px;
  ${(props) =>
    props.isEnterPrice &&
    css`
      background-color: ${greendark};
    `}
  @media only screen and (max-width: 749px) {
    padding: 50px 0;
  }
`;
const FooterSectionLegal = styled.div`
  background-color: ${neutral};
  padding: 40px 0 40px 0;
`;
const FooterInnerBlock = styled.div`
  display: flex;
  gap: 36px;
  @media only screen and (max-width: 749px) {
    flex-wrap: wrap;
    gap: 40px;
  }
`;

const FooterTitleLeft = styled.div`
  @media only screen and (max-width: 991px) {
    margin-bottom: 24px;
  }
`;
const FooterTitleRight = styled.div`
  button {
    :last-child {
      margin-left: 12px;
    }
  }
  @media only screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    button {
      a {
        width: 100%;
      }
      :last-child {
        margin-left: 0;
        margin-top: 12px;
      }
    }
  }
`;
const SectionHeading = styled.h2`
  margin: 0;
  ${Heading2}
  color: ${whiteColor};
`;

const FooterLinkBlock = styled.div`
  max-width: 920px;
  width: 100%;
  margin: 0 auto;
  padding: 64px 0;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
  }
  @media only screen and (max-width: 479px) {
    display: none;
  }
`;

const FooterLinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const FooterMenu = styled.ul`
  margin: 0;
  :last-child {
    /* padding-top: 40px; */
  }
  list-style: none;
  p {
    ${FooterText};
    color: ${title};
    margin: 0;
    padding-bottom: 10px;
  }
  ${(props) =>
    props.isEnterPrice &&
    css`
      p {
        color: ${greenmidlight};
      }
    `}
`;


const FooterSocialList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 24px;
`;
const FooterSocialItem = styled.li`
  display: flex;
  transition: 0.3s;
  cursor: pointer;
  svg {
    path {
      transition: 0.3s;
    }
  }
  :hover {
    svg {
      path {
        fill: #000;
      }
    }
  }
  ${(props) =>
    props.isEnterPrice &&
    css`
      :hover {
        svg {
          path {
            fill: #7ddaa0;
          }
        }
      }
    `}
  a {
    display: inline-block;
    overflow: hidden;
    border-radius: 50%;
    transform: translateY(0);
    transition: all 300ms;
    :hover {
      transform: translateY(-6px);
    }
  }
  img {
    display: block;
  }
  @media only screen and (max-width: 768px) {
    a {
      :hover {
        transform: translateY(0);
      }
    }
  }
`;
const FooterRight = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  @media only screen and (max-width: 749px) {
    display: none;
  }
`;
const MobileFooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MobileFooterMain = styled.div`
  display: none;
  padding: 36px 0 24px 0;
  @media only screen and (max-width: 479px) {
    display: block;
  }
`;
const FooterFirst = styled.div`
  max-width: 270px;
  width: 100%;
  p {
    ${Body4};
    letter-spacing: 0.02em;
    color: ${lightgray};
    margin: 20px 0 24px 0;
  }
  ${(props) =>
    props.isEnterPrice &&
    css`
      p {
        color: ${greenlight};
      }
    `}
  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;
const FotterMenuLeft = styled.div`
  max-width: 290px;
  width: 100%;
  .padding {
    padding-top: 40px;
  }
`;
const FooterMenuList = styled.li`
  a {
    ${FooterText};
    color: ${lightgray};
    display: block;
    padding-bottom: 10px;
    transition: all 300ms;
    cursor: pointer;
    :last-child {
      padding: 0;
    }
    :hover {
      color: ${title};
    }
  }
  ${(props) =>
    props.isEnterPrice &&
    css`
      a {
        color: ${greenlight};
        :hover {
          color: ${greenmidlight};
        }
      }
    `}
`;
const FooterMobile = styled.div`
  display: none;
  @media only screen and (max-width: 749px) {
    display: flex;
    width: 100%;
    gap: 16px;
  }
`;
const FotterMenuMobile = styled.div`
  max-width: 50%;
  width: 100%;
  .padding {
    padding-top: 30px;
  }
`;
const FooterSub = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  p {
    ${FooterText};
    margin: 0;
    color: ${lightgray};
  }
`;
export {
  FooterSection,
  FooterInnerBlock,
  FooterTitleLeft,
  FooterTitleRight,
  FooterLinkBlock,
  FooterLinkList,
  FooterSocialList,
  FooterSocialItem,
  MobileFooterList,
  MobileFooterMain,
  SectionHeading,
  FooterFirst,
  FooterRight,
  FooterMenu,
  FotterMenuLeft,
  FooterMenuList,
  FooterMobile,
  FotterMenuMobile,
  FooterSectionLegal,
  FooterSub
};
