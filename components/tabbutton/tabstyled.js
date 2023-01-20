import styled, { css } from 'styled-components';
import { FeatureCardTitle } from '../../styles/homepageStyles';
import { Label } from '../../styles/styles';
const Tabbutton = styled.div`

.Tabs {
    width: 80%;
    height: auto;
    min-height: 400px;
    background: #053742;
    margin: 3.5rem auto 1.5rem;
    color: #E8F0F2;
    border-radius: 2rem;
    @media (max-width: 769px) {
     padding: 2rem 0;
    }
   }
   ul.nav {
    ${Label}
    color: #757575;
    padding-left: 0px;
    display:flex;
    @media (max-width: 768px) {
      margin: 0 -24px;
      padding: 0 24px;
      overflow:auto;
      display:flex;
    }
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
    }
  }
  ul.nav li:hover {
    color: #131313;
  }
  ul.nav li.active {
    background: #120800;
    color: #FFF7F0;
  }
`;

const TabDetails = styled.div`
    .FirstTab p,
    .SecondTab p {
        font-size: 2rem;
        text-align: center;
}
`;
const Tab = styled.li`
    white-space: nowrap;
    padding: 7px 20px;
    list-style: none;
    text-align: center;
    cursor: pointer;
    border-radius: 74px;
    &&.active{
    ${(props) =>
      props.textColor &&
      css`
        color: ${props.textColor} !important;
    `}
    ${(props) =>
      props.bgColor &&
      css`
        background: ${props.bgColor} !important
    `}
    }
`;

export { Tabbutton,TabDetails,Tab};