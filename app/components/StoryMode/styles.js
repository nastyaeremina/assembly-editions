import styled, { css } from 'styled-components';
import { SectionTone } from '../../constants/constant';

const MainBlock = styled.div`
  padding: var(--space-48) 0 var(--space-64);
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      background-color: var(--title);
      margin: var(--space-64) 0;
    `}
  @media only screen and (max-width: 991px) {
    padding: var(--space-32) 0 var(--space-48);
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        margin: var(--space-48) 0;
      `}
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-24) 0 var(--space-40);
    ${({ tone }) =>
      tone === SectionTone.DARK &&
      css`
        margin: var(--space-40) 0;
      `}
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-128);
  @media only screen and (max-width: 991px) {
    gap: var(--space-96);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-80);
  }
`;

const NavigationWrapper = styled.div`
  position: sticky;
  z-index: 11;
  padding: var(--space-16) 0;
  background-color: var(--off-white-300);
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      background-color: var(--title);
    `}
`;

const TabSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-48);
  @media only screen and (max-width: 991px) {
    gap: var(--space-40);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-32);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
  @media only screen and (max-width: 991px) {
    gap: var(--space-24);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-16);
  }
`;

export { MainBlock, SectionWrapper, NavigationWrapper, TabSection, ContentWrapper };
