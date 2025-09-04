import { CONTENTFUL_API_TAG, PER_API_LIMIT_FOR_AUTOMATION } from '../constants/constant';
import { fetchGraphQL, getContentTypeDetail } from './contentful';
import { POST_GRAPHQL_FAQ_COLLECTION_FIELDS } from './contentful-faq';
import { POST_GRAPHQL_SEOMETADATA_FIELDS } from './contentful-seo';

const POST_GRAPHQL_PAGE_AUTOMATION_DETAILS_FIELDS_SECTION_1 = `
    
    header
    body
    demoPortalUrl
    ${POST_GRAPHQL_FAQ_COLLECTION_FIELDS}
    seoMetadata {
          ${POST_GRAPHQL_SEOMETADATA_FIELDS}
      }
    sectionCaseStudyHeader
    sectionCaseStudyContent{
      slug
      sys{
        id
      }
      heroSection{
        heroDescription
      }
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
        name
        slug
        productLogosCollection{
          items{
            url
          }
        }
        description
        zapierLink
        makeLink
        apiLink
        automationImage{
          url
        }
        isFeatures
      }
    }
`;

const POST_GRAPHQL_PAGE_AUTOMATION_DETAILS_FIELDS_SECTION_2 = `
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
    sectionContent3Collection{	
    items{
      header
      body
      image{
        url
      }
    }
    }
    sectionHeader4
    sectionBody4{
      json
    }
    sectionContent4Collection{
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
    sectionHeader5
    sectionContent5Collection{
      items{
         header
      body
      image{
        url
      }
        buttonName
        buttonLink
      }
    }
`;

const POST_GRAPHQL_AUTOMATIONS_LIST_FIELDS = `
name
      slug
      description
      productLogosCollection{
        items{
          url
        }
      }
      automationsCategories
      isFeatures
`;

const POST_GRAPHQL_AUTOMATION_DETAILS_FIELDS = `
${POST_GRAPHQL_AUTOMATIONS_LIST_FIELDS}
zapierLink
      apiLink
      makeLink
      automationImage{
        url
      }
`;

function extractPostEntry(fetchResponse) {
  return fetchResponse?.data?.automationsCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.automationsCollection?.items;
}
export async function getPageAutomationDetail({ id, preview }) {
  const entries1 = await fetchGraphQL(
    `query {
      pageFeature2(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
               ${POST_GRAPHQL_PAGE_AUTOMATION_DETAILS_FIELDS_SECTION_1}
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.AUTOMATION]
  );
  const entries2 = await fetchGraphQL(
    `query {
      pageFeature2(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
               ${POST_GRAPHQL_PAGE_AUTOMATION_DETAILS_FIELDS_SECTION_2}
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.AUTOMATION]
  );
  return { ...entries1?.data?.pageFeature2, ...entries2?.data?.pageFeature2 };
}

/**
 * fetch all predefine  automation category on contentful model
 * @returns {Array} - The array of Automation Category.
 */

export async function getAllAutomationCategories(preview) {
  const contentTypeId = 'automations';
  const data = await getContentTypeDetail(contentTypeId);

  if (data) {
    const defaultValue = data.fields
      .find((field) => field.id === 'automationsCategories')
      ?.items?.validations?.find((item) => item?.in)
      ?.in?.sort();

    return defaultValue;
  }
  return [];
}
export async function getAllAutomations(skip, preview) {
  const entries = await fetchGraphQL(
    `query {
      automationsCollection(skip:${skip},limit:${PER_API_LIMIT_FOR_AUTOMATION},preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_AUTOMATIONS_LIST_FIELDS}
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.AUTOMATION]
  );
  return extractPostEntries(entries);
}

export async function getAutomationDetail(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
      automationsCollection(where:{slug:"${slug}"},limit:1,preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_AUTOMATION_DETAILS_FIELDS}
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.AUTOMATION]
  );
  return extractPostEntry(entries);
}

export async function getAllAutomationsWithSlug(preview) {
  const entries = await fetchGraphQL(
    `query {
      automationsCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
        slug
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.AUTOMATION]
  );
  return extractPostEntries(entries);
}
