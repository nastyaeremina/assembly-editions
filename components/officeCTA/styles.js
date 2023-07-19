import styled from 'styled-components';
import { Body2, Heading3, MbBody2, MobileH2 } from '../../styles/styles';

const OfficeSection = styled.div`
  background-color: ${({ theme }) => theme.colors.greendark};
  padding: 60px 24px;
`;
const OfficeCTAHeading = styled.h2`
  margin: 0 auto;
  text-align: center;
  ${Heading3}
  color: ${({ theme }) => theme.colors.greenlight};
  @media (max-width: 479px) {
    ${MobileH2}
  }
`;

const OfficeCTACaption = styled.p`
  max-width: 780px;
  width: 100%;
  margin: 8px auto 32px;
  text-align: center;
  ${Body2}
  color: ${({ theme }) => theme.colors.greenlight};
  @media (max-width: 449px) {
    ${MbBody2}
  }
`;

const OfficeCTABtn = styled.div`
  .office-registerbtn {
    display: flex;
    justify-content: center;
  }
`;

export { OfficeSection, OfficeCTAHeading, OfficeCTACaption, OfficeCTABtn };
