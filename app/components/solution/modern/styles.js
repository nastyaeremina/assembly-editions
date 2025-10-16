import styled, { css } from 'styled-components';
import { body_regular, h4_regular } from '../../../styles/typography';

const ModernSection = styled.div`
  padding: var(--space-64) 0;
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    padding: var(--space-48) 0;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-40) 0;
  }
`;

const ModernWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-48);
  align-items: flex-start;
  @media only screen and (max-width: 991px) {
    gap: var(--space-40);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-32);
  }
`;

const BoxWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  width: 100%;
  gap: var(--space-40);
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-24);
  }
`;

const BoxView = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-24);
  @media only screen and (max-width: 768px) {
    align-items: center;
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-16);
  }
`;

const ImgIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 92px;
  height: 92px;
  border-radius: var(--radius-12);
  background-color: var(--off-white-600);
  img {
    @media only screen and (max-width: 449px) {
      width: 40px;
      height: 40px;
    }
  }
  @media only screen and (max-width: 449px) {
    max-width: 80px;
    height: 80px;
  }
`;

const DetailView = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  h4 {
    ${h4_regular};
    margin: 0;
    color: var(--text-secondary);
  }
  p {
    ${body_regular};
    margin: 0;
    color: var(--title);
  }
`;

export { ModernSection, ModernWrap, BoxWrap, BoxView, ImgIcon, DetailView };
