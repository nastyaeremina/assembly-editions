import Image from 'next/image';
import Link from 'next/link';
import { Carditem, ComparisonLogo } from '../styles';

export default function Card({ src, slug }) {
  return (
    <>
      <Link href={`/comparison/${slug}`}>
        <Carditem>
          <p>Vs</p>
          <ComparisonLogo>
            <Image src={src} alt='logo' width={240} height={38} className='mobilecard' />
          </ComparisonLogo>
        </Carditem>
      </Link>
    </>
  );
}
