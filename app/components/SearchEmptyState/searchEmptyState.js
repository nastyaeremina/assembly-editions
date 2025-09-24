'use client';

import SVGComponent from '../../../public/images/svg/SVGComponent';
import { ButtonSize } from '../../constants/constant';
import { isEmpty } from '../../helpers/helpers';
import ButtonV2Component from '../button/buttonV2/buttonV2';
import { EmptyDescription, EmptyIcon, EmptyState } from './styles';

export default function SearchEmptyState({ icon, title, description, onClick, buttonTitle }) {
  return (
    <EmptyState>
      <EmptyIcon>
        <SVGComponent name={icon} width='20' height='20' viewBox='0 0 20 20' className='icon' />
      </EmptyIcon>
      <EmptyDescription>
        <h4>{title}</h4>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </EmptyDescription>
      {!isEmpty(buttonTitle) && <ButtonV2Component title={buttonTitle} onClick={onClick} size={ButtonSize.SMALL} />}
    </EmptyState>
  );
}
