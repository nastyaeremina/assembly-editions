import React, { useMemo } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Button from '../button/button';
import { isEmpty, isNumber } from '../../helpers/helpers';
import { Caption, CardBtn, PriceMenu, PricePlan, PriceSection, Pricedetail } from './styles';
import PricingCardLabel from './pricingCardLabel';

export default function PricingCard({ data, isYearly }) {
  return (
    <PriceMenu isSupersonic={data?.colorScheme === 'Dark'}>
      <PriceSection isSupersonic={data?.colorScheme === 'Dark'}>
        <h2>{data?.name}</h2>
        <p>{data?.description}</p>
        <PricingCardLabel
          isSupersonic={data?.colorScheme === 'Dark'}
          price={isYearly ? data?.annualPrice : data?.monthlyPrice}
        />
        <Caption isSupersonic={data?.colorScheme === 'Dark'}>{data?.details}</Caption>
      </PriceSection>
      <Pricedetail>
        <PricePlan isSupersonic={data?.colorScheme === 'Dark'}>
          {!isEmpty(data?.highlights?.json) && documentToReactComponents(data?.highlights?.json)}
        </PricePlan>
      </Pricedetail>
      <CardBtn>
        <>
          {!isEmpty(data?.secondaryCtaText) && (
            <Button
              bgColor={'transparent'}
              fontColor={data?.colorScheme === 'Dark' ? '--light-green' : '--dark-green'}
              borderColor={data?.colorScheme === 'Dark' ? '--light-green' : '--dark-green'}
              text={data?.secondaryCtaText}
              href={data?.secondaryCtaLink}
              hoverColor={data?.colorScheme === 'Dark' ? '--secondary-hover-color' : '--hover-color'}
              className={'cardbtn'}
            />
          )}
          {!isEmpty(data?.primaryCtaText) && (
            <Button
              text={data?.primaryCtaText}
              hoverColor={'--secondary-hover-color'}
              href={data?.primaryCtaLink}
              className={'cardbtn'}
            />
          )}
        </>
      </CardBtn>
    </PriceMenu>
  );
}
