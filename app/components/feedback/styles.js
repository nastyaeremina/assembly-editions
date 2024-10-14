import styled from 'styled-components';
import { MbBody5, MbPrimaryBtn } from '../../styles/styles';

const Feedbackcard = styled.div`
  width: 345px;
  padding: 20px;
  border: 1px solid var(--border);
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
  color: var(--title);
`;
const Caption = styled.p`
  ${MbBody5}
  letter-spacing: 0.02em;
  margin: 0;
  color: var(--body);
`;
const CardDetail = styled.div`
  margin: 0;
  span {
    ${MbPrimaryBtn}
    letter-spacing: 0.02em;
    margin: 0;
    color: var(--title);
  }
  p {
    ${MbBody5}
    letter-spacing: 0.02em;
    margin: 4px 0 0;
    color: var(--title);
  }
`;
const Customer = styled.div`
  padding-bottom: 100px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 80px;
  }
`;
const Section = styled.div`
  display: flex !important;
  flex-direction: column;
  gap: 20px;
  margin: 0 10px;
`;

const Rating = styled.div`
  margin-top: 20px;
`;
const Main = styled.div`
  padding-bottom: 100px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 80px;
  }
`;

const Sub = styled.div``;

const BannerSection = styled.div`
  padding-bottom: 100px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 80px;
  }
  .inner {
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 100%;
  }
  .wrapper {
    display: flex;
    gap: 20px;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    animation: swipe var(--speed) linear infinite backwards;
  }
  @-webkit-keyframes swipe {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-300px * 6));
    }
  }

  @keyframes swipe {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-300px * 6));
    }
  }
`;
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
  Sub,
  BannerSection
};
