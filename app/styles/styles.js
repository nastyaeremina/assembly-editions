const { css } = require('styled-components');

const Heading1 = css`
  font-size: 64px;
  line-height: 70px;
  font-weight: 600;
  font-family: 'PPMori';
  @media only screen and (max-width: 449px) {
    font-size: 40px;
    line-height: 44px;
  }
`;

const Heading2 = css`
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  font-family: 'PPMori';
  @media only screen and (max-width: 449px) {
    font-size: 32px;
    line-height: 37px;
  }
`;

const Heading3 = css`
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  font-family: 'PPMori';
  @media only screen and (max-width: 449px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

const Heading3_Semibold = css`
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  font-family: 'PPMori';
  @media only screen and (max-width: 449px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

const Heading4 = css`
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  font-family: 'PPMori';
  @media only screen and (max-width: 449px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

const Heading4_Semibold = css`
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  font-family: 'PPMori';
  @media only screen and (max-width: 449px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

const Body1 = css`
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.02em;
  font-family: 'PPMori';
  @media only screen and (max-width: 449px) {
    font-size: 18px;
    line-height: 27px;
  }
`;

const Body1_Regular = css`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.02em;
  font-family: 'PPMori';
  @media only screen and (max-width: 449px) {
    font-size: 18px;
    line-height: 27px;
  }
`;

const Body2_Regular = css`
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.02em;
  font-family: 'PPMori';
`;

const Body2_Semibold = css`
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.02em;
  font-family: 'PPMori';
`;

const Body3_Regular = css`
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  font-family: 'PPMori';
`;

const ButtonText = css`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.02em;
  font-family: 'PPMori';
  @media only screen and (max-width: 449px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Caption = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-family: 'PPMori';
  @media only screen and (max-width: 449px) {
    font-size: 12px;
    line-height: 17px;
  }
`;

const LabelText = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  font-family: 'PPMori';
`;

// following font styles are not used in the Assembly website.
const Heading5 = css`
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  @media only screen and (max-width: 479px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
const Heading6 = css`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  @media only screen and (max-width: 479px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
const Body2 = css`
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  letter-spacing: 0.02em;
`;
const Body3 = css`
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
`;
const Body4 = css`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.02em;
`;
const Body5 = css`
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.02em;
  font-family: 'PPMori';
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
const Label = css`
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  letter-spacing: 0.01em;
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
  letter-spacing: 0.02em;
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
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  font-family: 'PPMori';
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
const MbBody2 = css`
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
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
const MbBody5 = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;
const SliderTxt = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.01em;
`;
const MobileH1 = css`
  font-weight: 400;
  font-size: 60px;
  line-height: 54px;
`;

const Limarker = css`
  ::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 10px;
    background-color: var(--mid-light-green);
  }
`;
export {
  Heading1,
  Heading2,
  Heading3,
  Heading3_Semibold,
  Heading4,
  Heading4_Semibold,
  Heading5,
  Heading6,
  Body1,
  Body1_Regular,
  LabelText,
  Body2,
  Body2_Regular,
  Body2_Semibold,
  Body3,
  Body3_Regular,
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
  SliderTxt,
  MobileH1,
  MbBody2,
  MbBody5,
  Limarker
};
