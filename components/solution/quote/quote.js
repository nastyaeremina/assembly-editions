import Image from 'next/image';
import { Container } from '../../../styles/commonStyles';
import { QuoteSection, Mainss, QuoteTxt, QuoteSubTxt, ImageWrap } from './styles';

export default function Quote() {
  return (
    <>
      <QuoteSection>
        <Container>
          <Mainss>
            <ImageWrap>
              <Image src='/images/qutesimg.png' alt='red-icon' width={413} height={404} layout={'fixed'} />
            </ImageWrap>
            <QuoteTxt>
              <h3>
                “Our entire agency runs on Copilot. Everything from billing, messaging, file-sharing, forms, and more.
                We never thought one tool could do this much.”
              </h3>
              <QuoteSubTxt>
                <h4>Bill Barth</h4>
                <p>President Boy</p>
              </QuoteSubTxt>
            </QuoteTxt>
          </Mainss>
        </Container>
      </QuoteSection>
    </>
  );
}
