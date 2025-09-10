import styled from 'styled-components';

const MainBlock = styled.div`
  padding: var(--space-64) 0;
  background-color: var(--off-white-300);
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    padding: var(--space-40) 0;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-80);
  position: relative;
  @media only screen and (max-width: 767px) {
    gap: var(--space-64);
  }
`;

const SliderMainDiv = styled.div`
  position: relative;
  width: 100%;
`;
export { MainBlock, SectionWrapper, SliderMainDiv };
