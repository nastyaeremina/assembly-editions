'use client';

import { Container } from '../../styles/commonStyles';
import { ErrorMain } from './styles';
import ButtonV2Component from '../button/buttonV2/buttonV2';
import { useIsMobile } from '../../hooks/useMobileDevice';
import { ButtonSize } from '../../constants/constant';

export default function ErrorPage() {
  const isMobile = useIsMobile();
  return (
    <div className='component-wrapper'>
      <Container>
        <ErrorMain>
          <h1>404</h1>
          <p>We can’t seem to find the page you are looking for.</p>
          <ButtonV2Component
            title='Back to home'
            href='/'
            size={isMobile ? ButtonSize.SMALL : ButtonSize.MEDIUM}
            className='button'
          />
        </ErrorMain>
      </Container>
    </div>
  );
}
