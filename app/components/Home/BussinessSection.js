'use client';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import {
  BusinessSection,
  BusinessSectionText,
  Block,
  SliderBlock,
  ButtonGroup,
  ResponsiveButtonGroup
} from '../../styles/homepageStyles';
import { Container } from '../../styles/commonStyles';
import Button from '../../components/button/button';
import HeadingText from '../header/headingText';
import CopilotBlock from '../../components/CopilotBlock/copilotblock';
import SliderButtonSection from '../../components/CopilotBlock/SliderButtonSection';
import { isEmpty } from '../../helpers/helpers';
import { useCallback, useMemo, useState } from 'react';

export default function BussinessSectionComponent({
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
        </Container>

        <SliderBlock>
          <CopilotBlock xPos={xPos} sliderData={sliderData} />
          <ResponsiveButtonGroup>{renderSliderButton}</ResponsiveButtonGroup>
        </SliderBlock>
      </BusinessSection>
    </>
  );
}
