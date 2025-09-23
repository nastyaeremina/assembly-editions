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
  transition: height 0.5s ease;
  overflow: hidden;
  .image {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-16);
    border: 1px solid var(--border-default);
    grid-column: span 2;
    object-fit: cover;
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        border: 1px solid var(--bg-card-dark-hover);
      `}
    @media only screen and (max-width: 991px) {
      grid-column: auto;
    }
    @media only screen and (max-width: 449px) {
      border-radius: var(--radius-12);
    }
  }
`;

const GridItemSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
  gap: var(--space-24);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.5s ease, transform 0.5s ease;
  z-index: ${({ isActive }) => (isActive ? 1 : 0)};

  /* video styling */
  video {
    width: 100%;
    object-fit: cover;
    grid-column: span 2;
    height: 100%;
    border-radius: var(--radius-16);
    border: 1px solid var(--border-default);
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        border: 1px solid var(--bg-card-dark-hover);
      `}
    @media only screen and (max-width: 991px) {
      grid-column: auto;
      border-radius: var(--radius-12);
    }
  }
  /* Iframe styling for video looping */
  iframe {
    max-width: 100%;
    grid-column: span 2;
    height: ${({ hasQuoteBlock }) => (hasQuoteBlock ? '100%' : '')};
    border-radius: var(--radius-16);
    border: 1px solid var(--border-default);
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        border: 1px solid var(--bg-card-dark-hover);
      `}
    @media only screen and (max-width: 991px) {
      grid-column: auto;
      max-height: 408px;
      height: 408px;
    }
    @media only screen and (max-width: 449px) {
      border-radius: var(--radius-12);
      height: 228px;
    }
  }
  @media only screen and (max-width: 991px) {
    grid-template-columns: auto;
    gap: var(--space-32);
  }
`;

export { SectionDiv, SectionContentDiv, TabSection, GridSection, GridItemSectionWrapper };
