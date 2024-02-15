import styled from 'styled-components';
import { Body3, Heading3, MbBody3 } from '../../styles/styles';
import { body, title } from '../../styles/color';

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const PageTitle = styled.h2`
  ${Heading3};
  color: ${title};
  margin: 0;
`;
const Caption = styled.div`
  p {
    ${Body3};
    color: ${body};
    margin: 0;
  }
  @media only screen and (max-width: 449px) {
    p {
      ${MbBody3}
    }
  }
`;

export { HeroSection, PageTitle, Caption };
