import styled from 'styled-components';
import { body_regular, label_regular } from '../../styles/typography';

const SideBarCTA = styled.div`
  padding: var(--space-20) var(--space-20) var(--space-24);
  background-color: var(--off-white-550);
  border-radius: var(--radius-20);
  max-width: 374px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h4`
  ${body_regular};
  color: var(--title);
  margin: 0;
`;
const Caption = styled.p`
  ${label_regular};
  color: var(--text-secondary);
  margin: var(--space-8) 0 0;
`;

const G2Section = styled.div`
  display: flex;
  gap: var(--space-16);
  margin: var(--space-20) 0 var(--space-24);
  padding: var(--space-6) 0;
  p {
    ${label_regular};
    color: var(--title);
    margin: 0;
    padding-top: var(--space-2);
  }
`;
const ReviewText = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-16);
`;
export { SideBarCTA, Content, Title, Caption, G2Section, ReviewText };
