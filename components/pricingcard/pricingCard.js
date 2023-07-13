import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Button from '../button/button';
import { isEmpty } from '../../helpers/helpers';
import { Caption, CardBtn, PriceMenu, PricePlan, PriceSection, Pricedetail, Pricenumber } from './styles';

export default function PricingCard({ isSupersonic, data, isYearly }) {
  return (
    <PriceMenu isSupersonic={data?.colorScheme === 'Dark'}>
      <PriceSection isSupersonic={data?.colorScheme === 'Dark'}>
        <h2>{data?.name}</h2>
        <p>{data?.description}</p>
        <Pricenumber isSupersonic={data?.colorScheme === 'Dark'}>
          ${isYearly ? data?.annualPrice : data?.monthlyPrice}
          <span>/mo</span>
        </Pricenumber>
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
              fontColor={data?.colorScheme === 'Dark' ? '#E3FFEE' : '#00160E'}
              borderColor={data?.colorScheme === 'Dark' ? '#E3FFEE' : '#00160E'}
              text={data?.secondaryCtaText}
              href={data?.secondaryCtaLink}
              hoverColor={data?.colorScheme === 'Dark' ? 'rgba(255, 255, 255,0.8)' : 'rgba(0, 0, 0, 0.5)'}
              className={'cardbtn'}
            />
          )}
          {!isEmpty(data?.primaryCtaText) && (
            <Button
              text={data?.primaryCtaText}
              hoverColor={'rgba(255, 255, 255, 0.8)'}
              href={data?.primaryCtaLink}
              className={'cardbtn'}
            />
          )}
        </>
      </CardBtn>
    </PriceMenu>
  );
}
