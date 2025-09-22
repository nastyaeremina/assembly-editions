import styled from 'styled-components';
import { h1_semibold } from './typography';

const GlossaryContainer = styled.div`
  padding: var(--space-80) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-80);
  @media only screen and (max-width: 991px) {
    padding: var(--space-64) 0;
    gap: var(--space-64);
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-48) 0;
    gap: var(--space-48);
  }
`;

const PageBack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-24);
  margin: 0 auto;
  @media only screen and (max-width: 449px) {
    gap: var(--space-16);
    align-items: flex-start;
    margin: 0;
  }
`;
const GlossaryDetailTitle = styled.h1`
  ${h1_semibold}
  color: var(--title);
  margin: 0;
  text-align: center;
  @media only screen and (max-width: 449px) {
    text-align: left;
  }
`;

const BottomSection = styled.div`
  max-width: 728px;
  width: 100%;
  margin: 0 auto;
  padding: var(--space-64) 0;
  @media only screen and (max-width: 991px) {
    padding: var(--space-40) 0;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-48) 0;
  }
`;

const DetailHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-64);
  padding-bottom: var(--space-24);
  @media only screen and (max-width: 991px) and (min-width: 768px) {
    padding-bottom: var(--space-20);
  }
  @media only screen and (max-width: 449px) {
    padding-top: var(--space-16);
    align-items: flex-start;
  }
`;

const ImageSection = styled.div`
  display: flex;
  border-radius: var(--radius-8);
  border: 1px solid var(--border-default);
  overflow: hidden;
  .image {
    max-width: 100%;
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 449px) {
    border-radius: var(--radius-4);
  }
`;
export { GlossaryContainer, PageBack, GlossaryDetailTitle, DetailHeroSection, ImageSection, BottomSection };
