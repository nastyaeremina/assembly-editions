import styled, { css } from 'styled-components';

const IconView = styled.div`
  position: absolute;
  right: 10px;
  top: -11px;
  display: inline-flex;
`;

const IconWithoutView = styled.div`
    width: 20px;
    height: 20px;
    background-color: #ccccd0;
    border-radius: 50px;
    ${(props) =>
    props.isAnimated &&
    css`
      background-color: #E3FFEE;
    `}
`;

const Icon = styled.div`    
    width: 20px;
    height: 20px; 
    background: #2E86DE;
    border-radius: 50px;
    transform-origin: center;
    div img{
        position:absolute;
        animation:spin 2s linear infinite;
    }
    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;

export { IconView ,IconWithoutView, Icon };