'use client';
import AuthorHeroSection from '../../blogdetailHero/authorHeroSection';
import NewCTA from '../../cta/newCTA';
import BlogListSection from './blogListSection';
import FeaturesLinkSection from './featuresLinkSection';
import { isEmpty } from '../../../helpers/helpers';
import AboutSection from './aboutSection';

export default function AuthorPage({
  allPosts,
  breadcrumbText = 'Blog',
  breadcrumbLink = '/blog',
  authorCTA = null,
  description,
  featuredLinks
}) {
  return (
    <div className='component-wrapper'>
      <AuthorHeroSection
        authorImage={allPosts?.[0]?.authors?.[0]?.profile_image}
        authorName={allPosts?.[0]?.authors?.[0]?.name}
        designation={allPosts?.[0]?.authors?.[0]?.bio}
        breadcrumbText={breadcrumbText}
        breadcrumbLink={breadcrumbLink}
        twitter={allPosts?.[0]?.authors?.[0]?.twitter}
        linkedin={allPosts?.[0]?.authors?.[0]?.linkedin}
        facebook={allPosts?.[0]?.authors?.[0]?.facebook}
        instagram={allPosts?.[0]?.authors?.[0]?.instagram}
        youtube={allPosts?.[0]?.authors?.[0]?.youtube}
      />
      {description && <AboutSection description={description} />}
      {featuredLinks?.length > 0 && <FeaturesLinkSection featuredLinks={featuredLinks} />}
      <BlogListSection
        authorName={allPosts?.[0]?.authors?.[0]?.name}
        allPosts={allPosts}
        authorSlug={allPosts?.[0]?.authors?.[0]?.slug}
      />
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
    </div>
  );
}
