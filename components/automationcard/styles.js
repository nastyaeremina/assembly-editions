import styled, { css } from 'styled-components';
import { Heading3 } from '../../styles/styles';
import { Heading4 } from '../../styles/styles';
import { Heading6 } from '../../styles/styles';

const CardSection = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  @media only screen and (max-width: 426px) {
    padding-bottom: 30px;
  }
`;
const CardSectionHead = styled.div`
  ${Heading3}
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 40px;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const Card = styled.div`
  border: 1px solid #00160e;
  border-radius: 4px;
  .card-img {
    display: flex;
    max-width: 1222px;
    width: 100%;
    border-top: 1px solid #00160e;
  }
  ${(props) =>
    props.isTwoCard &&
    css`
      width: 50%;
      flex-direction: column;
      display: flex;
      justify-content: space-between;
      @media only screen and (max-width: 426px) {
        width: 100%;
      }
    `}
`;
const CardTop = styled.div`
  padding: 40px;

  @media only screen and (max-width: 426px) {
    padding: 28px;
  }
`;
const Head = styled.h3`
  ${Heading4}
  color: ${({ theme }) => theme.colors.title};
  max-width: 780px;
  width: 100%;
  margin: 0;
`;
const Description = styled.p`
  font-weight: 400 !important;
  ${Heading6}
  color: ${({ theme }) => theme.colors.body};
  max-width: 780px;
  width: 100%;
  margin: 12px 0 0;
`;
const Cards = styled.div`
  display: flex;
  gap: 40px;
  @media only screen and (max-width: 426px) {
    flex-direction: column;
    /* flex-wrap: wrap; */
    width: 100%;
  }
`;
export { CardSection, CardSectionHead, Card, CardTop, Head, Description, Cards };
