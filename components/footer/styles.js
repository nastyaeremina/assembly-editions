import styled, { css } from "styled-components";
import {
  Body4,
  FooterText,
  Heading2,
  Body1,
  Body2,
  Body3,
} from "../../styles/styles";

const FooterSection = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: 60px 0;
`;
const FooterInnerBlock = styled.div`
  display: flex;
  gap: 36px;
`;
const FooterTitleBlock = styled.div`
  padding: 64px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid ${({ theme }) => theme.colors.arsenic};
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media only screen and (max-width: 479px) {
    padding: 36px 0;
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
  color: ${({ theme }) => theme.colors.whiteColor};
`;
const FooterPara = styled.p`
  margin: 16px 0 0 0;
  ${Body1}
  color: ${({ theme }) => theme.colors.manatee};
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
const FooterLinkItem = styled.li`
  margin: 0 0 12px 0;
  :last-child {
    margin: 0;
  }
  :first-child {
    margin: 0 0 32px 0;
  }
  h3 {
    margin: 0;
    ${Body1}
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.whiteColor};
  }
  a {
    ${Body2}
    letter-spacing: .2px;
    color: ${({ theme }) => theme.colors.manatee};
    text-transform: capitalize;
    :hover {
      color: ${({ theme }) => theme.colors.whiteColor};
      text-decoration: underline;
    }
  }
`;
const FooterMenu = styled.ul`
  margin: 0;
  :last-child {
    /* padding-top: 40px; */
  }
  list-style: none;
  p {
    ${FooterText};
    color: ${({ theme }) => theme.colors.title};
    margin: 0;
    padding-bottom: 10px;
  }
`;
const FooterLastBlock = styled.div`
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.arsenic};
  @media only screen and (max-width: 479px) {
    padding: 36px 0;
  }
`;
const CopyRightText = styled.p`
  ${Body2}
  margin: 24px 0;
  color: ${({ theme }) => theme.colors.manatee};
`;
const FooterSocialList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 24px;
`;
const FooterSocialItem = styled.li`
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
`;
const MobileFooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const MobileFooterListItem = styled.li`
  margin-bottom: 16px;
  :last-child {
    margin-bottom: 0;
  }
  a {
    ${Body3}
    color: ${({ theme }) => theme.colors.mediumGray};
  }
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
    color: ${({ theme }) => theme.colors.lightgray};
    margin: 20px 0 24px 0;
  }
`;
const FotterMenuLeft = styled.div`
  max-width: 33.33%;
  width: 100%;
  .padding {
    padding-top: 40px;
  }
`;
const FooterMenuList = styled.li`
  a {
    ${FooterText};
    color: ${({ theme }) => theme.colors.lightgray};
    display: block;
    padding-bottom: 10px;
    cursor: pointer;
    :last-child {
      padding: 0;
    }
    :hover {
      color: ${({ theme }) => theme.colors.title};
    }
  }
`;
export {
  FooterSection,
  FooterInnerBlock,
  FooterTitleBlock,
  FooterTitleLeft,
  FooterTitleRight,
  FooterPara,
  FooterLinkBlock,
  FooterLinkList,
  FooterLinkItem,
  FooterLastBlock,
  CopyRightText,
  FooterSocialList,
  FooterSocialItem,
  MobileFooterList,
  MobileFooterListItem,
  MobileFooterMain,
  SectionHeading,
  FooterFirst,
  FooterRight,
  FooterMenu,
  FotterMenuLeft,
  FooterMenuList,
};
