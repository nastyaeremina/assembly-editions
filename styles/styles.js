const { css } = require("styled-components");

const Heading1 = css`
  font-weight: 400;
  font-size: 150px;
  line-height: 135px;
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  @media only screen and (max-width: 991px) {
    font-size: 48px;
    line-height: 56px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 38px;
    line-height: 44px;
  }
  @media only screen and (max-width: 479px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

const Heading2 = css`
  font-weight: 400;
  font-size: 80px;
  line-height: 76px;
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  @media only screen and (max-width: 768px) {
    font-size: 36px;
    line-height: 42px;
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
  @media only screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media only screen and (max-width: 479px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const Heading4 = css`
  font-weight: 400;
  font-size: 32px;
  line-height: 34px;
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  @media only screen and (max-width: 479px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const Heading5 = css`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  @media only screen and (max-width: 479px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

const Heading6 = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fontfamily.Bagoss};
  @media only screen and (max-width: 479px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
const Body1 = css`
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
`;
const Body2 = css`
  font-weight: 400;
  font-size: 22px;
  line-height: 20px;
`;
const Body3 = css`
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
`;
const Body4 = css`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
`;
const Body5 = css`
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
`;
const Quote = css`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
`;
const HeaderFont = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
const FooterText = css`
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
`;
const ButtonText = css`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
`;
const Label = css`
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
`;
const Caption = css`
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
};
