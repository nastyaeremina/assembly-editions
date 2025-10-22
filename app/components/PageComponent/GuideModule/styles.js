import styled from 'styled-components';

const SectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-80);
  width: 100%;
  margin: 0 auto;
  max-width: 1092px;
  justify-content: center;
  @media only screen and (max-width: 1280px) {
    gap: var(--space-48);
  }
`;

const TableOfContentSection = styled.div`
  max-width: 284px;
  width: 100%;
  height: 100%;
  position: sticky;
  top: var(--space-64);
  max-height: calc(100dvh - 160px);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

export { SectionWrapper, TableOfContentSection };
