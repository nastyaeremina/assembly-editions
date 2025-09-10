import styled from 'styled-components';
import { body_regular, button_semibold, h2_semibold, h4_regular } from '../../styles/typography';
import Link from 'next/link';

const MainBlock = styled.div`
  background-color: var(--title);
  padding: var(--space-48) 0 var(--space-64);
  @media only screen and (max-width: 991px) {
    padding: var(--space-24) 0 var(--space-40);
  }
`;

const BottomSection = styled.div`
  display: grid;
  gap: var(--space-40);
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  @media only screen and (max-width: 991px) {
    gap: var(--space-32);
    grid-template-columns: auto;
  }
`;

const LeftImage = styled.div`
  max-width: 100%;
  width: 100%;
  grid-column: span 2;
  .image {
    max-width: 100%;
    width: 100%;
    height: 100%;
    border-radius: var(--radius-16);
    border: 1px solid var(--bg-card-dark-hover);
  }
  @media only screen and (max-width: 991px) {
    grid-column: auto;
  }
  @media only screen and (max-width: 449px) {
    .image {
      border-radius: var(--radius-12);
    }
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
  background-color: var(--title);
  padding: var(--space-16) 0;
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

export { MainBlock, BottomSection, LeftImage, SectionWrapper, NavigationWrapper, TabSection, ContentWrapper };
