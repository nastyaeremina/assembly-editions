import Image from 'next/image';
import { Container } from '../../styles/commonStyles';
import { QuoteMain, Mainss, QuoteTxt, QuoteSubTxt, QuoteLine, QuoteImg } from './styles';

export default function Quote({ gradientImage, data }) {
  return (
    <QuoteMain gradientImage={gradientImage} caseStudies={true}>
      <Container>
        <Mainss>
          <QuoteImg>
            <Image src={data?.image?.url} alt='red-icon' width={413} height={405} layout={'fixed'} />
          </QuoteImg>
          <QuoteTxt>
            <p>{data?.quote}</p>
            <QuoteSubTxt>
              <span>{data?.name}</span>
              <p>{data?.role}</p>
            </QuoteSubTxt>
          </QuoteTxt>
        </Mainss>
      </Container>
    </QuoteMain>
  );
}
