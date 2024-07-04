import React from 'react';
import { IframeBlock, IframeDiv } from './styles';

function IframeView({ url, title }) {
  return (
    <IframeDiv>
      <IframeBlock
        src={url}
        title={title}
        frameborder='0'
        loading='lazy'
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        allow='fullscreen; clipboard-write'
      />
    </IframeDiv>
  );
}

export default IframeView;
