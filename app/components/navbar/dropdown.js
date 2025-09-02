import React from 'react';
import { DropDownHeading, FeatureDropdown, Listright } from './styles';

function DropdownComponent({ title, viewRenderer, isWidth, shouldTitleShow = true }) {
  return (
    <FeatureDropdown>
      <div>
        {shouldTitleShow && title && <DropDownHeading isWidth={isWidth}>{title}</DropDownHeading>}
        <Listright isWidth={isWidth}>{viewRenderer}</Listright>
      </div>
    </FeatureDropdown>
  );
}

export default DropdownComponent;
