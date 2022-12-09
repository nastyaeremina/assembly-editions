const { css } = require('styled-components');

const Heading1 = css`
  font-weight: 400;
  font-size: 150px;
  line-height: 135px;
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  @media only screen and (max-width: 991px) {
    font-size: 80px;
    line-height: 76px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 60px;
    line-height: 54px;
  }
  @media only screen and (max-width: 479px) {
    font-size: 60px;
    line-height: 54px;
  }
`;

const Heading2 = css`
  font-weight: 400;
  font-size: 80px;
  line-height: 76px;
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  @media only screen and (max-width: 768px) {
    /* font-size: 36px;
    line-height: 42px; */
  }
  @media only screen and (max-width: 479px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

const Heading3 = css`
  font-weight: 400;
  font-size: 50px;
  line-height: 55px;
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  @media only screen and (max-width: 991px) {
    font-size: 44px;
    line-height: 50px;
  }
  @media only screen and (max-width: 479px) {
    font-size: 28px;
    line-height: 31px;
  }
`;

const Heading4 = css`
  font-weight: 400;
  font-size: 32px;
  line-height: 34px;
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  @media only screen and (max-width: 479px) {
    font-size: 22px;
    line-height: 23px;
  }
`;

const Heading5 = css`
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  @media only screen and (max-width: 479px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

const Heading6 = css`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  @media only screen and (max-width: 479px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
const Body1 = css`
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  letter-spacing: 0.02em;
`;
const Body2 = css`
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  letter-spacing: 0.02em;
`;
const Body3 = css`
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
`;
const Body4 = css`
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.02em;
`;
const Body5 = css`
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.02em;
`;
const Quote = css`
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
`;
const HeaderFont = css`
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
const FooterText = css`
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
`;
const ButtonText = css`
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.02em;
`;
const Label = css`
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  letter-spacing: 0.01em;
`;
const Caption = css`
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
`;
const Heading = css`
  font-weight: 400;
  font-size: 120px;
  line-height: 120px;
`;
const HeroPara = css`
  font-weight: 400;
  font-size: 22px;
  line-height: 20px;
`;
const TableText = css`
  font-weight: 400;
  font-size: 42px;
  line-height: 44px;
`;
const Value = css`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
`;
const CardTxt = css`
  font-weight: 500;
  font-size: 12px;
  line-height: 13px;
`;
const Body6 = css`
  font-weight: 500;
  font-size: 9px;
  line-height: 12px;
  letter-spacing: 0.01em;
`;
const Name = css`
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
`;
const LinkTxt = css`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
`;
const MbButtonText = css`
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.02em;
`;
const MbBody1 = css`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.02em;
`;
const MbPrimaryBtn = css`
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
`;
const MobileH2 = css`
  font-weight: 400;
  font-size: 44px;
  line-height: 42px;
`;
const MobileH3 = css`
  font-weight: 400;
  font-size: 28px;
  line-height: 31px;
`;
const MobileH4 = css`
  font-weight: 400;
  font-size: 22px;
  line-height: 23px;
`;
const MbBody3 = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
`;
const MbBody4 = css`
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
`;
const SliderTxt = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.01em;
`;
export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Body1,
  Body2,
  Body3,
  Body4,
  Body5,
  Body6,
  Quote,
  HeaderFont,
  FooterText,
  ButtonText,
  Label,
  Caption,
  Heading,
  HeroPara,
  TableText,
  Value,
  CardTxt,
  Name,
  LinkTxt,
  MbButtonText,
  MbBody1,
  MbPrimaryBtn,
  MobileH2,
  MobileH3,
  MobileH4,
  MbBody3,
  MbBody4,
  SliderTxt
};
