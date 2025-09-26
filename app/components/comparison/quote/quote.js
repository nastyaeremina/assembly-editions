import Image from 'next/image';
import { Container } from '../../../styles/commonStyles';
import { ImageWrap, Mainss, QuoteSubTxt, QuoteTxt } from '../../solution/quote/styles';
import comparison from '../../../public/images/comparison.png';
import { QuoteSection } from '../styles';

export default function Quote() {
  return (
    <>
      <QuoteSection>
        <Container>
          <Mainss>
            <ImageWrap>
              <Image src={comparison} alt='red-icon' width={413} height={404} layout={'fixed'} />
            </ImageWrap>
            <QuoteTxt>
              <p>
                “Our entire agency runs on Assembly. Everything from billing, messaging, file-sharing, forms, and more.
                We never thought one tool could do this much.”
              </p>
              <QuoteSubTxt>
                <span>Bill Barth</span>
                <p>President Boy</p>
              </QuoteSubTxt>
            </QuoteTxt>
          </Mainss>
        </Container>
      </QuoteSection>
    </>
  );
}
