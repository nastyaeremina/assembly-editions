import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_FAQ_COLLECTION_FIELDS } from './contentful-faq';

export const POST_GRAPHQL_PARTNER_APPS_DETAILS_FIELDS = `
name
slug
appsType
description
website
isFeatured
setupInstructionsLink
icon{
    url
}
logo{
   url
}
preview{
  url
}
partnerAppCategoriesCollection{
  items{
    name
    slug
  }
}
`;

const POST_GRAPHQL_PARTNER_APPS_CATEGORY_FIELDS = `
name
slug
`;

const POST_GRAPHQL_DATA_INTEGRATIOB_APPS_DETAILS_FIELDS = `
name
slug
description
appsType
website
setupInstructionsLink
icon{
    url
}
logo{
   url
}
preview{
  url
}
`;

const POST_GRAPHQL_PAGE_APPS_DETAILS_FIELDS_SECTION_1 = `
    
    header
    body
    heroImage{
      url
    }
   ${POST_GRAPHQL_FAQ_COLLECTION_FIELDS}
    demoPortalUrl
    seoMetadata {
        seoTitle
        description
        noIndex
        noFollow
        openGraphImage
        {
          url
        }
      }
    
    sectionCaseStudyHeader
    sectionCaseStudyContent{
      sys{
    id
  }
  description
  highlights
  caseStudyImage{
    url
  }
  customerLogo{
    name
    companyWebsite
    imageAsset{
      url
    }
  }
    }
    sectionFeaturedHeader
     sectionFeaturedBody{
       json
    }
    sectionFeaturedContentCollection{
      items{
        ${POST_GRAPHQL_PARTNER_APPS_DETAILS_FIELDS}
      }
    }
`;

const POST_GRAPHQL_PAGE_APPS_DETAILS_FIELDS_SECTION_2 = `
sectionHeader1
    sectionContent1Collection{
      items{
        
        name
        title
        subTitle
        description
        image{
          url
        }
      }
      
    }
   
    sectionHeader2
    sectionContent2Collection{	
    items{
      header
      body
      image{
        url
      }
    }
    }
    sectionHeader3
    sectionBody3{
      json
    }
    sectionContent3Collection{
      items{
        name
        title
        slug
        subTitle
        description
        image{
          url
        }
        icon{
          url
        }
        link
      }
    }
`;

function extractPostEntry(fetchResponse) {
  return fetchResponse?.data?.partnerAppsCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.partnerAppsCollection?.items;
}
export async function getAllParrtnerAppsCategories(preview) {
  const entries = await fetchGraphQL(
    `query {
      partnerAppCategoryCollection( order:name_ASC,preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_PARTNER_APPS_CATEGORY_FIELDS}
        }
      }
    }`,
    preview
  );
  return entries?.data?.partnerAppCategoryCollection?.items;
}

export async function getPageAppDetail(id, preview) {
  const entries1 = await fetchGraphQL(
    `query {
      pageApps(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
               ${POST_GRAPHQL_PAGE_APPS_DETAILS_FIELDS_SECTION_1}
              }
            }`,
    preview,
    [CONTENTFUL_API_TAG.APP]
  );
  const entries2 = await fetchGraphQL(
    `query {
                pageApps(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
        ${POST_GRAPHQL_PAGE_APPS_DETAILS_FIELDS_SECTION_2}
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.APP]
  );
  return { ...entries1?.data?.pageApps, ...entries2?.data?.pageApps };
}

export async function getAllPartnerApps(apptype, preview) {
  const entries = await fetchGraphQL(
    `query {
      partnerAppsCollection(where:{appsType:"${apptype}"},preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_PARTNER_APPS_DETAILS_FIELDS}
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.APP]
  );
  return extractPostEntries(entries);
}

export async function getAllPartnerAppsWithSlug(preview) {
  const entries = await fetchGraphQL(
    `query {
      partnerAppsCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
        slug
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.APP]
  );
  return extractPostEntries(entries);
}

export async function getPartnerAppDetail(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
      partnerAppsCollection(where:{slug:"${slug}"},preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_PARTNER_APPS_DETAILS_FIELDS}
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.APP]
  );
  return extractPostEntry(entries);
}

export async function getAllAppsWithIcon(preview) {
  const entries = await fetchGraphQL(
    `query {
      partnerAppsCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
        slug
        icon{url}
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.APP]
  );
  return extractPostEntries(entries);
}
