import React from 'react';
import { isNumber } from '../../helpers/helpers';
import { Pricenumber } from './styles';

/**
 * PricingCardLabel Component
 *
 * This component generates JSX for the pricing label based on the provided 'price' and 'isSupersonic' props.
 * If 'price' is a number, it displays the price with '/mo' appended.
 * If 'price' is not a number, it displays the 'price' as is, assuming it could be a string (e.g., 'Custom').
 *
 * @param {number|string} price - The price to be displayed in the label.
 * @param {boolean} isSupersonic - A flag indicating whether the pricing is for a supersonic feature.
 * @returns {JSX.Element} - The JSX representation of the pricing label.
 */ export default function PricingCardLabel({ price, isSupersonic }) {
  return (
    <>
      <Pricenumber isSupersonic={isSupersonic}>
        {/* Check if the price is a number. */}
        {isNumber(price) ? (
          <>
            ${price}
            <span>/month</span>
          </>
        ) : (
          price // If not a number, display the price as is could be a string(e.g. 'Custom').
        )}
      </Pricenumber>
    </>
  );
}
