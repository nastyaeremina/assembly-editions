import React from 'react';
import { HighlightSection } from '../../styles/casestudiestyles';
import HighLightsCard from './highlights';

export default function HighlightSectionComponents() {
  return (
    <>
      <HighlightSection>
        <HighLightsCard title={'+25%'} caption={'Customer satisfaction'} ishighlight1={true} />
        <HighLightsCard title={'-10%'} caption={'Customer Churn rate'} ishighlight2={true} />
        <HighLightsCard title={'Over $1 million'} caption={'Additional revenue from churn reduction'} ishighlight3={true} />
      </HighlightSection>
    </>
  );
}
