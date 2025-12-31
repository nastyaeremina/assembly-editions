import styled, { css } from 'styled-components';
import { SectionTone } from '../../constants/constant';
import { body_regular, h2_regular, h3_regular } from '../../styles/typography';
import Link from 'next/link';

const QuoteSection = styled(Link)`
  padding: var(--space-20);
  background-color: var(--off-white-550);
  border-radius: var(--radius-16);
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
  max-height: 560px;
  height: 100%;
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      background-color: var(--gray-450);
    `}
  .quote-image {
    width: 100%;
    height: auto;
    aspect-ratio: 321 / 216;
    border-radius: var(--radius-8);
    object-fit: cover;
  }
  :hover {
    .svg-icon {
      transform: none;
      opacity: 1;
    }
  }
  @media only screen and (max-width: 991px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: var(--space-24);
    max-height: unset;
    .quote-image {
      width: 50%;
    }
  }
  @media only screen and (max-width: 650px) {
    border-radius: var(--radius-12);
    .quote-image {
      display: none;
    }
  }
`;

const QuoteContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  .svg-icon {
    transform: translateX(-2px) scale(0.98);
    transition: transform 0.25s, opacity 0.25s;
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 0;
    path {
      fill: var(--title);
    }
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        path {
          fill: var(--border-default);
        }
      `}
    @media only screen and (max-width: 449px) {
      position: absolute;
    }
  }
  @media only screen and (max-width: 991px) {
    height: unset;
    align-items: flex-start;
  }
  @media only screen and (max-width: 650px) {
    align-items: flex-end;
  }
`;

const TitleContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
`;

const NameSection = styled.div`
  gap: var(--space-4);
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  margin: 0;
  ${body_regular}
  color: var(--title);
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      color: var(--off-white-100);
    `}
`;

const CompanyName = styled.p`
  margin: 0;
  ${body_regular}
  color: var(--text-secondary);
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      color: var(--gray-200);
    `}
`;

const Description = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  p {
    margin: 0;
    ${body_regular}
    color: var(--title);
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        color: var(--off-white-100);
      `}
  }
  h2 {
    ${h2_regular}
    color: var(--title);
    margin: 0;
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        color: var(--off-white-100);
      `}
  }
  h3 {
    ${h3_regular}
    color: var(--title);
    margin: 0;
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        color: var(--off-white-100);
      `}
  }
  @media only screen and (max-width: 991px) {
    -webkit-line-clamp: unset;
    -webkit-box-orient: unset;
    overflow: unset;
    text-overflow: unset;
  }
`;

export { QuoteSection, QuoteContentDiv, TitleContentSection, NameSection, Name, CompanyName, Description };
