import Image from 'next/image';
import { Container } from '../../styles/commonStyles';
import { QuoteMain, Mainss, QuoteTxt, QuoteSubTxt, QuoteLine, QuoteImg } from './styles';

export default function Quote({ gradientImage, data }) {
  return (
    <QuoteMain gradientImage={gradientImage}>
      <Container>
        <Mainss>
          <QuoteImg>
            <Image src={data?.image?.url} alt='red-icon' width={413} height={405} layout={'fixed'} />
          </QuoteImg>
          <QuoteTxt>
            <h3>
              {data?.quote}
            </h3>
            <QuoteSubTxt>
              <h4>{data?.name}</h4>
              <p>{data?.role}</p>
            </QuoteSubTxt>
          </QuoteTxt>
        </Mainss>
      </Container>
    </QuoteMain>
  );
}
