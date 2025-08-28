'use client';
import { MainContent } from '../../../styles/blogstyles';
import AuthorHeroSection from '../../blogdetailHero/authorHeroSection';
import { AuthorPagHeroSection, CTAData } from '../../../constants/raw';
import NewCTA from '../../cta/newCTA';
import BlogListSection from './blogListSection';

export default function AuthorPage({ allPosts }) {
  return (
    <>
      <MainContent>
        <AuthorHeroSection
          authorImage={allPosts?.[0]?.authors?.[0]?.profile_image}
          authorName={allPosts?.[0]?.authors?.[0]?.name}
          designation={AuthorPagHeroSection.designation}
          articleName={'Blog'}
          articleHref={'/blog'}
          twitter={allPosts?.[0]?.authors?.[0]?.twitter}
          linkedin={allPosts?.[0]?.authors?.[0]?.linkedin}
        />
        <BlogListSection authorName={allPosts?.[0]?.authors?.[0]?.name} allPosts={allPosts} />
        <NewCTA
          title={CTAData.title}
          description={CTAData.description}
          primaryButtonLink={CTAData.primaryButtonLink}
          primaryButtonText={CTAData.primaryButtonText}
          secondaryButtonLink={CTAData.secondaryButtonLink}
          secondaryButtonText={CTAData.secondaryButtonText}
        />
      </MainContent>
    </>
  );
}
