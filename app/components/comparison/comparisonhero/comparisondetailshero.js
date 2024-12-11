import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Container } from '../../../styles/commonStyles';
import {
  BottomDiv,
  ButtonGroup,
  Card,
  HeroSection,
  ImageSection,
  LeftWrap,
  PoweredBySection,
  SolutionWrap,
  TextSection,
  TopDiv
} from '../../standardHero/solutionhero/styles';
import GraphImage from '../../../../public/images/hero-graph.png';
import Button from '../../button/button';
import SVGComponent from '../../../../public/images/svg/SVGComponent';
import SmallLogo from '../../../../public/images/Copilot_Icon_Circle.png';
import { isEmpty } from '../../../helpers/helpers';

export default function ComparisonDetailsHero({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  headerTag,
  competitorValue,
  copilotValue,
  comparisonTag,
  compititorName,
  competitorLogo
}) {
  const showPrimaryButton = !isEmpty(primaryButtonText) && !isEmpty(primaryButtonLink);
  const showSecondaryButton = !isEmpty(secondaryButtonText) && !isEmpty(secondaryButtonLink);
  return (
    <>
      <HeroSection>
        <Container>
          <SolutionWrap className='details-hero'>
            <LeftWrap className='details-hero'>
              {!isEmpty(headerTag) && (
                <PoweredBySection>
                  <SVGComponent name='g2-logo-icon' width='24' height='24' viewBox='0 0 24 24' />
                  <h6>Powered by G2</h6>
                  <h5>({headerTag})</h5>
                </PoweredBySection>
              )}
              <TextSection className='details-hero'>
                {title && (
                  <h1>
                    <div>{title}</div>
                  </h1>
                )}
                {description && <ReactMarkdown>{description}</ReactMarkdown>}
              </TextSection>
              {(showPrimaryButton || showSecondaryButton) && (
                <ButtonGroup>
                  {showPrimaryButton && <Button text={primaryButtonText} href={primaryButtonLink} />}
                  {showSecondaryButton && (
                    <Button
                      text={secondaryButtonText}
                      href={secondaryButtonLink}
                      bgColor='transparent'
                      fontColor='--light-green'
                      borderColor='--light-green'
                      hoverColor='--secondary-hover-color'
                    />
                  )}
                </ButtonGroup>
              )}
            </LeftWrap>
            <ImageSection>
              <Image src={GraphImage} alt='' width={274} height={389} className='graph-img' />
              <Card>
                <TopDiv>
                  <Image src={SmallLogo} width={32} height={32} alt='' />
                  <h5>Copilot</h5>
                </TopDiv>
                <BottomDiv>
                  <h4>{copilotValue}</h4>
                  <p>{comparisonTag}</p>
                </BottomDiv>
              </Card>
              <Card className='second-card'>
                <TopDiv>
                  <Image src={competitorLogo} width={32} height={32} alt='' />
                  <h5>{compititorName}</h5>
                </TopDiv>
                <BottomDiv className='second-card'>
                  <h4>{competitorValue}</h4>
                  <p>{comparisonTag}</p>
                </BottomDiv>
              </Card>
            </ImageSection>
          </SolutionWrap>
        </Container>
      </HeroSection>
    </>
  );
}
