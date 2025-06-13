import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_VIDEO_CONTENT_FIELDS } from './contentful-guide';
import { POST_GRAPHQL_SEOMETADATA_FIELDS } from './contentful-seo';
import { POST_GRAPHQL_FAQ_COMPONENT_FIELDS, POST_GRAPHQL_HERO_COMPONENT_FIELDS } from './contentful-standardPage';

const POST_GRAPHQL_TEMPLATE_CARD_FIELDS = `
title
highlights
slug
banner{
  url
}
`;
const POST_GRAPHQL_TEMPLATE_HOME_PAGE_FIELDS = `
seoMetadata{
    ${POST_GRAPHQL_SEOMETADATA_FIELDS}
}
templateHeroSection{
    ${POST_GRAPHQL_HERO_COMPONENT_FIELDS}
}
section1Title
section1TemplatesCollection{
    items{
        ${POST_GRAPHQL_TEMPLATE_CARD_FIELDS}
    }
}
section2Title
section2TemplatesCollection{
    items{
        ${POST_GRAPHQL_TEMPLATE_CARD_FIELDS}
    }
}
section3Title
section3TemplatesCollection{
    items{
        ${POST_GRAPHQL_TEMPLATE_CARD_FIELDS}
    }
}
faQs{
    ${POST_GRAPHQL_FAQ_COMPONENT_FIELDS}
}
`;

const POST_GRAPHQL_TEMPLATE_DETAIL_FIELDS = `
title
slug
description
primaryButtonLink
secondaryButtonLink
imageSliderCollection{
  items{
    url
  }
}
body{
  json
  ${POST_GRAPHQL_VIDEO_CONTENT_FIELDS}
  links{
    assets{
       block{
         sys{
           id
         }
         title
         description
         contentType
         fileName
         url
         contentType
       }
       hyperlink{
 url
       }
     }
   }
}
maker
highlights
industryNew{
  title
  slug
}
relatedTemplatesCollection{
  items{
    ${POST_GRAPHQL_TEMPLATE_CARD_FIELDS}
  }
}
appsCollection{
  items{
    name
    slug
    icon{
      url
    }
  }
}
seoMetadata{
  ${POST_GRAPHQL_SEOMETADATA_FIELDS}
}
`;

export async function getTemplateHomeContent({ id, preview }) {
  const entries = await fetchGraphQL(
    `query {
        templateHome(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
          ${POST_GRAPHQL_TEMPLATE_HOME_PAGE_FIELDS}
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.TEMPLATE]
  );

  return entries?.data?.templateHome;
}

export async function getTemplateDetailContent({ slug, preview }) {
  const entries1 = await fetchGraphQL(
    `query {
      templateCollection(where:{slug:"${slug}"},limit:1,preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_TEMPLATE_DETAIL_FIELDS}       
         }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.TEMPLATE]
  );

  return entries1?.data?.templateCollection?.items?.[0];
}

export async function getAllTemplatesWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      templateCollection(preview: false) {
        items {
         slug
        }
      }
    }`,
    false,
    [CONTENTFUL_API_TAG.TEMPLATE]
  );
  return entries?.data?.templateCollection?.items;
}
