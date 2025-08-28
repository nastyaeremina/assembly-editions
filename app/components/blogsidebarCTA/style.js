import styled from 'styled-components';
import { MbPrimaryBtn } from '../../styles/styles';
import { body_regular, label_regular } from '../../styles/typography';

const SideBarCTA = styled.div`
  padding: var(--space-20) var(--space-20) var(--space-24);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-20);
  .CTA-button {
    a {
      width: 100%;
      justify-content: center;
      padding: 7px 32px;
      ${MbPrimaryBtn}
    }
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Image = styled.img`
  box-shadow: 0px 0px 0px 1px #0000000f;
  border-radius: var(--radius-8);
`;
const ImageDiv = styled.div``;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h4`
  ${body_regular};
  color: var(--title);
  margin: var(--space-24) 0 0;
`;
const Caption = styled.p`
  ${label_regular};
  color: var(--text-secondary);
  margin: var(--space-8) 0 0;
`;

const G2Section = styled.div`
  display: flex;
  gap: var(--space-12);
  padding: var(--space-4) 0;
  margin: var(--space-20) 0 var(--space-24);
  p {
    ${label_regular};
    color: var(--title);
    margin: 0;
    padding-top: var(--space-4);
  }
`;
const ReviewText = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-12);
`;
export { SideBarCTA, Image, ImageDiv, Content, Title, Caption, G2Section, ReviewText };
