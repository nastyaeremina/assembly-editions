'use client';
import React from 'react';
import Image from 'next/image';
import { HelpContainerSection, HelpMain, HelpLeft, HelpWrap, HelpMargin, HelpImg } from '../../styles/homepageStyles';
import { Container } from '../../styles/commonStyles';
import HeadingText from '../header/headingText';
import { isEmpty } from '../../helpers/helpers';
import SupportItem from './supportSection/support';

/**
 * Help section component
 * @param {Object} props - Component props
 * @param {string} title - The title of the help section, displayed prominently at the top.
 * @param {string} image - The URL of the image to be displayed on the right side of the help section.
 * @param {Array<Object>} data - An array of support item objects to be displayed, each containing relevant details.
 */

function HelpSection({ title, image, data }) {
  if (isEmpty(data) && data.length === 4) return null;
  return (
    <HelpContainerSection>
      <Container>
        <HelpMain>
          <HelpLeft>
            <HeadingText title={title} />
            <HelpWrap>
              <SupportItem data={data[0]} />
              <SupportItem data={data[1]} />
            </HelpWrap>
            <HelpMargin>
              <HelpWrap>
                <SupportItem data={data[2]} />
                <SupportItem data={data[3]} />
              </HelpWrap>
            </HelpMargin>
          </HelpLeft>
          {!isEmpty(image) && (
            <HelpImg>
              <Image src={image} width={447} height={661} alt='right-arrow' />
            </HelpImg>
          )}
        </HelpMain>
      </Container>
    </HelpContainerSection>
  );
}

export default HelpSection;
