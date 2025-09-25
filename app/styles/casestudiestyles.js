import styled, { css } from 'styled-components';
import { body_regular, button_semibold, h3_semibold, tag } from './typography';
import { HeroTypes } from '../constants/constant';

const CaseStudyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-80);
  padding: var(--space-80) 0;
  @media only screen and (max-width: 991px) {
    padding: var(--space-64) 0;
    gap: var(--space-64);
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-64) 0 var(--space-48);
    gap: var(--space-48);
  }
`;

const HighlightSection = styled.div`
  margin: var(--space-80) 0 0;
  display: flex;
  gap: var(--space-120);
  ${(props) =>
    props.variant === HeroTypes.CENTER &&
    css`
      align-items: center;
      justify-content: space-between;
      margin: var(--space-80) auto 0;
      width: 100%;
      gap: var(--space-64);
    `}
  @media only screen and (max-width: 991px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-32);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-12);
    padding: var(--space-20);
    margin: var(--space-64) 0 0;
  }
  @media only screen and (max-width: 449px) {
    grid-template-columns: 1fr;
    gap: var(--space-24);
  }
`;

const Highlight = styled.div`
  color: var(--title);
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  h3 {
    ${h3_semibold}
    margin:0;
  }
  p {
    ${body_regular}
    margin: 0;
  }
  ${(props) =>
    props.variant === HeroTypes.CENTER &&
    css`
      align-items: center;
      width: 100%;
      @media only screen and (max-width: 449px) {
        align-items: flex-start;
      }
    `}
`;

const CustomerSection = styled.div`
  display: flex;
  gap: var(--space-64);
  border-top: 1px solid var(--border-default);
  padding: var(--space-64) 0;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    gap: var(--space-40);
    border-top: unset;
    padding-top: unset;
  }
  @media only screen and (max-width: 449px) {
    padding: 0 0 var(--space-48);
    gap: var(--space-48);
  }
`;

const LeftSection = styled.div`
  max-width: 432px;
  width: 100%;
  position: relative;
  @media only screen and (max-width: 991px) {
    max-width: unset;
    border: 1px solid var(--border-default);
    padding: var(--space-20);
    border-radius: var(--radius-12);
  }
`;

const SectionBlock = styled.div`
  display: flex;
  gap: var(--space-64);
  padding: var(--space-64) 0;
  justify-content: space-between;
  border-top: 1px solid var(--border-default);

  h2 {
    margin: 0;
    ${h3_semibold}
    color: var(--title);
    max-width: 432px;
    width: 100%;
    position: sticky;
    top: ${(props) => props.totalHeight + 50}px;
    height: 100%;
    @media only screen and (max-width: 991px) {
      max-width: unset;
      position: relative;
      top: unset;
    }
  }
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    gap: var(--space-32);
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-48) 0;
  }
`;

const Head = styled.h2`
  ${h3_semibold}
  margin: 0;
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

const Detail = styled.div`
  h3 {
    ${button_semibold}
    margin:0 0 var(--space-8);
    color: var(--title);
  }
  p {
    ${body_regular}
    margin:0;
    color: var(--title);
  }
`;

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
`;

const LastDroplist = styled.div`
  cursor: pointer;
  a {
    ${tag};
    margin: 0;
    color: var(--title);
    cursor: pointer;
    text-transform: uppercase;
    transition: none;
    display: flex;
    align-items: center;
    padding: var(--space-2) var(--space-16) 0;
    background-color: var(--gray-50);
    border-radius: var(--radius-30);
    border: 1px solid transparent;
    height: 32px;
    :hover {
      border: 1px solid var(--border-hover);
    }
  }
`;

const Last = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  position: sticky;
  top: ${(props) => props.totalHeight + 50}px;
  @media only screen and (max-width: 991px) {
    position: relative;
    top: unset;
  }
`;

const AppsSection = styled.div`
  display: flex;
  gap: var(--space-8);
  flex-wrap: wrap;
`;

export {
  CaseStudyPageWrapper,
  HighlightSection,
  Highlight,
  CustomerSection,
  LeftSection,
  Head,
  Detail,
  DetailSection,
  Top,
  LastDroplist,
  Last,
  Left,
  SectionBlock,
  AppsSection
};
