import React from 'react';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { Star } from './styles';

export default function StartList({ rate, iconSize = '20' }) {
  const renderStar = () => {
    return [...Array(5)].map((_, index) => {
      if (index + 1 <= rate)
        return (
          <SVGComponent
            name={'black-star-icon'}
            width={iconSize}
            height={iconSize}
            viewBox='0 0 18 19'
            key={`start-${index}`}
          />
        );
      else if (rate - index === 0.5)
        return (
          <SVGComponent
            name={'half-star-icon'}
            width={iconSize}
            height={iconSize}
            viewBox='0 0 18 19'
            key={`start-${index}`}
          />
        );
      else
        return (
          <SVGComponent
            name={`white-star-icon`}
            width={iconSize}
            height={iconSize}
            viewBox='0 0 18 19'
            key={`start-${index}`}
          />
        );
    });
  };

  return <Star>{renderStar()}</Star>;
}
