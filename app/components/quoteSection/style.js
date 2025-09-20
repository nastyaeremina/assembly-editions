import styled, { css } from 'styled-components';
import { SectionTone } from '../../constants/constant';
import { body_regular, h2_regular, h2_semibold, h3_regular, h4_regular } from '../../styles/typography';

const QuoteSection = styled.div`
  grid-column: span 1;
  padding: var(--space-20);
  background-color: var(--title);
  border-radius: var(--radius-16);
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      background-color: var(--off-white-500);
    `}
  .quote-image {
    width: 100%;
    height: auto;
    border-radius: var(--radius-8);
    object-fit: cover;
    border: 1px solid var(--bg-card-dark-hover);
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        border: 1px solid var(--border-default);
      `}
  }
  @media only screen and (max-width: 991px) {
    grid-column: auto;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: var(--space-24);
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
  gap: var(--space-32);
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;

const TitleContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-20);
`;

const NameSection = styled.div`
  gap: var(--space-4);
  display: flex;
  flex-direction: column;
`;

const Name = styled.h4`
  margin: 0;
  ${h4_regular}
  color: var(--off-white-100);
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      color: var(--title);
    `}
`;

const CompanyName = styled.p`
  margin: 0;
  ${body_regular}
  color: var(--gray-200);
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      color: var(--text-secondary);
    `}
`;

const Description = styled.div`
  p {
    margin: 0;
    ${body_regular}
    color: var(--off-white-100);
  }
  h2 {
    ${h2_regular}
    color: var(--title);
    margin: 0;
  }
  h3 {
    ${h3_regular}
    color: var(--title);
    margin: 0;
  }
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      p {
        color: var(--title);
      }
      h2 {
        color: var(--title);
      }
      h3 {
        color: var(--title);
      }
    `}
`;

export { QuoteSection, QuoteContentDiv, TitleContentSection, NameSection, Name, CompanyName, Description };
