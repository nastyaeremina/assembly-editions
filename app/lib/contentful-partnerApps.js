import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_FAQ_COLLECTION_FIELDS } from './contentful-faq';
import { POST_GRAPHQL_GUIDE_ARTICLE_CONTENT_FIELDS } from './contentful-guide';
export const POST_GRAPHQL_PARTNER_APPS_CARD_ITEM_FIELDS = `
name
slug
appsType
appType
description
isFeatured
pricing
icon{
    url
}
reviewsCollection(preview:false){
  total
  items{
    rate
  }
}`;

export const POST_GRAPHQL_PARTNER_APPS_DETAILS_FIELDS = `
name
slug
appsType
description
website
isFeatured
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
      partnerAppsCollection(where:{appsType:"${apptype}",isHidden:false, },preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_PARTNER_APPS_CARD_ITEM_FIELDS}
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
const POST_GRAPHQL_DATA_APPS_DETAILS_FIELDS = `
sys{
  id
}
name
slug
appsType
appType
description
website
icon{
    url
}
guideArticle{
  ${POST_GRAPHQL_GUIDE_ARTICLE_CONTENT_FIELDS}
}
      launchDate
      isPlatformApp
      requirements
      builtBy
      pricing
      imageListCollection(preview:false){
        items{
          url
        }
      }
      `;

const POST_GRAPHQL_DATA_APPS_REVIW_DETAILS_FIELDS = `

      reviewsCollection(preview:false,order:date_DESC,){
        total
        items{
          customerName
          rate
          comment
          date
        }
      }`;

const POST_GRAPHQL_NAVBAR_FEATURES_APP_DETAIL = `
name
slug
icon{
  url
}
navbarDescription
      `;

export async function getPartnerAppDetail(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
      partnerAppsCollection(where:{slug:"${slug}"},limit:1,preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_DATA_APPS_DETAILS_FIELDS}
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.APP, CONTENTFUL_API_TAG.GUIDE]
  );
  const reviewEntries = await fetchGraphQL(
    `query {
      partnerAppsCollection(where:{slug:"${slug}"},limit:1,preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_DATA_APPS_REVIW_DETAILS_FIELDS}
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.APP, CONTENTFUL_API_TAG.APP_REVIEW]
  );
  return { ...extractPostEntry(entries), ...extractPostEntry(reviewEntries) };
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

/**
 * get all Features app with theme,name ,description and navbarIcon
 *
 * @param {Boolean} preview -  Determines whether to fetch features in preview mode.
 *                           Set to `true` for draft content preview, and `false` for published content.
 * @returns {Array} - An array of ordered feature items fetched from Contentful.
 */
export async function getNavbarFeatureApss(preview) {
  const entries = await fetchGraphQL(
    `query {
      partnerAppsCollection(order:[order_ASC],where:{sholdShowOnFeatureNavbar:true},preview: ${
        preview ? 'true' : 'false'
      }) {
              items{
                ${POST_GRAPHQL_NAVBAR_FEATURES_APP_DETAIL}
              }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.APP]
  );
  return entries?.data?.partnerAppsCollection?.items;
}
