import Image from 'next/image';
import Link from 'next/link';
import { BottomSection, Carditem, CompareDescription, CompareTitle, ComparisonLogo, Icon, TopSection } from '../styles';
import SVGComponent from '../../../../public/images/svg/SVGComponent';
import { isEmpty } from '../../../helpers/helpers';

export default function Card({ src, slug, title, description }) {
  return (
    <>
      <Link href={`/comparison/${slug}`}>
        <Carditem>
          <TopSection>
            <ComparisonLogo>
              <Image src={src} alt='logo' width={228} height={36} />
            </ComparisonLogo>
            <Icon>
              <SVGComponent
                name='blog-card-hover-arrow-icon'
                width='20'
                height='20'
                viewBox='0 0 16 16'
                className='svg-icon'
              />
            </Icon>
          </TopSection>
          {(!isEmpty(title) || !isEmpty(description)) && (
            <BottomSection>
              {!isEmpty(title) && <CompareTitle>{title}</CompareTitle>}
              {!isEmpty(description) && <CompareDescription>{description}</CompareDescription>}
            </BottomSection>
          )}
        </Carditem>
      </Link>
    </>
  );
}
