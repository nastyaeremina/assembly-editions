import styled, { css } from 'styled-components';
import { lightgray, title } from '../../styles/color';
import { HeaderFont, LinkTxt } from '../../styles/styles';

const DetailLink = styled.div`
  a {
    display: inline-flex;
    gap: 8px;
    align-items: center;
  }
  padding-bottom: 60px;
  padding-top: 120px;
  p {
    ${LinkTxt};
    margin: 0;
    color: ${lightgray};
    @media only screen and (max-width: 749px) {
      ${HeaderFont};
    }
  }
  a {
    :hover {
      p {
        color: ${title};
      }
      svg path {
        stroke: ${title};
      }
    }
  }
  @media only screen and (max-width: 749px) {
    padding-top: 100px;
    padding-bottom: 30px;
  }
  @media only screen and (max-width: 449px) {
    display: none;
    ${(props) =>
      props.isDirectorydetail &&
      css`
        display: block;
      `}
  }
`;

export { DetailLink };
