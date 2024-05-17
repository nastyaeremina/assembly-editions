'use client';
import React from 'react';
import { Container } from '../../styles/commonStyles';
import RichTextDetail from '../richTextDetail/richText';
import { isEmpty } from '../../helpers/helpers';
import { TemplateBody, TemplateContent } from './templateBodyStyle';
import TemplateRight from './templateRight';

export default function TemplateBodySection({ bodyContent, appsList, aboutContent }) {
  return (
    <>
      <Container>
        <TemplateBody>
          {/* left content */}
          {!isEmpty(bodyContent) && (
            <TemplateContent>
              <RichTextDetail data={bodyContent?.json} assets={bodyContent?.links} shouldHeadingCopy={false} />
            </TemplateContent>
          )}
          {/* right content */}
          <TemplateRight appsList={appsList} aboutContent={aboutContent} />
        </TemplateBody>
      </Container>
    </>
  );
}
