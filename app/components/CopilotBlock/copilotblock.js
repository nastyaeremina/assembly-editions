import React from 'react';
import { MainBlock } from './styles';
import CopilotBlockItem from './sliderCard';

export default function CopilotBlock({ xPos, sliderData }) {
  return (
    <>
      <MainBlock style={{ transform: `translateX(${xPos}px)` }}>
        {sliderData.map((item, index) => (
          <CopilotBlockItem
            key={index}
            title={item.name}
            description={item.header}
            imageUrl={item.imageBackground?.url}
            link={`/solutions/${item.slug}`}
          />
        ))}
      </MainBlock>
    </>
  );
}
