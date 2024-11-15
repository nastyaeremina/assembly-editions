import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_SEOMETADATA_FIELDS } from './contentful-seo';

export const POST_GRAPHQL_HERO_COMPONENT_FIELDS = `
heroTitle
heroDescription
type
rating
primaryButtonText
primaryButtonLink
secondaryButtonText
secondaryButtonLink
videoUrl
banner1{
  url
}
banner2{
  url
}`;

const POST_GRAPHQL_CASESTUDY_COMPONENT_FIELDS = ` 
slug
description
highlights
caseStudyImage{
  url
}
customerLogo{
  imageAsset{
    url
  }
}`;
const POST_GRAPHQL_SECTIONBOX_COMPONENT_FIELDS = `
    title
    description
    primaryButtonText
    primaryButtonLink
    secondaryButtonText
    secondaryButtonLink
    box1Title
    box1Image{
    url
    }
    box1Description
    box2Title
    box2Image{
    url
    }
`;
export const POST_GRAPHQL_FAQ_COMPONENT_FIELDS = `
title
faQsCollection{
  items{
    sys{
      id
    }
  }
}`;
const POST_GRAPHQL_STANDARD_PAGE_LIST_FIELDS = `
slug
seoMetadata {
  ${POST_GRAPHQL_SEOMETADATA_FIELDS}
}
contentCollection{
    items{
        __typename
        ...on ComponentHero{
            ${POST_GRAPHQL_HERO_COMPONENT_FIELDS}
          }
          ...on CaseStudies{
          ${POST_GRAPHQL_CASESTUDY_COMPONENT_FIELDS}
        }
          ...on SectionBoxes{
           sys{
           id
           }
          }
          ...on ComponentFeature{
            sys{
              id
            }
        }
            ...on SectionTab{
            sys{
            id
            }
        }
             ... on SectionCta{
            sys{
              id
            }
          }
        ...on   Testimonial{
            name
            role
            image{
              url
            }
            industry
            quote
        }
        ...on ComponentFaq{
            ${POST_GRAPHQL_FAQ_COMPONENT_FIELDS}
          }
          ...on SectionRedirect{
            sys{
              id
            }
          }
    }
}

`;
const POST_GRAPHQL_FEATURE_COMPONENT_LIST_FIELDS = `
title
description
featuresCollection{
  items{
    title
    description
    image{
      url
    }
  }
}
`;
const POST_GRAPHQL_SECTION_TAB_FIELDS = `
  title
    description
    primaryButtonText
    primaryButtonLink
    secondaryButtonText
    secondaryButtonLink
    type
    tabsCollection{
      items{
        name
        title
        slug
        subTitle
        description
        image{
          url
        }
        backgroundImage{
          url
        }
        sys {
          id
        }
        icon{
          url
        }
        link
      }
    }`;

const POST_GRAPHQL_SECTION_CTA_FIELDS = `
  title
  primaryButtonText
  primaryButtonLink
  secondaryButtonText
  secondaryButtonLink
  banner{
    url
  }
`;

const POST_GRAPHQL_SECTION_REDIRECT_FIELDS = `
  title
  description
  primaryButtonText
  primaryButtonLink
  secondaryButtonText
  secondaryButtonLink
  featuresCollection{
    items{
      title
      description
      image{
        url
      }
    }
  }
`;
export async function getFeatureComponentContent(id, preview) {
  const entries = await fetchGraphQL(
    `query {
        componentFeature(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
         ${POST_GRAPHQL_FEATURE_COMPONENT_LIST_FIELDS}
        
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.STANDARD_PAGE]
  );
  return entries?.data?.componentFeature;
}
export async function getSectionBoxesComponentContent(id, preview) {
  const entries = await fetchGraphQL(
    `query {
        sectionBoxes(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
          ${POST_GRAPHQL_SECTIONBOX_COMPONENT_FIELDS}
        
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.STANDARD_PAGE]
  );
  return entries?.data?.sectionBoxes || {};
}
export async function getSectionTabContent(id, preview) {
  const entries = await fetchGraphQL(
    `query {
        sectionTab(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
         ${POST_GRAPHQL_SECTION_TAB_FIELDS}
      
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.STANDARD_PAGE]
  );
  return entries?.data?.sectionTab || {};
}

export async function getStandardPageContent(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
          pageTemplateCollection(where:{slug:"${slug}"},limit:1,preview: ${preview ? 'true' : 'false'}) {
          items {
           ${POST_GRAPHQL_STANDARD_PAGE_LIST_FIELDS}
          }
        }
      }`,
    preview,
    [CONTENTFUL_API_TAG.STANDARD_PAGE]
  );
  return entries?.data?.pageTemplateCollection?.items?.[0];
}

export async function getAllStandardPageWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      pageTemplateCollection(preview: false) {
        items {
         slug
        }
      }
    }`,
    false,
    [CONTENTFUL_API_TAG.STANDARD_PAGE]
  );
  return entries?.data?.pageTemplateCollection?.items;
}

export async function getSectionCTAContent(id, preview) {
  const entries = await fetchGraphQL(
    `query {
        sectionCta(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
         ${POST_GRAPHQL_SECTION_CTA_FIELDS}
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.STANDARD_PAGE]
  );
  return entries?.data?.sectionCta || {};
}

export async function getSectionRedirectContent(id, preview) {
  const entries = await fetchGraphQL(
    `query {
        sectionRedirect(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
         ${POST_GRAPHQL_SECTION_REDIRECT_FIELDS}
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.STANDARD_PAGE]
  );

  return entries?.data?.sectionRedirect || {};
}
