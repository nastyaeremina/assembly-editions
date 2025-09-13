import styled from 'styled-components';
import { body_regular, h2_semibold } from '../../../styles/typography';

const ModernSection = styled.div`
  padding: var(--space-64) 0;
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    padding: var(--space-40) 0;
  }
  @media only screen and (max-width: 749px) {
    padding: var(--space-48) 0;
  }
`;
const HeadView = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
  align-items: flex-start;
  h2 {
    ${h2_semibold};
    color: var(--title);
    margin: 0;
  }
  @media only screen and (max-width: 749px) {
    max-width: 100%;
  }
`;
const ModernWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-64);
  align-items: flex-start;
  @media only screen and (max-width: 449px) {
    gap: var(--space-32);
  }
`;
const BoxWrap = styled.div`
  width: 100%;
`;
const BoxView = styled.div`
  padding: var(--space-20) 0;
  border-bottom: 1px solid var(--border-default);
`;

const DetailView = styled.div`
  display: flex;
  align-items: flex-start;
  @media only screen and (max-width: 749px) {
    flex-direction: column;
    gap: var(--space-12);
  }
`;
const Body = styled.div`
  p {
    ${body_regular};
    color: var(--title);
    margin: 0;
  }
`;
const Title = styled.p`
  ${body_regular};
  margin: 0;
  color: var(--title);
`;
const Description = styled.p`
  ${body_regular};
  margin: 0;
  color: var(--text-secondary);
  padding-left: var(--space-40);
  max-width: 804px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    max-width: 384px;
  }
  @media only screen and (max-width: 749px) {
    max-width: 100%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-12);
  max-width: 420px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    max-width: 320px;
  }
  @media only screen and (max-width: 749px) {
    max-width: 100%;
  }
`;
const Number = styled.p`
  ${body_regular};
  margin: 0;
  color: var(--title);
  max-width: 28px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export {
  ModernSection,
  ModernWrap,
  HeadView,
  BoxWrap,
  BoxView,
  DetailView,
  Body,
  Title,
  Description,
  TitleWrapper,
  Number
};
