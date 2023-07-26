import Image from 'next/image';
import Link from 'next/link';
import { Carditem, CardLogo, ComparisonLogo } from '../styles';

export default function Card({ src, slug }) {
  return (
    <>
      <Link href={`/comparison/${slug}`}>
        <Carditem>
          <CardLogo>
            <Image src='/images/logo.svg' alt='logo' width={231} height={50} layout={'fixed'} className='mobilecard' />
          </CardLogo>
          <ComparisonLogo>
            <Image src={src} alt='logo' width={231} height={50} layout={'fixed'} className='mobilecard' />
          </ComparisonLogo>
        </Carditem>
      </Link>
    </>
  );
}
