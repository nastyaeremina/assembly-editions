import styled from 'styled-components';
import { MbBody5, MbPrimaryBtn } from '../../styles/styles';

const Feedbackcard = styled.div`
  width: 345px;
  padding: 20px;
  border: 1px solid #ccccd0;
  border-radius: 4px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;
const Cardleft = styled.div`
  .cardprofile {
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }
  display: flex;
  gap: 12px;
`;
const CardRight = styled.div`
  width: 40px;
  height: 40px;
`;
const PersonDetail = styled.div``;
const PersonName = styled.h2`
  ${MbPrimaryBtn}
  letter-spacing: 0.02em;
  margin: 0;
  color: ${({ theme }) => theme.colors.title};
`;
const Caption = styled.p`
  ${MbBody5}
  letter-spacing: 0.02em;
  margin: 0;
  color: ${({ theme }) => theme.colors.body};
`;
const CardDetail = styled.div`
  margin: 0;
  span {
    ${MbPrimaryBtn}
    letter-spacing: 0.02em;
    margin: 0;
    color: ${({ theme }) => theme.colors.title};
  }
  p {
    ${MbBody5}
    letter-spacing: 0.02em;
    margin: 4px 0 0;
    color: ${({ theme }) => theme.colors.title};
  }
`;
const Customer = styled.div`
  display: flex;
  gap: 20px;
  /* padding-bottom: 100px; */
  /* overflow: scroll; */
  ::-webkit-scrollbar {
    display: none;
  }
  /* @media only screen and (max-width: 768px) {
    padding-bottom: 80px;
  } */
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Rating = styled.div`
  margin-top: 20px;
`;
const Main = styled.div`
  padding-bottom: 100px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 80px;
  }
  @-webkit-keyframes scroll {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(calc(-300px * 6));
      transform: translateX(calc(-300px * 6));
    }
  }
  @keyframes scroll {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(calc(-300px * 6));
      transform: translateX(calc(-300px * 6));
    }
  }
  .slider-1 {
    /* background: pr; */
    height: auto;
    margin: auto;
    overflow: hidden;
    position: relative;
    // width: 100%;
    //  max-width: 1440px;
  }
  .slider-1::before,
  .slider-1::after {
    /* background: linear-gradient(to right, rgba(243, 243, 243, 100), rgba(243, 243, 243, 0) 100%); */
    content: '';
    height: 400px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }
  .slider-1::after {
    right: 0;
    top: 0;
    -webkit-transform: rotateZ(180deg);
    transform: rotateZ(180deg);
  }
  .slider-1::before {
    left: 0;
    top: 0;
  }
  .slider-1 .slide-track {
    -webkit-animation: scroll 60s linear infinite;
    animation: scroll 60s linear infinite;
    display: flex;
    flex-wrap: nowrap;
    width: calc(345px * 12);
  }
`;

const Sub = styled.div``;
export {
  Feedbackcard,
  CardHeader,
  Cardleft,
  CardRight,
  PersonDetail,
  PersonName,
  Caption,
  CardDetail,
  Customer,
  Section,
  Rating,
  Main,
  Sub
};
