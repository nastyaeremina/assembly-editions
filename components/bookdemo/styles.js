import styled from 'styled-components';
import { Body3, Body4, Body6, CardTxt, HeaderFont, Heading3, Heading4, MbBody4, MobileH4 } from '../../styles/styles';
const MainSection = styled.div`
  max-width: 50%;
  width: 100%;
  padding: 40px 80px;
  background-color: ${({ theme }) => theme.colors.bgcolor};
  overflow: auto;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 28px 160px 22px;
  }
  @media only screen and (max-width: 500px) {
    max-width: 100%;
    padding: 28px 24px 22px;
  }
`;
const LastText = styled.div`
  text-align: center;
  p {
    ${HeaderFont};
    color: ${({ theme }) => theme.colors.title};
    margin: 20px 0 0 0;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 16px;
  }
`;
const FormSection = styled.form`
  max-width: 380px;
  margin: 0 auto;
  .btnposition {
    width: 100%;
    text-align: center;
    a {
      width: 100%;
      text-align: center;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
const FormTxt = styled.div`
  padding: 40px 0;
  h4 {
    ${Heading4};
    color: ${({ theme }) => theme.colors.title};
    margin: 0 0 12px 0;
  }
  p {
    ${Body4};
    color: ${({ theme }) => theme.colors.body};
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    padding: 48px 0 28px;
    h4 {
      ${MobileH4};
      margin-bottom: 8px;
    }
    p {
      ${MbBody4};
    }
  }
`;
const FormDetail = styled.div`
  padding-bottom: 40px;
  label {
    display: block;
    ${CardTxt};
    color: ${({ theme }) => theme.colors.subtitle};
    margin: 0 0 5px 0;
  }
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  select {
    margin-bottom: 20px;
    padding: 7px 0;
    border: 1px solid #dfe1eb;
    border-radius: 4px;
    background-color: #fff;
    background-image: none;
    background-position: 0 0;
    background-size: auto;
    background-repeat: repeat;
    font-size: 12px;
    line-height: 16px;
    outline: 0;
    appearance: none;
    width: 100%;
    :hover {
      border-color: ${({ theme }) => theme.colors.primary};
    }
    :focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
  .wselect {
    display: block;
    width: 100%;
    padding: 7px 12px;
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.title};
    font-weight: 400px;
    /* vertical-align: middle; */
    background-color: #fff;
    border: 1px solid #ccc;
  }
  .sm {
    border-radius: 4px;
    font-size: 14px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    height: auto;
    min-height: 32px;
    height: 32px;
    padding: 7px 12px;
    outline: 0;
    border: 1px solid #dfe1eb;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.title};
    :hover {
      border-color: ${({ theme }) => theme.colors.primary};
    }
    :focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media only screen and (max-width: 768px) {
    padding-bottom: 28px;
  }
`;

const Input = styled.input`
  padding: 7px 12px;
  background-color: ${({ theme }) => theme.colors.whitecolor};
  border: 1px solid #ccccd0;
  border-radius: 4px;
  outline: 0;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 16px;
  width: 100%;
  color: ${({ theme }) => theme.colors.title};
  :hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  :focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
const NameBlock = styled.div`
  display: flex;
  gap: 20px;
  .firstlable {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;
const NameInfo = styled.div`
  .inputtext {
    margin-bottom: 20px;
    padding: 7px 10px;
    border-radius: 4px;
    font-size: 14px;
  }
`;
const SliderSection = styled.div`
  position: relative;
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .ImageSection {
    max-width: 900px;
    width: 100%;
    /* background-image: url("/images/demoimage.png");
    height: 900px;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 120px 0 60px; */
  }
  .swiper {
    width: 100%;
    height: 100vh;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    width: 72px;
    height: 72px;
    text-align: center;
    color: ${({ theme }) => theme.colors.body};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    background: transparent;
    border: 1.08px solid #4c4c4c;
    animation: spin 1.5s infinite linear;
    margin: 0;
    span {
      ${Body6};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .swiper-pagination-bullet-active {
    color: #fff;
    background: transparent;
    border: 1px solid #09aa6c;
    border-radius: 68.4px;
    span {
      ${Body6};
      color: ${({ theme }) => theme.colors.whitecolor};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .swiper-pagination {
    display: flex;
    bottom: 60px;
    justify-content: end;
    gap: 16px;
    left: -120px;
    bottom: 60px;
    margin: 0 !important;
  }
`;
const Swiper = styled.div`
  width: 100%;
  height: 100%;
`;

const SwiperSlide = styled.div`
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;
const ImageText = styled.div`
  position: absolute;
  max-width: 660px;
  width: 100%;
  text-align: left;
  bottom: 172px;
  h3 {
    ${Heading3};
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: 0 0 24px 0;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ffffff;
  padding-top: 24px;
  p {
    ${Body4};
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: 0;
  }
`;
const ImgWrap = styled.div`
  display: inline-flex;
  max-height: 24px;
  @media only screen and (max-width: 768px) {
    .desktop {
      display: none;
    }
  }
  .mbicon {
    display: none;
    @media only screen and (max-width: 768px) {
      display: block;
    }
  }
`;
export {
  MainSection,
  FormSection,
  FormTxt,
  FormDetail,
  Input,
  NameBlock,
  NameInfo,
  LastText,
  SliderSection,
  Swiper,
  SwiperSlide,
  ImageText,
  TextWrapper,
  ImgWrap
};
