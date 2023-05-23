import { PER_API_LIMIT_FOR_AUTOMATION } from '../constants/constant';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_PARTNER_APPS_DETAILS_FIELDS } from './contentful-partnerApps';

const POST_GRAPHQL_PAGE_AUTOMATION_DETAILS_FIELDS_SECTION_1 = `
    
    header
    body
    heroImage{
      url
    }
    faqGroup{
      sys{
        id
      }
    }
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
        ... on Automations{
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

      ... on PartnerApps{
        ${POST_GRAPHQL_PARTNER_APPS_DETAILS_FIELDS}
      }
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
const POST_GRAPHQL_AUTOMATION_CATEGORY_FIELDS = `
name
slug`;

const POST_GRAPHQL_AUTOMATIONS_LIST_FIELDS = `
name
      slug
      description
      productLogosCollection{
        items{
          url
        }
      }
      automationCategoriesCollection{
        items{
          name
          slug
        }
      }
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
export async function getPageAutomationDetail(id, preview) {
  const entries1 = await fetchGraphQL(
    `query {
      pageFeature2(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
               ${POST_GRAPHQL_PAGE_AUTOMATION_DETAILS_FIELDS_SECTION_1}
      }
    }`,
    preview
  );
  const entries2 = await fetchGraphQL(
    `query {
      pageFeature2(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
               ${POST_GRAPHQL_PAGE_AUTOMATION_DETAILS_FIELDS_SECTION_2}
      }
    }`,
    preview
  );
  return { ...entries1?.data?.pageFeature2, ...entries2?.data?.pageFeature2 };
}

export async function getAllAutomationCategories(preview) {
  const entries = await fetchGraphQL(
    `query {
      automationCategoriesCollection( order:name_ASC,preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_AUTOMATION_CATEGORY_FIELDS}
        }
      }
    }`,
    preview
  );
  return entries?.data?.automationCategoriesCollection?.items;
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
    preview
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
    preview
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
    preview
  );
  return extractPostEntries(entries);
}
