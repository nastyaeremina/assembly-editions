import styled, { css } from 'styled-components';
import { Body2, Heading2, MbBody2, MobileH2 } from '../../styles/styles';
const BlockLeft = styled.div`
  max-width: 552px;
`;
const Head = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.title};
  ${Heading2}
  @media only screen and (max-width: 749px) {
    ${MobileH2}
  }
`;
const HeadCaption = styled.div`
  margin: 20px 0 32px;
  p {
    ${Body2}
    color: ${({ theme }) => theme.colors.body};
    margin: 12px 0 0;
    :first-child {
      margin: 0;
    }
    @media only screen and (max-width: 749px) {
      ${MbBody2}
      margin: 8px 0 0;
    }
  }
`;
const BlockRight = styled.div`
  margin: 0px 0 100px 0;

  @media only screen and (max-width: 768px) {
    margin: 0 auto 60px;
  }
`;
export { Head, HeadCaption, BlockLeft, BlockRight };
