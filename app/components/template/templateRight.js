import React from 'react';
import { RightSection } from './templateBodyStyle';
import AboutComponent from './aboutComponent';
import AppsComponent from './appsComponent';

export default function TemplateRight({ appsList, aboutContent }) {
  return (
    <RightSection>
      <AboutComponent
        maker={aboutContent?.maker}
        highlights={aboutContent?.highlights}
        industry={aboutContent?.industry}
      />
      <AppsComponent appsList={appsList} />
    </RightSection>
  );
}
