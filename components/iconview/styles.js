import styled, { css } from 'styled-components';

const IconView = styled.div`
  position: absolute;
  right: 10px;
  top: -11px;
  display: inline-flex;
  .default-state
  {
    display:none;
  }
  &&.default .default-state{
    display:block ;
  }
  .loading-state
  {
    display:none;
  }
  &&.loading .loading-state{
    display:block;
  }
  .done-state{
    display:none;
  }
  &&.done .done-state{
    display:block;
  }
`;

const IconWithoutView = styled.div`
    width: 20px;
    height: 20px;
    background-color: #ccccd0;
    border-radius: 50px;
`;

const Icon = styled.div`    
    width: 20px;
    height: 20px;
    background: #2E86DE;
    border-radius: 50px;
    div{
        position:absolute;
        animation:spin 2s linear infinite;
    }
    @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export { IconView ,IconWithoutView, Icon };