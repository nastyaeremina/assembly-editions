'use client'

import { Container, PrimaryButton } from '../../styles/commonStyles';
import { MainHeroSection, ErrorMain } from './styles';

export default function ErrorPage() {
  return (
    <MainHeroSection>
      <Container>
        <ErrorMain>
          <h3>404</h3>
          <p>We can’t seem to find the page you are looking for </p>
          <PrimaryButton>
            <a href='/'>Back to home</a>
          </PrimaryButton>
        </ErrorMain>
      </Container>
    </MainHeroSection>
  );
}
