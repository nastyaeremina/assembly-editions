import { CONTENTFUL_API_TAG } from '../constants/constant';
import { isEmpty } from '../helpers/helpers';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_SEOMETADATA_FIELDS } from './contentful-seo';

const POST_GRAPHQL_SECTION_COMMON_FIELDS = `
title
description
primaryButtonText
primaryButtonLink
secondaryButtonText
secondaryButtonLink
`;

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
}
showSocialProof
`;

export const POST_GRAPHQL_SIMPLE_COMPONENT_FIELDS = `
heroTitle
heroDescription
primaryButtonText
primaryButtonLink
secondaryButtonText
secondaryButtonLink
banner1{
  url
}
videoUrl
`;
const POST_GRAPHQL_CASESTUDY_COMPONENT_FIELDS = ` 
slug
heroSection{
heroDescription
}
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
    box2Description
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

export const POST_GRAPHQL_TESTIMONIAL_CARD_FIELDS = `
 name
 role
 image{
  url
 }
 industry
 quoteNew
`;
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
          ...on SectionSimple{
          ${POST_GRAPHQL_SIMPLE_COMPONENT_FIELDS}
          }
          ...on CaseStudies{
          ${POST_GRAPHQL_CASESTUDY_COMPONENT_FIELDS}
        }
          ...on SectionBoxes{
           sys{
           id
           }
          }
           ...on SectionHighlight{
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
           ${POST_GRAPHQL_TESTIMONIAL_CARD_FIELDS}
        }
        ...on ComponentFaq{
            ${POST_GRAPHQL_FAQ_COMPONENT_FIELDS}
          }
        ...on SectionTestimonialGroup {
          sys{
           id
          }
        }   
          ...on SectionRedirect{
            sys{
              id
            }
          }
          ...on SectionBentoBox{
           sys{
           id
           }
          } 
          ...on SectionStoryModeSectionComponent{
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
      }
    }`;

export const POST_GRAPHQL_SECTION_CTA_FIELDS = `
  title
  description
  primaryButtonText
  primaryButtonLink
  secondaryButtonText
  secondaryButtonLink
  banner{
    url
  }
`;
const POST_GRAPHQL_SECTION_TESTIMONIAL_GROUP_FIELDS = `
  title
  description
  primaryButtonText
  primaryButtonLink
  secondaryButtonText
  secondaryButtonLink
  contentCollection{
    items{
      name
      role
      industry
      imageHeadshot{
        url
      }
      logo{
        url
      }
      quoteNew
    }
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
      url
    }
  }
`;

const POST_GRAPHQL_BENTO_BOX_FIELDS = `
title
description
link: url
icon: image{
  url
}
image:boxImage{
  url
}
columnSpan
`;

const POST_GRAPHQL_SECTION_BENTO_BOX_FIELDS = `
${POST_GRAPHQL_SECTION_COMMON_FIELDS}
contentCollection{
  items{
    ${POST_GRAPHQL_BENTO_BOX_FIELDS}
  }
}
`;

const POST_GRAPHQL_TAB_FIELDS = `
title
subTitle
description
image{
  url
}
primaryButtonText
primaryButtonLink
secondaryButtonText
secondaryButtonLink
link
quoteBlock{
  ${POST_GRAPHQL_TESTIMONIAL_CARD_FIELDS}
}
`;
const POST_GRAPHQL_SECTION_STORY_MODE_AND_SECTION_COMPONENT_FIELDS = `
${POST_GRAPHQL_SECTION_COMMON_FIELDS}
type
contentCollection{
  items{
    ${POST_GRAPHQL_TAB_FIELDS}
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

export async function getStandardPageContent({ slug, id, preview }) {
  const condition = isEmpty(id) ? `where:{slug:"${slug}"}` : `where:{sys:{id:"${id}"}}`;
  const entries = await fetchGraphQL(
    `query {
          pageTemplateCollection(${condition},limit:1,preview: ${preview ? 'true' : 'false'}) {
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
         sys{
          id
         }
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

export async function getSectionTestimonialGroupContent(id, preview) {
  const entries = await fetchGraphQL(
    `query {
        sectionTestimonialGroup(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
         ${POST_GRAPHQL_SECTION_TESTIMONIAL_GROUP_FIELDS}
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.STANDARD_PAGE]
  );
  return entries?.data?.sectionTestimonialGroup || {};
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

export async function getSectionHighlightContent(id, preview) {
  const entries = await fetchGraphQL(
    `query {
        sectionHighlight(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
        content{
        json}
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.STANDARD_PAGE]
  );
  return entries?.data?.sectionHighlight || {};
}

export async function getSectionBentoBoxComponentContent(id, preview) {
  const entries = await fetchGraphQL(
    `query {
        sectionBentoBox(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
         ${POST_GRAPHQL_SECTION_BENTO_BOX_FIELDS}
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.STANDARD_PAGE]
  );

  return entries?.data?.sectionBentoBox || {};
}

export async function getSectionStoryModeSectionComponentContent(id, preview) {
  const entries = await fetchGraphQL(
    `query {
        sectionStoryModeSectionComponent(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
         ${POST_GRAPHQL_SECTION_STORY_MODE_AND_SECTION_COMPONENT_FIELDS}
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.STANDARD_PAGE]
  );

  return entries?.data?.sectionStoryModeSectionComponent || {};
}
