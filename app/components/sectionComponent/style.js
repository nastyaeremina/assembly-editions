import styled, { css } from 'styled-components';
import { SectionTone } from '../../constants/constant';
import { isEmpty } from '../../helpers/helpers';

const SectionDiv = styled.div`
  padding: var(--space-64) 0;
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      background-color: var(--title);
      margin: var(--space-64) 0;
    `}
  @media only screen and (max-width: 991px) {
    padding: var(--space-48) 0;
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        margin: var(--space-48) 0;
      `}
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-40) 0;
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        margin: var(--space-40) 0;
      `}
  }
`;

const SectionContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-48);
  @media only screen and (max-width: 991px) {
    gap: var(--space-40);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-32);
  }
`;

const TabSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
  @media only screen and (max-width: 449px) {
    gap: var(--space-12);
  }
`;

const GridSection = styled.div`
  position: relative;
  width: 100%;
`;

const GridItemSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
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
    border: 1px solid var(--border-secondary);
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
    border: 1px solid var(--border-secondary);
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
  /* Default desktop mode */
  .desktop-image-container {
    display: flex;
  }

  .mobile-image-container {
    display: none;
  }

  /* MOBILE MODE (<449px) */
  @media only screen and (max-width: 449px) {
    /* IF mobile image exists → show it */
    .mobile-image-container {
      display: flex;
    }

    /* IF mobile image exists → hide desktop */
    .mobile-image-container + .desktop-image-container {
      display: none;
    }
  }

  .image {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-16);
    border: 1px solid var(--border-secondary);
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        border: 1px solid var(--bg-card-dark-hover);
      `}
  }

  .mobile-image {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-16);
    border: 1px solid var(--border-secondary);
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        border: 1px solid var(--bg-card-dark-hover);
      `}
  }

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(0, 1fr);
  }
`;

export { SectionDiv, SectionContentDiv, TabSection, GridSection, GridItemSectionWrapper };
