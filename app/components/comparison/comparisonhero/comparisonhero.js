import ReactMarkdown from 'react-markdown';
import { Container, PrimaryButton } from '../../../styles/commonStyles';
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
