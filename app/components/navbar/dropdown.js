import React from 'react';
import { DropDownHeading, FeatureDropdown, Listright } from './styles';

function DropdownComponent({ title, viewRenderer, isWidth }) {
  return (
    <FeatureDropdown>
      <div>
        {title && <DropDownHeading isWidth={isWidth}>{title}</DropDownHeading>}
        <Listright solutionright isWidth={isWidth}>
          {viewRenderer}
        </Listright>
      </div>
    </FeatureDropdown>
  );
}

export default DropdownComponent;
