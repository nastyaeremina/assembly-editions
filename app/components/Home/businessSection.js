'use client';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useMemo, useState } from 'react';
import {
  BusinessSection,
  BusinessSectionText,
  Block,
  SliderBlock,
  ButtonGroup,
  ResponsiveButtonGroup
} from '../../styles/homepageStyles';
import { Container } from '../../styles/commonStyles';
import Button from '../button/button';
import HeadingText from '../header/headingText';
import CopilotBlock from '../CopilotBlock/copilotblock';
import SliderButtonSection from '../CopilotBlock/SliderButtonSection';
import { isEmpty } from '../../helpers/helpers';

/**
 * Business section component
 * @param {Object} props - Component props
 * @param {string} title - The title of the business section, displayed prominently at the top.
 * @param {string} description - The content to be rendered as Markdown, providing details about the business.
 * @param {string} primaryButtonText - The text displayed on the primary button, prompting user action.
 * @param {string} PrimaryButtonLink - The URL that the primary button links to when clicked.
 * @param {Array} sliderData - An array of data used to populate the slider with content.
 */

export default function BusinessSectionComponent({
  title,
  description,
  primaryButtonText,
  PrimaryButtonLink,
  sliderData
}) {
  const isButtonShow = !isEmpty(PrimaryButtonLink) && !isEmpty(primaryButtonText);
  const [xPos, setXpos] = useState(0);

  const renderSliderButton = useMemo(() => {
    return <SliderButtonSection xPos={xPos} setXpos={setXpos} noOfSlide={sliderData.length} />;
  }, [sliderData.length, xPos]);

  return (
    <>
      <BusinessSection>
        <Container>
          <Block>
            <BusinessSectionText>
              <HeadingText title={title} />
              <ReactMarkdown>{description}</ReactMarkdown>
              {isButtonShow && (
                <Button
                  bgColor={'--primary'}
                  fontColor={'--white'}
                  borderColor={'--primary'}
                  text={primaryButtonText}
                  href={PrimaryButtonLink}
                  hoverColor={'--secondary-hover-color'}
                  className={'block-button'}
                />
              )}
            </BusinessSectionText>
            <ButtonGroup>{renderSliderButton}</ButtonGroup>
          </Block>

          <SliderBlock>
            <CopilotBlock xPos={xPos} sliderData={sliderData} />
            <ResponsiveButtonGroup>{renderSliderButton}</ResponsiveButtonGroup>
          </SliderBlock>
        </Container>
      </BusinessSection>
    </>
  );
}
