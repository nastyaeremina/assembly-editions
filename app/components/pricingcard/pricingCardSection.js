import React, { useEffect, useMemo, useState } from 'react';
import { isEmpty, stringToSlugyfy } from '../../helpers/helpers';
import PricingCard from './pricingCard';
import PricingDetailsHead from './pricingDetailsHead';
import { PricePlan } from './styles';

export default function PricingCardSection({ data, cardSize, isYearly }) {
  const [maxHeight, setMaxHeight] = useState(24);

  useEffect(() => {
    setTimeout(() => {
      data?.forEach((item) => {
        // Get the element by its ID (dynamic ID based on item title)
        const element = document.getElementById(stringToSlugyfy(item?.name));
        if (element) {
          const height = element.offsetHeight;
          if (height > maxHeight) {
            setMaxHeight(height);
          }
        }
      });
    }, 200);
  }, [data, maxHeight]);

  const renderPricingCardView = useMemo(() => {
    if (isEmpty(data)) return null;
    const wrappedSections = [];
    data?.forEach((item, index) => {
      const pricingHeader = (
        <PricingDetailsHead
          key={`prticingcard_index_${item?.name}_${index}`}
          data={item}
          isYearly={isYearly}
          descriptionMaxHeight={maxHeight}
        />
      );
      const dataHighlights = PricingCard({
        data: item,
        isYearly: isYearly,
        descriptionMaxHeight: maxHeight
      });
      wrappedSections.push([pricingHeader, ...dataHighlights]);
    });
    const final = [];
    for (let col = 0; col < wrappedSections[0].length; col++) {
      for (let row = 0; row < wrappedSections.length; row++) {
        final.push(wrappedSections[row][col]);
      }
    }
    const oddColumns = [];
    const evenColumns = [];
    for (let col = 0; col < wrappedSections[0].length; col++) {
      for (let row = 0; row < wrappedSections.length; row++) {
        if (col % 2 === 0) {
          oddColumns.push(wrappedSections[row][col]);
        } else {
          evenColumns.push(wrappedSections[row][col]);
        }
      }
    }
    return <>{final}</>;
  }, [data, isYearly, maxHeight]);

  return <PricePlan noOfPlan={data.length}>{renderPricingCardView}</PricePlan>;
}
