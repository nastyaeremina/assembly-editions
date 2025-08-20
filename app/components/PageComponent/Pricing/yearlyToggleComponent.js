import React from 'react';
import { ToggleContainer, ToggleOption } from '../../../styles/pricingstyles';

export default function YearlyToggleComponent({ onClick, isYearly, discountTag }) {
  return (
    <>
      <ToggleContainer>
        <ToggleOption active={isYearly} onClick={onClick}>
          Yearly {discountTag && <span>({discountTag})</span>}
        </ToggleOption>
        <ToggleOption active={!isYearly} onClick={onClick}>
          Monthly
        </ToggleOption>
      </ToggleContainer>
    </>
  );
}
