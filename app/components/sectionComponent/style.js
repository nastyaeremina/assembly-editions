import styled, { css } from 'styled-components';
import { SectionTone } from '../../constants/constant';

const SectionDiv = styled.div`
  padding: var(--space-64) 0;
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      background-color: var(--title);
    `}
  @media only screen and (max-width: 991px) {
    padding: var(--space-40) 0;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-48) 0;
  }
`;

const SectionContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-64);
`;

const TabSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
  @media only screen and (max-width: 449px) {
    gap: var(--space-20);
  }
`;

const GridSection = styled.div`
  position: relative;
  width: 100%;
`;

const GridItemSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: var(--space-24);
  width: 100%;

  ${({ isSectionComponent }) =>
    isSectionComponent &&
    css`
      display: ${({ isActive }) => (isActive ? 'grid' : 'none')};
    `}
  ${({ hasQuoteBlock }) =>
    hasQuoteBlock &&
    css`
      grid-template-columns: 1fr 321px;
    `}

  /* video styling */
  video {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: var(--radius-16);
    border: 1px solid var(--border-default);
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        border: 1px solid var(--bg-card-dark-hover);
      `}
    @media only screen and (max-width: 991px) {
      border-radius: var(--radius-12);
    }
  }
  /* Iframe styling for video looping */
  iframe {
    max-width: 100%;
    height: ${({ hasQuoteBlock }) => (hasQuoteBlock ? '100%' : '')};
    border-radius: var(--radius-16);
    border: 1px solid var(--border-default);
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        border: 1px solid var(--bg-card-dark-hover);
      `}
    @media only screen and (max-width: 991px) {
      max-height: 408px;
      height: 408px;
    }
    @media only screen and (max-width: 449px) {
      border-radius: var(--radius-12);
      height: 228px;
    }
  }
  /* Image styling */
  .image {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-16);
    border: 1px solid var(--border-default);
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        border: 1px solid var(--bg-card-dark-hover);
      `}
  }

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: var(--space-32);
  }
`;

export { SectionDiv, SectionContentDiv, TabSection, GridSection, GridItemSectionWrapper };
