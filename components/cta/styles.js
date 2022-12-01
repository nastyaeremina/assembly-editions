import styled from "styled-components";
import { Heading, Heading2, MobileH2 } from "../../styles/styles";

const CtaInner = styled.div`
  /* background-image: url("/images/ctabg.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
  h2 {
    color: ${({ theme }) => theme.colors.whiteColor};
    ${Heading2};
    padding-bottom: 40px;
    margin: 0 auto;
    max-width: 708px;
    width: 100%;
    @media only screen and (max-width: 991px) {
      ${MobileH2}
    }
    span {
      color: ${({ theme }) => theme.colors.primary};
      /* display: block; */
    }
  }
  @media only screen and (max-width: 749px) {
    h2 {
      font-weight: 400;
      font-size: 44px;
      line-height: 42px;
      max-width: 260px;
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
  @media only screen and (max-width: 749px) {
    flex-direction: column;
    .paddingbtn {
      padding: 7px 38px;
    }
  }
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
const CtaAnimation = styled.div`
  /* padding-top: 50px; */
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    max-height: 464px;
    height: 100%;
  }
`;
const CtaMain = styled.div`
  position: absolute;
`;
const CtaSection = styled.div``;
const CtaImage = styled.div`
  /* position: absolute;
  top: 50px;
  left: 231px; */
  .leftcta {
    position: absolute;
    left: 0;
    top: 50px;
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
  .rightcta {
    position: absolute;
    top: 50px;
    right: 0;
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
  .ctaleft {
    position: absolute;
    left: 0;
    top: 10px;
    display: none;

    @media only screen and (max-width: 991px) {
      display: block;
      max-height: 390px;
      height: 100%;
    }
  }
  .ctaright {
    position: absolute;
    top: 10px;
    right: 0;
    display: none;
    @media only screen and (max-width: 991px) {
      display: block;
    }
  }
`;
export {
  CtaInner,
  CtaLeft,
  CtaRight,
  SectionHeading,
  CtaBtn,
  CtaAnimation,
  CtaMain,
  CtaSection,
  CtaImage,
};
