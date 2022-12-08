import styled from 'styled-components';
import { Body4, Heading3, Quote } from './styles';
// import {} from "../../styles/styles";

const BookSection = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
const ImageSection = styled.div`
  width: 100%;
  max-width: 50%;
  background-image: url('/images/bookdemo.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  /* height: 900px; */
  /* background-size: contain;
  background-repeat: no-repeat; */
  /* padding: 120px 0 60px; */
  /* img {
    max-width: 900px;
    width: 100%;
  } */
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const DemoContain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 60px;
  h3 {
    ${Quote};
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: 0 0 24px;
    @media only screen and (max-width: 1024px) {
      font-size: 21px;
      line-height: 26px;
    }
  }
`;
const BottomName = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ffffff;
  padding-top: 24px;
  p {
    ${Body4};
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: 0;
    @media only screen and (max-width: 1024px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
const BgOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(360deg, #000000 0%, rgba(82, 49, 0, 0) 100%);
  backdrop-filter: blur(4px);
`;
export { BookSection, ImageSection, DemoContain, BottomName, BgOverlay };
