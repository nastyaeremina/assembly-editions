import React from 'react';
import { RightSection } from './templateBodyStyle';
import AboutComponent from './aboutComponent';
import AppsComponent from './appsComponent';

export default function TemplateRight({ appsList, aboutContent }) {
  return (
    <RightSection>
      <AboutComponent
        data={[
          { label: 'Maker', value: aboutContent?.maker },
          { label: 'Highlights', value: aboutContent?.highlights },
          { label: 'Industry', value: aboutContent?.industry?.name, link: `/solutions/${aboutContent.industry?.slug}` }
        ]}
      />
      <AppsComponent appsList={appsList} />
    </RightSection>
  );
}
