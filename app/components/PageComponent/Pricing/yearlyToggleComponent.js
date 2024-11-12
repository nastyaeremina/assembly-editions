import React from 'react';
import { SaveButton, ToggleContainer, ToggleOption, ToggleSwitch } from '../../../styles/pricingstyles';

export default function YearlyToggleComponent({ onClick, isYearly, discountTag }) {
  return (
    <>
      {discountTag && <SaveButton>{discountTag}</SaveButton>}
      <ToggleContainer>
        <ToggleOption active={isYearly} onClick={onClick}>
          Yearly
        </ToggleOption>
        <ToggleSwitch active={!isYearly} onClick={onClick} />
        <ToggleOption active={!isYearly} onClick={onClick}>
          Monthly
        </ToggleOption>
      </ToggleContainer>
    </>
  );
}
