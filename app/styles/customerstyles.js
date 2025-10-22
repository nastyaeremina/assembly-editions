import styled, { css } from 'styled-components';
import { body_regular, button_regular, h1_semibold } from './typography';
import Link from 'next/link';

const CustomerPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-80);
  padding-bottom: var(--space-80);
  @media only screen and (max-width: 991px) {
    gap: var(--space-64);
    padding-bottom: var(--space-64);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-48);
    padding-bottom: var(--space-48);
  }
`;

const CaseStudyWrapper = styled.div`
  padding: var(--space-64) 0;
  @media only screen and (max-width: 991px) {
    padding: var(--space-48) 0;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-40) 0;
  }
`;

const HeroSection = styled.div`
  padding-bottom: var(--space-64);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 991px) {
    padding-bottom: var(--space-48);
  }
  .hero-image {
    height: auto;
    width: 100%;
    margin-top: -127px;
    @media only screen and (max-width: 1100px) {
      margin-top: -85px;
    }
    @media only screen and (max-width: 991px) {
      margin-top: -47px;
    }
    @media only screen and (max-width: 449px) {
      margin-top: var(--space-40);
      padding-bottom: var(--space-30);
      transform: scale(1.4);
    }
  }
  @media only screen and (max-width: 449px) {
    align-items: flex-start;
    padding-bottom: var(--space-40);
  }
`;

const HeroHeading = styled.h1`
  ${h1_semibold};
  color: var(--title);
  margin: 0 auto;
  max-width: 900px;
  text-align: center;
  margin-bottom: var(--space-12);
  @media only screen and (max-width: 449px) {
    text-align: left;
    margin-bottom: var(--space-16);
  }
`;

const Para = styled.p`
  ${body_regular}
  margin: 0 auto;
  color: var(--title);
  max-width: 720px;
  text-align: center;
  margin-bottom: var(--space-24);
  @media only screen and (max-width: 991px) {
    margin-bottom: var(--space-20);
  }
  @media only screen and (max-width: 449px) {
    text-align: left;
  }
`;

const LastSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-48);
  padding-top: var(--space-48);
  @media only screen and (max-width: 991px) {
    padding-top: var(--space-40);
    gap: var(--space-40);
  }
  @media only screen and (max-width: 449px) {
    padding-top: var(--space-32);
    gap: var(--space-32);
  }
`;

const TableSection = styled.div`
  padding: var(--space-64) 0;
  @media only screen and (max-width: 991px) {
    padding: var(--space-40) 0;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-48) 0;
  }
`;

const BottomTableSection = styled.div`
  padding-top: var(--space-64);
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
`;

const TabsSection = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -24px;
  padding: 0 var(--space-24);
  gap: var(--space-8);
  overflow: auto;
  height: 48px;
  ::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 991px) {
    margin: 0 -32px;
    padding: 0 var(--space-32);
  }
  @media only screen and (max-width: 449px) {
    margin: 0 -16px;
    padding: 0 var(--space-16);
  }
`;

const TabItem = styled.button`
  height: 40px;
  padding: var(--space-2) var(--space-16) 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-50);
  ${button_regular}
  color: var(--title);
  border-radius: var(--radius-30);
  border: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, border 0.3s ease-in-out;
  :hover {
    border: 1px solid var(--border-hover);
  }
  ${(props) =>
    props.isSelect &&
    css`
      background-color: var(--title);
      color: var(--off-white-100);
      border: 1px solid var(--title);
      :hover {
        border: 1px solid var(--title);
      }
    `}
  @media only screen and (max-width: 449px) {
    height: 32px;
  }
`;

const Table = styled.div`
  padding: var(--space-12);
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-16);
  border: 1px solid var(--border-default);
  overflow: hidden;
  @media only screen and (max-width: 449px) {
    padding: 0;
  }
`;

const ContentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-40);
  padding: var(--space-24) 0;
  border-bottom: 1px solid var(--border-default);
  transition: border 0.3s ease-in-out;

  &.hovered-border {
    border-bottom: 1px solid transparent;
  }
  @media only screen and (max-width: 449px) {
    border-bottom: none;
    &.hovered-border {
      border-bottom: none;
    }
  }
`;

const TableItem = styled(Link)`
  padding: 0 var(--space-20);
  position: relative;
  transition: background-color 0.3s ease-in-out;
  border-radius: var(--radius-8);
  :last-child {
    ${ContentSection} {
      border-bottom: none;
    }
  }
  :focus-visible {
    border-radius: var(--radius-8);
  }
  @media only screen and (max-width: 450px) {
  }
  :hover {
    background-color: var(--bg-primary-hover);
    ${ContentSection} {
      border-bottom: 1px solid var(--bg-primary-hover);
    }
    :last-child {
      ${ContentSection} {
        border-bottom: none;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    padding: 0 var(--space-16);
  }
  @media only screen and (max-width: 449px) {
    border-radius: 0;
    border-bottom: 1px solid var(--border-default);
    :last-child {
      border-bottom: none;
    }
    :hover {
      ${ContentSection} {
        border-bottom: none;
      }
    }
  }
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-24);
  width: 100%;
  .customer-logo {
    height: auto;
    @media only screen and (max-width: 449px) {
      display: none;
    }
  }
`;

const CustomerName = styled.p`
  margin: 0;
  ${body_regular}
  color: var(--title);
`;

const CustomerDesignation = styled.p`
  margin: 0;
  ${body_regular}
  color: var(--title);
  width: 100%;
  @media only screen and (max-width: 991px) {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
`;

const VisitSite = styled.div`
  gap: var(--space-4);
  display: flex;
  align-items: center;
  ${body_regular}
  color: var(--title);
  transition: color 0.3s ease;
  white-space: nowrap;
  svg {
    path {
      transition: fill 0.3s ease;
      fill: var(--title);
    }
  }
  .hover-line-path {
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  .hover-tip-path {
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  &:hover {
    .hover-arrow-icon {
      path {
        fill: var(--text-secondary);
      }
    }
    .hover-line-path {
      opacity: 1;
      transform: translateX(2px);
    }
    .hover-tip-path {
      transform: translateX(2px);
    }
  }
`;

const BlankDiv = styled.div`
  width: 100%;
  max-width: 124px;
`;

export {
  HeroSection,
  HeroHeading,
  Para,
  LastSection,
  CustomerPageWrapper,
  CaseStudyWrapper,
  TableSection,
  BottomTableSection,
  TabsSection,
  TabItem,
  Table,
  TableItem,
  LogoDiv,
  CustomerName,
  CustomerDesignation,
  ContentSection,
  VisitSite,
  BlankDiv
};
