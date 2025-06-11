'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  AutomateSection,
  AutomateText,
  BottomList,
  CardWrapper,
  AnimatedLine,
  Line,
  StaticLine,
  AutomationMarkdownContent
} from '../../styles/homepageStyles';
import { Container } from '../../styles/commonStyles';
import HeadingText from '../header/headingText';
import ButtonGroup from '../ButtonGroup/buttonGroup';
import AutomationCard from './automationCard';

/**
 * Automation section
 * @param {string} title - Title of the automation section
 * @param {string} markdownContent - Content to be rendered as Markdown
 * @param {string} primaryButtonLink - URL for the primary button
 * @param {string} primaryButtonText - Text displayed on the primary button
 * @param {string} secondaryButtonLink - URL for the secondary button
 * @param {string} secondaryButtonText - Text displayed on the secondary button
 * @param {number} buttonGroupMargin - Determines if the button group has a top margin
 * **/

function AutomationSection({
  title,
  markdownContent,
  primaryButtonLink,
  primaryButtonText,
  secondaryButtonLink,
  secondaryButtonText
}) {
  return (
    <AutomateSection>
      <Container>
        <AutomateText>
          <HeadingText title={title} />
          <AutomationMarkdownContent>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </AutomationMarkdownContent>
          <ButtonGroup
            primaryButtonLink={primaryButtonLink}
            primaryButtonText={primaryButtonText}
            secondaryButtonLink={secondaryButtonLink}
            secondaryButtonText={secondaryButtonText}
            className='button-group'
          />
        </AutomateText>
        <BottomList>
          <CardWrapper>
            <AutomationCard
              title='Client activates account'
              tag='Trigger'
              imageSrc='/images/linkicon.svg'
              imageAlt='link-icon'
              animationClass='card1'>
              <Line>
                <AnimatedLine>
                  <p />
                </AnimatedLine>
                <AnimatedLine isSecondaryAnimation={true}>
                  <p />
                </AnimatedLine>
                <AnimatedLine isFinalAnimation={true}>
                  <p />
                </AnimatedLine>
              </Line>
            </AutomationCard>
          </CardWrapper>
          <CardWrapper>
            <AutomationCard
              title='Company size &#60; 50'
              tag='Condition'
              imageSrc='/images/linkicon.svg'
              imageAlt='link-icon'
              animationClass='card2'>
              <Line>
                <StaticLine>
                  <p />
                </StaticLine>
              </Line>
            </AutomationCard>
            <AutomationCard
              title='Company size &#62; 50'
              tag='Condition'
              imageSrc='/images/linkicon.svg'
              imageAlt='link-icon'
              animationClass='card2'>
              <Line>
                <StaticLine>
                  <p />
                </StaticLine>
                <StaticLine isSecondaryAnimation={true}>
                  <p />
                </StaticLine>
                <StaticLine isFinalAnimation={true}>
                  <p />
                </StaticLine>
              </Line>
            </AutomationCard>
          </CardWrapper>
          <CardWrapper>
            <AutomationCard
              title='Assign SMB onboarding form'
              tag='Action'
              imageSrc='/images/action-icon.svg'
              imageAlt='action-icon'
              animationClass='card3'
            />
            <AutomationCard
              title='Send meeting scheduling link'
              tag='Action'
              imageSrc='/images/msg-icon2.svg'
              imageAlt='msg-icon'
              animationClass='card3'
            />
            <AutomationCard
              title='Create lead in Salesforce'
              tag='Action'
              imageSrc='/images/salesforce-icon.svg'
              imageAlt='salesforce-icon'
              animationClass='card3'
            />
          </CardWrapper>
        </BottomList>
      </Container>
    </AutomateSection>
  );
}

export default AutomationSection;
