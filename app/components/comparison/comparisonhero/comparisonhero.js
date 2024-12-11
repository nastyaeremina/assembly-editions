import Image from 'next/image';
import Link from 'next/link';
import { Container, PrimaryButton } from '../../../styles/commonStyles';
import { COPILOT_ONBORADING_LINK } from '../../../constants/externalLinks';
import {
  BtnWrap,
  HeroSection,
  ImageView,
  LeftWrap,
  MobileView,
  RightWrap,
  SolutionWrap,
  TextSection
} from '../../standardHero/solutionhero/styles';

export default function ComparisonHero({ title, description, image }) {
  return (
    <>
      <HeroSection>
        <Container>
          <SolutionWrap>
            <LeftWrap>
              <TextSection>
                {title && (
                  <h1>
                    <div>{title}</div>
                  </h1>
                )}
                {description && <p>{description}</p>}
              </TextSection>
            </LeftWrap>
          </SolutionWrap>
        </Container>
      </HeroSection>
    </>
  );
}
