import styled from 'styled-components';
import { body_regular, button_regular, h3_semibold } from '../../styles/typography';

const Redirects = styled.div`
  padding-bottom: 100px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 80px;
  }
`;
const RedirectsHeading = styled.div`
  max-width: 780px;
  margin: 0 auto;
  .button-center {
    justify-content: center;
    margin-top: 28px;
    @media only screen and (max-width: 449px) {
      justify-content: flex-start;
    }
  }
  .title-description-div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
const Title = styled.h2`
  ${h3_semibold};
  color: var(--title);
  margin: 0;
  text-align: center;
  @media only screen and (max-width: 449px) {
    text-align: start;
  }
`;
const Description = styled.p`
  ${body_regular};
  color: var(--text-secondary);
  margin: 0;
  text-align: center;
  @media only screen and (max-width: 449px) {
    text-align: start;
  }
`;

const Card = styled.a`
  cursor: pointer;
  padding: 24px;
  display: flex;
  gap: 16px;
  border-right: 1px solid var(--title);
  border-bottom: 1px solid var(--title);
  :nth-child(3n) {
    border-right: none;
  }
  :nth-child(7),
  :nth-child(8),
  :nth-child(9) {
    border-bottom: none;
  }
  :hover {
    background-color: var(--light-green);
  }
  @media only screen and (max-width: 768px) {
    :nth-child(2n) {
      border-right: none;
    }
    :nth-child(3) {
      border-right: 1px solid var(--title);
    }
    :nth-child(9) {
      border-top: 1px solid var(--title);
      grid-area: span 1 / span 2;
    }
  }
  @media only screen and (max-width: 449px) {
    border-right: none;
    padding: 20px;
    :nth-child(3) {
      border-right: none;
    }
    :nth-child(8) {
      border-top: 1px solid var(--title);
    }
    :nth-child(9) {
      border-top: 1px solid var(--title);
      grid-area: span 1;
    }
  }
`;
const Heading = styled.h3`
  ${body_regular};
  color: var(--title);
  margin: 0;
`;
const Caption = styled.p`
  ${button_regular};
  color: var(--body);
  margin: 8px 0 0;
  @media only screen and (max-width: 449px) {
    margin: 6px 0 0;
  }
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 31px;
  @media only screen and (max-width: 449px) {
    width: 24px;
    height: 24px;
  }
`;
const CardData = styled.div``;
const RedirectsCardSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid var(--title);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 40px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 449px) {
    grid-template-columns: 1fr;
  }
`;
const Image = styled.img`
  width: 28px;
  height: 28px;
  @media only screen and (max-width: 449px) {
    width: 24px;
    height: 24px;
  }
`;
export {
  Redirects,
  RedirectsHeading,
  Title,
  Description,
  Card,
  Heading,
  Caption,
  Icon,
  CardData,
  RedirectsCardSection,
  Image
};
