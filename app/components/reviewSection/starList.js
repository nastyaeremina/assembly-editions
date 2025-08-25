import React from 'react';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { Star } from './styles';

export default function StartList({ rate, isBig }) {
  const svgWidth = isBig ? '24' : '20';
  const renderStar = () => {
    return [...Array(5)].map((_, index) => {
      if (index + 1 <= rate)
        return (
          <SVGComponent
            name={`green-star-${isBig ? 'big' : 'medium'}-icon`}
            width={svgWidth}
            height={svgWidth}
            viewBox={svgWidth}
            key={`start-${index}`}
          />
        );
      else if (rate - index === 0.5)
        return (
          <SVGComponent
            name={`half-star-${isBig ? 'big' : 'medium'}-icon`}
            width={svgWidth}
            height={svgWidth}
            viewBox={svgWidth}
            key={`start-${index}`}
          />
        );
      else
        return (
          <SVGComponent
            name={`white-star-${isBig ? 'big' : 'medium'}-icon`}
            width={svgWidth}
            height={svgWidth}
            viewBox={svgWidth}
            key={`start-${index}`}
          />
        );
    });
  };

  return <Star>{renderStar()}</Star>;
}
