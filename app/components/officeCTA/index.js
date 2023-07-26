import React from 'react';
import { Container } from '../../styles/commonStyles';
import Button from '../button/button';
import { OfficeCTABtn, OfficeCTACaption, OfficeCTAHeading, OfficeSection } from './styles';

export default function OfficeCTA() {
  return (
    <OfficeSection>
      <Container>
        <OfficeCTAHeading>Join us every week</OfficeCTAHeading>
        <OfficeCTACaption>
          Want to learn more? Meet our product specialists in our Weekly Office Hours series to get all your questions
          answered.
        </OfficeCTACaption>
        <OfficeCTABtn>
          <Button
            bgColor={'transparent'}
            fontColor={'#E3FFEE'}
            borderColor={'#E3FFEE'}
            text={'Register for office hours'}
            href={'/weekly-demo'}
            hoverColor={'rgba(255, 255, 255,0.8)'}
            className={'office-registerbtn'}
          />
        </OfficeCTABtn>
      </Container>
    </OfficeSection>
  );
}
