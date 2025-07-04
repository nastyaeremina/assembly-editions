'use client';
import React from 'react';
import AutomationCard from '../../Home/automationCard';
import ButtonGroup from '../../ButtonGroup/buttonGroup';
import { AutomationCardVariant, SecondaryButtonVariant } from '../../../constants/constant';
import { BottomList, CardWrapper, Line, AnimatedLine, StaticLine } from '../../../styles/homepageStyles';
import { AutomationHero, Caption, Title } from '../../../styles/automationStyles';
import { Container } from '../../../styles/commonStyles';

function AutomationHeroSection({
  title,
  description,
  primaryButtonLink,
  primaryButtonText,
  secondaryButtonLink,
  secondaryButtonText
}) {
  return (
    <div>
      <AutomationHero>
        <Container>
          <Title>{title}</Title>
          <Caption>{description}</Caption>
          <ButtonGroup
            primaryButtonLink={primaryButtonLink}
            primaryButtonText={primaryButtonText}
            secondaryButtonLink={secondaryButtonLink}
            secondaryButtonText={secondaryButtonText}
            secondaryButtonVariant={SecondaryButtonVariant.WHITE}
            className={'button-group'}
          />
          <BottomList variant={AutomationCardVariant.GREEN}>
            <CardWrapper>
              <AutomationCard
                title='Client activates account'
                tag='Trigger'
                imageSrc='/images/linka.svg'
                imageAlt='link-icon'
                animationClass='card1'
                variant={AutomationCardVariant.GREEN}>
                <Line>
                  <AnimatedLine variant={AutomationCardVariant.GREEN}>
                    <p />
                  </AnimatedLine>
                  <AnimatedLine isSecondaryAnimation={true} variant={AutomationCardVariant.GREEN}>
                    <p />
                  </AnimatedLine>
                  <AnimatedLine isFinalAnimation={true} variant={AutomationCardVariant.GREEN}>
                    <p />
                  </AnimatedLine>
                </Line>
              </AutomationCard>
            </CardWrapper>
            <CardWrapper>
              <AutomationCard
                title='Company size &#60; 50'
                tag='Condition'
                imageSrc='/images/linka.svg'
                imageAlt='link-icon'
                animationClass='card2'
                variant={AutomationCardVariant.GREEN}>
                <Line>
                  <StaticLine variant={AutomationCardVariant.GREEN}>
                    <p />
                  </StaticLine>
                </Line>
              </AutomationCard>
              <AutomationCard
                title='Company size &#62; 50'
                tag='Condition'
                imageSrc='/images/linka.svg'
                imageAlt='link-icon'
                animationClass='card2'
                variant={AutomationCardVariant.GREEN}>
                <Line>
                  <StaticLine variant={AutomationCardVariant.GREEN}>
                    <p />
                  </StaticLine>
                  <StaticLine isSecondaryAnimation={true} variant={AutomationCardVariant.GREEN}>
                    <p />
                  </StaticLine>
                  <StaticLine isFinalAnimation={true} variant={AutomationCardVariant.GREEN}>
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
                variant={AutomationCardVariant.GREEN}
              />
              <AutomationCard
                title='Send meeting scheduling link'
                tag='Action'
                imageSrc='/images/msg-icon2.svg'
                imageAlt='msg-icon'
                animationClass='card3'
                variant={AutomationCardVariant.GREEN}
              />
              <AutomationCard
                title='Create lead in Salesforce'
                tag='Action'
                imageSrc='/images/salesforce-icon.svg'
                imageAlt='salesforce-icon'
                animationClass='card3'
                variant={AutomationCardVariant.GREEN}
              />
            </CardWrapper>
          </BottomList>
        </Container>
      </AutomationHero>
    </div>
  );
}

export default AutomationHeroSection;
