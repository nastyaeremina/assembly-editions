'use client';
import { MainContent } from '../../../styles/blogstyles';
import AuthorHeroSection from '../../blogdetailHero/authorHeroSection';
import { AuthorPagHeroSection } from '../../../constants/raw';
import NewCTA from '../../cta/newCTA';
import BlogListSection from './blogListSection';
import { isEmpty } from '../../../helpers/helpers';

export default function AuthorPage({ allPosts, breadcrumbText = 'Blog', breadcrumbLink = '/blog', authorCTA = null }) {
  return (
    <>
      <MainContent>
        <AuthorHeroSection
          authorImage={allPosts?.[0]?.authors?.[0]?.profile_image}
          authorName={allPosts?.[0]?.authors?.[0]?.name}
          designation={AuthorPagHeroSection.designation}
          breadcrumbText={breadcrumbText}
          breadcrumbLink={breadcrumbLink}
          twitter={allPosts?.[0]?.authors?.[0]?.twitter}
          linkedin={allPosts?.[0]?.authors?.[0]?.linkedin}
        />
        <BlogListSection authorName={allPosts?.[0]?.authors?.[0]?.name} allPosts={allPosts} />
        {!isEmpty(authorCTA) && (
          <NewCTA
            title={authorCTA.title}
            description={authorCTA.description}
            primaryButtonLink={authorCTA.primaryButtonLink}
            primaryButtonText={authorCTA.primaryButtonText}
            secondaryButtonLink={authorCTA.secondaryButtonLink}
            secondaryButtonText={authorCTA.secondaryButtonText}
            banner={authorCTA.banner?.url}
          />
        )}
      </MainContent>
    </>
  );
}
