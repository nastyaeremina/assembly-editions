'use client';

import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  AutomationHero,
  Caption,
  CardSec,
  Cards,
  Featured,
  SetupAutomation,
  Title
} from '../../../styles/automationStyles';
import { Container } from '../../../styles/commonStyles';
import Button from '../../button/button';
import { COPILOT_ONBOARDING_LINK } from '../../../constants/externalLinks';
import TabView from '../../tab/tab';
import { MODULE_COLOR_LIST } from '../../../constants/constant';
import AutomationCardSection from '../../automationcard';
import ExploreTab from '../../solution/clienttab/exploretab';
import { isEmpty, removeEmptyElement, separateSpecialChar } from '../../../helpers/helpers';
import ExtentionCard from '../../Extentioncard';
import CustomerTestimonial from '../../customer/testimonials';
import { TopView } from '../../solution/clienttab/styles';
import { RightSection } from '../../../styles/casestudiestyles';
import {
  AnimatedIcon,
  BottomList,
  CardItem,
  CardTextView,
  CardWrapper,
  Line,
  AnimatedLine,
  StaticLine
} from '../../../styles/homepageStyles';
import FeatureAnimated from '../../FeatureSlider/featureanimated';
import ButtonGroup from '../../ButtonGroup/buttonGroup';

export default function AutomationPage({ details }) {
  return (
    <>
      <AutomationHero>
        <Container>
          <Title>{details?.header}</Title>
          <Caption>{details?.body}</Caption>
          <ButtonGroup
            primaryButtonLink={COPILOT_ONBOARDING_LINK}
            primaryButtonText={'Start Trial'}
            secondaryButtonLink={'automations/directory'}
            secondaryButtonText={'View all Automations'}
            secondaryButtonVariant='white'
            className={'button-group'}
          />
          <BottomList isAnimated>
            <CardWrapper>
              <CardItem isAnimated>
                <Image src='/images/linka.svg' width={35} height={35} alt='link-icon' />
                <CardTextView isAnimated>
                  <p>Client activates account</p>
                  <span>Trigger</span>
                </CardTextView>
                <AnimatedIcon className={'done card1'} isAnimated={true} />
                <Line>
                  <AnimatedLine isAnimated>
                    <p />
                  </AnimatedLine>
                  <AnimatedLine isSecondaryAnimation={true} isAnimated>
                    <p />
                  </AnimatedLine>
                  <AnimatedLine isFinalAnimation={true} isAnimated>
                    <p />
                  </AnimatedLine>
                </Line>
              </CardItem>
            </CardWrapper>
            <CardWrapper>
              <CardItem isAnimated>
                <Image src='/images/linka.svg' width={35} height={35} alt='link-icon' />
                <CardTextView isAnimated>
                  <p>Company size &#60; 50</p>
                  <span>Condition</span>
                </CardTextView>
                <AnimatedIcon className={'default card2'} isAnimated={true} />
                <Line>
                  <StaticLine isAnimated={true}>
                    <p />
                  </StaticLine>
                </Line>
              </CardItem>
              <CardItem isAnimated>
                <Image src='/images/linka.svg' width={35} height={35} alt='link-icon' />
                <CardTextView isAnimated>
                  <p>Company size &#62; 50</p>
                  <span>Condition</span>
                </CardTextView>
                <Line>
                  <StaticLine isAnimated={true}>
                    <p />
                  </StaticLine>
                  <StaticLine isSecondaryAnimation={true} isAnimated>
                    <p />
                  </StaticLine>
                  <StaticLine isFinalAnimation={true} isAnimated>
                    <p />
                  </StaticLine>
                </Line>
                <AnimatedIcon className={'default card2'} isAnimated={true} />
              </CardItem>
            </CardWrapper>
            <CardWrapper>
              <CardItem isAnimated>
                <Image src='/images/action-icon.svg' width={35} height={35} alt='action-icon' />
                <CardTextView isAnimated>
                  <p>Assign SMB onboarding form</p>
                  <span>Action</span>
                </CardTextView>
                <AnimatedIcon className={'default card3'} isAnimated={true} />
              </CardItem>
              <CardItem isAnimated>
                <Image src='/images/msg-icon2.svg' width={35} height={35} alt='msg-icon' />
                <CardTextView isAnimated>
                  <p>Send meeting scheduling link</p>
                  <span>Action</span>
                </CardTextView>
                <AnimatedIcon className={'default card3'} isAnimated={true} />
              </CardItem>
              <CardItem isAnimated>
                <Image src='/images/salesforce-icon.svg' width={35} height={35} alt='sales-icon' />
                <CardTextView isAnimated>
                  <p>Create lead in Salesforce</p>
                  <span>Action</span>
                </CardTextView>
                <AnimatedIcon className={'default card3'} isAnimated={true} />
              </CardItem>
            </CardWrapper>
          </BottomList>
        </Container>
      </AutomationHero>
      <Container>
        <SetupAutomation istitle>
          <div
            dangerouslySetInnerHTML={{
              __html: separateSpecialChar(details?.sectionHeader1)
            }}
          />
        </SetupAutomation>
        <TabView
          tabData={details?.sectionContent1Collection?.items || []}
          bgColor={MODULE_COLOR_LIST.Automation.bgColor}
          textColor={MODULE_COLOR_LIST.Automation.fontColor}
          isAutomation={true}
        />
      </Container>
      <AutomationCardSection title={details?.sectionHeader2} data={[details?.sectionContent2Collection?.items[0]]} />
      <AutomationCardSection title={details?.sectionHeader3} data={details?.sectionContent3Collection?.items} />
      <ExploreTab
        title={details?.sectionHeader4}
        description={details?.sectionBody4?.json}
        isRichText={true}
        data={removeEmptyElement(details?.sectionContent4Collection?.items)}
        secondaryButtonLink={details?.demoPortalUrl}
      />
      <Container>
        <SetupAutomation>
          <RightSection>{documentToReactComponents(details?.sectionHeader4?.json)}</RightSection>
        </SetupAutomation>
        <CardSec>
          <ExtentionCard data={details?.sectionContent5Collection?.items[0]} />
          <Cards>
            <ExtentionCard isCard={true} data={details?.sectionContent5Collection?.items[1]} />
            <ExtentionCard isCard={true} data={details?.sectionContent5Collection?.items[2]} />
          </Cards>
        </CardSec>
        {!isEmpty(details?.sectionCaseStudyContent) && (
          <>
            <SetupAutomation>
              <div
                dangerouslySetInnerHTML={{
                  __html: separateSpecialChar(details?.sectionCaseStudyHeader)
                }}
              />
            </SetupAutomation>

            <CustomerTestimonial
              logo={details?.sectionCaseStudyContent?.customerLogo?.imageAsset?.url}
              banner={details?.sectionCaseStudyContent?.caseStudyImage?.url}
              body={details?.sectionCaseStudyContent?.description}
              highlightsData={details?.sectionCaseStudyContent?.highlights}
              slug={details?.sectionCaseStudyContent?.slug}
            />
          </>
        )}
        <Featured>
          <TopView>
            <h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: separateSpecialChar(details?.sectionFeaturedHeader)
                }}
              />
            </h2>
            <p>{documentToReactComponents(details?.sectionFeaturedBody?.json)}</p>

            <Button
              bgColor={'transparent'}
              fontColor={'--black'}
              borderColor={'--black'}
              text={'View all automations'}
              href={'/automations/directory'}
              hoverColor={'--hover-color'}
            />
          </TopView>
        </Featured>
      </Container>
      {!isEmpty(removeEmptyElement(details?.sectionFeaturedContentCollection?.items)) && (
        <FeatureAnimated data={details?.sectionFeaturedContentCollection?.items} isDetailSlider={true} />
      )}
    </>
  );
}
