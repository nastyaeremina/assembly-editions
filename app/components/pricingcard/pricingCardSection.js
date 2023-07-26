import React, { useMemo } from 'react';
import { isEmpty } from '../../helpers/helpers';
import PricingCard from './pricingCard';
import { PriceOption } from './styles';

export default function PricingCardSection({ data, cardSize, isYearly }) {
  const renderPricingCardView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      return <PricingCard key={`prticingcard_index_${index}`} data={item} isYearly={isYearly} />;
    });
  }, [data, isYearly]);

  return <PriceOption is4Card={cardSize === 4}>{renderPricingCardView}</PriceOption>;
}
