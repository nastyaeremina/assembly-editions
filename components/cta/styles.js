import styled from "styled-components";
import { Heading, Heading2 } from "../../styles/styles";

const CtaInner = styled.div`
  text-align: center;
  h2 {
    color: ${({ theme }) => theme.colors.whiteColor};
    ${Heading2};
    padding-bottom: 50px;
    margin: 0 auto;
    max-width: 708px;
    width: 100%;
    span {
      color: ${({ theme }) => theme.colors.primary};
      /* display: block; */
    }
  }
`;
const CtaLeft = styled.div`
  width: 100%;
  max-width: 70%;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
const SectionHeading = styled.h2`
  margin: 0;
  ${Heading}
  color: ${({ theme }) => theme.colors.whiteColor};
`;
const CtaBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;
const CtaRight = styled.div`
  width: 100%;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  button {
    :first-child {
      margin-bottom: 20px;
    }
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin-top: 24px;
    flex-direction: row;
    align-items: flex-start;
    button {
      :first-child {
        margin-bottom: 0;
        margin-right: 16px;
      }
    }
  }
  @media only screen and (max-width: 479px) {
    flex-direction: column;
    button {
      width: 100%;
      a {
        width: 100%;
      }
      :first-child {
        margin-bottom: 12px;
        margin-right: 0;
      }
    }
  }
`;

export { CtaInner, CtaLeft, CtaRight, SectionHeading, CtaBtn };
