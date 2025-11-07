import styled from 'styled-components';
import { body_regular, body_semibold, button_semibold } from '../styles/typography';

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
`;

export const LocationIcon = styled.div`
  margin-bottom: 3px;
  .location-icon {
    width: 100%;
    height: 100%;
    @media screen and (max-width: 449px) {
      width: 216px;
      height: 130px;
    }
  }
  @media screen and (max-width: 449px) {
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  ${body_semibold}
  color: var(--title);
  margin: 0;
  @media screen and (max-width: 449px) {
    max-width: 327px;
  }
`;

export const Description = styled.p`
  ${body_regular}
  color: var(--dark-gray);
  margin: 0;
  max-width: 600px;
  span {
    font-weight: 700;
  }
`;

export const LearnMore = styled.a`
  ${button_semibold}
  color: var(--medium-gray);
  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (max-width: 449px) {
    width: 100%;
    .button {
      a {
        width: 100%;
        justify-content: center;
      }
    }
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;
