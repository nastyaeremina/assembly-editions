import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Container, PrimaryButton } from '../../../styles/commonStyles';
import { COPILOT_ONBOARDING_LINK } from '../../../constants/externalLinks';
import { HeroSection, LeftWrap, SolutionWrap, TextSection } from '../../standardHero/solutionhero/styles';

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
                {description && <ReactMarkdown>{description}</ReactMarkdown>}
              </TextSection>
            </LeftWrap>
          </SolutionWrap>
        </Container>
      </HeroSection>
    </>
  );
}
