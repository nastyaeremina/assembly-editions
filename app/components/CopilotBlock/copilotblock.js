import React from 'react';
import { isEmpty, parseMarkdown } from '../../helpers/helpers';
import { MainBlock } from './styles';
import AssemblyBlockItem from './sliderCard';

export default function AssemblyBlock({ xPos, sliderData }) {
  const filteredSliderData = sliderData.filter((item) => !isEmpty(item?.hiddenAttributes?.content));
  return (
    <>
      <MainBlock style={{ transform: `translateX(${xPos}px)` }} className='slider-main-block'>
        {filteredSliderData.map((item, index) => {
          const data = parseMarkdown(item?.hiddenAttributes?.content);
          return (
            <AssemblyBlockItem
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
