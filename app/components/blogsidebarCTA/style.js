import styled from 'styled-components';
import { Body5, Heading6, MbPrimaryBtn } from '../../styles/styles';

const SideBarCTA = styled.div`
  padding: 24px;
  border: 1px solid var(--black);
  border-radius: 4px;
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
  box-shadow: 0px 4px 16px 0px var(--black-shadow-10);
  border: 0.5px solid var(--footer);
  border-radius: 4px;
`;
const ImageDiv = styled.div``;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 24px 0;
`;
const Title = styled.h4`
  ${Heading6};
  font-weight: 400;
  color: var(--title);
  margin: 0;
`;
const Caption = styled.p`
  ${Body5};
  color: var(--body);
  margin: 0;
`;

const G2Section = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  p {
    ${Body5};
    color: var(--title);
    margin: 0;
  }
`;
const ReviewText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 8px;
  border-left: 1px solid var(--border);
`;
export { SideBarCTA, Image, ImageDiv, Content, Title, Caption, G2Section, ReviewText };
