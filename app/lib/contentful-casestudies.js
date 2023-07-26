import { fetchGraphQL } from './contentful';

const POST_GRAPHQL_CASESTUDY_DETAILS_FIELDS = `
slug
title
description
testimonial{
   name
  role
  industry
  quote
  image{
    url
  }
}
body{
  json
}
title
description
highlights
customerSince
customerCompanyUrl
customerFounded
solution{
  name
  slug
  header
}
copilotAppsCollection{
  items{
    featureIcon{
      url
    }
    name
  sys{
    id
  }
  }
}
appsCollection{
  items{
    slug
    name
    icon{
      url
    }
  }
}
customerLogo{
  name
  companyWebsite
  imageAsset{
    url
  }
}
seoMetadata{
  sys{
    id
  }
}
`;

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.caseStudiesCollection?.items;
}

function extractPostEntry(fetchResponse) {
  return fetchResponse?.data?.caseStudiesCollection?.items[0];
}
export async function getCaseStudyDetail({ slug, preview }) {
  const entries = await fetchGraphQL(
    `query {
        caseStudiesCollection(where:{slug:"${slug}"},limit:1,preview: ${preview ? 'true' : 'false'}) {
          items{
            ${POST_GRAPHQL_CASESTUDY_DETAILS_FIELDS}
          }
        
      }
    }`,
    preview
  );

  return extractPostEntry(entries);
}
export async function getCaseStudyWithSlug(preview) {
  const entries = await fetchGraphQL(
    `query {
        caseStudiesCollection(preview: ${preview ? 'true' : 'false'}) {
          items{
            slug
          }        
      }
    }`,
    preview
  );

  return extractPostEntries(entries);
}
