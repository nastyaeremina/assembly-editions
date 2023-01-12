import { NO_OF_JOBS_PER_PAGE } from "./constants";
import { fetchGraphQL } from "./contentful";

const POST_GRAPHQL_FEATURES_DETAILS_FIELDS = `
    clientFeaturesCollection{
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
    header
    body
    heroImage
    {
      url
    }
    videoId
    internalFeaturesCollection{
      items{
        name
        title
        description
        image{
          url
        }
      }
    }
    seoMetadata{
      name
      seoTitle
      description
      noIndex
      noFollow
    }
    testimonial{
      name
      role
      industry
      quote
      image{
        url
      }
    }
`;

function extractPostEntries(fetchResponse) {
    return fetchResponse?.data?.tabCollection?.items;
}

export async function getTabPostsWithSlug(preview) {
    const entries = await fetchGraphQL(
        `query {
            tabCollection(preview: ${preview ? "true" : "false"
        }) {
        items {
         name
        }
      }
    }`,
        preview
    );

    return extractPostEntries(entries);
}

export async function getFeatureById(id, preview) {
    const entries = await fetchGraphQL(
        `query {
            feature(id:"${id}",preview: ${preview ? "true" : "false"}) {
               ${POST_GRAPHQL_FEATURES_DETAILS_FIELDS}
      }
    }`,
        preview
    );
    return entries?.data?.feature;
}