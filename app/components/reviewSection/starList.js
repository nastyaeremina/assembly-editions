import React from 'react';
import SVGComponent from 'public/images/svg/SVGComponent';
import { Star } from './styles';

export default function StartList({ rate, isBig }) {
  const svgWidth = isBig ? '24' : '20';
  const renderStar = () => {
    return [...Array(5)].map((i, index) => {
      if (index + 1 <= rate || rate - index > 0.5)
        return (
          <SVGComponent
            name={`green-star-${isBig ? 'big' : 'medium'}-icon`}
            width={svgWidth}
            height={svgWidth}
            viewBox={svgWidth}
          />
        );
      else if (rate - index <= 0.5 && rate - index !== 0)
        return (
          <SVGComponent
            name={`half-star-${isBig ? 'big' : 'medium'}-icon`}
            width={svgWidth}
            height={svgWidth}
            viewBox={svgWidth}
          />
        );
      else
        return (
          <SVGComponent
            name={`white-star-${isBig ? 'big' : 'medium'}-icon`}
            width={svgWidth}
            height={svgWidth}
            viewBox={svgWidth}
          />
        );
    });
  };

  return <Star>{renderStar()}</Star>;
}
