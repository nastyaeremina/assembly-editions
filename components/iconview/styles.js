import styled, { css } from 'styled-components';

const IconView = styled.div`
  position: absolute;
  right: 10px;
  top: -11px;
  display: inline-flex;
  .default .default-state{
    display:block ;
  }
  .loading .loading-state{
    display:block !important;
  }
  .done .done-state{
    display:block;
  }
`;

const IconWithoutView = styled.div`
    display:none;
    width: 20px;
    height: 20px;
    background-color: #ccccd0;
    border-radius: 50px;
    position: absolute;
    right: 40px;
    top: 0px; 
`;

const Icon = styled.div`    
    display:none;
    width: 20px;
    height: 20px;
    background: #2E86DE;
    border-radius: 50px;
    div{
        position:absolute;
        left:5px;
        top:1px;
        animation:spin 2s linear infinite;
    }
    @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export { IconView ,IconWithoutView, Icon };