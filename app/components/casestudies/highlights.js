import React from 'react';
import { Highlight } from '../../styles/casestudiestyles';

export default function HighLightsCard({
  title,
  caption,
  ishighlight1 = false,
  ishighlight2 = false,
  ishighlight3 = false
}) {
  return (
    <Highlight ishighlight1={ishighlight1} ishighlight2={ishighlight2} ishighlight3={ishighlight3}>
      <h2>{title}</h2>
      <p>{caption}</p>
    </Highlight>
  );
}
