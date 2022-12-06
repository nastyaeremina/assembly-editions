import Image from 'next/image';
import { Container } from '../../styles/commonStyles';
import { QuoteMain, Mainss, QuoteTxt, QuoteSubTxt, QuoteLine, QuoteImg } from './styles';

export default function Quote({ gradientImage }) {
  return (
    <QuoteMain gradientImage={gradientImage}>
      <Container>
        <Mainss>
          <QuoteImg>
            <Image src='/images/quote.png' alt='red-icon' width={413} height={405} layout={'fixed'} />
          </QuoteImg>
          <QuoteTxt>
            <h3>
              “Our entire agency runs on Copilot. Everything from billing, messaging, file-sharing, forms, and more. We
              never thought one tool could do this much.”
            </h3>
            <QuoteSubTxt>
              <h4>Bill Barth</h4>
              <p>President Boy</p>
            </QuoteSubTxt>
          </QuoteTxt>
        </Mainss>
      </Container>
    </QuoteMain>
  );
}
