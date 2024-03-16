import React from 'react';
import ReactMarkdown from 'react-markdown';
import HeadingText from '../header/headingText';
import Button from '../button/button';
import ExtensionSlider from '../extensionslider/extensionslider';
import { BtnView, BusinessText, Extension, RightContent } from '../../styles/homepageStyles';
import { Container } from '../../styles/commonStyles';

export default function PartnerAppsComponent({ title, description, appList }) {
  return (
    <Extension>
      <Container>
        <BusinessText>
          <HeadingText title={title} />
          <RightContent>
            <ReactMarkdown>{description}</ReactMarkdown>
            <BtnView>
              <Button text={'Browse App Store'} href={'/apps'} />
            </BtnView>
          </RightContent>
        </BusinessText>
      </Container>
      <ExtensionSlider data={appList} />
    </Extension>
  );
}
