import React, { useMemo } from 'react';
import { convertHighlights, isEmpty } from '../../helpers/helpers';
import { HighlightSection } from '../../styles/casestudiestyles';
import HighLightsCard from './highlights';

export default function HighlightSectionComponents({ data }) {
  const renderHighlightView = useMemo(() => {
    const newList = convertHighlights(data);

    if (isEmpty(newList)) return null;
    return newList?.map((item, index) => {
      return (
        <HighLightsCard
          key={`highlight_index_${index}`}
          title={item?.title}
          caption={item?.desc}
          ishighlight1={index === 0}
          ishighlight2={index === 1}
          ishighlight3={index === 2}
        />
      );
    });
  }, [data]);

  return <>{!isEmpty(data) && <HighlightSection>{renderHighlightView}</HighlightSection>}</>;
}
