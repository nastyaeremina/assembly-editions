import React from 'react';
import HighLightsCard from './highlights';

export default function HighlightSectionComponents() {
  return (
    <>
      <HighLightsCard title={'+25%'} caption={'Customer satisfaction'} ishighlight1={true} />
      <HighLightsCard title={'-10%'} caption={'Customer Churn rate'} ishighlight2 />
      <HighLightsCard title={'Over $1 million'} caption={'Additional revenue from churn reduction'} ishighlight3 />
    </>
  );
}
