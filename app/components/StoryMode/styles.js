import styled, { css } from 'styled-components';
import { SectionTone } from '../../constants/constant';

const MainBlock = styled.div`
  padding: var(--space-48) 0 var(--space-64);
  ${({ tone }) =>
    tone === SectionTone.DARK &&
    css`
      background-color: var(--title);
    `}
  @media only screen and (max-width: 991px) {
    padding: var(--space-32) 0 var(--space-40);
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-64);
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
  gap: var(--space-64);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-48);
  @media only screen and (max-width: 991px) and (min-width: 449px) {
    gap: var(--space-64);
  }
`;

export { MainBlock, SectionWrapper, NavigationWrapper, TabSection, ContentWrapper };
