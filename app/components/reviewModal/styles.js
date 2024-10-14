import styled from 'styled-components';
import { Body5, HeaderFont, Heading5, Heading6, MbButtonText } from '../../styles/styles';

const Modal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 99999;
  top: 0;
  left: 0;
  background-color: var(--modal-bg-color);
`;

const ReviewModalCard = styled.div`
  max-width: 480px;
  width: 100%;
  background-color: var(--white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  z-index: 1;
`;

const CloseIcon = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
const Header = styled.div`
  padding: 20px 30px;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h3`
  margin: 0;
  ${Heading6};
  color: var(--title);
`;
const Content = styled.form`
  padding: 24px 30px;
  .submit-button {
    width: max-content;
    button {
      padding: 8px 32px;
      ${HeaderFont}
    }
  }
`;

const NameInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  .inputtext {
    padding: 8px 12px;
    border-radius: 4px;
  }
  label {
    ${MbButtonText};
    color: var(--sub-title);
  }
`;

const Input = styled.input`
  padding: 7px 12px;
  background-color: var(--white);
  border: 1px solid var(--border);
  border-radius: 4px;
  outline: 0;
  height: 32px;
  margin-bottom: 24px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  width: 100%;
  color: var(--title);
  :hover {
    border-color: var(--primary);
  }
  :focus {
    border-color: var(--primary);
  }
`;

const TextArea = styled.textarea`
  padding: 7px 12px;
  background-color: var(--white);
  border: 1px solid var(--border);
  border-radius: 4px;
  outline: 0;
  margin-bottom: 30px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  width: 100%;
  min-height: 135px;
  resize: none;
  color: var(--title);
  :hover {
    border-color: var(--primary);
  }
  :focus {
    border-color: var(--primary);
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const StarRatingSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  p {
    ${MbButtonText};
    color: var(--sub-title);
    margin: 0;
  }
`;

const OverLayDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ThankYouCard = styled.div`
  padding: 24px;
  max-width: 480px;
  width: 100%;
  background-color: var(--white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  .back-button {
    a {
      padding: 7px 32px;
      ${HeaderFont}
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 20px 0 24px;
`;
const Head = styled.h3`
  ${Heading5};
  font-weight: 400;
  color: var(--title);
  margin: 0;
  text-align: center;
`;
const Caption = styled.p`
  ${Body5}
  color: var(--body);
  margin: 0;
  text-align: center;
`;
export {
  Modal,
  ReviewModalCard,
  CloseIcon,
  Header,
  Heading,
  Content,
  NameInfo,
  Input,
  TextArea,
  StarRatingSection,
  OverLayDiv,
  ThankYouCard,
  Title,
  Head,
  Caption
};
