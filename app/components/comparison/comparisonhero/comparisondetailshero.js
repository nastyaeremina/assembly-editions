import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Container } from '../../../styles/commonStyles';
import {
  BottomDiv,
  ButtonGroups,
  Card,
  HeroSection,
  ImageSection,
  LeftWrap,
  PoweredBySection,
  SolutionWrap,
  TextSection,
  TopDiv
} from '../../standardHero/solutionhero/styles';
import GraphImage from '../../../../public/images/graph-image.png';
import SVGComponent from '../../../../public/images/svg/SVGComponent';
import SmallLogo from '../../../../public/images/assembly-svg.svg';
import { isEmpty } from '../../../helpers/helpers';
import ButtonV2Component from '../../button/buttonV2/buttonV2';
import { ButtonSize, ButtonVariant } from '../../../constants/constant';
import { useIsMobile } from '../../../hooks/useMobileDevice';

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
  // mobile state
  const isMobile = useIsMobile();
  // button empty state
  const showPrimaryButton = !isEmpty(primaryButtonText) && !isEmpty(primaryButtonLink);
  const showSecondaryButton = !isEmpty(secondaryButtonText) && !isEmpty(secondaryButtonLink);
  const isShowButton = showPrimaryButton || showSecondaryButton;
  return (
    <>
      <HeroSection className='details-hero'>
        <Container>
          <SolutionWrap className='details-hero'>
            <LeftWrap className='details-hero'>
              {!isEmpty(headerTag) && (
                <PoweredBySection>
                  <SVGComponent name='g2-icon' width='24' height='24' viewBox='0 0 20 20' />
                  <h6>Powered by G2</h6>
                  <h5>({headerTag})</h5>
                </PoweredBySection>
              )}
              <TextSection className='details-hero'>
                {title && <h1>{title}</h1>}
                {description && <ReactMarkdown>{description}</ReactMarkdown>}
              </TextSection>
              {isShowButton && (
                <ButtonGroups>
                  {showPrimaryButton && (
                    <ButtonV2Component
                      title={primaryButtonText}
                      href={primaryButtonLink}
                      size={isMobile ? ButtonSize.SMALL : ButtonSize.MEDIUM}
                    />
                  )}
                  {showSecondaryButton && (
                    <ButtonV2Component
                      title={secondaryButtonText}
                      href={secondaryButtonLink}
                      variant={showPrimaryButton ? ButtonVariant.SECONDARY : ButtonVariant.SECONDARY_WITH_BORDER}
                      iconName='blog-card-hover-arrow-icon'
                      size={isMobile ? ButtonSize.SMALL : ButtonSize.MEDIUM}
                    />
                  )}
                </ButtonGroups>
              )}
            </LeftWrap>
            <ImageSection>
              <Image src={GraphImage} alt='' width={274} height={369} className='graph-img' />
              <Card>
                <TopDiv>
                  <Image src={SmallLogo} width={32} height={32} alt='' />
                  <h5>Assembly</h5>
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
