import React from 'react';
import { Highlight } from '../../styles/casestudiestyles';

export default function HighLightsCard({
  title,
  caption,
  ishighlight1 = false,
  ishighlight2 = false,
  ishighlight3 = false,
  variant
}) {
  return (
    <Highlight ishighlight1={ishighlight1} ishighlight2={ishighlight2} ishighlight3={ishighlight3} variant={variant}>
      <h3>{title}</h3>
      <p>{caption}</p>
    </Highlight>
  );
}
