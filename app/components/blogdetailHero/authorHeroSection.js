'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../../styles/commonStyles';
import {
  AuthorMainHeroSection,
  Designation,
  DetailsSection,
  InnerHeroSection,
  SocialMediaDiv,
  Title
} from '../../styles/blogstyles';
import Breadcrumbs from '../Breadcrumbs/breadcrumbs';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { isEmpty } from '../../helpers/helpers';

function AuthorHeroSection({
  authorImage,
  authorName,
  designation,
  breadcrumbText,
  breadcrumbLink,
  twitter,
  linkedin,
  instagram,
  facebook,
  youtube,
  description
}) {
  const BreadcrumbItem = [{ label: breadcrumbText, href: breadcrumbLink }];
  return (
    <AuthorMainHeroSection>
      <Container>
        <Breadcrumbs breadcrumbs={BreadcrumbItem} currentLabel='Author' />
        <InnerHeroSection>
          {!isEmpty(authorImage) && (
            <Image src={authorImage} width={200} height={200} className='author-image' alt='author-image' />
          )}
          <DetailsSection>
            {!isEmpty(authorName) && <Title>{authorName}</Title>}
            {!isEmpty(designation) && <Designation>{designation}</Designation>}
            {(!isEmpty(twitter) || !isEmpty(linkedin)) && (
              <SocialMediaDiv>
                {!isEmpty(twitter) && (
                  <Link href={twitter} aria-label={'Twitter'}>
                    <SVGComponent name='x-logo-gray' width='24' height='24' viewBox='0 0 24 24' />
                  </Link>
                )}
                {!isEmpty(linkedin) && (
                  <Link href={linkedin} aria-label={'Linkedin'}>
                    <SVGComponent name='linkedin-logo-gray' width='24' height='24' viewBox='0 0 24 24' />
                  </Link>
                )}
                {!isEmpty(facebook) && (
                  <Link href={facebook} aria-label={'Facebook'}>
                    <SVGComponent name='facebook-logo-gray' width='24' height='24' viewBox='0 0 24 24' />
                  </Link>
                )}
                {!isEmpty(instagram) && (
                  <Link href={instagram} aria-label={'Instagram'}>
                    <SVGComponent name='instagram-logo-gray' width='24' height='24' viewBox='0 0 24 24' />
                  </Link>
                )}
                {!isEmpty(youtube) && (
                  <Link href={youtube} aria-label={'Youtube'}>
                    <SVGComponent name='you-tube-logo-gray' width='24' height='24' viewBox='0 0 24 24' />
                  </Link>
                )}
              </SocialMediaDiv>
            )}
          </DetailsSection>
        </InnerHeroSection>
      </Container>
    </AuthorMainHeroSection>
  );
}

export default AuthorHeroSection;
