import React from 'react';
import { isEmpty, parseMarkdown } from '../../helpers/helpers';
import { MainBlock } from './styles';
import CopilotBlockItem from './sliderCard';

export default function CopilotBlock({ xPos, sliderData }) {
  const filteredSliderData = sliderData.filter((item) => !isEmpty(item?.hiddenAttributes?.content));
  return (
    <>
      <MainBlock style={{ transform: `translateX(${xPos}px)` }}>
        {filteredSliderData.map((item, index) => {
          const data = parseMarkdown(item?.hiddenAttributes?.content);
          return (
            <CopilotBlockItem
              key={index}
              title={data?.heading}
              description={data?.text}
              imageUrl={data?.imageUrl}
              link={`/${item?.slug}`}
            />
          );
        })}
      </MainBlock>
    </>
  );
}
